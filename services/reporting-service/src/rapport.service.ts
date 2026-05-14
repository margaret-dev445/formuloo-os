import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Rapport } from './schemas/rapport.schema';
import { CreateRapportDto } from './dto/create-rapport.dto';

@Injectable()
export class RapportService {

  constructor(
    @InjectModel(Rapport.name)
    private rapportModel: Model<Rapport>,
  ) {}

  async create(dto: CreateRapportDto): Promise<Rapport> {
    const rapport = new this.rapportModel(dto);
    return await rapport.save();
  }

  async findAll(): Promise<Rapport[]> {
    return await this.rapportModel.find().exec();
  }

  async findOne(id: string): Promise<Rapport> {
    const rapport = await this.rapportModel.findById(id).exec();
    if (!rapport) throw new NotFoundException(`Rapport ${id} non trouvé`);
    return rapport;
  }

  async remove(id: string): Promise<{ message: string }> {
    await this.findOne(id);
    await this.rapportModel.findByIdAndDelete(id).exec();
    return { message: `Rapport ${id} supprimé avec succès` };
  }
}
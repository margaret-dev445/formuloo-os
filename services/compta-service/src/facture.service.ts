import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Facture } from './entities/facture.entity';
import { CreateFactureDto } from './dto/create-facture.dto';

@Injectable()
export class FactureService {

  constructor(
    @InjectRepository(Facture)
    private factureRepository: Repository<Facture>,
  ) {}

  async create(dto: CreateFactureDto): Promise<Facture> {
    const facture = this.factureRepository.create(dto);
    return await this.factureRepository.save(facture);
  }

  async findAll(): Promise<Facture[]> {
    return await this.factureRepository.find();
  }

  async findOne(id: number): Promise<Facture> {
    const facture = await this.factureRepository.findOne({ where: { id } });
    if (!facture) throw new NotFoundException(`Facture ${id} non trouvée`);
    return facture;
  }

  async update(id: number, dto: CreateFactureDto): Promise<Facture> {
    await this.findOne(id);
    await this.factureRepository.update(id, dto);
    return await this.findOne(id);
  }

  async remove(id: number): Promise<{ message: string }> {
    await this.findOne(id);
    await this.factureRepository.delete(id);
    return { message: `Facture ${id} supprimée avec succès` };
  }
}
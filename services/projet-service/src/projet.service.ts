import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Projet } from './entities/projet.entity';
import { CreateProjetDto } from './dto/create-projet.dto';

@Injectable()
export class ProjetService {

  constructor(
    @InjectRepository(Projet)
    private projetRepository: Repository<Projet>,
  ) {}

  async create(dto: CreateProjetDto): Promise<Projet> {
    const projet = this.projetRepository.create(dto);
    return await this.projetRepository.save(projet);
  }

  async findAll(): Promise<Projet[]> {
    return await this.projetRepository.find();
  }

  async findOne(id: number): Promise<Projet> {
    const projet = await this.projetRepository.findOne({ where: { id } });
    if (!projet) throw new NotFoundException(`Projet ${id} non trouvé`);
    return projet;
  }

  async update(id: number, dto: CreateProjetDto): Promise<Projet> {
    await this.findOne(id);
    await this.projetRepository.update(id, dto);
    return await this.findOne(id);
  }

  async remove(id: number): Promise<{ message: string }> {
    await this.findOne(id);
    await this.projetRepository.delete(id);
    return { message: `Projet ${id} supprimé avec succès` };
  }
}
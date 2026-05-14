import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produit } from './entities/produit.entity';
import { CreateProduitDto } from './dto/create-produit.dto';

@Injectable()
export class ProduitService {

  constructor(
    @InjectRepository(Produit)
    private produitRepository: Repository<Produit>,
  ) {}

  async create(dto: CreateProduitDto): Promise<Produit> {
    const produit = this.produitRepository.create(dto);
    return await this.produitRepository.save(produit);
  }

  async findAll(): Promise<Produit[]> {
    return await this.produitRepository.find();
  }

  async findOne(id: number): Promise<Produit> {
    const produit = await this.produitRepository.findOne({ where: { id } });
    if (!produit) throw new NotFoundException(`Produit ${id} non trouvé`);
    return produit;
  }

  async update(id: number, dto: CreateProduitDto): Promise<Produit> {
    await this.findOne(id);
    await this.produitRepository.update(id, dto);
    return await this.findOne(id);
  }

  async remove(id: number): Promise<{ message: string }> {
    await this.findOne(id);
    await this.produitRepository.delete(id);
    return { message: `Produit ${id} supprimé avec succès` };
  }
}
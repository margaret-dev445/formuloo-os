import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('projets')
export class Projet {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;

  @Column({ default: 'en_cours' })
  status: string;

  @Column('decimal', { precision: 10, scale: 2 })
  budget: number;

  @CreateDateColumn()
  createdAt: Date;
}
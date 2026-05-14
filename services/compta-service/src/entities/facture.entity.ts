import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('factures')
export class Facture {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  number: string;

  @Column()
  clientId: string;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column()
  issueDate: string;

  @Column()
  dueDate: string;

  @Column({ default: 'pending' })
  status: string;

  @CreateDateColumn()
  createdAt: Date;
}
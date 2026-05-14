import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('clients')
export class Client {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  companyName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone: string;

  @Column()
  sector: string;

  @CreateDateColumn()
  createdAt: Date;
}
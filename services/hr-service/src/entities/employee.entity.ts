import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('employees')
export class Employee {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  position: string;

  @Column('decimal', { precision: 10, scale: 2 })
  salary: number;

  @Column()
  startDate: string;

  @CreateDateColumn()
  createdAt: Date;
}
import { ApiProperty } from '@nestjs/swagger';

export class CreateProjetDto {

  @ApiProperty({
    description: 'Nom du projet',
    example: 'Refonte site web'
  })
  name: string;

  @ApiProperty({
    description: 'Description du projet',
    example: 'Refonte complète du site web de l\'entreprise'
  })
  description: string;

  @ApiProperty({
    description: 'Date de début',
    example: '2026-05-04'
  })
  startDate: string;

  @ApiProperty({
    description: 'Date de fin prévue',
    example: '2026-08-04'
  })
  endDate: string;

  @ApiProperty({
    description: 'Statut du projet',
    example: 'en_cours'
  })
  status: string;

  @ApiProperty({
    description: 'Budget alloué en FCFA',
    example: 2000000
  })
  budget: number;
}
import { ApiProperty } from '@nestjs/swagger';

export class CreateRapportDto {

  @ApiProperty({
    description: 'Titre du rapport',
    example: 'Rapport mensuel RH Mai 2026'
  })
  title: string;

  @ApiProperty({
    description: 'Type de rapport',
    example: 'RH'
  })
  type: string;

  @ApiProperty({
    description: 'Période de début',
    example: '2026-05-01'
  })
  periodStart: string;

  @ApiProperty({
    description: 'Période de fin',
    example: '2026-05-31'
  })
  periodEnd: string;

  @ApiProperty({
    description: 'Service concerné',
    example: 'hr-service'
  })
  service: string;
}
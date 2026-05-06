import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {

  @ApiProperty({
    description: 'Prénom de l\'employé',
    example: 'Jean'
  })
  firstName: string;

  @ApiProperty({
    description: 'Nom de famille de l\'employé',
    example: 'Dupont'
  })
  lastName: string;

  @ApiProperty({
    description: 'Adresse email professionnelle',
    example: 'jean.dupont@formuloo.com'
  })
  email: string;

  @ApiProperty({
    description: 'Poste occupé dans l\'entreprise',
    example: 'Développeur Senior'
  })
  position: string;

  @ApiProperty({
    description: 'Salaire mensuel brut en FCFA',
    example: 500000
  })
  salary: number;

  @ApiProperty({
    description: 'Date de début de contrat',
    example: '2026-05-04'
  })
  startDate: string;
}
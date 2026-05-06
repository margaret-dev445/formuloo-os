import { ApiProperty } from '@nestjs/swagger';

export class CreateClientDto {

  @ApiProperty({
    description: 'Nom de l\'entreprise cliente',
    example: 'Entreprise ABC'
  })
  companyName: string;

  @ApiProperty({
    description: 'Email du contact principal',
    example: 'contact@abc.com'
  })
  email: string;

  @ApiProperty({
    description: 'Numéro de téléphone',
    example: '+237 6XX XXX XXX'
  })
  phone: string;

  @ApiProperty({
    description: 'Secteur d\'activité',
    example: 'Technologie'
  })
  sector: string;
}
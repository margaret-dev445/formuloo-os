import { ApiProperty } from '@nestjs/swagger';

export class CreateFactureDto {

  @ApiProperty({
    description: 'Numéro de facture',
    example: 'FAC-2026-001'
  })
  number: string;

  @ApiProperty({
    description: 'ID du client',
    example: 'client_123'
  })
  clientId: string;

  @ApiProperty({
    description: 'Montant total en FCFA',
    example: 750000
  })
  amount: number;

  @ApiProperty({
    description: 'Date d\'émission',
    example: '2026-05-04'
  })
  issueDate: string;

  @ApiProperty({
    description: 'Date d\'échéance',
    example: '2026-06-04'
  })
  dueDate: string;

  @ApiProperty({
    description: 'Statut de la facture',
    example: 'pending'
  })
  status: string;
}
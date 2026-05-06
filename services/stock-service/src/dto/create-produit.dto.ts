import { ApiProperty } from '@nestjs/swagger';

export class CreateProduitDto {

  @ApiProperty({
    description: 'Nom du produit',
    example: 'Ordinateur portable'
  })
  name: string;

  @ApiProperty({
    description: 'Référence unique du produit',
    example: 'PROD-001'
  })
  reference: string;

  @ApiProperty({
    description: 'Quantité en stock',
    example: 50
  })
  quantity: number;

  @ApiProperty({
    description: 'Prix unitaire en FCFA',
    example: 350000
  })
  price: number;

  @ApiProperty({
    description: 'Seuil d\'alerte stock minimum',
    example: 10
  })
  alertThreshold: number;
}
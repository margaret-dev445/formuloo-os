import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {

  @ApiProperty({
    description: 'Email de l\'utilisateur',
    example: 'admin@formuloo.com',
  })
  email: string;

  @ApiProperty({
    description: 'Mot de passe',
    example: 'password123',
  })
  password: string;

  @ApiProperty({
    description: 'Role de l\'utilisateur',
    example: 'admin',
  })
  role: string;
}
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class PetOwnerSummaryDto {
  @ApiProperty({
    description: 'ID do tutor',
    example: 'b2c3d4e5-f6a7-8901-bcde-f12345678901',
    format: 'uuid',
  })
  id: string;

  @ApiProperty({
    description: 'Nome completo do tutor',
    example: 'Maria da Silva',
  })
  name: string;

  @ApiProperty({
    description: 'CPF do tutor',
    example: '123.456.789-00', // ajuste para o formato que sua API salva (com ou sem máscara)
  })
  cpf: string;

  @ApiProperty({
    description: 'Telefone do tutor',
    example: '(71) 99999-9999', // ajuste para o formato real
  })
  phone: string;

  @ApiProperty({
    description: 'Email do tutor',
    example: 'maria@email.com',
    format: 'email',
  })
  email: string;

  @ApiProperty({
    description: 'Endereço do tutor',
    example: 'Rua das Flores, 123, Salvador - BA',
  })
  address: string;

  @ApiProperty({
    description: 'Data de criação do registro',
    example: '2024-05-10T14:30:00.000Z',
    type: String,
    format: 'date-time',
  })
  createdAt: Date;

  @Exclude()
  deletedAt: Date | null; // sem @ApiProperty: não aparece no Swagger
}
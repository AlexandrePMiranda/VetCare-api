// pet-owners/dto/pet-owner-response.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Type } from 'class-transformer';
import { ResponsePetDto } from '../../pet/dto/response-pet.dto';
import { ResponsePetSummary } from './response-pet-summary.dto';

export class PetOwnerResponseDto {
  @ApiProperty({ description: 'ID (UUID) do proprietário', example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', format: 'uuid' })
  id: string;

  @ApiProperty({ description: 'Nome completo do proprietário', example: 'Maria da Silva' })
  name: string;

  @ApiProperty({ description: 'CPF do proprietário', example: '12345678901' })
  cpf: string;

  @ApiProperty({ description: 'Número de telefone do proprietário', example: '71987654321' })
  phone: string;

  @ApiProperty({ description: 'Endereço de e-mail do proprietário', example: 'maria.silva@email.com' })
  email: string;

  @ApiProperty({ description: 'Endereço residencial do proprietário', example: 'Rua Principal, 456 - Salvador, BA' })
  address: string;

  @ApiProperty({ description: 'Data e hora de criação do registro', example: '2026-01-01T00:00:00.000Z' })
  createdAt: Date;

  @Exclude()
  deletedAt: Date | null;

  @ApiProperty({ description: 'Lista de pets associados ao proprietário', type: () => [ResponsePetSummary] })
  @Type(() => ResponsePetSummary)
  pets: ResponsePetSummary[];
}
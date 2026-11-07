import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';

export class UpdatePetOwnerDto {
  @ApiPropertyOptional({ description: 'Nome completo do proprietário', example: 'Maria da Silva' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;

  @ApiPropertyOptional({ description: 'Número de telefone com DDD (10 ou 11 dígitos numéricos)', example: '71987654321' })
  @IsOptional()
  @Matches(/^\d{10,11}$/, {
    message: 'phone deve conter 10 ou 11 dígitos numéricos',
  })
  phone?: string;

  @ApiPropertyOptional({ description: 'Endereço de e-mail válido do proprietário', example: 'maria.silva@email.com' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({ description: 'Endereço residencial do proprietário', example: 'Rua Principal, 456 - Salvador, BA' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  address?: string;
}
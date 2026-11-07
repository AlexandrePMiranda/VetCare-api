import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude, Type } from 'class-transformer';
import { PetOwnerSummaryDto } from './pet-owner-summay.dto';

export class ResponsePetDto {
  @ApiProperty({
    description: 'ID do pet',
    example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    format: 'uuid',
  })
  id: string;

  @ApiProperty({ description: 'Nome do pet', example: 'Rex' })
  name: string;

  @ApiProperty({ description: 'Espécie do pet', example: 'Cachorro' })
  species: string;

  @ApiProperty({ description: 'Raça do pet', example: 'Labrador' })
  breed: string;

  @ApiProperty({
    description: 'Sexo do pet',
    example: 'MALE', // ajuste para um valor real do enum Sex
  })
  sex: string;

  @ApiProperty({
    description: 'Data de nascimento do pet',
    example: '2022-03-15T00:00:00.000Z',
    type: String,
    format: 'date-time',
  })
  birthDate: Date;

  @ApiProperty({
    description: 'Peso do pet em quilogramas',
    example: 12.5,
    type: Number,
    nullable: true,
  })
  weight: number | null;

  @ApiProperty({
    description: 'Observações adicionais sobre o pet',
    example: 'Alérgico a frango',
    type: String,
    nullable: true,
  })
  notes: string | null;

  @ApiProperty({
    description: 'Data de criação do registro',
    example: '2024-05-10T14:30:00.000Z',
    type: String,
    format: 'date-time',
  })
  createdAt: Date;

  @Exclude()
  deletedAt: Date | null;

  @ApiProperty({
    description: 'ID do tutor responsável pelo pet',
    example: 'b2c3d4e5-f6a7-8901-bcde-f12345678901',
    format: 'uuid',
  })
  petOwnerId: string;

  @ApiPropertyOptional({
    description: 'Dados resumidos do tutor (presente apenas quando incluído na consulta)',
    type: () => PetOwnerSummaryDto,
  })
  @Type(() => PetOwnerSummaryDto)
  petOwner?: PetOwnerSummaryDto;
}
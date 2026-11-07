import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsInt, IsOptional, IsString, Min } from 'class-validator';

export class ListUsersDto {
  @ApiPropertyOptional({
    description: 'Termo de busca para filtrar usuários (ex.: nome ou email)',
    example: 'maria',
    type: String,
  })
  @IsOptional()
  @IsString()
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  search?: string;

  @ApiPropertyOptional({
    description: 'Número da página a ser retornada',
    example: 1,
    minimum: 1,
    type: Number,
  })
  @IsOptional()
  @Transform(({ value }) => (value === '' ? undefined : Number(value)))
  @IsInt()
  @Min(1)
  page?: number;
}
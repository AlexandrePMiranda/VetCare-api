import { IsDateString, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, IsUUID } from 'class-validator';
import { Sex } from '../../generated/prisma/enums';

export class CreatePetDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  species: string;

  @IsString()
  @IsNotEmpty()
  breed: string;

  @IsEnum(Sex)
  @IsNotEmpty()
  sex: Sex;

  @IsDateString()
  birthDate: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  weight: number;

  @IsOptional()
  @IsString()
  notes?: string;

  @IsNotEmpty()
  @IsUUID()
  petOwnerId: string;
}

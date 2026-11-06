import { Expose, Type } from 'class-transformer';
import { IsArray, IsEmail, IsNotEmpty, IsOptional, IsString, Matches, ValidateNested } from 'class-validator';
import { CreatePetDto } from '../../pet/dto/create-pet.dto';

export class CreatePetOwnerDto {
  @Expose()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Expose()
  @Matches(/^\d{11}$/, { message: 'cpf deve conter 11 dígitos numéricos' })
  cpf: string;

  @Expose()
  @Matches(/^\d{10,11}$/, { message: 'phone deve conter 10 ou 11 dígitos numéricos' })
  phone: string;

  @Expose()  
  @IsEmail()
  email: string;

  @Expose()  
  @IsString()
  @IsNotEmpty()
  address: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePetDto)
  pets?: CreatePetDto[];
}
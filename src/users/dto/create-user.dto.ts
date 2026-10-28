import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, isEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { profile } from "./../../prisma/enums";

export class CreateUserDto {
    
    @IsEmail({}, { message: 'O email deve ser válido' })
    @IsNotEmpty({ message: 'O email não pode estar vazio' })
    email!: string;

    @IsString({ message: 'A senha deve ser válido' })
    @IsNotEmpty({ message: 'A senha não pode estar vazia' })
    password!: string;

    @IsEnum(profile, { message: 'O perfil deve ser admin, vet ou recep' })
    @IsNotEmpty({ message: 'O profile não pode estar vazio' })
    profile: profile
}



import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Role } from '../../generated/prisma/enums';


export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    name: string

    password: string
    
    @IsEmail({}, { message: 'O email deve ser válido' })
    @IsNotEmpty({ message: 'O email não pode estar vazio' })
    email!: string;

    @IsEnum(Role, { message: 'O perfil deve ser admin, vet ou recep' })
    @IsNotEmpty({ message: 'O profile não pode estar vazio' })
    role: Role
}



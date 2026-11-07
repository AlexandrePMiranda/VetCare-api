import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Role } from '../../generated/prisma/enums';

export class CreateUserDto {
  @ApiProperty({
    description: 'Nome completo do usuário',
    example: 'Maria Silva',
  })
  @IsNotEmpty({ message: 'O nome não pode estar vazio' })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Senha de acesso do usuário',
    example: 'Senha@123',
    minLength: 6,
    format: 'password',
  })
  @IsNotEmpty({ message: 'A senha não pode estar vazia' })
  @IsString()
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
  password: string;

  @ApiProperty({
    description: 'Email único do usuário, usado para login',
    example: 'maria.silva@clinica.com',
    format: 'email',
  })
  @IsEmail({}, { message: 'O email deve ser válido' })
  @IsNotEmpty({ message: 'O email não pode estar vazio' })
  email!: string;

  @ApiProperty({
    description: 'Perfil de acesso do usuário no sistema',
    enum: Role,
    enumName: 'Role',
    example: Role.ADMIN,
  })
  @IsEnum(Role, { message: 'O perfil deve ser admin, vet ou recep' })
  @IsNotEmpty({ message: 'O profile não pode estar vazio' })
  role: Role;
}

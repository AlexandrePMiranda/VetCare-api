import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Role } from '../../generated/prisma/enums';

export class InviteUserDto {
  @ApiProperty({
    description: 'Nome completo do usuário que será convidado',
    example: 'Maria Silva',
  })
  @IsNotEmpty({ message: 'O nome não pode estar vazio' })
  @IsString({ message: 'O nome deve ser válido' })
  name: string;

  @ApiProperty({
    description: 'Email para o qual o convite será enviado',
    example: 'maria.silva@clinica.com',
    format: 'email',
  })
  @IsEmail({}, { message: 'O email deve ser válido' })
  @IsNotEmpty({ message: 'O email não pode estar vazio' })
  email!: string;

  @ApiProperty({
    description: 'Perfil de acesso que o usuário terá ao aceitar o convite',
    enum: Role,
    enumName: 'Role',
    example: Role.ADMIN,
  })
  @IsEnum(Role, { message: 'O perfil deve ser admin, vet ou recep' })
  @IsNotEmpty({ message: 'O perfil não pode estar vazio' })
  role: Role;
}
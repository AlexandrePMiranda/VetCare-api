import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { Role } from '../../generated/prisma/enums'; // ajuste o caminho

export class ResponseUserDto {
  @ApiProperty({
    description: 'ID do usuário',
    example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  })
  @Expose()
  id!: string;

  @ApiProperty({
    description: 'Nome do usuário',
    example: 'Fulano de Tal',
  })
  @Expose()
  name!: string;

  @ApiProperty({
    description: 'Email do usuário',
    example: 'fulano@email.com',
    format: 'email',
  })
  @Expose()
  email!: string;

  @ApiProperty({
    description: 'Perfil de acesso do recepcionista',
    enum: Role,
    enumName: 'Role',
    example: Role.RECEP, // ajuste para um valor real do seu enum
  })
  @Expose()
  role!: Role;
}
import { ApiProperty } from '@nestjs/swagger';
import { Role, UserStatus } from '../../generated/prisma/enums';
import { Expose } from 'class-transformer';

export class ResponseUserByIdDto {
  @ApiProperty({
    description: 'ID (UUID) do usuário',
    example: '70beb52d-69cc-40ec-9c48-8e54fff50669',
    format: 'uuid',
  })
  @Expose()
  id: string;

  @ApiProperty({
    description: 'Nome do usuário',
    example: 'Jhon',
  })
  @Expose()
  name: string;

  @ApiProperty({
    description: 'Email do usuário',
    example: 'Jhon@ex.com',
    format: 'email',
  })
  @Expose()
  email: string;

  @ApiProperty({
    description: 'Perfil de acesso do usuário',
    enum: Role,
    enumName: 'Role',
    example: Role.RECEP,
  })
  @Expose()
  role: Role;

  @ApiProperty({
    description: 'Status do usuário',
    enum: UserStatus,
    enumName: 'Status',
    example: UserStatus.PENDING_INVITE,
  })
  @Expose()
  status: UserStatus;

  @ApiProperty({
    description: 'Data e hora do último acesso. Nulo se o usuário nunca acessou o sistema',
    example: null,
    type: String,
    format: 'date-time',
    nullable: true,
  })
  @Expose()
  lastAccessAt: Date | null;

  @ApiProperty({
    description: 'Data e hora do envio do convite. Nulo se o usuário não foi criado por convite',
    example: '2026-11-05T02:11:01.105Z',
    type: String,
    format: 'date-time',
    nullable: true,
  })
  @Expose()
  inviteSentAt: Date | null;

  @ApiProperty({
    description: 'Data e hora de criação do usuário',
    example: '2026-11-05T02:11:01.111Z',
    type: String,
    format: 'date-time',
  })
  @Expose()
  createdAt: Date;
}
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AcceptInviteDto {
  @ApiProperty({
    description: 'Nova senha definida pelo usuário para aceitar o convite',
    example: 'SenhaForte123!',
  })
  @IsNotEmpty({ message: 'A senha não pode estar vazia' })
  @IsString({ message: 'A senha deve ser válida' })
  password: string;
}
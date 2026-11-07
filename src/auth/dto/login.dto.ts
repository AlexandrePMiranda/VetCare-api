import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: 'Email do usuário',
    example: 'fulano@email.com',
    format: 'email',
  })
  @IsEmail({}, { message: 'Informe um email válido' })
  @IsNotEmpty({ message: 'O email não pode estar vazio' })
  email!: string;

  @ApiProperty({
    description: 'Senha do usuário',
    example: '123456',
    format: 'password',
  })
  @IsString({ message: 'A senha deve ser válida' })
  @IsNotEmpty({ message: 'A senha não pode estar vazia' })
  password!: string;
}
import { ApiProperty } from "@nestjs/swagger";
import { ResponseUserDto } from "../../users/dto/response-user.dto";
import { LoginDto } from "./login.dto";

export class LoginResponseDto {
  @ApiProperty({
    description: 'Token JWT a ser enviado no header Authorization (Bearer)',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  })
  access_token: string;

  @ApiProperty({
    description: 'Dados do usuário autenticado',
    type: ResponseUserDto,
  })
  user: ResponseUserDto;
}
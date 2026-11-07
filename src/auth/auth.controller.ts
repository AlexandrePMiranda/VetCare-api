import { Body, Controller, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ResponseUserDto } from '../users/dto/response-user.dto'; // ajuste o caminho
import { AcceptInviteDto } from './dto/accept-invite.dto';
import { LoginResponseDto } from './dto/login-response.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Autentica o usuário',
    description: 'Valida email e senha e retorna os dados do usuário autenticado.',
  })
  @ApiBody({ type: LoginDto })
  @ApiOkResponse({
    description: 'Login realizado com sucesso',
    type: LoginResponseDto,
  })
  @ApiBadRequestResponse({ description: 'Dados inválidos (validação falhou)' })
  @ApiUnauthorizedResponse({ description: 'Email ou senha incorretos' })
  async fazerlogin(@Body() credenciais: LoginDto) {
    return await this.authService.validarAcesso(credenciais);
  }

  @Post('invite/:token/accept')
  @ApiOperation({
    summary: 'Aceita um convite',
    description:
      'Conclui o cadastro do usuário a partir do token de convite recebido por email.',
  })
  @ApiParam({
    name: 'token',
    description: 'Token do convite enviado ao usuário',
    example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  })
  @ApiBody({ type: AcceptInviteDto })
    @ApiOkResponse({
    description: 'Convite aceito e login realizado com sucesso',
    type: LoginResponseDto,
  })
  @ApiCreatedResponse({ description: 'Convite aceito com sucesso' })
  @ApiBadRequestResponse({ description: 'Dados inválidos (validação falhou)' })
  acceptInvite(
    @Body() acceptIviteDto: AcceptInviteDto,
    @Param('token') token: string,
  ) {
    return this.authService.acceptInvite(acceptIviteDto, token);
  }
}
import { Controller, Get, Post, Body, Patch, Param, UseGuards, Query } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../auth/decorator/role.decorator';
import { RolesGuard } from '../auth/guards/role.guard';
import { InviteUserDto } from './dto/invite-user.dto';
import { StatusGuard } from '../auth/guards/status.guard';
import { AllowedStatus } from '../auth/decorator/status.decorator';
import { CurrentUser } from '../auth/decorator/current-user.decorator';
import { ListUsersDto } from './dto/list-user.dto';
import { ResponseUserByIdDto } from './dto/response-user-byId.dto';
import { ResponseUserDto } from './dto/response-user.dto';

@ApiTags('Users')
@ApiBearerAuth()
@ApiUnauthorizedResponse({ description: 'Token JWT ausente, inválido ou expirado' })
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //create
  @ApiOperation({
    summary: 'Criar usuário',
    description: 'Cria um novo usuário diretamente, com senha definida. Restrito a administradores com status ativo.',
  })
  @ApiCreatedResponse({ description: 'Usuário criado com sucesso' })
  @ApiBadRequestResponse({ description: 'Dados inválidos ou email já cadastrado' })
  @ApiForbiddenResponse({ description: 'Acesso restrito a administradores ativos' })
  @UseGuards(AuthGuard('jwt'), RolesGuard, StatusGuard)
  @Roles('ADMIN')
  @AllowedStatus('ACTIVE')
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  //invite
  @ApiOperation({
    summary: 'Convidar usuário',
    description: 'Envia um convite para o email informado, com o perfil de acesso definido. Restrito a administradores com status ativo.',
  })
  @ApiCreatedResponse({ description: 'Convite criado com sucesso' })
  @ApiBadRequestResponse({ description: 'Dados inválidos ou email já cadastrado' })
  @ApiForbiddenResponse({ description: 'Acesso restrito a administradores ativos' })
  @UseGuards(AuthGuard('jwt'), RolesGuard, StatusGuard)
  @Roles('ADMIN')
  @AllowedStatus('ACTIVE')
  @Post('invite')
  invite(@Body() inviteUserDto: InviteUserDto) {
    return this.usersService.invite(inviteUserDto);
  }

  //deactivate
  @ApiOperation({
    summary: 'Desativar usuário',
    description: 'Altera o status do usuário para inativo. Restrito a administradores com status ativo.',
  })
  @ApiParam({ name: 'id', description: 'ID do usuário a ser desativado' })
  @ApiCreatedResponse({ description: 'Usuário desativado com sucesso' })
  @ApiNotFoundResponse({ description: 'Usuário não encontrado' })
  @ApiForbiddenResponse({ description: 'Acesso restrito a administradores ativos' })
  @UseGuards(AuthGuard('jwt'), RolesGuard, StatusGuard)
  @Roles('ADMIN')
  @AllowedStatus('ACTIVE')
  @Post(':id/deactivate')
  deactivate(@Param('id') id: string) {
    return this.usersService.deactivate(id);
  }


  //refresh
  @ApiOperation({
    summary: 'Obter usuário logado',
    description: 'Retorna os dados do usuário autenticado. Útil para restaurar a sessão no front-end.',
  })
  @ApiOkResponse({ description: 'Dados do usuário autenticado', type: ResponseUserDto })
  @ApiForbiddenResponse({ description: 'Usuário sem status ativo' })
  @UseGuards(AuthGuard('jwt'), StatusGuard)
  @AllowedStatus('ACTIVE')
  @Get('me')
  refresh(@CurrentUser('id') userId: string) {
    return this.usersService.refresh(userId);
  }


  //list
  @ApiOperation({
    summary: 'Listar usuários',
    description: 'Lista usuários com busca opcional e paginação. Restrito a administradores com status ativo.',
  })
  @ApiOkResponse({ description: 'Lista de usuários', type: [ResponseUserByIdDto] })
  @ApiForbiddenResponse({ description: 'Acesso restrito a administradores ativos' })
  @UseGuards(AuthGuard('jwt'), RolesGuard, StatusGuard)
  @Roles('ADMIN')
  @AllowedStatus('ACTIVE')
  @Get()
  findAll(@Query() query: ListUsersDto) {
    return this.usersService.findAll(query);
  }

  @ApiOperation({
    summary: 'Buscar usuário por ID',
    description: 'Retorna os dados de um usuário específico. Restrito a administradores com status ativo.',
  })
  @ApiParam({ name: 'id', description: 'ID do usuário' })
 @ApiOkResponse({ description: 'Dados do usuário', type: ResponseUserByIdDto })
  @ApiNotFoundResponse({ description: 'Usuário não encontrado' })
  @ApiForbiddenResponse({ description: 'Acesso restrito a administradores ativos' })
  @UseGuards(AuthGuard('jwt'), RolesGuard, StatusGuard)
  @Roles('ADMIN')
  @AllowedStatus('ACTIVE')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  //Patch
  @ApiOperation({
    summary: 'Atualizar usuário',
    description: 'Atualiza parcialmente os dados de um usuário. Restrito a administradores com status ativo.',
  })
  @ApiParam({ name: 'id', description: 'ID do usuário a ser atualizado' })
  @ApiOkResponse({ description: 'Usuário atualizado com sucesso', type: ResponseUserDto })
  @ApiBadRequestResponse({ description: 'Dados inválidos' })
  @ApiNotFoundResponse({ description: 'Usuário não encontrado' })
  @ApiForbiddenResponse({ description: 'Acesso restrito a administradores ativos' })
  @UseGuards(AuthGuard('jwt'), RolesGuard, StatusGuard)
  @Roles('ADMIN')
  @AllowedStatus('ACTIVE')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }
}
import {
  Body, Controller, Delete, Get, HttpCode, HttpStatus,
  Param, ParseUUIDPipe, Patch, Post, Query, UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBadRequestResponse, ApiBearerAuth, ApiBody, ApiCreatedResponse,
  ApiForbiddenResponse, ApiNoContentResponse, ApiNotFoundResponse,
  ApiOkResponse, ApiOperation, ApiParam, ApiTags, ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { StatusGuard } from '../auth/guards/status.guard';
import { CreatePetOwnerDto } from './dto/create-pet-owner.dto';
import { ListPetOwnersQueryDto } from './dto/list-petowner-query.dto';
import { PetOwnerResponseDto } from './dto/response-pet-owner.dto'; // ajuste o caminho se necessário
import { UpdatePetOwnerDto } from './dto/update-pet-owner.dto';
import { PetOwnerService } from './pet-owner.service';
import { AllowedStatus } from '../auth/decorator/status.decorator';

@ApiTags('Pet Owners')
@ApiBearerAuth()
@ApiUnauthorizedResponse({ description: 'Token JWT ausente, inválido ou expirado' })
@ApiForbiddenResponse({ description: 'Usuário sem permissão (falha no StatusGuard)' })
@UseGuards(AuthGuard('jwt'), StatusGuard)
@AllowedStatus('ACTIVE')
@Controller('pet-owners')
export class PetOwnerController {
  constructor(private readonly service: PetOwnerService) {}

  @Get()
  @ApiOperation({ summary: 'Lista os proprietários de pets', description: 'Retorna os tutores com busca textual e paginação.' })
  @ApiOkResponse({ description: 'Lista de proprietários encontrada', type: [PetOwnerResponseDto] })
  @ApiBadRequestResponse({ description: 'Parâmetros de consulta inválidos' })
  public list(@Query() query: ListPetOwnersQueryDto) {
    return this.service.list(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca um proprietário pelo ID', description: 'Retorna os dados detalhados do tutor e seus pets.' })
  @ApiParam({ name: 'id', description: 'ID (UUID) do proprietário', example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890' })
  @ApiOkResponse({ description: 'Proprietário encontrado', type: PetOwnerResponseDto })
  @ApiNotFoundResponse({ description: 'Proprietário não encontrado' })
  public findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.service.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Cadastra um proprietário', description: 'Cria um novo cadastro de tutor de pet (opcionalmente com pets).' })
  @ApiBody({ type: CreatePetOwnerDto })
  @ApiCreatedResponse({ description: 'Proprietário cadastrado com sucesso', type: PetOwnerResponseDto })
  @ApiBadRequestResponse({ description: 'Dados inválidos (validação falhou)' })
  public create(@Body() dto: CreatePetOwnerDto){
    return this.service.create(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um proprietário', description: 'Atualização parcial: envie apenas os campos que deseja alterar.' })
  @ApiParam({ name: 'id', description: 'ID (UUID) do proprietário', example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890' })
  @ApiBody({ type: UpdatePetOwnerDto })
  @ApiOkResponse({ description: 'Proprietário atualizado com sucesso', type: PetOwnerResponseDto })
  @ApiBadRequestResponse({ description: 'Dados inválidos (validação falhou)' })
  @ApiNotFoundResponse({ description: 'Proprietário não encontrado' })
  public update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdatePetOwnerDto,
  ): Promise<PetOwnerResponseDto> {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Remove um proprietário', description: 'Remove o tutor (soft delete).' })
  @ApiParam({ name: 'id', description: 'ID (UUID) do proprietário', example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', format: 'uuid' })
  @ApiNoContentResponse({ description: 'Proprietário removido com sucesso' })
  @ApiBadRequestResponse({ description: 'ID inválido (não é um UUID)' })
  @ApiNotFoundResponse({ description: 'Proprietário não encontrado' })
  public remove(@Param('id', ParseUUIDPipe) id: string){
    return this.service.remove(id);
  }
}
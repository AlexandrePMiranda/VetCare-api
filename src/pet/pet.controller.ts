import {
  Body, Controller, Delete, Get, HttpCode, HttpStatus,
  Param, ParseUUIDPipe, Patch, Post, Query, UseGuards, ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { CreatePetDto } from './dto/create-pet.dto';
import { ListPetsQueryDto } from './dto/lists-pet-query.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { ResponsePetDto } from './dto/response-pet.dto'; // ajuste o caminho
import { PetService } from './pet.service';
import { StatusGuard } from '../auth/guards/status.guard';
import { AllowedStatus } from '../auth/decorator/status.decorator';

@ApiTags('Pets')
@ApiBearerAuth()
@ApiUnauthorizedResponse({ description: 'Token JWT ausente, inválido ou expirado' })
@ApiForbiddenResponse({ description: 'Usuário sem permissão (falha no StatusGuard)' })
@UseGuards(AuthGuard('jwt'), StatusGuard)
@AllowedStatus('ACTIVE')
@Controller('pets')
export class PetController {
  constructor(private readonly service: PetService) {}

  @Post()
  @ApiOperation({
    summary: 'Cadastra um pet',
    description: 'Cria um novo pet vinculado a um tutor existente.',
  })
  @ApiBody({ type: CreatePetDto })
  @ApiCreatedResponse({
    description: 'Pet cadastrado com sucesso',
    type: ResponsePetDto,
  })
  @ApiBadRequestResponse({ description: 'Dados inválidos (validação falhou)' })
  @ApiNotFoundResponse({ description: 'Tutor (petOwnerId) não encontrado' })
  create(@Body() dto: CreatePetDto) {
    return this.service.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Lista os pets',
    description: 'Retorna os pets com busca textual e paginação.',
  })
  @ApiOkResponse({
    description: 'Lista de pets',
    type: [ResponsePetDto],
  })
  @ApiBadRequestResponse({ description: 'Parâmetros de consulta inválidos' })
  list(@Query() query: ListPetsQueryDto) {
    return this.service.list(query);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Busca um pet pelo ID',
    description: 'Retorna os dados do pet, incluindo o resumo do tutor.',
  })
  @ApiParam({
    name: 'id',
    description: 'ID (UUID) do pet',
    example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  })
  @ApiOkResponse({
    description: 'Pet encontrado',
    type: ResponsePetDto,
  })
  @ApiNotFoundResponse({ description: 'Pet não encontrado' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualiza um pet',
    description: 'Atualização parcial: envie apenas os campos que deseja alterar.',
  })
  @ApiParam({
    name: 'id',
    description: 'ID (UUID) do pet',
    example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  })
  @ApiBody({ type: UpdatePetDto })
  @ApiOkResponse({
    description: 'Pet atualizado com sucesso',
    type: ResponsePetDto,
  })
  @ApiBadRequestResponse({ description: 'Dados inválidos (validação falhou)' })
  @ApiNotFoundResponse({ description: 'Pet não encontrado' })
  update(
    @Param('id') id: string,
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: false, transform: true }))
    dto: UpdatePetDto,
  ) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Remove um pet',
    description: 'Remove o pet (soft delete, preenchendo o campo deletedAt).',
  })
  @ApiParam({
    name: 'id',
    description: 'ID (UUID) do pet',
    example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    format: 'uuid',
  })
  @ApiOkResponse({ description: 'Pet removido com sucesso' })
  @ApiBadRequestResponse({ description: 'ID inválido (não é um UUID)' })
  @ApiNotFoundResponse({ description: 'Pet não encontrado' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.service.remove(id);
  }
}
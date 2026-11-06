import {
  Body, Controller, Delete, Get, HttpCode, HttpStatus,
  Param, ParseUUIDPipe, Patch, Post, Query, UseGuards, ValidationPipe,
} from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { ListPetsQueryDto } from './dto/lists-pet-query.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { PetService } from './pet.service';
import { JwtAuthGuard } from '../auth/guards/auth.guard';
import { AuthGuard } from '@nestjs/passport';
import { StatusGuard } from '../auth/guards/status.guard';

//@UseGuards(AuthGuard('jwt'), StatusGuard)
@Controller('pets')
export class PetController {
  constructor(private readonly service: PetService) {}


  @Post()
  create(@Body() dto: CreatePetDto) {
    return this.service.create(dto);
  }

  @Get()
  list(@Query() query: ListPetsQueryDto) {
    return this.service.list(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: false, transform: true }))
    dto: UpdatePetDto,
  ) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.service.remove(id);
  }
}
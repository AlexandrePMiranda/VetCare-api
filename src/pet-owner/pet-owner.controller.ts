import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { PetOwnerService } from './pet-owner.service';
import { CreatePetOwnerDto } from './dto/create-pet-owner.dto';
import { ListPetOwnersQueryDto } from './dto/list-petowner-query.dto';
import { UpdatePetOwnerDto } from './dto/update-pet-owner.dto';
import { AuthGuard } from '@nestjs/passport';
import { StatusGuard } from '../auth/guards/status.guard';

//@UseGuards(AuthGuard('jwt'), StatusGuard)
@Controller('pet-owners')
export class PetOwnerController {
  constructor(private readonly service: PetOwnerService) {}

  @Get()
  list(@Query() query: ListPetOwnersQueryDto) {
    return this.service.list(query);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() dto: CreatePetOwnerDto) {
    return this.service.create(dto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdatePetOwnerDto,
  ) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.service.remove(id);
  }
}
import { Controller, Get, Post, Body, Patch, Param, Delete, UseFilters, UseGuards, Req, ForbiddenException } from '@nestjs/common';
import { VetsService } from './vets.service';
import { CreateVetDto } from './dto/create-vet.dto';
import { UpdateVetDto } from './dto/update-vet.dto';
import { AuthGuard } from '@nestjs/passport';
import { ProfileGuard } from '../auth/guards/profile.guard';
import { Roles } from '../auth/decorator/profiles.decorator';
import { profile } from '../prisma/enums';

@Controller('vets')
export class VetsController {
  constructor(private readonly vetsService: VetsService) {}

  @UseGuards(AuthGuard('jwt'), ProfileGuard)
  @Roles('ADMIN')
  @Post()
  create(@Body() createVetDto: CreateVetDto) {
    return this.vetsService.create(createVetDto);
  }

  @UseGuards(AuthGuard('jwt'), ProfileGuard)
  @Roles('ADMIN') 
  @Get()
  findAll() {
    return this.vetsService.findAll();
  }

  @UseGuards(AuthGuard('jwt'), ProfileGuard)
  @Roles('ADMIN')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vetsService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'), ProfileGuard)
  @Roles('ADMIN', 'VET') 
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVetDto: UpdateVetDto, @Req() req: { user: { id: string }, profile: profile }) {
    if (req.profile == 'VET' && req.user.id !== id) {
      throw new ForbiddenException('Usuário sem permissão.');
      }

    return this.vetsService.update(id, updateVetDto);
  }

  @UseGuards(AuthGuard('jwt'), ProfileGuard)
  @Roles('ADMIN')  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vetsService.remove(id);
  }
}

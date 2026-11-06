import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Query } from '@nestjs/common';
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

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard('jwt'), RolesGuard, StatusGuard)
  @Roles('ADMIN')
  @AllowedStatus('ACTIVE')
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard, StatusGuard)
  @Roles('ADMIN')
  @AllowedStatus('ACTIVE')
  @Post('invite')
  invite(@Body() inviteUserDto: InviteUserDto){
    console.log('checkpoint')
    return this.usersService.invite(inviteUserDto)
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard, StatusGuard)
  @Roles('ADMIN')
  @AllowedStatus('ACTIVE')
  @Post(':id/deactivate')
  deactivate(@Param('id') id: string){
    return this.usersService.deactivate(id)
  }

  @UseGuards(AuthGuard('jwt'), StatusGuard)
  @AllowedStatus('ACTIVE')
  @Get('me')
  refresh(@CurrentUser('id') userId: string){
    return this.usersService.refresh(userId)
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard, StatusGuard)
  @Roles('ADMIN')
  @AllowedStatus('ACTIVE')
  @Get()
  findAll(@Query() query: ListUsersDto) {
    return this.usersService.findAll(query);
  }
  
  @UseGuards(AuthGuard('jwt'), RolesGuard, StatusGuard)
  @Roles('ADMIN')
  @AllowedStatus('ACTIVE')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard, StatusGuard)
  @Roles('ADMIN')
  @AllowedStatus('ACTIVE') 
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard, StatusGuard)
  @Roles('ADMIN')
  @AllowedStatus('ACTIVE')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}

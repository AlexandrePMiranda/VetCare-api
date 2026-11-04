import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';
import { hash } from 'bcrypt';
import { plainToInstance } from 'class-transformer';
import { ResponseUserDto } from './dto/response-user.dto';
import { InviteUserDto } from './dto/invite-user.dto';
import { UserStatus } from '../generated/prisma/enums';
import { JwtService } from '@nestjs/jwt';
import { AcceptInviteDto } from './dto/accept-invite.dto';

@Injectable()
export class UsersService {

  constructor(private readonly usersRepository: UsersRepository, private readonly jwtService: JwtService) {}
  
  async create(data: CreateUserDto) {

    if(await this.usersRepository.findByEmail(data.email)){
      throw new ConflictException('Já existe um usuário com este e-mail');
    }

    const hashedPassword = await hash(data.password, 10);
    const user = await this.usersRepository.create({
      ...data,
      password: hashedPassword,
    });

    return plainToInstance(ResponseUserDto, user, {
      excludeExtraneousValues: true,
    });
  }

  async invite(data: InviteUserDto){
    
    if(await this.usersRepository.findByEmail(data.email)){
      throw new ConflictException('Já existe um usuário com este e-mail');  
    }

    const user = await this.usersRepository.create({
      name: data.name,
      email: data.email,
      role: data.role,
      status: UserStatus.PENDING_INVITE,
      inviteSentAt: new Date()
    });

    const payload = {
      sub: user.id,
      email: user.email,
      porpose: 'invite'
    }
    const inviteToken = await this.jwtService.sign(payload)
    return { data: `https://vetcare-aal.vercel.app/convite/${inviteToken}`}

  }

  findAll() {
    return this.usersRepository.getAllUsers();
  }

  async findOne(id: string) {

    const user = await this.usersRepository.findById(id);

    if(!user){
      throw new BadRequestException('Usuário não existe')
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findById(id);

    if(!user){
      throw new BadRequestException('Usuário não existe')
    }
    return await this.usersRepository.update(user.id, updateUserDto);
  }

  async remove(id: string) {
    const user = await this.usersRepository.findById(id);

    if(!user){
      console.log(user)
      throw new BadRequestException('Usuário não existe')
    }
    return await this.usersRepository.delete(id);
  }
}

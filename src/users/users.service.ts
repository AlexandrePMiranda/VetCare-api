import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';
import { hash } from 'bcrypt';
import { plainToInstance } from 'class-transformer';
import { ResponseUserDto } from './dto/response-user.dto';

@Injectable()
export class UsersService {

  constructor(private readonly usersRepository: UsersRepository) {}
  
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

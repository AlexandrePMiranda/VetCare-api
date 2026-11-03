import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateVetDto } from './dto/create-vet.dto';
import { UpdateVetDto } from './dto/update-vet.dto';
import { UsersRepository } from './../users/users.repository'
import { VetsRepository } from './vets.repository';

@Injectable()
export class VetsService {

  constructor(private readonly userRepository: UsersRepository, private readonly vetsRepository: VetsRepository){}

  async create(data: CreateVetDto) {
    const user = await this.userRepository.findByEmail(data.userEmail);
    if(!user){
      throw new BadRequestException('Usuário não existe')
    }
    if(user.profile != "VET"){
      throw new BadRequestException("Usuário não pode ser veterinário")
    }
    console.log('checkpoin1')
    const newData = {
      name: data.name,
      crmv: data.crmv,
      cpf: data.cpf,
      user: {
        connect: {
          id: user.id,
    },},};
    console.log('checkpoin')
    return this.vetsRepository.create(newData);
  }

  async findAll() {
    return await this.vetsRepository.getAll();
  }

  async findOne(id: string) {
    const vet = await this.vetsRepository.getById(id)
    if (!vet){
      throw new BadRequestException('veterinário não existe')
    }
    return vet;
  }

  async update(id: string, data: UpdateVetDto) {
    const vet = await this.vetsRepository.getById(id);
    if(!vet){
      throw new BadRequestException('veterinário não existe')
    }
    if(data.userEmail){
      const user = await this.userRepository.findByEmail(data.userEmail);
      if(!user){
        throw new BadRequestException('Usuário não existe')
      }
      if(user.profile != "VET"){
        throw new BadRequestException("Usuário não pode ser veterinário")
      }
    }
    return this.vetsRepository.update(id, data);
  }

  async remove(id: string) {
    const vet = await this.vetsRepository.getById(id);
    if(!vet){
      throw new BadRequestException('veterinário não existe')
    }
    return this.vetsRepository.delete(id)
  }
}

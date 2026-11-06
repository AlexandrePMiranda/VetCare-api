import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { ListPetsQueryDto } from './dto/lists-pet-query.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { PetRepository } from './pet.repository';
import { plainToInstance } from 'class-transformer';
import { ResponsePetDto } from './dto/response-pet.dto';

@Injectable()
export class PetService {
  constructor(private readonly petRepository: PetRepository) {}

async list({ search, page }: ListPetsQueryDto) {
  const { data, ...pagination } = await this.petRepository.search(search, page);

  return {
    ...pagination,
    data: plainToInstance(ResponsePetDto, data, {
      excludeExtraneousValues: false,
    }),
  };
}

  async create(dto: CreatePetDto) {
    if (!(await this.petRepository.ownerExists(dto.petOwnerId))) {
      throw new NotFoundException('Tutor não encontrado');
    }
    const pet = await this.petRepository.create(dto)
    return plainToInstance(ResponsePetDto, pet, {excludeExtraneousValues: false})
  }

  async findOne(id: string) {
    const pet = await this.petRepository.findById(id);
    if (!pet) throw new NotFoundException('Pet não encontrado');
    return pet;
  }

  async update(id: string, dto: UpdatePetDto) {
    const pet = await this.findOne(id);

    const newPet = this.petRepository.update(id, dto)
    return plainToInstance(ResponsePetDto, newPet, {excludeExtraneousValues: false});
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.petRepository.softDelete(id);
  }
}
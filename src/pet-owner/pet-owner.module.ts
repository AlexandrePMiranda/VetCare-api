import { Module } from '@nestjs/common';
import { PetOwnerService } from './pet-owner.service';
import { PetOwnerController } from './pet-owner.controller';
import { Pet } from '../pet/entities/pet.entity';
import { PetRepository } from '../pet/pet.repository';
import { PetOwnerRepository } from './pet-owner.repository';

@Module({
  controllers: [PetOwnerController],
  providers: [PetOwnerService, PetRepository, PetOwnerRepository],
})
export class PetOwnerModule {}

import { Module } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetController } from './pet.controller';
import { PetRepository } from './pet.repository';

@Module({
  controllers: [PetController],
  providers: [PetService, PetRepository],
  exports: [PetRepository]
})
export class PetModule {}

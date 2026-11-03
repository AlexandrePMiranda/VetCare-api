import { Module } from '@nestjs/common';
import { VetsService } from './vets.service';
import { VetsController } from './vets.controller';
import { VetsRepository } from './vets.repository';
import { UsersRepository } from '../users/users.repository';

@Module({
  controllers: [VetsController],
  providers: [VetsService, VetsRepository, UsersRepository],
})
export class VetsModule {}

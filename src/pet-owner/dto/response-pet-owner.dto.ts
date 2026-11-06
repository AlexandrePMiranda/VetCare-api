// pet-owners/dto/pet-owner-response.dto.ts
import { Exclude, Type } from 'class-transformer';
import { ResponsePetDto } from '../../pet/dto/response-pet.dto';

export class PetOwnerResponseDto {
  id: string;
  name: string;
  cpf: string;
  phone: string;
  email: string;
  address: string;
  createdAt: Date;

  @Exclude()
  deletedAt: Date | null;

  @Type(() => ResponsePetDto)
  pets: ResponsePetDto[];
}
import { Exclude, Type } from "class-transformer";
import { PetOwnerResponseDto } from "../../pet-owner/dto/response-pet-owner.dto";
import { PetOwnerSummaryDto } from "./pet-owner-summay.dto";

export class ResponsePetDto {
  id: string;
  name: string;
  species: string;
  breed: string;
  sex: string;
  birthDate: Date;
  weight: number | null;
  notes: string | null;
  createdAt: Date;

  @Exclude()
  deletedAt: Date | null;

  petOwnerId: string;

  @Type(() => PetOwnerSummaryDto)
  petOwner?: PetOwnerSummaryDto;
}
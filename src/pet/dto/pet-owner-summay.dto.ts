import { Exclude } from "class-transformer";

export class PetOwnerSummaryDto {
  id: string;
  name: string;
  cpf: string;
  phone: string;
  email: string;
  address: string;
  createdAt: Date;

  @Exclude()
  deletedAt: Date | null;
}
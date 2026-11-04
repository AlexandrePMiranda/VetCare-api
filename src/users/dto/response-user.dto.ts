import { Expose } from "class-transformer";
import { Role } from "../../generated/prisma/enums";


export class ResponseUserDto {
  
  @Expose()
  id!: string;

  @Expose()
  name!: string

  @Expose()
  email!: string;

  @Expose()
  role!: Role;
}
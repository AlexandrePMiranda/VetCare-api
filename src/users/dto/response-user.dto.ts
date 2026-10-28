import { Expose } from "class-transformer";
import { profile } from "./../../prisma/enums";

export class ResponseUserDto {
  
  @Expose()
  id!: string;

  @Expose()
  email!: string;

  @Expose()
  role!: profile;
}
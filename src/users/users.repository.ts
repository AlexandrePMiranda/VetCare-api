import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Prisma } from "../prisma/client";


@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async create(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data,
    });
  }

  async getAllUsers() {
    return this.prisma.user.findMany();
  }

  async findById(id: string) {
    return this.prisma.user.findUnique({ where: { id: id } });
  }

  async update(id: string, data: Prisma.UserUpdateInput){
    return this.prisma.user.update({where: {id: id}, data: data })
  }

  async delete(id: string){
    return this.prisma.user.delete({where:{id:id}})
  }
}
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Prisma } from "../generated/prisma/client";

export interface FindManyParams {
  search?: string;
  skip: number;
  take: number;
}

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

  private buildWhere(search?: string): Prisma.UserWhereInput {
  return search
    ? {
        OR: [
          { name: { contains: search, mode: "insensitive" } },
          { email: { contains: search, mode: "insensitive" } },
        ],
      }
    : {};
  }

  async findMany({ search, skip, take }: FindManyParams) {
    return this.prisma.user.findMany({
      where: this.buildWhere(search),
      skip,
      take,
      orderBy: { createdAt: "desc" },
      select: { id: true, name: true, email: true, role: true, status:true, lastAccessAt:true, inviteSentAt: true, createdAt: true },
    });
  }

  async count(search?: string) {
    return this.prisma.user.count({ where: this.buildWhere(search) });
  }
}
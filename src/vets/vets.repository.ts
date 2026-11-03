import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VetCreateInput, VetUpdateInput } from "../generated/prisma/models";

@Injectable()
export class VetsRepository{

  constructor(private readonly prisma: PrismaService) {}


  async create(data: VetCreateInput){
    console.log('checkpoin3')

    return await this.prisma.vet.create({data});
  }

  async getById(id: string){
    return await this.prisma.vet.findUnique({where:{id: id}});
  }

  async getAll(){
    return await this.prisma.vet.findMany();
  }
  async update(id: string, data: VetUpdateInput){
    return await this.prisma.vet.update({where: {id:id}, data})
  }

  async delete(id: string){
    return await this.prisma.vet.delete({where:{id: id}})
  }
}
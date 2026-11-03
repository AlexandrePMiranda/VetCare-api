import { Injectable } from "@nestjs/common";
import { VetCreateInput, VetUpdateInput } from "../prisma/models";
import { PrismaService } from "../prisma/prisma.service";

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
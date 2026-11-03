import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class CreateVetDto {

    @IsString({ message: 'A senha deve ser válido' })
    @IsNotEmpty({ message: 'A senha não pode estar vazia' })   
    name: string

    @IsString({ message: 'A senha deve ser válido' })
    @IsNotEmpty({ message: 'A senha não pode estar vazia' }) 
    crmv: string

    @IsString({ message: 'A senha deve ser válido' })
    @IsNotEmpty({ message: 'A senha não pode estar vazia' }) 
    cpf: string

    @IsEmail({}, { message: 'A senha deve ser válido' })
    @IsNotEmpty({ message: 'A senha não pode estar vazia' }) 
    userEmail: string
}

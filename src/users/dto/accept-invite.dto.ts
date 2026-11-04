import { IsNotEmpty, IsString } from "class-validator";

export class AcceptInviteDto{

    @IsNotEmpty({message: 'A senha não pode estar vazia'})
    @IsString({ message: 'A senha deve ser válida' })
    password: string
}
import {IsNotEmpty, IsString} from "class-validator";

export class CreateDTO {

    @IsNotEmpty({ message: "Você precisa de um titulo" })
    @IsString()
    name?: string;

    @IsNotEmpty({ message: "Você precisa informar o valor" })
    price?: number;

}

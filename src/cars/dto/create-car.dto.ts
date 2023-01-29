import { IsString } from "class-validator";

// LOS DTO ES LA MANERA EN QUE VAMOS A MOVER LA DATA EN NUESTRA APP
export class CreateCarDto {

    @IsString( {message: `El brand debe ser un string`}) // le podemos escribir un msg para verlo en postman
    readonly brand: string; //se pone readonly para que la propiedad no la podemos modificar en el controlador
    
    @IsString( {message: `El model debe ser un string`})
    readonly model: string;
}
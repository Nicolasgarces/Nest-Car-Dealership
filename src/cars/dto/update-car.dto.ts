import { IsOptional, IsString, IsUUID } from "class-validator";

// LOS DTO ES LA MANERA EN QUE VAMOS A MOVER LA DATA EN NUESTRA APP
export class UpdateCarDto {

    @IsString() //valida si es un string
    @IsUUID()  //valida si es un id
    @IsOptional()  // validad si el valor dado está vacío  y, de ser así, ignora todos los validadores de la propiedad 
    readonly id? :   string; //las propiedades son opcionles en el aldo de typescript

    @IsString( {message: `El brand debe ser un string`}) // le podemos escribir un msg para verlo en postman
    @IsOptional()  
    readonly brand?: string; //se pone readonly para que la propiedad no la podemos modificar en el controlador //las propiedades son opcionles en el aldo de typescript
    
    @IsString( {message: `El model debe ser un string`})
    @IsOptional()  
    readonly model?: string; //las propiedades son opcionles en el aldo de typescript
}
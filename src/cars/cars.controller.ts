import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

// los controladores  escuchan las peticiones del cliente (postman) y emite una respuesta.
@Controller('cars') //el endpoint es cars que es la ruta para buscar en el postman.
export class CarsController {
    // inyeccion de dependencias 
    constructor(       
        private readonly carsService: CarsService){}// se le da el nombre a la propiedad (carsService) y se le indica el tipo de dato que será (CarsService que es la clase que está en cars.service y contiene el array de objetos)
    

    @Get() // decorador para el metodo get
    getAllCars(){
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById( @Param('id')  id: number ){ // con @param nest sabrá que se quiere es leer el id del decorador get
        console.log({id: +id});
        return this.carsService.findOneById( +id ); //+ id para poder convertir el string del id a numero
    }

}

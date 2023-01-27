import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

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
    getCarById( @Param('id', new ParseUUIDPipe({version: '4'}))  id: string){ // con @param nest sabrá que se quiere es leer el id del decorador get, y con ParseIntPipe para vol-ver el string un número
        console.log({id});
        return this.carsService.findOneById( id ); 
    }

    @Post()
    createCar(@Body() createCarDto: CreateCarDto){
        return createCarDto;
    }
    @Patch(':id')
    updateCar(
        @Param('id', ParseIntPipe) id : number,
        @Body() body: any){
        return body;
    }
    @Delete(':id')
    deleteCar(@Param('id', ParseIntPipe) id : number ){
        return {
            method: 'Delete',
            id
        }
    }

}

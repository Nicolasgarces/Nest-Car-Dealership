import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto} from './dto';

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
    getCarById( @Param('id', new ParseUUIDPipe({version: '4'}))  id: string){ // con @param nest sabrá que se quiere es leer el id del decorador get, y con ParseIntPipe para volver el string un número
        console.log({id});
        return this.carsService.findOneById( id ); 
    }

    @Post()//loscontroladores escuchan los solicitudes del cliente y dan la respuesta
    createCar(@Body() createCarDto: CreateCarDto){
        return this.carsService.create(createCarDto);//this accede a carService (donde está la lógica del endopoint ) luego va al metodo create llama al parametro
    }

    @Patch(':id')
    updateCar(
        @Param('id', ParseUUIDPipe) id : string,
        @Body() updateCarDto: UpdateCarDto)
        {
        return this.carsService.update( id, updateCarDto);
        }
    
    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id : string ){
        return this.carsService.delete( id )
    }

}

import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid} from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
// cars (el array) es de tipo CAR (la interface)
    private cars: Car[] = [ // la interfase Car nos ayuda a que si no ponemos un propiedad del array nos pintara el error
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cherokee'
        },
    ];

        findAll(){
            return this.cars; 
        }

        findOneById(id: string){
            
            const car = this.cars.find( car => car.id === id)
            if (!car)throw new NotFoundException(`Car With id '${id}' Not Found`); //usamos el exception filter (NotFoundException) para enviar un mensaje de error cuando se busca por un id no creado
            return car;
        }

        create(createCarDto: CreateCarDto){
            const car: Car = {
                id: uuid(),
                ...createCarDto //usamos el operador spread para traer las propiedades de createCarDto
            }
            this.cars.push( car ); //aqui enviamos el nuevo car al array
            return car; 
           } 
        
        update( id: string, updateCarDto: UpdateCarDto){
            
            let carDB = this.findOneById(id); //reutilizamos el código de findOneById 

            if( updateCarDto.id && updateCarDto.id !== id)
            throw new BadRequestException(`El id del car no es el mismo`);

            this.cars = this.cars.map( car => {

                if( car.id === id) {
                    carDB ={

                        ...carDB, //esparzo las propiedades de carDB
                        ...updateCarDto, //esparzo las propiedades del updatecarDto que vienen actualizadas sobreescirbiendo las propiedades de carDB
                        id, // este id sobre escribi el id de updateCarDto
                    }
                    return carDB; 
                }
                return car;
            })

            return carDB;
        }

        delete( id: string ){
           const car = this.findOneById( id );
           this.cars = this.cars.filter(car => car.id !== id); // si el id que envian del front es igual al del array cars entonces eliminará el carro
        }
}


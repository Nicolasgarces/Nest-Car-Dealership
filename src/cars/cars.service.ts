import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid} from 'uuid';
import { Car } from './interfaces/car.interface';

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
}


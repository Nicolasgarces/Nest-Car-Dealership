import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        {
            id:1,
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id:2,
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id:3,
            brand: 'Jeep',
            model: 'Cherokee'
        },
    ];

        findAll(){
            return this.cars; 
        }

        findOneById(id: number){
            
            const car = this.cars.find( car => car.id === id)
            if (!car)throw new NotFoundException(`Car With id '${id}' Not Found`); //usamos el exception filter (NotFoundException) para enviar un mensaje de error cuando se busca por un id no creado
            return car;
        }
}


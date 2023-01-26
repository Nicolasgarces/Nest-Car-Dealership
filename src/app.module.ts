import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';

@Module({//modulos ysubmodulos que tendra la app, el modulo tiene referencias a todo lo que es la aplicacion
  imports: [CarsModule],
  controllers: [],
  providers: [],
  exports:[],
})
export class AppModule {}

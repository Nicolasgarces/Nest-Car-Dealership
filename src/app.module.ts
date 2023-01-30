import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';

@Module({//modulos ysubmodulos que tendra la app, el modulo tiene referencias a todo lo que es la aplicacion
  imports: [CarsModule, BrandsModule],
  controllers: [],
  providers: [],
  exports:[],
})
export class AppModule {}

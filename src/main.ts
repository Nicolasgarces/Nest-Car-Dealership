import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function main() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
     whitelist: true, // al dejar activo el whitelist declaramos que solo se van a leer las propiedades establecidas en el dto, las demas propiedades creadas en el post se van a ignorar
    forbidNonWhitelisted: true,// nos envie un msg de error para que quitemos las porpiedades no declaradas en el dto
    })
   );



  await app.listen(4200);
}
main();

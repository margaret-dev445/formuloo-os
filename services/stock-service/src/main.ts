import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use (compression ());

  const config = new DocumentBuilder()
    .setTitle('Stock Service API')
    .setDescription('API de gestion des stocks de Formuloo OS')
    .setVersion('1.0')
    .addTag('produits')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log('Stock Service running on port 3000');
  console.log('Documentation API: http://localhost:3003/api');
}
bootstrap();
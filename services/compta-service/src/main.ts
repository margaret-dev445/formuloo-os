import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use (compression ());

  const config = new DocumentBuilder()
    .setTitle('Comptabilité Service API')
    .setDescription('API de gestion comptable de Formuloo OS')
    .setVersion('1.0')
    .addTag('factures')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log('Compta Service running on port 3000');
  console.log('Documentation API: http://localhost:3004/api');
}
bootstrap();
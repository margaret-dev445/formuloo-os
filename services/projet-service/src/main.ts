import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Projet Service API')
    .setDescription('API de gestion de projets de Formuloo OS')
    .setVersion('1.0')
    .addTag('projets')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log('Projet Service running on port 3000');
  console.log('Documentation API: http://localhost:3005/api');
}
bootstrap();
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ── Configuration Swagger ──────────────────
  const config = new DocumentBuilder()
    .setTitle('HR Service API')
    .setDescription('API de gestion des ressources humaines de Formuloo OS')
    .setVersion('1.0')
    .addTag('employees')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // Documentation accessible sur http://localhost:3001/api

  await app.listen(3000);
  console.log('HR Service running on port 3000');
  console.log('Documentation API: http://localhost:3001/api');
}

bootstrap();
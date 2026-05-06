import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ── Configuration Swagger ──────────────────
  const config = new DocumentBuilder()
    .setTitle('CRM Service API')
    .setDescription('API de gestion de gestion de la relation client de Formuloo OS')
    .setVersion('1.0')
    .addTag('clients')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(3000);
  console.log('HR Service running on port 3000');
  console.log('Documentation API: http://localhost:3002/api');
}

bootstrap();
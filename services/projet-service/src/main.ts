import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import compression from 'compression';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());
  app.use(compression());

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
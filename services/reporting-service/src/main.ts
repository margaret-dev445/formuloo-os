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
    .setTitle('Reporting Service API')
    .setDescription('API de reporting et analytics de Formuloo OS')
    .setVersion('1.0')
    .addTag('rapports')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000, '0.0.0.0');
  console.log('Reporting Service running on port 3000');
  console.log('Documentation API: http://localhost:3006/api');
}
bootstrap();
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health.controller';
import { ClientsController } from './clients.controller';
import { Client } from './entities/client.entity';
import { ClientService } from './client.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'postgres-crm',
      port: 5432,
      username: process.env.DB_USER || 'user',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'crm_db',
      entities: [Client],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Client]),
  ],
  controllers: [AppController, HealthController, ClientsController],
  providers: [AppService, ClientService],
})
export class AppModule {}
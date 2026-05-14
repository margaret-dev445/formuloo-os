import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health.controller';
import { ProjetsController } from './projets.controller';
import { Projet } from './entities/projet.entity';
import { ProjetService } from './projet.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'postgres-projet',
      port: 5432,
      username: process.env.DB_USER || 'user',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'projet_db',
      entities: [Projet],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Projet]),
  ],
  controllers: [AppController, HealthController, ProjetsController],
  providers: [AppService, ProjetService],
})
export class AppModule {}
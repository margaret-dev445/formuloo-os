import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health.controller';
import { FacturesController } from './factures.controller';
import { Facture } from './entities/facture.entity';
import { FactureService } from './facture.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'postgres-compta',
      port: 5432,
      username: process.env.DB_USER || 'user',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'compta_db',
      entities: [Facture],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Facture]),
  ],
  controllers: [AppController, HealthController, FacturesController],
  providers: [AppService, FactureService],
})
export class AppModule {}
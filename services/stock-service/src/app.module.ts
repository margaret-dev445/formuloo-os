import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health.controller';
import { ProduitsController } from './produits.controller';

@Module({
  imports: [],
  controllers: [AppController, ProduitsController],
  providers: [AppService],
})
export class AppModule {}
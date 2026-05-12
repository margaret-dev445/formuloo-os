import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health.controller';
import { ProjetsController } from './projets.controller';

@Module({
  imports: [],
  controllers: [AppController, ProjetsController],
  providers: [AppService],
})
export class AppModule {}
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health.controller';
import { RapportsController } from './rapports.controller';

@Module({
  imports: [],
  controllers: [AppController, RapportsController],
  providers: [AppService],
})
export class AppModule {}
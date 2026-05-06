import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health.controller';
import { FacturesController } from './factures.controller';

@Module({
  imports: [],
  controllers: [AppController, HealthController, FacturesController],
  providers: [AppService],
})
export class AppModule {}
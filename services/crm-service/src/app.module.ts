import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health.controller';
import { ClientsController } from './clients.controller';

@Module({
  imports: [],
  controllers: [AppController, ClientsController],
  providers: [AppService],
})
export class AppModule {}
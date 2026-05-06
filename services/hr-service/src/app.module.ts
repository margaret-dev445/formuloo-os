import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health.controller';
import { EmployeesController } from './employees.controller';

@Module({
  imports: [],
  controllers: [AppController, HealthController, EmployeesController],
  providers: [AppService],
})
export class AppModule {}
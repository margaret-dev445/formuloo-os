import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health.controller';
import { RapportsController } from './rapports.controller';
import { Rapport, RapportSchema } from './schemas/rapport.schema';
import { RapportService } from './rapport.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGODB_URL || 'mongodb://mongodb-reporting:27017/reporting_db'
    ),
    MongooseModule.forFeature([
      { name: Rapport.name, schema: RapportSchema }
    ]),
  ],
  controllers: [AppController, HealthController, RapportsController],
  providers: [AppService, RapportService],
})
export class AppModule {}
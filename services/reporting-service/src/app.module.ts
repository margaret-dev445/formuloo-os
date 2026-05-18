import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health.controller';
import { RapportsController } from './rapports.controller';
import { Rapport, RapportSchema } from './entities/rapport.schema';
import { RapportService } from './rapport.service';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    PrometheusModule.register({
      defaultMetrics: { enabled: true },
      path: '/metrics',
    }),

    MongooseModule.forRoot(
      process.env.MONGO_URI || 'mongodb://mongodb-reporting:27017/reporting_db',
    ),

    MongooseModule.forFeature([
      { name: Rapport.name, schema: RapportSchema },
    ]),

    PassportModule,

    JwtModule.register({
      secret: process.env.JWT_SECRET || 'formuloo-super-secret-jwt-key-2026',
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [AppController, HealthController, RapportsController],
  providers: [AppService, RapportService, JwtStrategy],
})
export class AppModule {}
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health.controller';
import { ClientsController } from './clients.controller';
import { Client } from './entities/client.entity';
import { ClientService } from './client.service';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    PrometheusModule.register({
      defaultMetrics: { enabled: true },
      path: '/metrics',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'postgres-crm',
      port: 5432,
      username: process.env.DB_USER || 'user',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'crm_db',
      entities: [Client],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Client]),
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'formuloo-super-secret-jwt-key-2026',
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [AppController, HealthController, ClientsController],
  providers: [AppService, ClientService, JwtStrategy],
})
export class AppModule {}
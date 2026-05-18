import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health.controller';
import { ProjetsController } from './projets.controller';
import { Projet } from './entities/projet.entity';
import { ProjetService } from './projet.service';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    PrometheusModule.register({
      defaultMetrics: { enabled: true },
      path: '/metrics',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'postgres-projet',
      port: 5432,
      username: process.env.DB_USER || 'user',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'projet_db',
      entities: [Projet],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Projet]),
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'formuloo-super-secret-jwt-key-2026',
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [AppController, HealthController, ProjetsController],
  providers: [AppService, ProjetService, JwtStrategy],
})
export class AppModule {}
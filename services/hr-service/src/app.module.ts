import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health.controller';
import { EmployeesController } from './employees.controller';
import { Employee } from './entities/employee.entity';
import { EmployeeService } from './employee.service';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    PrometheusModule.register({
      defaultMetrics: { enabled: true },
      path: '/metrics',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'postgres-hr',
      port: 5432,
      username: process.env.DB_USER || 'user',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'hr_db',
      entities: [Employee],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Employee]),
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'formuloo-super-secret-jwt-key-2026',
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [AppController, HealthController, EmployeesController],
  providers: [AppService, EmployeeService, JwtStrategy],
})
export class AppModule {}
import { Controller, Get, HttpStatus } from '@nestjs/common';

@Controller('health')
export class HealthController {

  @Get()
  check() {
    return {
      statusCode: HttpStatus.OK,
      status: 'ok',
      service: 'crm-service',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    };
  }
}
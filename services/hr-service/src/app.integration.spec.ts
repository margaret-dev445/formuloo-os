import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './app.module';

describe('HR Service — Tests Integration', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  // Test 1 — Health endpoint
  describe('GET /health', () => {
    it('doit retourner status ok', () => {
      return request(app.getHttpServer())
        .get('/health')
        .expect(200)
        .expect((res) => {
          expect(res.body.status).toBe('ok');
          expect(res.body.service).toBe('hr-service');
        });
    });
  });

  // Test 2 — Employees sans token
  describe('GET /employees sans token', () => {
    it('doit retourner 401 Unauthorized', () => {
      return request(app.getHttpServer())
        .get('/employees')
        .expect(401);
    });
  });

  // Test 3 — Swagger accessible
  describe('GET /api', () => {
    it('doit retourner la documentation Swagger', () => {
      return request(app.getHttpServer())
        .get('/api')
        .expect(200);
    });
  });
});
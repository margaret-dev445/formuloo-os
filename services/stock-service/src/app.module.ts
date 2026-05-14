import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health.controller';
import { ProduitsController } from './produits.controller';
import { Produit } from './entities/produit.entity';
import { ProduitService } from './produit.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'postgres-stock',
      port: 5432,
      username: process.env.DB_USER || 'user',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'stock_db',
      entities: [Produit],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Produit]),
  ],
  controllers: [AppController, HealthController, ProduitsController],
  providers: [AppService, ProduitService],
})
export class AppModule {}
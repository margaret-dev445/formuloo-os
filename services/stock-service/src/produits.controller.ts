import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { jwtAuthGuard } from './guards/jwt-auth.guard';
import { ProduitService } from './produit.service';
import { CreateProduitDto } from './dto/create-produit.dto';

@ApiTags('produits')
@ApiBearerAuth()
@UseGuards(jwtAuthGuard)
@Controller('produits')
export class ProduitsController {

  constructor(private readonly produitService: ProduitService) {}

  @Get()
  @ApiOperation({ summary: 'Liste tous les produits' })
  @ApiResponse({ status: 200, description: 'Liste récupérée avec succès' })
  findAll() {
    return this.produitService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupère un produit par son ID' })
  @ApiResponse({ status: 200, description: 'Produit trouvé' })
  @ApiResponse({ status: 404, description: 'Produit non trouvé' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.produitService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Ajoute un nouveau produit' })
  @ApiResponse({ status: 201, description: 'Produit ajouté avec succès' })
  create(@Body() dto: CreateProduitDto) {
    return this.produitService.create(dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Modifie un produit existant' })
  @ApiResponse({ status: 200, description: 'Produit modifié avec succès' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: CreateProduitDto) {
    return this.produitService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprime un produit' })
  @ApiResponse({ status: 200, description: 'Produit supprimé avec succès' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.produitService.remove(id);
  }
}
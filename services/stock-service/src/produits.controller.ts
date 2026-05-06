import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CreateProduitDto } from './dto/create-produit.dto';

@ApiTags('produits')
@ApiBearerAuth()
@Controller('produits')
export class ProduitsController {

  @Get()
  @ApiOperation({ summary: 'Liste tous les produits en stock' })
  @ApiResponse({ status: 200, description: 'Liste récupérée avec succès' })
  findAll() {
    return { message: 'Liste des produits', data: [] };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupère un produit par son ID' })
  @ApiResponse({ status: 200, description: 'Produit trouvé' })
  findOne(@Param('id') id: string) {
    return { message: `Produit ${id}`, data: null };
  }

  @Post()
  @ApiOperation({ summary: 'Ajoute un nouveau produit' })
  @ApiResponse({ status: 201, description: 'Produit ajouté avec succès' })
  create(@Body() createProduitDto: CreateProduitDto) {
    return { message: 'Produit ajouté', data: createProduitDto };
  }

  @Put(':id')
  @ApiOperation({ summary: 'Modifie un produit existant' })
  @ApiResponse({ status: 200, description: 'Produit modifié avec succès' })
  update(@Param('id') id: string, @Body() updateDto: CreateProduitDto) {
    return { message: `Produit ${id} modifié`, data: updateDto };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprime un produit' })
  @ApiResponse({ status: 200, description: 'Produit supprimé avec succès' })
  remove(@Param('id') id: string) {
    return { message: `Produit ${id} supprimé` };
  }
}
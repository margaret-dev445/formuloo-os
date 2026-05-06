import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CreateFactureDto } from './dto/create-facture.dto';

@ApiTags('factures')
@ApiBearerAuth()
@Controller('factures')
export class FacturesController {

  @Get()
  @ApiOperation({ summary: 'Liste toutes les factures' })
  @ApiResponse({ status: 200, description: 'Liste récupérée avec succès' })
  findAll() {
    return { message: 'Liste des factures', data: [] };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupère une facture par son ID' })
  @ApiResponse({ status: 200, description: 'Facture trouvée' })
  findOne(@Param('id') id: string) {
    return { message: `Facture ${id}`, data: null };
  }

  @Post()
  @ApiOperation({ summary: 'Crée une nouvelle facture' })
  @ApiResponse({ status: 201, description: 'Facture créée avec succès' })
  create(@Body() createFactureDto: CreateFactureDto) {
    return { message: 'Facture créée', data: createFactureDto };
  }

  @Put(':id')
  @ApiOperation({ summary: 'Modifie une facture existante' })
  @ApiResponse({ status: 200, description: 'Facture modifiée avec succès' })
  update(@Param('id') id: string, @Body() updateDto: CreateFactureDto) {
    return { message: `Facture ${id} modifiée`, data: updateDto };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprime une facture' })
  @ApiResponse({ status: 200, description: 'Facture supprimée avec succès' })
  remove(@Param('id') id: string) {
    return { message: `Facture ${id} supprimée` };
  }
}
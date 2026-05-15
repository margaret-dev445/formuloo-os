import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { jwtAuthGuard } from './guards/jwt-auth.guard';
import { FactureService } from './facture.service';
import { CreateFactureDto } from './dto/create-facture.dto';

@ApiTags('factures')
@ApiBearerAuth()
@UseGuards(jwtAuthGuard)
@Controller('factures')
export class FacturesController {

  constructor(private readonly factureService: FactureService) {}

  @Get()
  @ApiOperation({ summary: 'Liste toutes les factures' })
  @ApiResponse({ status: 200, description: 'Liste récupérée avec succès' })
  findAll() {
    return this.factureService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupère une facture par son ID' })
  @ApiResponse({ status: 200, description: 'Facture trouvée' })
  @ApiResponse({ status: 404, description: 'Facture non trouvée' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.factureService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crée une nouvelle facture' })
  @ApiResponse({ status: 201, description: 'Facture créée avec succès' })
  create(@Body() dto: CreateFactureDto) {
    return this.factureService.create(dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Modifie une facture existante' })
  @ApiResponse({ status: 200, description: 'Facture modifiée avec succès' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: CreateFactureDto) {
    return this.factureService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprime une facture' })
  @ApiResponse({ status: 200, description: 'Facture supprimée avec succès' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.factureService.remove(id);
  }
}
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CreateClientDto } from './dto/create-client.dto';

@ApiTags('clients')
@ApiBearerAuth()
@Controller('clients')
export class ClientsController {

  // ── GET tous les clients ──────────────────
  @Get()
  @ApiOperation({ summary: 'Liste tous les clients' })
  @ApiResponse({ status: 200, description: 'Liste récupérée avec succès' })
  findAll() {
    return {
      message: 'Liste des clients',
      data: []
    };
  }

  // ── GET un client par ID ──────────────────
  @Get(':id')
  @ApiOperation({ summary: 'Récupère un client par son ID' })
  @ApiResponse({ status: 200, description: 'client trouvé' })
  @ApiResponse({ status: 404, description: 'client non trouvé' })
  findOne(@Param('id') id: string) {
    return {
      message: `Client ${id}`,
      data: null
    };
  }

  // ── POST créer un client ──────────────────
  @Post()
  @ApiOperation({ summary: 'Crée un nouveau client' })
  @ApiResponse({ status: 201, description: 'Client créé avec succès' })
  create(@Body() createClientDto: CreateClientDto) {
    return {
      message: 'Client créé',
      data: createClientDto
    };
  }

  // ── PUT modifier un client ────────────────
  @Put(':id')
  @ApiOperation({ summary: 'Modifie un client existant' })
  @ApiResponse({ status: 200, description: 'Client modifié avec succès' })
  update(@Param('id') id: string, @Body() updateDto: CreateClientDto) {
    return {
      message: `Client ${id} modifié`,
      data: updateDto
    };
  }

  // ── DELETE supprimer un client ────────────
  @Delete(':id')
  @ApiOperation({ summary: 'Supprime un client' })
  @ApiResponse({ status: 200, description: 'Client supprimé avec succès' })
  remove(@Param('id') id: string) {
    return {
      message: `Client ${id} supprimé`
    };
  }
}
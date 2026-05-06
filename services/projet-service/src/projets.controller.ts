import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CreateProjetDto } from './dto/create-projet.dto';

@ApiTags('projets')
@ApiBearerAuth()
@Controller('projets')
export class ProjetsController {

  @Get()
  @ApiOperation({ summary: 'Liste tous les projets' })
  @ApiResponse({ status: 200, description: 'Liste récupérée avec succès' })
  findAll() {
    return { message: 'Liste des projets', data: [] };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupère un projet par son ID' })
  @ApiResponse({ status: 200, description: 'Projet trouvé' })
  findOne(@Param('id') id: string) {
    return { message: `Projet ${id}`, data: null };
  }

  @Post()
  @ApiOperation({ summary: 'Crée un nouveau projet' })
  @ApiResponse({ status: 201, description: 'Projet créé avec succès' })
  create(@Body() createProjetDto: CreateProjetDto) {
    return { message: 'Projet créé', data: createProjetDto };
  }

  @Put(':id')
  @ApiOperation({ summary: 'Modifie un projet existant' })
  @ApiResponse({ status: 200, description: 'Projet modifié avec succès' })
  update(@Param('id') id: string, @Body() updateDto: CreateProjetDto) {
    return { message: `Projet ${id} modifié`, data: updateDto };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprime un projet' })
  @ApiResponse({ status: 200, description: 'Projet supprimé avec succès' })
  remove(@Param('id') id: string) {
    return { message: `Projet ${id} supprimé` };
  }
}
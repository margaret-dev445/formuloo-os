import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { jwtAuthGuard } from './guards/jwt-auth.guard';
import { ProjetService } from './projet.service';
import { CreateProjetDto } from './dto/create-projet.dto';

@ApiTags('projets')
@ApiBearerAuth()
@UseGuards(jwtAuthGuard)
@Controller('projets')
export class ProjetsController {

  constructor(private readonly projetService: ProjetService) {}

  @Get()
  @ApiOperation({ summary: 'Liste tous les projets' })
  @ApiResponse({ status: 200, description: 'Liste récupérée avec succès' })
  findAll() {
    return this.projetService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupère un projet par son ID' })
  @ApiResponse({ status: 200, description: 'Projet trouvé' })
  @ApiResponse({ status: 404, description: 'Projet non trouvé' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.projetService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crée un nouveau projet' })
  @ApiResponse({ status: 201, description: 'Projet créé avec succès' })
  create(@Body() dto: CreateProjetDto) {
    return this.projetService.create(dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Modifie un projet existant' })
  @ApiResponse({ status: 200, description: 'Projet modifié avec succès' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: CreateProjetDto) {
    return this.projetService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprime un projet' })
  @ApiResponse({ status: 200, description: 'Projet supprimé avec succès' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.projetService.remove(id);
  }
}
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CreateRapportDto } from './dto/create-rapport.dto';

@ApiTags('rapports')
@ApiBearerAuth()
@Controller('rapports')
export class RapportsController {

  @Get()
  @ApiOperation({ summary: 'Liste tous les rapports' })
  @ApiResponse({ status: 200, description: 'Liste récupérée avec succès' })
  findAll() {
    return { message: 'Liste des rapports', data: [] };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupère un rapport par son ID' })
  @ApiResponse({ status: 200, description: 'Rapport trouvé' })
  findOne(@Param('id') id: string) {
    return { message: `Rapport ${id}`, data: null };
  }

  @Post()
  @ApiOperation({ summary: 'Génère un nouveau rapport' })
  @ApiResponse({ status: 201, description: 'Rapport généré avec succès' })
  create(@Body() createRapportDto: CreateRapportDto) {
    return { message: 'Rapport généré', data: createRapportDto };
  }
}
import { Controller, Get, Post, Delete, Body, Param, UseGuards} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RapportService } from './rapport.service';
import { CreateRapportDto } from './dto/create-rapport.dto';

@ApiTags('rapports')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('rapports')
export class RapportsController {

  constructor(private readonly rapportService: RapportService) {}

  @Get()
  @ApiOperation({ summary: 'Liste tous les rapports' })
  @ApiResponse({ status: 200, description: 'Liste récupérée avec succès' })
  findAll() {
    return this.rapportService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupère un rapport par son ID' })
  @ApiResponse({ status: 200, description: 'Rapport trouvé' })
  @ApiResponse({ status: 404, description: 'Rapport non trouvé' })
  findOne(@Param('id') id: string) {
    return this.rapportService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Génère un nouveau rapport' })
  @ApiResponse({ status: 201, description: 'Rapport généré avec succès' })
  create(@Body() dto: CreateRapportDto) {
    return this.rapportService.create(dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprime un rapport' })
  @ApiResponse({ status: 200, description: 'Rapport supprimé avec succès' })
  remove(@Param('id') id: string) {
    return this.rapportService.remove(id);
  }
}
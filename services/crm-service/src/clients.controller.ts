import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { jwtAuthGuard } from './guards/jwt-auth.guard';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';

@ApiTags('clients')
@ApiBearerAuth()
@UseGuards(jwtAuthGuard)
@Controller('clients')
export class ClientsController {

  constructor(private readonly clientService: ClientService) {}

  @Get()
  @ApiOperation({ summary: 'Liste tous les clients' })
  @ApiResponse({ status: 200, description: 'Liste récupérée avec succès' })
  findAll() {
    return this.clientService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupère un client par son ID' })
  @ApiResponse({ status: 200, description: 'Client trouvé' })
  @ApiResponse({ status: 404, description: 'Client non trouvé' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.clientService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crée un nouveau client' })
  @ApiResponse({ status: 201, description: 'Client créé avec succès' })
  create(@Body() dto: CreateClientDto) {
    return this.clientService.create(dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Modifie un client existant' })
  @ApiResponse({ status: 200, description: 'Client modifié avec succès' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: CreateClientDto) {
    return this.clientService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprime un client' })
  @ApiResponse({ status: 200, description: 'Client supprimé avec succès' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.clientService.remove(id);
  }
}
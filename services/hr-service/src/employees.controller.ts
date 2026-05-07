import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CreateEmployeeDto } from './dto/create-employee.dto';

@ApiTags('employees')
@ApiBearerAuth()
@Controller('employees')
export class EmployeesController {


  // ── GET tous les employés ──────────────────
  @Get()
  @ApiOperation({ summary: 'Liste tous les employés' })
  @ApiResponse({ status: 200, description: 'Liste récupérée avec succès' })
  findAll() {
    return {
      message: 'Liste des employés',
      data: []
    };
  }

  // ── GET un employé par ID ──────────────────
  @Get(':id')
  @ApiOperation({ summary: 'Récupère un employé par son ID' })
  @ApiResponse({ status: 200, description: 'Employé trouvé' })
  @ApiResponse({ status: 404, description: 'Employé non trouvé' })
  findOne(@Param('id') id: string) {
    return {
      message: `Employé ${id}`,
      data: null
    };
  }

  // ── POST créer un employé ──────────────────
  @Post()
  @Get()
  @ApiOperation({ summary: 'Crée un nouvel employé' })
  @ApiResponse({ status: 201, description: 'Employé créé avec succès' })
  @ApiResponse({ status: 400, description: 'Données invalides' })
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return {
      message: 'Employé créé',
      data: createEmployeeDto
    };
  }

  // ── PUT modifier un employé ────────────────
  @Put(':id')
  @ApiOperation({ summary: 'Modifie un employé existant' })
  @ApiResponse({ status: 200, description: 'Employé modifié avec succès' })
  update(@Param('id') id: string, @Body() updateDto: CreateEmployeeDto) {
    return {
      message: `Employé ${id} modifié`,
      data: updateDto
    };
  }

  // ── DELETE supprimer un employé ────────────
  @Delete(':id')
  @ApiOperation({ summary: 'Supprime un employé' })
  @ApiResponse({ status: 200, description: 'Employé supprimé avec succès' })
  remove(@Param('id') id: string) {
    return {
      message: `Employé ${id} supprimé`
    };
  }
}
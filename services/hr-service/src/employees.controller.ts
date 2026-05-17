import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, UseGuards} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';

@ApiTags('employees')
@ApiBearerAuth()
@Controller('employees')
export class EmployeesController {

  constructor(private readonly employeeService: EmployeeService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: 'Liste tous les employés' })
  @ApiResponse({ status: 200, description: 'Liste récupérée avec succès' })
  findAll() {
    return this.employeeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupère un employé par son ID' })
  @ApiResponse({ status: 200, description: 'Employé trouvé' })
  @ApiResponse({ status: 404, description: 'Employé non trouvé' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.employeeService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crée un nouvel employé' })
  @ApiResponse({ status: 201, description: 'Employé créé avec succès' })
  create(@Body() dto: CreateEmployeeDto) {
    return this.employeeService.create(dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Modifie un employé existant' })
  @ApiResponse({ status: 200, description: 'Employé modifié avec succès' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: CreateEmployeeDto) {
    return this.employeeService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprime un employé' })
  @ApiResponse({ status: 200, description: 'Employé supprimé avec succès' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.employeeService.remove(id);
  }
}
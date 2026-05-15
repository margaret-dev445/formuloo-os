import { Injectable, HttpException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class HttpClientService {

  constructor(private readonly httpService: HttpService) {}

  // Vérifier qu'un client existe dans crm-service
  async getClient(clientId: string, token: string): Promise<any> {
    try {
      const response = await firstValueFrom(
        this.httpService.get(
          `http://crm-service:3000/clients/${clientId}`,
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        )
      );
      return response.data;
    } catch (error) {
      throw new HttpException('Client non trouvé dans CRM', 404);
    }
  }
}
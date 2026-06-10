import { Injectable } from '@nestjs/common';
import { ItemsRepository } from './items.repository';

@Injectable()
export class PrismaItemsRepository
  implements ItemsRepository {

  async findAll(): Promise<any[]> {
    return [
      {
        id: 1,
        name: 'Laptop',
      },
    ];
  }

  async create(item: any): Promise<any> {
    return {
      id: 2,
      ...item,
    };
  }
}
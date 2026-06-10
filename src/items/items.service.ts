import { Injectable } from '@nestjs/common';
import { ItemsRepository } from './repositories/items.repository';

@Injectable()
export class ItemsService {
  constructor(
    private readonly repository: ItemsRepository,
  ) {}

  findAll() {
    return this.repository.findAll();
  }

  create(item: any) {
    return this.repository.create(item);
  }
}
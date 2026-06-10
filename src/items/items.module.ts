import { Module } from '@nestjs/common';

import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

import { ItemsRepository } from './repositories/items.repository';
import { PrismaItemsRepository } from './repositories/prisma-items.repository';

@Module({
  controllers: [ItemsController],

  providers: [
    ItemsService,

    {
      provide: ItemsRepository,
      useClass: PrismaItemsRepository,
    },
  ],
})
export class ItemsModule {}
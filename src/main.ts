import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  const app =
    await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(),
    );

  app.setGlobalPrefix('v1');

  await app.listen(3000, '0.0.0.0');
}

bootstrap();

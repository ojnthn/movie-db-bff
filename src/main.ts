import { NestFactory } from '@nestjs/core';
import { FilmesModule } from './filmes/filmes.module';

async function bootstrap() {
  const app = await NestFactory.create(FilmesModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

import { Module } from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { FilmesController } from './filmes.controller';
import { RestClientModule } from 'src/core/shared/rest_client/rest_client.module';

@Module({
  imports: [RestClientModule],
  controllers: [FilmesController],
  providers: [FilmesService],
})
export class FilmesModule { }

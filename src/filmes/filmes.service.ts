import { Injectable } from '@nestjs/common';
import { RestClientService } from 'src/core/shared/rest_client/rest_client.service';
import { FilmeResponseDto } from './dto/filme_response.dto';
import { FilmesResponseInterface, FilmesResponseItemInterface } from './interfaces/filmes_response.interface';
import { FilmesConstants } from './constants/filmes.constants';

@Injectable()
export class FilmesService {
  constructor(private readonly restClientService: RestClientService) { }

  async findAll(): Promise<FilmeResponseDto[]> {
    const response = await this.restClientService.get<FilmesResponseInterface>(FilmesConstants.discoverMovies);

    return FilmeResponseDto.fromInterfaceArray(response);
  }

  async findOne(id: number): Promise<FilmeResponseDto> {
    const response = await this.restClientService.get<FilmesResponseItemInterface>(FilmesConstants.movieDetails(id));

    return FilmeResponseDto.fromJson(response);
  }
}

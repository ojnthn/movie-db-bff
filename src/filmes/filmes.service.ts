import { Injectable } from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { Filme } from './entities/filme.entity';

@Injectable()
export class FilmesService {
  create(createFilmeDto: CreateFilmeDto) {
    return 'This action adds a new filme';
  }

  findAll() {
    return [
      Filme.fromJSON({ id: 1, titulo: 'Inception', diretor: 'Christopher Nolan', anoLancamento: 2010, genero: 'Sci-Fi' }),
      Filme.fromJSON({ id: 2, titulo: 'The Godfather', diretor: 'Francis Ford Coppola', anoLancamento: 1972, genero: 'Crime' }),
      Filme.fromJSON({ id: 3, titulo: 'Pulp Fiction', diretor: 'Quentin Tarantino', anoLancamento: 1994, genero: 'Crime' }),
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} filme`;
  }

  update(id: number, updateFilmeDto: UpdateFilmeDto) {
    return `This action updates a #${id} filme`;
  }

  remove(id: number) {
    return `This action removes a #${id} filme`;
  }
}

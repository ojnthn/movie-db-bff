import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { FilmeResponseDto } from './dto/filme_response.dto';

@Controller('filmes')
export class FilmesController {
  constructor(private readonly filmesService: FilmesService) { }

  @Get()
  findAll(): Promise<FilmeResponseDto[]> {
    return this.filmesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<FilmeResponseDto> {
    return this.filmesService.findOne(+id);
  }
}

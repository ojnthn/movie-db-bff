
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioEntity } from './entities/usuario/usuario.entity';
//import { DataSource } from 'typeorm/browser';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private repository: Repository<UsuarioEntity>,
  ) {}

  async create(user: UsuarioEntity) {
    return this.repository.save(user);
  }

  async findOne(id: string): Promise<UsuarioEntity | null> {
    return this.repository.findOneBy({ id: Number(id) });
  }
}

import { IsEmail, IsNotEmpty } from "class-validator";
import { UsuarioEntity } from "../entities/usuario/usuario.entity";

export class CreateUsuarioDto {
  @IsNotEmpty()
  readonly nome: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly senha: string;

  toEntity(): UsuarioEntity {
    const usuario = new UsuarioEntity();
    usuario.nome = this.nome;
    usuario.email = this.email;
    usuario.senha = this.senha;
    return usuario;
  }
}

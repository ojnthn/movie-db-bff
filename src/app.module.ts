import { Module } from "@nestjs/common";
import { RestClientModule } from "./core/shared/rest_client/rest_client.module";
import { FilmesModule } from "./filmes/filmes.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioEntity } from "./usuarios/entities/usuario/usuario.entity";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [UsuarioEntity],
        synchronize: true,
      }),
    }),
    RestClientModule,
    FilmesModule,
    UsuariosModule,
  ]
})
export class AppModule { }

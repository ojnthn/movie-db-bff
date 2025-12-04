import { Module } from "@nestjs/common";
import { RestClientModule } from "./core/shared/rest_client/rest_client.module";
import { FilmesModule } from "./filmes/filmes.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RestClientModule,
    FilmesModule
  ]
})
export class AppModule { }

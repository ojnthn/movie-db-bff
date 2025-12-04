import { Module } from "@nestjs/common";
import { RestClientModule } from "./core/shared/rest_client/rest_client.module";
import { FilmesModule } from "./filmes/filmes.module";

@Module({
  imports: [
    RestClientModule,
    FilmesModule
  ]
})
export class AppModule {}

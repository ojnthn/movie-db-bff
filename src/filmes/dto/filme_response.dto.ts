import { FilmesResponseInterface } from "../interfaces/filmes_response.interface";

export class FilmeResponseDto {
    id: number;
    title: string;
    overview: string;
    releaseDate: string;
    posterPath: string;
    backdropPath: string;
    constructor(
        id: number,
        title: string,
        overview: string,
        releaseDate: string,
        posterPath: string,
        backdropPath: string,
    ) {
        this.id = id;
        this.title = title;
        this.overview = overview;
        this.releaseDate = releaseDate;
        this.posterPath = posterPath;
        this.backdropPath = backdropPath;
    }

    static fromJson(json: any): FilmeResponseDto {
        return new FilmeResponseDto(
            json.id,
            json.title,
            json.overview,
            json.release_date,
            json.poster_path,
            json.backdrop_path,
        );
    }

    static fromInterfaceArray(interfaceObject: FilmesResponseInterface): FilmeResponseDto[] {
        return interfaceObject.results.map(item => new FilmeResponseDto(
            item.id,
            item.title,
            item.overview,
            item.release_date,
            item.poster_path,
            item.backdrop_path,
        ));
    }
}
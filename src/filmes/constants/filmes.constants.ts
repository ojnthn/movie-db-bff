export class FilmesConstants {
    static readonly discoverMovies = '/discover/movie';
    static movieDetails(id: number) {
        return `/movie/${id}`;
    }
}
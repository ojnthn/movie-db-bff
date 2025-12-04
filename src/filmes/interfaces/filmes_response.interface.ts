class FilmesResponseInterface {
    page: number;
    results: FilmesResponseItemInterface[];
}

class FilmesResponseItemInterface {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    poster_path: string;
    backdrop_path: string;

    constructor(
        id: number,
        title: string,
        overview: string,
        release_date: string,
        poster_path: string,
        backdrop_path: string,
    ) {
        this.id = id;
        this.title = title;
        this.overview = overview;
        this.release_date = release_date;
        this.poster_path = poster_path;
        this.backdrop_path = backdrop_path;
    }
}

export { FilmesResponseInterface, FilmesResponseItemInterface };
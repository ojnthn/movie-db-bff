export class Filme {
    id: number;
    titulo: string;
    diretor: string;
    anoLancamento: number;
    genero: string;

    constructor(partial: Partial<Filme>) {
        Object.assign(this, partial);
    }

    static fromJSON(json: any): Filme {
        return new Filme({
            id: json.id,
            titulo: json.titulo,
            diretor: json.diretor,
            anoLancamento: json.anoLancamento,
            genero: json.genero,
        });
    }
}

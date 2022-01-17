/* eslint-disable */

export interface PokemonStatsResponse {
    base_stat: number;
    stat: {
        name: string
    };
}

interface PokemonTypeResponse {
    type: {
        name: string
    };
}

export interface PokemonResponse {
    id: number;
    name: string;
    types: PokemonTypeResponse[];
    stats: PokemonStatsResponse[];
    sprites: {
        front_default: string;
    }
}

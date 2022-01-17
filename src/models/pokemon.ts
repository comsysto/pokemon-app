import { PokemonResponse } from './dto/pokemon-response';
import PokemonStat from './pokemon-stat';

export default class Pokemon {
    id: number;

    name: string;

    types: string[];

    stats: PokemonStat[];

    imageUrl: string;

    constructor(id: number, name: string, types: string[], stats: PokemonStat[], imageUrl: string) {
      this.id = id;
      this.name = name;
      this.types = types;
      this.stats = stats;
      this.imageUrl = imageUrl;
    }

    static fromPokemonResponse(pokemonResponse: PokemonResponse): Pokemon {
      const types = pokemonResponse.types.map((pokemonType) => pokemonType.type.name);
      const stats = pokemonResponse.stats.map((pokemonStat) => new PokemonStat(pokemonStat.stat.name, pokemonStat.base_stat));
      return new Pokemon(
        pokemonResponse.id,
        pokemonResponse.name,
        types,
        stats,
        pokemonResponse.sprites.front_default,
      );
    }
}

import axios from 'axios';
import { PokemonResponse } from '../models/dto/pokemon-response';
import Pokemon from '../models/pokemon';

class PokemonService {
  async getPokemon(id: number): Promise<Pokemon> {
    const response = await axios.get<PokemonResponse>(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return Pokemon.fromPokemonResponse(response.data);
  }
}

const pokemonService = new PokemonService();

export default pokemonService;

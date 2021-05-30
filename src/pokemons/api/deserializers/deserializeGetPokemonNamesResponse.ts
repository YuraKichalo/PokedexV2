import { GetPokemonNamesResponse } from '../responces'

export const deserializeGetPokemonNamesResponse = (data: GetPokemonNamesResponse) => (
  data.results.map(pokemon => pokemon.name)
)

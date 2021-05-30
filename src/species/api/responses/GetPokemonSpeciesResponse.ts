export interface GetPokemonSpeciesResponse {
  'egg_groups': {
    name: string
  }[],
  color: {
    name: string
  }
  'evolution_chain': {
    url: string
  }
}

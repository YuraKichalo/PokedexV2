export type GetEvolutionChainResponse = {
  id: number
  chain: {
    'evolves_to': {
      'evolution_details': {
        'min_level': number
      }[]
      'evolves_to': {
        'evolution_details': {
          'min_level': number
        }[]
        species: {
          name: string
        }
      }[]
      species: {
        name: string
      }
    }[],
    species: {
      name: string
    }
  }
}

export type EvolutionChain = {
  id: number
  chain: {
    pokemonName: string
    evolvesTo: {
      pokemonName: string
      minEvolutionLevel: number
      evolutionDetails: []
      evolvesTo: {
        pokemonName: string
        minEvolutionLevel: number
        evolutionDetails: []
        evolvesTo: null
      } | null
    }
  }
}

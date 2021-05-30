import { GetEvolutionChainResponse } from '../responces'
import { EvolutionChain } from '../../EvolutionChain'

export const deserializeGetEvolutionChainResponse = (data: GetEvolutionChainResponse) => (<EvolutionChain>{
  id: data.id,
  chain: {
    pokemonName: data.chain.species.name,
    evolvesTo: {
      pokemonName: data.chain.evolves_to[0].species.name,
      minEvolutionLevel: data.chain.evolves_to[0].evolution_details[0].min_level,
      evolutionDetails: data.chain.evolves_to[0].evolution_details,
      // eslint-disable-next-line multiline-ternary
      evolvesTo: data.chain.evolves_to[0].evolves_to.length === 0 ? null : {
        pokemonName: data.chain.evolves_to[0].evolves_to[0].species.name,
        minEvolutionLevel: data.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level,
        evolutionDetails: data.chain.evolves_to[0].evolves_to[0].evolution_details,
        evolvesTo: null
      }
    }
  }
})

import { GetPokemonSpeciesResponse } from '../responses'
import { Specie } from '../../Specie'

export const deserializeGetPokemonSpeciesResponse = (data: GetPokemonSpeciesResponse) => (<Specie>{
  eggGroupsNames: data.egg_groups.map(group => group.name),
  color: data.color.name,
  evolutionChainUrl: data.evolution_chain.url
})

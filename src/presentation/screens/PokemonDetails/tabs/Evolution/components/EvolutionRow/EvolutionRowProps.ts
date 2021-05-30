import { ViewProps } from 'react-native'
import { Pokemon } from 'pokemons'

export interface EvolutionRowProps extends ViewProps {
  currentPokemon: Pokemon
  onPokemonImagePress: (pokemon: Pokemon) => void
  evolveFromPokemon: Pokemon
  evolveToPokemon: Pokemon
  level: number | string
}

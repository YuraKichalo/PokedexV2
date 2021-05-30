import { EvolutionNavigationProp } from './EvolutionNavigationProp'
import { Pokemon } from 'pokemons'
import { AppRoutes } from 'presentation'

export class EvolutionRouter {
  private navigation: EvolutionNavigationProp

  public constructor(navagation: EvolutionNavigationProp) {
    this.navigation = navagation
  }

  public navigateToPokemonDetails = (pokemon: Pokemon) => {
    this.navigation.navigate(AppRoutes.PokemonDetails, { pokemon })
  }
}

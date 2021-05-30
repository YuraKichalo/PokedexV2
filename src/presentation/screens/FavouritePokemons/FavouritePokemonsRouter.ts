import { FavouritePokemonsNavigationProp } from './FavouritePokemonsNavigationProp'
import { Pokemon } from 'pokemons'
import { AppRoutes } from 'presentation'

export class FavouritePokemonsRouter {
  private navigation: FavouritePokemonsNavigationProp

  public constructor(navigation: FavouritePokemonsNavigationProp) {
    this.navigation = navigation
  }

  public navigateToPokemonDetails = (pokemon: Pokemon) => {
    this.navigation.navigate(AppRoutes.PokemonDetails, { pokemon })
  }
}

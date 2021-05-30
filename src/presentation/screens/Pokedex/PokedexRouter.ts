import { PokedexNavigationProp } from './PokedexNavigationProp'
import { PokedexRoutes } from './PokedexRoutes'
import { AppRoutes } from 'presentation'
import { Pokemon } from 'pokemons'

export class PokedexRouter {
  private navigation: PokedexNavigationProp

  public constructor(navigation: PokedexNavigationProp) {
    this.navigation = navigation
  }

  public navigateToMenuModal = () => {
    this.navigation.navigate(PokedexRoutes.MenuModal)
  }

  public navigateToPokemonDetail = (pokemon: Pokemon) => {
    this.navigation.navigate(AppRoutes.PokemonDetails, { pokemon })
  }

  public navigateToFavouritePokemons = () => {
    this.navigation.navigate(AppRoutes.FavouritePokemons)
  }
}

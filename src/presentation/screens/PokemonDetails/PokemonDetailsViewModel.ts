import { makeAutoObservable } from 'mobx'
import { Pokemon, PokemonsStore } from 'pokemons'

export class PokemonDetailsViewModel {
  public swiperActiveIndex = 0

  public get favouritePokemons() {
    return PokemonsStore.favouritePokemons
  }

  public constructor() {
    makeAutoObservable(this)
  }

  public setSwiperActiveIndex = (index: number) => {
    this.swiperActiveIndex = index
  }

  public setFavouritePokemons = (pokemon: Pokemon) => {
    if (this.favouritePokemons.includes(pokemon)) {
      PokemonsStore.removePokemonFromFavourites(pokemon)
    } else {
      PokemonsStore.setFavouritePokemons(pokemon)
    }
  }
}

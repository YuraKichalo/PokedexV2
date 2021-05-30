import { makeAutoObservable } from 'mobx'
import { PokemonsStore } from 'pokemons'

export class FavouritePokemonsViewModel {
  public get favouritePokemons() {
    return PokemonsStore.favouritePokemons
  }

  public constructor() {
    makeAutoObservable(this)
  }
}

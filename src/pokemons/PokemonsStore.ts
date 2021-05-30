import { makeAutoObservable } from 'mobx'
import { Pokemon } from './Pokemon'
import _ from 'lodash'

export const PokemonsStore = new class {
  public fetchedPokemons: Pokemon[] = []
  public favouritePokemons: Pokemon[] = []

  public constructor() {
    makeAutoObservable(this)
  }

  public setFetchedPokemons = (pokemon: Pokemon) => {
    this.fetchedPokemons.push(pokemon)
  }

  public setFavouritePokemons = (pokemon: Pokemon) => {
    this.favouritePokemons.push(pokemon)
  }

  public removePokemonFromFavourites = (pokemon: Pokemon) => {
    _.pullAllBy(this.favouritePokemons, [pokemon], 'id')
  }
}()

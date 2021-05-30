import { makeAutoObservable, reaction } from 'mobx'
import { PokemonApi, PokemonsStore } from 'pokemons'

export class PokedexViewModel {
  public pokemonNames: string[] = []
  public offset = 0
  public isLoading = false
  public pokemonsInputValue = ''

  public get fetchedPokemons() {
    return PokemonsStore.fetchedPokemons
  }

  public get pokemons() {
    return this.fetchedPokemons.filter(pokemon => pokemon.name.startsWith(this.pokemonsInputValue.toLowerCase()))
  }

  public constructor() {
    makeAutoObservable(this)

    reaction(
      () => this.offset,
      () => this.getPokemonNames()
        .then(this.getPokemon)
        .finally(() => {
          this.isLoading = false
        }),
      { fireImmediately: true }
    )
  }

  public setPokemonsInputValue = (value: string) => {
    this.pokemonsInputValue = value
  }

  public setIsLoading = (isLoading: boolean) => {
    this.isLoading = isLoading
  }

  public setOffset = (offset: number) => {
    this.offset += offset
  }

  public getPokemonNames = async () => {
    this.isLoading = true
    const pokemonNames = await PokemonApi.getPokemonNames(this.offset)
    this.pokemonNames = pokemonNames!
  }

  public getPokemon = async () => {
    // const fetchedPokemons: Pokemon[] = []

    await Promise.all([
      this.pokemonNames.map(async (name) => {
        const pokemon = await PokemonApi.getPokemonByName(name)
        PokemonsStore.setFetchedPokemons(pokemon!)
      })
    ])
  }
}

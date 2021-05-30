import { Pokemon } from 'pokemons'

export type RootStackParamsList = {
  Home: undefined
  News: {
    selectedItemIndex?: number
  }
  Pokedex: undefined
  PokemonDetails: {
    pokemon: Pokemon
  }
  FavouritePokemons: undefined
}

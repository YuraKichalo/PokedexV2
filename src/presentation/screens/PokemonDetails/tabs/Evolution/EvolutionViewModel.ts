import { makeAutoObservable } from 'mobx'
import { EvolutionApi } from 'evolution'
import { Pokemon, PokemonsStore } from 'pokemons'
import { SpeciesApi } from 'species'

export class EvolutionViewModel {
  public evolutionChainId = 0
  public evolutionChainUrl = ''
  public firstEvolutionTriggeringLevel = 0
  public secondEvolutionTriggeringLevel = 0
  public firstEvolutionPokemonName = ''
  public secondEvolutionPokemonName = ''
  public thirdEvolutionPokemonName = ''

  public get pokemons() {
    return PokemonsStore.fetchedPokemons
  }

  public get pokemonFirstEvolution() {
    return this.pokemons.find(pokemon => pokemon.name === this.firstEvolutionPokemonName)
  }

  public get pokemonSecondEvolution() {
    return this.pokemons.find(pokemon => pokemon.name === this.secondEvolutionPokemonName)
  }

  public get pokemonThirdEvolution() {
    return this.pokemons.find(pokemon => pokemon.name === this.thirdEvolutionPokemonName)
  }

  private currentPokemon: Pokemon

  public constructor(pokemon: Pokemon) {
    makeAutoObservable(this)
    this.currentPokemon = pokemon

    this.getSpecie().then(this.getEvolutionChain)
  }

  private getEvolutionChain = async () => {
    const evolutionChain = await EvolutionApi.getEvolutionChain(this.evolutionChainUrl)

    if (evolutionChain) {
      this.evolutionChainId = evolutionChain.id
      this.firstEvolutionTriggeringLevel = evolutionChain.chain.evolvesTo.minEvolutionLevel
      this.secondEvolutionTriggeringLevel = evolutionChain.chain.evolvesTo.evolvesTo?.minEvolutionLevel!
      this.firstEvolutionPokemonName = evolutionChain.chain.pokemonName
      this.secondEvolutionPokemonName = evolutionChain.chain.evolvesTo.pokemonName
      this.thirdEvolutionPokemonName = evolutionChain.chain.evolvesTo.evolvesTo?.pokemonName!
    }
  }

  private getSpecie = async () => {
    const species = await SpeciesApi.getPokemonSpecie(this.currentPokemon.name)
    if (species) {
      this.evolutionChainUrl = species.evolutionChainUrl
    }
  }
}

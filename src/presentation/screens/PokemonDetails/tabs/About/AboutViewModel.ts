import { makeAutoObservable } from 'mobx'
import { Pokemon } from 'pokemons'
import { SpeciesApi } from 'species'

export class AboutViewModel {
  public eggGroupsNames: string[] = []
  public color = 'Unknown'
  public pokemon: Pokemon

  public constructor(pokemon: Pokemon) {
    makeAutoObservable(this)
    this.pokemon = pokemon
    this.getSpecie()
  }

  private getSpecie = async () => {
    const species = await SpeciesApi.getPokemonSpecie(this.pokemon.name)
    if (species) {
      this.eggGroupsNames = species.eggGroupsNames
      this.color = species.color
    }
  }
}

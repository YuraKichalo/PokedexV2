import { Api } from 'api'
import * as Deserializers from './deserializers'

export const SpeciesApi = new class extends Api {
  public getPokemonSpecie = async (name: string) => {
    const url = `pokemon-species/${name}`

    try {
      const response = await this.api.get(url)
      return Deserializers.deserializeGetPokemonSpeciesResponse(response.data)
    } catch (error) {
      console.error(`${error.message} on URL: ${url}`)
    }
  }
}()

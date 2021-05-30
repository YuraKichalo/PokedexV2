import { Api } from 'api'
import * as Deserializers from './deserializers'

export const PokemonApi = new class extends Api {
  public getPokemonNames = async (offset: number) => {
    const url = `pokemon?offset=${offset}&limit=10`

    try {
      const response = await this.api.get(url)
      return Deserializers.deserializeGetPokemonNamesResponse(response.data)
    } catch (error) {
      console.error(`${error.message} on URL: ${url}`)
    }
  }

  public getPokemonByName = async (name: string) => {
    const url = `pokemon/${name}`

    try {
      const response = await this.api.get(url)
      return Deserializers.deserializeGetPokemonByNameResponse(response.data)
    } catch (error) {
      console.error(`${error.message} on URL: ${url}`)
    }
  }
}()

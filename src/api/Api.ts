import axios from 'axios'

export class Api {
  protected api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
  })
}

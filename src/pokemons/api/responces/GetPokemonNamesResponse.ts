export interface GetPokemonNamesResponse {
  count: number
  next: string
  previous: string | null
  results: {
    name: string
    url: string
  }[]
}

import { PokemonTypeNames } from 'pokemons'
import { COLORS } from 'presentation/assets'

export const getTypeColor = (type: string) => {
  switch (type) {
    case PokemonTypeNames.Normal:
      return COLORS.normal
    case PokemonTypeNames.Fighting:
      return COLORS.fighting
    case PokemonTypeNames.Flying:
      return COLORS.flying
    case PokemonTypeNames.Poison:
      return COLORS.poison
    case PokemonTypeNames.Ground:
      return COLORS.ground
    case PokemonTypeNames.Rock:
      return COLORS.rock
    case PokemonTypeNames.Bug:
      return COLORS.bug
    case PokemonTypeNames.Ghost:
      return COLORS.ghost
    case PokemonTypeNames.Steel:
      return COLORS.steel
    case PokemonTypeNames.Fire:
      return COLORS.fire
    case PokemonTypeNames.Water:
      return COLORS.water
    case PokemonTypeNames.Grass:
      return COLORS.grass
    case PokemonTypeNames.Electric:
      return COLORS.electric
    case PokemonTypeNames.Psychic:
      return COLORS.psychic
    case PokemonTypeNames.Ice:
      return COLORS.ice
    case PokemonTypeNames.Dragon:
      return COLORS.dragon
    case PokemonTypeNames.Dark:
      return COLORS.dark
    case PokemonTypeNames.Fairy:
      return COLORS.fairy
    case PokemonTypeNames.Shadow:
      return COLORS.shadow
    case PokemonTypeNames.Unknown:
      return COLORS.unknown
  }
}

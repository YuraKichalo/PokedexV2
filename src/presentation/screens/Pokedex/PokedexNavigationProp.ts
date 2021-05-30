import { NavigationProp, CompositeNavigationProp } from '@react-navigation/native'
import { PokedexStackParamsList } from './PokedexStackParamsList'
import { RootStackParamsList } from 'presentation'

export type PokedexNavigationProp = CompositeNavigationProp<
  NavigationProp<PokedexStackParamsList, 'Pokedex'>,
  NavigationProp<RootStackParamsList>
>

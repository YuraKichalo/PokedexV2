import { Stat } from 'pokemons'
import { ViewProps } from 'react-native'

export interface StatsChartProps extends ViewProps {
  stats: Stat[]
  barColor: string
}

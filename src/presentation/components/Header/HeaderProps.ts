import { ViewProps } from 'react-native'

type Theme = 'light' | 'dark'

export interface HeaderProps extends ViewProps {
  rightIconTitle?: string
  onRightIconPress?: () => void
  theme?: Theme
}

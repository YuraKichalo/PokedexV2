import { ViewProps } from 'react-native'

export interface IconProps extends ViewProps {
  size: number,
  name: string,
  color?: string
}

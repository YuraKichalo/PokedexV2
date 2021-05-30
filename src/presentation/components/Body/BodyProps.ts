import { TextProps } from 'react-native'
import { ReactNode } from 'react'
import { ThemeColors } from 'presentation/assets'

export interface BodyProps extends TextProps {
  children: ReactNode
  color?: ThemeColors
}

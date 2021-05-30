import { ViewProps } from 'react-native'
import { ReactNode } from 'react'

export interface RowProps extends ViewProps {
  centered?: boolean
  children: ReactNode
}

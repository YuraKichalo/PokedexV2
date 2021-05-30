import { ReactNode } from 'react'
import { ViewProps } from 'react-native'

export interface ScreenProps extends ViewProps {
  children: ReactNode,
  hideKeyboardWhenTouch?: boolean
}

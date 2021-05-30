import { TextInputProps as RNTextInputProps, ViewStyle } from 'react-native'

export interface TextInputProps extends RNTextInputProps {
  containerStyles?: ViewStyle
}

import { TouchableOpacityProps } from 'react-native'

export interface ItemProps extends TouchableOpacityProps {
  iconName: string
  iconColor: string
  title: string
}

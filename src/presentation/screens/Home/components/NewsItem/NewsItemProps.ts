import { ImageSourcePropType, TouchableOpacityProps } from 'react-native'

export interface NewsItemProps extends TouchableOpacityProps {
  title: string
  date: string
  imageSource: ImageSourcePropType
}

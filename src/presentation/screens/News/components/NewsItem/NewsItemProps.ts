import { ImageSourcePropType, ViewProps } from 'react-native'

export interface NewsItemProps extends ViewProps {
  imageSource: ImageSourcePropType
  title: string
  date: string
  text: string
}

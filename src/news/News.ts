import { ImageSourcePropType } from 'react-native'

export type News = {
  title: string
  text: string
  date: string
  imageSource: ImageSourcePropType
}[]

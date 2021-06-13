import { Platform } from 'react-native'
import { getTypeColor } from './getTypeColor'

export const getGradientColors = (types: string[]) => Platform.OS === 'android'
  ? [getTypeColor(types[0])!, getTypeColor(types[0])!]
  : types.length > 1
    ? [getTypeColor(types[0])!, getTypeColor(types[1])!]
    : [getTypeColor(types[0])!, getTypeColor(types[0])!]

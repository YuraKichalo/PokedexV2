import { Platform, StyleSheet } from 'react-native'
import { COLORS } from '../../../../assets/theme'

export const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    width: undefined,
    borderRadius: 20
  },
  title: {
    marginTop: 30,
    lineHeight: 40
  },
  date: {
    color: COLORS.darkGray,
    fontWeight: 'bold',
    marginVertical: 20
  },
  text: {
    opacity: 0.7,
    ...Platform.select({
      ios: {
        fontWeight: '500'
      },
      android: {
        fontFamily: 'sans-serif-medium'
      }
    }),
    lineHeight: 20
  }
})

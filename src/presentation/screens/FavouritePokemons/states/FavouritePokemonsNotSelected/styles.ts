import { Platform, StyleSheet } from 'react-native'
import { COLORS } from 'presentation/assets'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    color: COLORS.darkGray,
    ...Platform.select({
      ios: {
        fontWeight: '500'
      },
      android: {
        fontFamily: 'sans-serif-medium'
      }
    })
  }
})

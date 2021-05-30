import { StyleSheet } from 'react-native'
import { COLORS } from 'presentation/assets'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  pokemonsNotLoadedText: {
    color: COLORS.darkGray,
    textAlign: 'center',
    fontSize: 12
  }
})

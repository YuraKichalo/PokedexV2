import { StyleSheet } from 'react-native'
import { COLORS } from 'presentation/assets'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 3
  },
  title: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: 'bold'
  }
})

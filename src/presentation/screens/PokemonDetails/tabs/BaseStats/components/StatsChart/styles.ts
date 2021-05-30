import { StyleSheet } from 'react-native'
import { COLORS } from 'presentation/assets'

export const styles = StyleSheet.create({
  titlesContainer: {
    marginRight: 25
  },
  title: {
    fontWeight: 'bold',
    color: COLORS.darkGray
  },
  valuesContainer: {
    marginRight: 15
  },
  value: {
    fontWeight: 'bold'
  },
  valueIndicatorContainer: {
    backgroundColor: COLORS.gray,
    borderRadius: 10
  },
  valueIndicator: {
    height: 6,
    borderRadius: 10
  },
  indicatorsContainer: {
    flex: 1
  }
})

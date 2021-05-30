import { StyleSheet } from 'react-native'
import { COLORS } from 'presentation/assets'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
    lineHeight: 23
  },
  date: {
    color: COLORS.darkGray
  },
  image: {
    height: 90,
    width: 140,
    borderRadius: 30
  },
  textContainer: {
    flex: 1,
    marginRight: 10
  }
})

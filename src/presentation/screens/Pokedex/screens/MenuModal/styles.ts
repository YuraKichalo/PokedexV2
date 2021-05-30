import { StyleSheet } from 'react-native'
import { COLORS } from 'presentation/assets'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  background: {
    flex: 1
  },
  card: {
    height: '30%',
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingTop: 10,
    borderRadius: 25
  },
  thump: {
    width: 40,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: COLORS.gray,
    alignSelf: 'center',
    marginBottom: 30
  }
})

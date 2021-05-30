import { StyleSheet } from 'react-native'
import { COLORS } from 'presentation/assets'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  title: {
    fontSize: 22
  },
  textContainer: {
    marginLeft: 10,
    paddingBottom: 15,
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.darkGray
  }
})

import { StyleSheet } from 'react-native'
import { COLORS } from 'presentation/assets'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 17
  },
  input: {
    flex: 1,
    fontSize: 16
  },
  icon: {
    marginRight: 15
  },
  placeholder: {
    fontWeight: 'bold',
    fontSize: 16
  }
})

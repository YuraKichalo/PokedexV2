import { StyleSheet } from 'react-native'
import { COLORS } from 'presentation/assets'

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around'
  },
  tab: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.gray
  },
  get selectedTab() {
    return {
      ...this.tab,
      color: COLORS.black
    }
  }
})

import { Platform, StyleSheet } from 'react-native'
import { COLORS } from 'presentation/assets'
import color from 'color'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1
  },
  bottomContentContainer: {
    flex: 1.3,
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50
  },
  titleContainer: {
    justifyContent: 'space-between',
    marginBottom: 11
  },
  title: {
    color: COLORS.primary,
    fontSize: 35
  },
  order: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: 'bold'
  },
  typeContainer: {
    backgroundColor: color(COLORS.secondary).alpha(0.2).string(),
    overflow: 'hidden',
    paddingHorizontal: 13,
    paddingVertical: 5,
    borderRadius: 12,
    marginRight: 10
  },
  type: {
    color: COLORS.primary,
    ...Platform.select({
      ios: {
        fontWeight: '500'
      },
      android: {
        fontFamily: 'sans-serif-medium'
      }
    })
  },
  pokemonImage: {
    alignSelf: 'center',
    width: '55%',
    height: '50%',
    marginTop: '-50%'
  },
  tabsController: {
    paddingHorizontal: 20,
    marginTop: -15,
    marginBottom: 20
  }
})

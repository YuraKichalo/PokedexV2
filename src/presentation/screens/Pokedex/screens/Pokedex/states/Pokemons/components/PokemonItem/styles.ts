import { Platform, StyleSheet } from 'react-native'
import color from 'color'
import { COLORS } from 'presentation/assets'

export const styles = StyleSheet.create({
  container: {
    height: 150,
    flex: 1,
    margin: 6
  },
  gradientContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 25,
    borderRadius: 20
  },
  name: {
    fontSize: 20,
    color: COLORS.primary,
    fontWeight: 'bold',
    marginBottom: 10
  },
  typeContainer: {
    backgroundColor: color(COLORS.secondary).alpha(0.2).string(),
    overflow: 'hidden',
    alignSelf: 'flex-start',
    paddingHorizontal: 13,
    paddingVertical: 5,
    borderRadius: 12
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
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 90,
    height: 90
  }
})

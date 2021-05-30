import { Platform, StyleSheet } from 'react-native'
import { COLORS } from 'presentation/assets'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary
  },
  scrollContainer: {
    flexGrow: 1
  },
  topContentContainer: {
    paddingHorizontal: 25,
    backgroundColor: COLORS.primary,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    paddingBottom: 45
  },
  bottomContentContainer: {
    paddingHorizontal: 25,
    paddingVertical: 45
  },
  title: {
    lineHeight: 40,
    marginTop: 100
  },
  categoriesContainer: {
    marginTop: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  flatList: {
    paddingBottom: 15
  },
  categoryButton: {
    width: '48%',
    height: 70,
    marginBottom: 20
  },
  bottomContentHeaderContainer: {
    justifyContent: 'space-between'

  },
  bottomContentTitle: {
    fontWeight: 'bold',
    fontSize: 22
  },
  viewAll: {
    ...Platform.select({
      ios: {
        fontWeight: '500'
      },
      android: {
        fontFamily: 'sans-serif-medium'
      }
    }),
    color: COLORS.darkGray
  },
  newsItemsContainer: {
    marginTop: 30
  },
  divider: {
    marginVertical: 20
  }
})

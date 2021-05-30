import { Platform, StyleSheet } from 'react-native'
import { COLORS } from 'presentation/assets'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  },
  description: {
    ...Platform.select({
      ios: {
        fontWeight: '500'
      },
      android: {
        fontFamily: 'sans-serif-medium'
      }
    }),
    lineHeight: 25
  },
  heightAndWeightContainer: {
    marginVertical: 25,
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 15,
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
    shadowOffset: {
      width: 0,
      height: 4
    }
  },
  measureType: {
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginBottom: 10
  },
  measureValue: {
    ...Platform.select({
      ios: {
        fontWeight: '500'
      },
      android: {
        fontFamily: 'sans-serif-medium'
      }
    })
  },
  heightContainer: {
    marginRight: 100
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 20
  },
  breedingContent: {
    marginBottom: 25
  },
  breedingSubtitlesContainer: {
    marginRight: 25
  },
  sectionSubtitle: {
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginRight: 25
  },
  genderIcon: {
    marginRight: 5
  },
  maleIconAndValueContainer: {
    marginRight: 25
  },
  map: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 25
  },
  eggGroupsName: {
    marginRight: 25
  }
})

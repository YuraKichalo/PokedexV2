import { HomeNavigationProp } from './HomeNavigationProp'
import { AppRoutes } from 'presentation'

export class HomeRouter {
  private navigation: HomeNavigationProp

  public constructor(navigation: HomeNavigationProp) {
    this.navigation = navigation
  }

  public navigateToPokedex = () => {
    this.navigation.navigate(AppRoutes.Pokedex)
  }

  public navigateToNews = (selectedItemIndex?: number) => {
    this.navigation.navigate(AppRoutes.News, { selectedItemIndex })
  }
}

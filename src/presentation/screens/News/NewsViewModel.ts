import { makeAutoObservable } from 'mobx'
import { NewsDataSource } from 'news'

export class NewsViewModel {
  public get news() {
    return NewsDataSource.getNews()
  }

  public constructor() {
    makeAutoObservable(this)
  }
}

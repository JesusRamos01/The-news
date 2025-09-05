import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule}  from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Article, articlesByCategoryAndPage, NewsResponse } from '../interfaces';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class News {
  private articleByCategoryAndPage: articlesByCategoryAndPage = {};
  
  
  constructor(private http: HttpClient) {};

  getTopHeadLines(category: string = 'general'): Observable<Article[]> {
   return this.getTopHeadLinesByCategory(category, true);
  };

  getTopHeadLinesByCategory(category: string, loadMore: boolean = false): Observable<Article[]> {

    if (loadMore) {
      return this.getArticlesByCategory(category);
    }

    if (this.articleByCategoryAndPage[category]) {
      return of(this.articleByCategoryAndPage[category].articles);
    }
    return this.getArticlesByCategory(category);
  };

  public getArticlesByCategory(category: string): Observable<Article[]> {
   if (Object.keys(this.articleByCategoryAndPage).includes(category)) {
    /// return new Observable(observer => {
       //observer.next(this.articleByCategoryAndPage[category].articles);
     //});
    
   }else{
    this.articleByCategoryAndPage[category] = { page: 0, articles: [] };
   }

   const page = this.articleByCategoryAndPage[category].page + 1;

   return this.http.get<NewsResponse>(`https://newsapi.org/v2/top-headlines`, {
    params: {
      country: 'us',
      category: category,
      page: page.toString(),
      apiKey: apiKey
    }
    
  })
 
  .pipe(
    map(({ articles }) => {

      if( articles.length === 0) return this.articleByCategoryAndPage[category].articles;
      this.articleByCategoryAndPage[category] =
      {
      page: page, 
      articles: [...this.articleByCategoryAndPage[category].articles, ...articles]
    };
     

        return this.articleByCategoryAndPage[category].articles;
      }
    )
   );

  }  
  
  
}

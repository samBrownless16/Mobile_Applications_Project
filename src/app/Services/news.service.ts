import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient:HttpClient) { }
  //JSON Data
  
  // returns general news articles based on country passed in
  GetGeneralNews(country: string):Observable<any> {
    return this.httpClient.get('https://newsapi.org/v2/top-headlines?country=' + country + '&apiKey=e0af54008222406b93a3d797b4d1ec1f');

  }

  // returns sports news article based on country passed in
  GetSportsNews(country: string):Observable<any> {
    return this.httpClient.get('https://newsapi.org/v2/top-headlines?country=' + country + '&category=sports&apiKey=e0af54008222406b93a3d797b4d1ec1f');
  }

  // returns entertainment news article based on country passed in
  GetEntertainmentNews(country: string):Observable<any> {
    return this.httpClient.get('https://newsapi.org/v2/top-headlines?country=' + country + '&category=entertainment&apiKey=e0af54008222406b93a3d797b4d1ec1f');
  }
}

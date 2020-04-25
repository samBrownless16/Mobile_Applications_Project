import { Component, OnInit } from '@angular/core';
import { NewsService } from '../Services/news.service';
import { BrowserTab } from '@ionic-native/browser-tab/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
})
export class SportsPage implements OnInit {

  SportsNews: any = []; // News Array
  country: string; // country selected

  constructor(private getSportNews:NewsService, private browser:BrowserTab, private storage:Storage) { } 

  ngOnInit() {
    this.retrieveNews()
  }

  // Get the country from local storage and pass into getNewsByCountry()
  retrieveNews() {
    this.storage.get("country").then(
      (data)=> {
        this.country = data;
        this.getNewsByCountry(this.country);       
      }
    ).catch(
      (error)=> {
        console.log(error);
        this.country = "ie";
        this.getNewsByCountry(this.country);
      }
    );
  }

  // pass in the country selected to the news service to return country specific articles
  getNewsByCountry(coun: string) {
    this.getSportNews.GetSportsNews(this.country).subscribe((data)=> {
      this.SportsNews = data.articles;
    });
  }

  // open url in browser plugin (Ionic Native / Cordova plugin)
  openInBrowser(link: string) {
    this.browser.openUrl(link);
  }
}
import { Component, OnInit } from '@angular/core';
import { NewsService } from '../Services/news.service';
import { BrowserTab } from '@ionic-native/browser-tab/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.page.html',
  styleUrls: ['./entertainment.page.scss'],
})
export class EntertainmentPage implements OnInit {

  EntertainmentNews: any = []; // News Array
  country: string; // country selected

  constructor(private getEntertainmentNews:NewsService, private browser:BrowserTab, private storage:Storage) { }

  ngOnInit() {
    this.retrieveNews();
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
    this.getEntertainmentNews.GetEntertainmentNews(this.country).subscribe((data)=> {
      this.EntertainmentNews = data.articles;
    });
  }

  // open url in browser plugin (Ionic Native / Cordova plugin)
  openInBrowser(link: string) {
    this.browser.openUrl(link);
  }

}

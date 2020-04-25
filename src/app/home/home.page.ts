import { Component } from '@angular/core';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  countrySelected:string;

  constructor(private storage:Storage) {}

  // set country to Ireland if none set
  ngOnInit() {
    if (this.countrySelected == null) {
      this.countrySelected = "ie";
      this.countryNewsPicked();
    }
  }

  // store the country selected into local storage
  countryNewsPicked() {
    this.storage.set("country", this.countrySelected.toString());
  }
}

import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators/map';
// import { IonicPage, NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';
// import { ActivitiesPage } from '../activities/activities';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
activityList;
  constructor( public http :HttpClient ) {
  }
  ionViewDidLoad() {
    this.getActivities();
  }

  getActivities() {
    const options = {
      headers: this.createAuthorizationHeader()
    };

    this.http
      .post<any>('http://trendix.qa/dmsc/api/dmsc/activivties', '', options)
      .pipe(map(data => data))
      .subscribe(
        restItems => {
          this.activityList = restItems.response;
          console.log(this.activityList);
        }
      )
  }

errorHandler(error: any): void {
  console.log(error)
}
  createAuthorizationHeader() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8', 'x-api-key': '123456' });
    return headers;
  }
}

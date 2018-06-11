import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ServiceProvider Provider');
  }

  createAuthorizationHeader() {
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'x-api-key':'123456'} );
    return headers;
  }
  getActivityList(): Observable<any> {
    const options = {
      headers: this.createAuthorizationHeader()
    };
    return this.http.post('http://trendix.qa/dmsc/api/dmsc/activivties', '', options)
    .pipe(map(data => data))
    .catch((e: any) => Observable.throw(this.errorHandler(e)));
  }
  errorHandler(error: any): void {
    console.log(error)
  }
}

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Config } from '../../config';
import { LoginModel } from '../../models/login.model';


/*
  Generated class for the LoginService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LoginService {
  data: any;
  showAccessCode: boolean;

  constructor(private http: Http, private config: Config) {
    this.data = null;
  }

  login(staffId, email) {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    let loginModel: LoginModel = { staffId: staffId, email: email };
    let body = JSON.stringify(loginModel);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    // don't have the data yet
    return new Promise(resolve => {
      this.http.post(this.config.BASEURL + this.config.AUTHENTICATION_URL, body, options)
        .map(res => res.json().results)
        .subscribe(data => {
          this.data = data;
          this.showAccessCode = true;
          resolve(this.data);
        });
    });
  }
}


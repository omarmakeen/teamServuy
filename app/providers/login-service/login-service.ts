import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Config } from '../../config';
import { LoginModel } from '../../models/login.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';


@Injectable()
export class LoginService {
  data: any;

  constructor(private http: Http, private config: Config) {
    this.data = null;
  }

  login(staffId, email) {

    let loginModel: LoginModel = { staffId: staffId, email: email };
    let body = JSON.stringify(loginModel);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.config.BASEURL + this.config.AUTHENTICATION_URL, body, options)
      .map((res: Response) => res.json());
  }
}


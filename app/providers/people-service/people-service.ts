import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NavController, Loading } from 'ionic-angular';

@Injectable()
export class PeopleService {
  data: any;

  loading = Loading.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });

  constructor(private http: Http, private navController: NavController) {
    this.data = null;
  }

  load() {

    // loading dialog
    this.presentLoading();
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      this.http.get('https://randomuser.me/api/?results=30')
        .map(res => res.json().results)
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

    presentLoading() {
    this.navController.present(this.loading);
  }

  dismissLoading() {
    this.loading.dismiss();
  }
}


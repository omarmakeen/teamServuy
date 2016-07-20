import { Component } from '@angular/core';
import { NavController, Loading } from 'ionic-angular';
import { PeopleService } from '../../providers/people-service/people-service'
import { PeopleSearch } from '../../pipes/people-search'

@Component({
  templateUrl: 'build/pages/page1/page1.html',
  providers: [PeopleService],
  pipes: [PeopleSearch]
})
export class Page1 {

  public people:any;
  public searchQuery:string;

  constructor(private navController:NavController, public peopleService:PeopleService) {
    this.loadPeople();
  }

  loadPeople() {

    //this.presentLoading();
    this.peopleService.load()
      .then(data => {
        this.people = data;
      });
  }

  presentLoading() {
    let loading = Loading.create({
      content: "Please wait...",
      dismissOnPageChange: true
    });
    this.navController.present(loading);
  }

}

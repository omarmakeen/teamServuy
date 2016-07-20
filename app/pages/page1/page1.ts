import { Component } from '@angular/core';
import { NavController, Loading } from 'ionic-angular';
import { PeopleService } from '../../providers/people-service/people-service'

@Component({
  templateUrl: 'build/pages/page1/page1.html',
  providers: [PeopleService]
})
export class Page1 {

  public people:any;
  public copyPeople:any;

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


  getItems(ev) {
    // Reset items back to all of the items
    //this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.people = this.people.filter((person) => {
        return (person.name.first.toLowerCase().indexOf(val.toLowerCase()) > -1 || person.name.last.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }

  }

  onSearchCancel(ev) {
    this.loadPeople();
  }
}

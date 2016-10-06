import { Component } from '@angular/core';
import { NavController, Loading } from 'ionic-angular';
import { PeopleService } from '../../providers/people-service/people-service';



@Component({
  templateUrl: 'build/pages/loginPage/loginPage.html',
  providers: [PeopleService],
})
export class LoginPage {
  constructor(private navController: NavController, public peopleService: PeopleService) {

  }

  login() {
    console.log('LOGIN');
  }

}

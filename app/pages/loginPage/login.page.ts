import { Component } from '@angular/core';
import { NavController, Loading } from 'ionic-angular';
import { Response } from '@angular/http';
import { LoginService } from '../../providers/login-service/login-service';
import { Observable } from 'rxjs/Observable';
import { AccessCodePage } from '../access-code/access-code.page';
import 'rxjs/add/operator/catch';



@Component({
  templateUrl: 'build/pages/loginPage/login.page.html',
  providers: [LoginService],
})

export class LoginPage {
  private staffId: number;
  private email: string;
  private accessCode: string;

  constructor(private navController: NavController, private loginService: LoginService) {

  }

  private login() {
    this.loginService.login(this.staffId, this.email).subscribe(
      response => this.successHandler(response),
      error => this.errorHandler(error));

  }

  private successHandler(response) {
    this.navController.push(AccessCodePage)
  }

  private errorHandler(error) {
    console.log(error);
  }

}

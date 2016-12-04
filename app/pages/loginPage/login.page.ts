import { Component } from '@angular/core';
import { NavController, Loading } from 'ionic-angular';
import { LoginService } from '../../providers/login-service/login-service'



@Component({
  templateUrl: 'build/pages/loginPage/login.page.html',
  providers: [LoginService],
})

export class LoginPage {
  private staffId: number;
  private email: string;
  private accessCode: string;
  showAccessCode: boolean;


  constructor(private navController: NavController, private loginService: LoginService) {
    this.showAccessCode = this.loginService.showAccessCode;
  }

  login() {
    this.loginService.login(this.staffId, this.email);
  }


}

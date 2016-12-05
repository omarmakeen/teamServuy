import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/access-code/access-code.page.html',
})
export class AccessCodePage {

  private accessCode: string;
  constructor(private nav: NavController) {

  }

  private verify(accessCode): void {
    console.log(accessCode);
  }

}

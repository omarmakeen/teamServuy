import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

/*
 Generated class for the SurveyDetailsPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/survey-details/survey-details.html',
})
export class SurveyDetailsPage {

  person;

  constructor(private nav:NavController, params:NavParams) {
    this.person = params.data.person;
  }

}

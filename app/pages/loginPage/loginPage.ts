import { Component } from '@angular/core';
import { NavController, Loading } from 'ionic-angular';
import { PeopleService } from '../../providers/people-service/people-service';
import { PeopleSearch } from '../../pipes/people-search';
import { SurveyDetailsPage } from '../survey-details/survey-details';
import {SurveyService} from '../../providers/survey-service/survey-service';


@Component({
  templateUrl: 'build/pages/loginPage/loginPage.html',
  providers: [PeopleService, SurveyService],
  pipes:   [PeopleSearch]
})
export class LoginPage {
  constructor(private navController: NavController, public peopleService: PeopleService, public surveyService: SurveyService) {

  }

}

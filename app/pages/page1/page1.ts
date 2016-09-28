import { Component } from '@angular/core';
import { NavController, Loading } from 'ionic-angular';
import { PeopleService } from '../../providers/people-service/people-service';
import { PeopleSearch } from '../../pipes/people-search';
import { SurveyDetailsPage } from '../survey-details/survey-details';
import {SurveyService} from '../../providers/survey-service/survey-service';


@Component({
  templateUrl: 'build/pages/page1/page1.html',
  providers: [PeopleService, SurveyService],
  pipes:   [PeopleSearch]
})
export class Page1 {
  public people: any;
  public survey: any;

  constructor(private navController: NavController, public peopleService: PeopleService, public surveyService: SurveyService) {
    this.loadPeople();
  }

  loadPeople() {
    this.peopleService.load()
      .then(data => {
        this.people = data;
      });
  }

  presentLoading() {
    let loading = Loading.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.navController.present(loading);
  }

  openSurvey() {
    this.loadSurvey();

  }

  loadSurvey() {
    this.surveyService.load()
      .then(data => {
        this.survey = data;
        this.navController.push(SurveyDetailsPage, { survey: this.survey });
      });
  }

}

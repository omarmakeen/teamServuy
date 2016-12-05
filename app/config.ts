import { Injectable } from '@angular/core';

@Injectable()
export class Config {

  public BASEURL: string;
  public AUTHENTICATION_URL: string;
  public VERIFICATION_URL: string;
  public RequestMethod: any;

  constructor() {
    this.BASEURL = 'http://survey.vsse.org/api/v1';
    this.AUTHENTICATION_URL = '/auth/login';
    this.VERIFICATION_URL = '/auth/verify'
    this.RequestMethod = {
      Post: 'POST',
      Get: 'GET'
    }
  }

}

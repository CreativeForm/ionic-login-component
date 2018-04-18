/**
 * Created by DRAGAN on 3/22/2017.
 */
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {

  static get parameters() {
    return [[Http]];
  }

  constructor(private http:Http) {}

  sendData(email:string) {
    var url = "http://facebook.us14.list-manage.com/subscribe/post-json?u=2c0f7baa8dc004a62ff3922e3&id=456928d791&EMAIL="+encodeURI(email)+"&b_2c0f7baa8dc004a62ff3922e3_456928d791";
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CovidData} from './CovidData';

@Injectable({
  providedIn: 'root'
})
export class CovidserviceService {
  private covidUrl = 'http://localhost:8080/api/v1/us/current';
  private covidStateUrl1 = 'http://localhost:8080/api/v1/states/';
  private covidStateUrl2 = '/current';
  constructor(
    private http: HttpClient
  ) { }

  getCovidDataForUs(): Observable<CovidData> {
    return this.http.get<CovidData>(this.covidUrl);
  }

  getCovidDataForState(state:string): Observable<CovidData> {
    return this.http.get<CovidData>(this.covidStateUrl1 + state + this.covidStateUrl2);
  }
}

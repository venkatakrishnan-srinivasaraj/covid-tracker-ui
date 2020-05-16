import {Component, OnInit} from '@angular/core';
import {CovidData} from './CovidData';
import {CovidserviceService} from './covidservice.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'covidtracker';
  covidData: CovidData;
  covidUsData: CovidData;
  state: 'TX';
  form: FormGroup;
  usform: FormGroup;
  constructor(private covidserviceService:CovidserviceService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        stateCode: '',
      }
    );
    this.usform = this.formBuilder.group(
      {
      }
    );
  }

  getUsData(): void{
    this.covidserviceService.getCovidDataForUs().subscribe(data =>
      this.covidUsData = data
    );
  }

  getStateData(): void{
    this.state = this.form.value.stateCode;
    this.covidserviceService.getCovidDataForState(this.state).subscribe(data =>
      this.covidData = data
    );
  }
}

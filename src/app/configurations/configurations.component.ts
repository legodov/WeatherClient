import { Component, OnInit, OnChanges } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { CityName } from '../models/CityName';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.css']
})
export class ConfigurationsComponent implements OnInit, OnChanges {
  private _cityList: CityName[];
  private _cityToAdd: string;
  private _cityToDelete: string;
  private _error: string;

  constructor(private _service: WeatherService) { }

  ngOnInit() {
    this.getCityList();
  }
  ngOnChanges() {
    this.getCityList();
  }

  getCityList() {
    this._service.getCityList().subscribe(l => this._cityList = l,
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          this._error = 'An error occurred: '+ err.error.message;
        } else {
          this._error = (`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      });
  }
  addCity(cityName: string) {
    let newCity: CityName = new CityName();
    newCity.Name = cityName;
    this._service.addCity(newCity).subscribe((err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          this._error = 'An error occurred: '+ err.error.message;
        } else {
          this._error = (`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      });
    this.getCityList();
  }
  deleteCitiesWithName(cityName: string) {
    this._service.deleteCitiesWithName(cityName).subscribe((err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          this._error = 'An error occurred: '+ err.error.message;
        } else {
          this._error = (`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      });
      this.getCityList();
  }
}

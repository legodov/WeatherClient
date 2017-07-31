import { Component, OnInit, OnChanges } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WeatherData } from '../models/WeatherData';
import { CityName } from '../models/CityName';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnChanges {
  private readonly _days: number[];
  private _weather: WeatherData;
  private _cityList: CityName[];
  private _selectedCity: string;
  private _selectedCountDays: number;
  private _error: string;

  constructor(private _service: WeatherService) {
    this._days = [1, 3, 7];
    this._cityList = [];
    this._selectedCountDays = 1;
   }

  ngOnInit() {
    this.getCityList();
  }
  ngOnChanges() {
    this.getCityList();
  }

  getWeather(cityName: string, countDays: number) {
    this._service.getWeather(cityName, countDays).subscribe(w => this._weather = w,
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          this._error = 'An error occurred: '+ err.error.message;
        } else {
          this._error = (`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      });
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
}

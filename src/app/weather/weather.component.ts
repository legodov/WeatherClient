import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WeatherData } from '../models/WeatherData';
import { CityName } from '../models/CityName';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  private readonly _days: number[];
  private _weather: WeatherData;
  private _cityList: CityName[];
  private _selectedCity: string;
  private _selectedCountDays: number;

  constructor(private _service: WeatherService) {
    this._days = [1, 3, 7];
    this._cityList = [];
    this._selectedCountDays = 1;
   }

  ngOnInit() {
    this.getCityList();
  }

  getWeather(cityName: string, countDays: number) {
    this._service.getWeather(cityName, countDays).subscribe(w => this._weather = w);
  }
  getCityList() {
    this._service.getCityList().subscribe(l => this._cityList = l);
  }
}

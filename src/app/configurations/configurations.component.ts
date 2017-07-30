import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { CityName } from '../models/CityName';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.css']
})
export class ConfigurationsComponent implements OnInit {
  private _cityList: CityName[];
  private _cityToAdd: string;
  private _cityToDelete: string;

  constructor(private _service: WeatherService) { }

  ngOnInit() {
    this.getCityList();
  }

  getCityList() {
    this._service.getCityList().subscribe(l => this._cityList = l);
  }
  addCity(cityName: string) {
    let newCity: CityName = new CityName();
    newCity.Name = cityName;
    this._service.addCity(newCity).subscribe();
    this.getCityList();
  }
  deleteCitiesWithName(cityName: string) {
    this._service.deleteCitiesWithName(cityName).subscribe();
    this.getCityList();
  }
}

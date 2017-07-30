import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { WeatherData } from '../models/WeatherData';
import { HistoryWeatherDataObject } from '../models/HistoryWeatherDataObject';
import { CityName } from '../models/CityName';

@Injectable()
export class WeatherService {
  private static readonly _getWeatherUrl = "http://localhost:57339/api/Weather/GetWeatherAsync/";
  private static readonly _getHistoryUrl = "http://localhost:57339/api/History/GetHistory/";
  private static readonly _getCityListUrl = "http://localhost:57339/api/Cities/GetCityList/";  
  private static readonly _addCityUrl = "http://localhost:57339/api/Cities/AddCity/";  
  private static readonly _deleteCitiesUrl = "http://localhost:57339/api/Cities/DeleteCitiesWithName/";    

  constructor(private _client: HttpClient) { }

  getWeather(cityName: string, countDays: number = 7): Observable<WeatherData> {
    return this._client.get<WeatherData>(WeatherService._getWeatherUrl + cityName + '/' + countDays);
  }
  getHistory(): Observable<HistoryWeatherDataObject[]> {
    return this._client.get<HistoryWeatherDataObject[]>(WeatherService._getHistoryUrl);
  }
  getCityList(): Observable<CityName[]> {
    return this._client.get<CityName[]>(WeatherService._getCityListUrl);
  }
  addCity(cityName: CityName): Observable<any> {
    return this._client.post<any>(WeatherService._addCityUrl + cityName.Name, "");
  }
  deleteCitiesWithName(cityName: string): Observable<any> {
    return this._client.delete<any>(WeatherService._deleteCitiesUrl + cityName);
  }
}

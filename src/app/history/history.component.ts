import { Component, OnInit } from '@angular/core';
import { HistoryWeatherDataObject } from '../models/HistoryWeatherDataObject'
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  _history: HistoryWeatherDataObject[];

  constructor(private _service: WeatherService) { }

  ngOnInit() {
    this.getHistory();
  }

   getHistory() {
    this._service.getHistory().subscribe(h => this._history = h);
  }
}

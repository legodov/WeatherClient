import { Component, OnInit } from '@angular/core';
import { HistoryWeatherDataObject } from '../models/HistoryWeatherDataObject'
import { WeatherService } from '../services/weather.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  _history: HistoryWeatherDataObject[];
  _error: string;

  constructor(private _service: WeatherService) { }

  ngOnInit() {
    this.getHistory();
  }

  getHistory() {
    this._service.getHistory().subscribe(h => this._history = h,
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          this._error = 'An error occurred: '+ err.error.message;
        } else {
          this._error = (`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      });
  }
}

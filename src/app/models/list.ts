import { weather } from '../models/weather';
import { temp } from '../models/temp';

export class list {
    dt: number;   //time of data forecasted
    temp: temp;
    pressure: number;
    humidity: number;
    weather: weather[];
    speed: number;   //wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
    deg: number;   //wind direction, degrees (meteorological)
    clouds: number;   //cloudiness, %
}
import { ReducedForecastPerDay } from '../models/ReducedForecastPerDay';

export class HistoryWeatherDataObject {
    Id: number;
    City: string;
    CountDays: number;
    RequestTime: Date;
    ReducedForecastPerDay: ReducedForecastPerDay;
}
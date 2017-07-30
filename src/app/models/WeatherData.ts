import { city } from '../models/city';
import { list } from '../models/list';

export class WeatherData {
    Cod: string;   //internal parameter
    message: number;   //internal parameter
    city: city;
    cnt: number;   //number of lines returned by this API call
    list: list[];
}
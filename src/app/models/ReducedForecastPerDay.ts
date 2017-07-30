export class ReducedForecastPerDay {
    Time: number;   //time of data forecasted
    DayTemp: number;   //day temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
    NightTemp: number;   //night temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
    EveningTemp: number;
    MorningTemp: number;
    Rain: string;   //weather condition within the group (Rain, Snow, Extreme etc.)
    Pressure: number;
    Humidity: number;
    WindSpeed: number;   //wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
    WindDirection: number;   //wind direction, degrees (meteorological)
    Clouds: number;   //cloudiness, %
}
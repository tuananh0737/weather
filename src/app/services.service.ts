import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = environment.openWeatherApiKey;
  private baseUrl = 'https://api.openweathermap.org/data/2.5';

  constructor(private http: HttpClient) {}

  getCurrentWeather(city: string, units: 'metric' | 'imperial' = 'metric'): Observable<any> {
    const url = `${this.baseUrl}/weather`;
    const params = new HttpParams()
      .set('q', city)
      .set('appid', this.apiKey)
      .set('units', units);
    return this.http.get(url, { params });
  }

  getForecast(city: string, units: 'metric' | 'imperial' = 'metric'): Observable<any> {
    const url = `${this.baseUrl}/forecast`;
    const params = new HttpParams()
      .set('q', city)
      .set('appid', this.apiKey)
      .set('units', units);
    return this.http.get(url, { params });
  }
}

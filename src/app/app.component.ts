import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export const environment = {
  production: false,
  openWeatherApiKey: 'YOUR_OPENWEATHERMAP_API_KEY' 
};


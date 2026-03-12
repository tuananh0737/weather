import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WeatherService } from './services.service';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [FormsModule, CommonModule], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  city: string = 'Hanoi'; 
  weatherData: any;
  errorMessage: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.searchWeather(); 
  }

  searchWeather() {
    if (!this.city.trim()) return;
    
    this.weatherService.getCurrentWeather(this.city).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.errorMessage = ''; 
      },
      error: (err) => {
        this.errorMessage = 'Không tìm thấy thông tin thành phố này hoặc có lỗi API!';
        this.weatherData = null; 
        console.error(err);
      }
    });
  }
}
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarService } from './car.service';
import { Car } from './car.model';

@Component({
  selector: 'app-car-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './car-add.component.html'
})
export class CarAddComponent {
  brand = '';
  model = '';

  constructor(private carService: CarService) {}

  addCar() {
    if (!this.brand || !this.model) return;
    const newCar: Car = { brand: this.brand, model: this.model };
    this.carService.addCar(newCar);
    this.brand = '';
    this.model = '';
  }
}
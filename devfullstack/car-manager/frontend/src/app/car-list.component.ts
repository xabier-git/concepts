import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarService } from './car.service';
import { Car } from './car.model';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './car-list.component.html'
})
export class CarListComponent implements OnInit {
  cars: Car[] = [];
  editingId: string | null = null;
  editBrand = '';
  editModel = '';

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carService.cars$.subscribe(cars => this.cars = cars);
  }

  deleteCar(id: string) {
    this.carService.deleteCar(id);
  }

  enableEdit(car: Car) {
    this.editingId = car._id!;
    this.editBrand = car.brand;
    this.editModel = car.model;
  }

  cancelEdit() {
    this.editingId = null;
    this.editBrand = '';
    this.editModel = '';
  }

  updateCar() {
    if (!this.editBrand || !this.editModel) return;
    const updated: Car = {
      _id: this.editingId!,
      brand: this.editBrand,
      model: this.editModel
    };
    this.carService.updateCar(updated);
    this.cancelEdit();
  }
}
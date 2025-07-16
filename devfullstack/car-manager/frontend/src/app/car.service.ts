import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Car } from './car.model';

@Injectable({ providedIn: 'root' })
export class CarService {
  private apiUrl = 'http://localhost:3000/api/cars';
  private carsSubject = new BehaviorSubject<Car[]>([]);
  cars$ = this.carsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchCars();
  }

  fetchCars() {
    this.http.get<Car[]>(this.apiUrl).subscribe(cars => this.carsSubject.next(cars));
  }

  addCar(car: Car) {
    this.http.post<Car>(this.apiUrl, car).subscribe(newCar => {
      const current = this.carsSubject.value;
      this.carsSubject.next([...current, newCar]);
    });
  }

  deleteCar(id: string) {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
      const updated = this.carsSubject.value.filter(c => c._id !== id);
      this.carsSubject.next(updated);
    });
  }

  updateCar(car: Car) {
    this.http.put<Car>(`${this.apiUrl}/${car._id}`, car).subscribe(updated => {
      const updatedList = this.carsSubject.value.map(c =>
        c._id === updated._id ? updated : c
      );
      this.carsSubject.next(updatedList);
    });
  }
}
// IGprofile-frontend/src/app/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/Instagramwomenfootballers';

  constructor(private http: HttpClient) { }

  getProfilesList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/IGProfilesList`);
  }
}

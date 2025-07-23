import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    const token = this.getToken();
    console.log("UserService.getUsers() - Token:", token);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any[]>(this.apiUrl+"/", { headers });
  }

  getUserById(id: string): Observable<any> {
    const token = this.getToken();
    console.log("UserService.getUsers() - Token:", token);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`${this.apiUrl}/${id}`, { headers });
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }
 
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth'; // Ajusta la URL según tu backend
  private tokenKey = 'auth_token';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    console.log("AuthService.login()", { username, password });
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { username, password }).pipe(
      tap(response => {
        console.log("AuthService.login() token", response.token);
        localStorage.setItem(this.tokenKey, response.token);
      })
    );
  }

  register(data: any): Observable<any> {
    console.log("AuthService.register()", data);
    return this.http.post(`${this.apiUrl}/signup`, data);
  }

  logout(): void {
    console.log("AuthService.logout()");
    localStorage.removeItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    console.log("AuthService.isAuthenticated("+this.getToken()+")");
    // Verifica si hay un token en el almacenamiento local
    return !!localStorage.getItem(this.tokenKey);
  }

  getToken(): string | null {
    console.log("AuthService.getToken()");
    return localStorage.getItem(this.tokenKey);
  }
}
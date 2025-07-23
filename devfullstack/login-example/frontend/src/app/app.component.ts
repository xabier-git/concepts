import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterModule } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    MatToolbarModule, // Para la barra de herramientas
    MatButtonModule   // Para los botones
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'frontend';
  username: string = '';

  constructor(private authService: AuthService, private router: Router)
   {
    console.log("AppComponent.constructor()");
  
   }

  isAuthenticated(): boolean {
    console.log("AppComponent.isAuthenticated()");
    if(this.authService.isAuthenticated()) {
      console.log("AppComponent.isAuthenticated() - User is authenticated");
      const token = this.authService.getToken();
      if (token) {
        console.log("AppComponent.isAuthenticated() - Token found", token);
        // Decodifica el token para obtener el nombre de usuario (opcional)
        const payload = JSON.parse(atob(token.split('.')[1]));
        console.log("AppComponent.isAuthenticated() - Payload", payload);
        this.username = payload.username || 'User';
        return true;
      }
      return false;
    }
    return false;
  }

  logout(): void {
    console.log("AppComponent.logout()");
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    console.log("AppComponent.ngOnDestroy()");
  }
}
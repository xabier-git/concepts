import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatOptionModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  loginForm: FormGroup;
  errorMessage: string = '';


  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog
    ) {   
    console.log("LoginComponent.constructor()");
    this.loginForm = this.fb.group({
      //email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    console.log("LoginComponent.onSubmit(value)", this.loginForm.value);
    console.log("LoginComponent.onSubmit(valid)", this.loginForm.valid);
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe({
        next: () => {
          console.log("Login successful");
          this.router.navigate(['/home']);
        },
        error: (err) => {
          this.errorMessage = err.error.message + " - Status(" + err.status + ") :" + err.statusText || 'Error de inicio de sesión';
          this.openErrorDialog(this.errorMessage);
          console.error('LoginComponent.onSubmit(error)', err);
        }
      });
    }
  }

    openErrorDialog(message: string): void {
    this.dialog.open(ErrorDialogComponent, {
      data: { message },
      width: '400px'
    });
  }

  onRegisterClick() {
    console.log('Botón "Regístrate" clickeado');
  }
  ngOnDestroy() {
    console.log("LoginComponent.ngOnDestroy()");
    // Aquí puedes limpiar recursos si es necesario
  } 
}
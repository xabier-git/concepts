import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnDestroy {
  registerForm: FormGroup;
  errorMessage: string = "";

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) {
    console.log("Register.constructor()");
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
     // email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      role: ['user'] // Puedes cambiar el valor por defecto o hacerlo seleccionable
    },
      { validators: this.passwordsMatchValidator });
  }

  onSubmit() {
    console.log("Register.onSubmit()", this.registerForm.value);
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe({
        next: (response) => {
          alert('Registro exitoso. Ahora puedes iniciar sesión.');
          this.registerForm.reset();
          this.router.navigate(['/login']);
        },
        error: (error) => {
           console.error('Register.onSubmit(error)', error);
          this.errorMessage = error.error.message + " - Status(" + error.status + ") :" + error.statusText || 'Error de inicio de sesión';
          this.openErrorDialog(this.errorMessage);
         
        }
      });
    }
  }

    passwordsMatchValidator(control: AbstractControl): ValidationErrors | null {
      console.log("Register.passwordsMatchValidator()");

      const password = control.get('password')?.value;
      const confirmPassword = control.get('confirmPassword')?.value;
      return password === confirmPassword ? null : { passwordMismatch: true };
  }

    openErrorDialog(message: string): void {
      this.dialog.open(ErrorDialogComponent, {
        data: { message },
        width: '400px'
      });
    }

  ngOnDestroy() {
    console.log("Register.ngOnDestroy()");
    // Aquí puedes limpiar recursos si es necesario
  }
}
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthEntity } from '@core/entities/auth/auth.entity';
import { AuthService } from '@infrastructure/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  errorMessage: string = '';
  isLogged: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  get email() {
    return this.loginForm?.get('email') as FormControl;
  }

  get password() {
    return this.loginForm?.get('password') as FormControl;
  }

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit() {
    this.isLogged = true;
    const auth = this.loginForm.value as AuthEntity;

    this.authService.login(auth).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/dashboard/projects']);
        this.isLogged = false;
      },
      (error) => {
        console.log(error);
        this.errorMessage =
          error.status === 404
            ? 'Credenciales incorrectas. Inténtalo de nuevo.'
            : 'Ocurrió un error en el servidor. Por favor, inténtalo más tarde.';
        this.isLogged = false;
      }
    );
  }
}

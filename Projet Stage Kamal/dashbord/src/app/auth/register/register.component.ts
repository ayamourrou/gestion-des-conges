import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackbarComponent } from 'src/app/dashbord-admin-component/snackbar/snackbar.component';
import { RegisterResponse } from 'src/app/interfaces/Register-response';
import { LoginResponse } from 'src/app/interfaces/login-response';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  durationInSeconds = 5;
  value = 'Clear me';
  constructor(
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar,
    private shared: CommonService
  ) {}

  openSnackBar() {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      nom: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(3)],
      }),
      prenom: new FormControl<string>('', {
        nonNullable: false,
        validators: [Validators.required, Validators.minLength(3)],
      }),
      cin: new FormControl<string>('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.pattern('^[A-Z]{1,2}[0-9]{6}$'),
        ],
      }),
      email: new FormControl<string>('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'),
        ],
      }),
      username: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(8)],
      }),
      password: new FormControl<string>('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            '^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%^&+=!_]).*$'
          ),
        ],
      }),
    });
  }

  onRegistersubmit = () => {
    this.http
      .post<RegisterResponse>('http://localhost:3800/api/auth/register', {
        nom: (this.registerForm.get('nom') as FormControl<string>).value.trim(),
        prenom: (
          this.registerForm.get('prenom') as FormControl<string>
        ).value.trim(),
        cin: (this.registerForm.get('cin') as FormControl<string>).value.trim(),
        email: (
          this.registerForm.get('email') as FormControl<string>
        ).value.trim(),
        username: (
          this.registerForm.get('username') as FormControl<string>
        ).value.trim(),
        password: (
          this.registerForm.get('password') as FormControl<string>
        ).value.trim(),
      })
      .subscribe(async (data) => {
        if (data.status == 200) {
          await this.shared.setMessage(data.msg);
          await this.openSnackBar();
          await new Promise((f) => setTimeout(f, 1500));
          this.router.navigate(['login']);
        } else {
          await this.shared.setMessage(data.msg);
          await this.openSnackBar();
        }
      });
  };

  ShowPassword() {
    const input_password = document.querySelector('#input_password');
    const icon_password = document.querySelector('#icon_password');
    if (input_password!.getAttribute('type') === 'text') {
      input_password!.setAttribute('type', 'password');
      icon_password!.textContent = 'visibility_off';
    } else if (input_password!.getAttribute('type') === 'password') {
      input_password!.setAttribute('type', 'text');
      icon_password!.textContent = 'visibility';
    }
  }

  GoToLOgin() {
    this.router.navigate(['login']);
  }
}

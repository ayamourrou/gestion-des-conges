import { NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackbarComponent } from 'src/app/dashbord-admin-component/snackbar/snackbar.component';
import { LoginResponse } from 'src/app/interfaces/login-response';
import { AuthService } from 'src/app/services/auth.service';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  durationInSeconds = 5;
  constructor(
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar,
    private shared: CommonService,
    private readonly authService: AuthService
  ) {}

  openSnackBar() {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
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

  onloginsubmit = () => {
    this.authService
      .login(
        (this.loginForm.get('username') as FormControl<string>).value.trim(),
        (this.loginForm.get('password') as FormControl<string>).value.trim()
      )
      .subscribe();
    this.http
      .post<LoginResponse>('http://localhost:3800/api/auth/login', {
        username: (
          this.loginForm.get('username') as FormControl<string>
        ).value.trim(),
        password: (
          this.loginForm.get('password') as FormControl<string>
        ).value.trim(),
      })
      .subscribe(async (data: LoginResponse) => {
        if (data.status == 200) {
          await this.shared.setMessage(data.msg);
          await this.openSnackBar();
          await new Promise((f) => setTimeout(f, 1500));
        } else {
          await this.shared.setMessage(data.msg);
          await this.openSnackBar();
        }
      });
  };

  Register() {
    this.router.navigate(['register']);
  }

  ForgetPassword() {
    this.router.navigate(['ForgotPassword_PageOne']);
  }

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
}

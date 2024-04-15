import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackbarComponent } from 'src/app/dashbord-admin-component/snackbar/snackbar.component';
import { FindCinResponse } from 'src/app/interfaces/FindCin-response';
import { LoginResponse } from 'src/app/interfaces/login-response';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  ForgotPWForm!: FormGroup;
  durationInSeconds = 5;
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
    this.ForgotPWForm = new FormGroup({
      cin: new FormControl<string>('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.pattern('^[A-Z]{1,2}[0-9]{6}$'),
        ],
      }),
    });
  }

  onForgotPWsubmit = () => {
    this.http
      .post<FindCinResponse>('http://localhost:3800/api/user/findcin', {
        cin: (this.ForgotPWForm.get('cin') as FormControl<string>).value.trim(),
      })
      .subscribe(async (data: FindCinResponse) => {
        if (data.status == 200) {
          await this.shared.setMessage(data.msg);
          await this.openSnackBar();
          await new Promise((f) => setTimeout(f, 1500));
          await this.shared.setCIN(data.user?.cin!);
          this.router.navigate(['ForgotPassword_PageTow']);
        } else {
          await this.shared.setMessage(data.msg);
          await this.openSnackBar();
        }
      });
  };

  GoBack() {
    this.router.navigate(['login']);
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

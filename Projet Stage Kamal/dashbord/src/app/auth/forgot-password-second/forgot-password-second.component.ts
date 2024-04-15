import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackbarComponent } from 'src/app/dashbord-admin-component/snackbar/snackbar.component';
import { FindCinResponse } from 'src/app/interfaces/FindCin-response';
import { ResetPasswordResponse } from 'src/app/interfaces/ResetPassword-response';
import { LoginResponse } from 'src/app/interfaces/login-response';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-forgot-password-second',
  templateUrl: './forgot-password-second.component.html',
  styleUrls: ['./forgot-password-second.component.css'],
})
export class ForgotPasswordSecondComponent {
  ForgotPWForm!: FormGroup;
  durationInSeconds = 5;
  constructor(
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar,
    private shared: CommonService
  ) {}

  matchingValues(control: AbstractControl): { [key: string]: boolean } | null {
    const firstControlValue = control.get('password_1')?.value;
    const secondControlValue = control.get('password_2')?.value;

    if (firstControlValue !== secondControlValue) {
      return { passwordMismatch: true };
    }

    return null;
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  ngOnInit(): void {
    this.ForgotPWForm = new FormGroup(
      {
        password_1: new FormControl<string>('', {
          nonNullable: true,
          validators: [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(
              '^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%^&+=!_]).*$'
            ),
          ],
        }),
        password_2: new FormControl<string>('', {
          nonNullable: true,
          validators: [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(
              '^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%^&+=!_]).*$'
            ),
          ],
        }),
      },
      { validators: this.matchingValues }
    );

    this.ForgotPWForm.setErrors({ passwordMismatch: true });
  }

  onForgotPWsubmit = () => {
    this.http
      .post<ResetPasswordResponse>(
        'http://localhost:3800/api/user/resetpassword',
        {
          cin: this.shared.getCIN(),
          password: (
            this.ForgotPWForm.get('password_2') as FormControl<string>
          ).value.trim(),
        }
      )
      .subscribe(async (data: ResetPasswordResponse) => {
        console.log(data.status);
        if (data.status == 200) {
          console.log('DONNE');
          await this.shared.setMessage(data.msg);
          await this.openSnackBar();
          await new Promise((f) => setTimeout(f, 1500));
          this.router.navigate(['login']);
        } else {
          console.log('NOT DONNE');
          await this.shared.setMessage(data.msg);
          await this.openSnackBar();
        }
      });
  };

  ShowPassword_1() {
    const input_password = document.querySelector('#input_password_1');
    const icon_password = document.querySelector('#icon_password_1');
    if (input_password!.getAttribute('type') === 'text') {
      input_password!.setAttribute('type', 'password');
      icon_password!.textContent = 'visibility_off';
    } else if (input_password!.getAttribute('type') === 'password') {
      input_password!.setAttribute('type', 'text');
      icon_password!.textContent = 'visibility';
    }
  }

  ShowPassword_2() {
    const input_password = document.querySelector('#input_password_2');
    const icon_password = document.querySelector('#icon_password_2');
    if (input_password!.getAttribute('type') === 'text') {
      input_password!.setAttribute('type', 'password');
      icon_password!.textContent = 'visibility_off';
    } else if (input_password!.getAttribute('type') === 'password') {
      input_password!.setAttribute('type', 'text');
      icon_password!.textContent = 'visibility';
    }
  }
}

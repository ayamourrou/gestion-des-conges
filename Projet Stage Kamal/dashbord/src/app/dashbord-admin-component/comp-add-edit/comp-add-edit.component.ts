import { Component, Inject, Input, OnInit } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AddUserResponse } from 'src/app/interfaces/AddUser-response';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditeUserResponse } from 'src/app/interfaces/EditeUser-response';
import { CommonService } from 'src/app/shared/common.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-comp-add-edit',
  templateUrl: './comp-add-edit.component.html',
  styleUrls: ['./comp-add-edit.component.css'],
})
export class CompAddEditComponent implements OnInit {
  durationInSeconds = 5;

  @Input({ required: true }) h1!: string;
  submited = false;

  AddUserForm!: FormGroup;

  constructor(
    private _dialogRef: DialogRef<CompAddEditComponent>,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private shared: CommonService,
    private _snackBar: MatSnackBar
  ) { }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  ngOnInit(): void {
    this.AddUserForm = new FormGroup({
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
      statue_user: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });
    this.AddUserForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.AddUserForm.valid) {
      this.submited = true;
      if (this.data) {
        this._dialogRef.close();
        this.http
          .put<EditeUserResponse>('http://localhost:3800/api/user/editUser', {
            id_user: this.data.id_user,
            nom: (
              this.AddUserForm.get('nom') as FormControl<string>
            ).value.trim(),
            prenom: (
              this.AddUserForm.get('prenom') as FormControl<string>
            ).value.trim(),
            cin: (
              this.AddUserForm.get('cin') as FormControl<string>
            ).value.trim(),
            email: (
              this.AddUserForm.get('email') as FormControl<string>
            ).value.trim(),
            username: (
              this.AddUserForm.get('username') as FormControl<string>
            ).value.trim(),
            password: (
              this.AddUserForm.get('password') as FormControl<string>
            ).value.trim(),
            statue_user: (
              this.AddUserForm.get('statue_user') as FormControl<string>
            ).value
              .trim()
              .toLowerCase(),
          })
          .subscribe(async (data) => {
            if (data.status == 200) {
              await this.shared.setMessage(data.msg);
              await this.openSnackBar();
              await new Promise((f) => setTimeout(f, 1500));
              await location.reload();
            } else {
              await this.shared.setMessage(data.msg);
              await this.openSnackBar();
              await new Promise((f) => setTimeout(f, 1500));
              await location.reload();
            }
          });
      } else {
        this._dialogRef.close();
        this.http
          .post<AddUserResponse>('http://localhost:3800/api/user/addUser', {
            nom: (
              this.AddUserForm.get('nom') as FormControl<string>
            ).value.trim(),
            prenom: (
              this.AddUserForm.get('prenom') as FormControl<string>
            ).value.trim(),
            cin: (
              this.AddUserForm.get('cin') as FormControl<string>
            ).value.trim(),
            email: (
              this.AddUserForm.get('email') as FormControl<string>
            ).value.trim(),
            username: (
              this.AddUserForm.get('username') as FormControl<string>
            ).value.trim(),
            password: (
              this.AddUserForm.get('password') as FormControl<string>
            ).value.trim(),
            statue_user: (
              this.AddUserForm.get('statue_user') as FormControl<string>
            ).value
              .trim()
              .toLowerCase(),
          })
          .subscribe(async (data) => {
            if (data.status == 200) {
              await this.shared.setMessage(data.msg);
              await this.openSnackBar();
              await new Promise((f) => setTimeout(f, 1500));
              await location.reload();
              location.reload();
            } else {
              await this.shared.setMessage(data.msg);
              await this.openSnackBar();
              await new Promise((f) => setTimeout(f, 1500));
              await location.reload();
            }
          });
      }
    }
  }
  onFormReset() {
    this._dialogRef.close();
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

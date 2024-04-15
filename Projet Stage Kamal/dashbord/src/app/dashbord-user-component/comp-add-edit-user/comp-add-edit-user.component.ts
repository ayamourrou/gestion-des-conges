import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/dashbord-admin-component/snackbar/snackbar.component';
import { AddUserResponse } from 'src/app/interfaces/AddUser-response';
import { EditeUserResponse } from 'src/app/interfaces/EditeUser-response';
import { CommonService } from 'src/app/shared/common.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-comp-add-edit-user',
  templateUrl: './comp-add-edit-user.component.html',
  styleUrls: ['./comp-add-edit-user.component.css'],
})
export class CompAddEditUserComponent implements OnInit {
  durationInSeconds = 5;

  @Input({ required: true }) h1!: string;
  submited = false;

  range!: FormGroup;

  constructor(
    private _dialogRef: DialogRef<CompAddEditUserComponent>,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private shared: CommonService,
    private _snackBar: MatSnackBar
  ) {}

  openSnackBar() {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  ngOnInit(): void {
    this.range = new FormGroup({
      dateDebut: new FormControl<Date | null>(null, {
        nonNullable: true,
        validators: [Validators.required],
      }),
      dateFin: new FormControl<Date | null>(null, {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });
    this.range.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.range.valid) {
      this.submited = true;
      this._dialogRef.close();
      const tokon = localStorage.getItem('tk');
      this.http
        .post<AddUserResponse>(
          'http://localhost:3800/api/conge/creeconge',
          {
            dateDebut: this.range.get('dateDebut')?.value,
            dateFin: this.range.get('dateFin')?.value,
          },
          {
            headers: {
              Authorization: `Bearer ${tokon}`,
            },
          }
        )
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

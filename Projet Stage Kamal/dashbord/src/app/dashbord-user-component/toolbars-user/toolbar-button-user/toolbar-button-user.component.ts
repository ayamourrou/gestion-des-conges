import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CompAddEditComponent } from 'src/app/dashbord-admin-component/comp-add-edit/comp-add-edit.component';
import { CompAddEditUserComponent } from '../../comp-add-edit-user/comp-add-edit-user.component';

@Component({
  selector: 'app-toolbar-button-user',
  templateUrl: './toolbar-button-user.component.html',
  styleUrls: ['./toolbar-button-user.component.css']
})
export class ToolbarButtonUserComponent {
  @Input({ required: true }) span!: string;
  @Input({ required: true }) button!: string;

  constructor(private _dialog: MatDialog) { }

  /* Function to open the form to add Users */
  openAddEditUserFrom(): void {
    this._dialog.open(CompAddEditUserComponent);
  }
}


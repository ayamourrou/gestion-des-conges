import { Component, Input } from '@angular/core';
import { CompAddEditComponent } from '../../comp-add-edit/comp-add-edit.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-toolbar-button',
  templateUrl: './toolbar-button.component.html',
  styleUrls: ['./toolbar-button.component.css'],
})
export class ToolbarButtonComponent {
  @Input({ required: true }) span!: string;
  @Input({ required: true }) button!: string;

  constructor(private _dialog: MatDialog) { }

  /* Function to open the form to add Users */
  openAddEditUserFrom(): void {
    this._dialog.open(CompAddEditComponent);
  }
}

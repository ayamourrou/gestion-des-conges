import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body-error',
  templateUrl: './body-error.component.html',
  styleUrls: ['./body-error.component.css'],
})
export class BodyErrorComponent {
  constructor(private _dialog: MatDialog, private router: Router) {}
  GoBack() {
    console.log(
      this.router
        .getCurrentNavigation()
        ?.previousNavigation?.finalUrl?.toString()
    );
  }
}

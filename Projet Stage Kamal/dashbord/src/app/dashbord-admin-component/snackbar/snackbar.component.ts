import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../shared/common.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
})
export class SnackbarComponent implements OnInit {
  message: string = '';

  constructor(private shared: CommonService) {}

  ngOnInit(): void {
    this.message = this.shared.getMessage();
  }
}

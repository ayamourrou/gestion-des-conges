import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  message: string = '';
  data: any;
  cin: string = '';

  constructor(private http: HttpClient) {}

  setMessage(data: string) {
    this.message = data;
  }
  setCIN(cin: string) {
    this.cin = cin;
  }

  getMessage() {
    return this.message;
  }
  getCIN() {
    return this.cin;
  }
}

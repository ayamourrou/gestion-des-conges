import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetNbUserResponde } from 'src/app/interfaces/GetNbUsers-response';

@Component({
  selector: 'app-body',
  templateUrl: './body_dashboard.component.html',
  styleUrls: ['./body_dashboard.component.css'],
})
export class BodyComponent implements OnInit {
  data_Nb_User: string = '401';
  data_Nb_Conge_A: string = '401';
  data_Nb_Conge_W: string = '401';
  data_Nb_Conge_R: string = '401';

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http
      .get<GetNbUserResponde>('http://localhost:3800/api/user/getnbusers')
      .subscribe((data) => {
        if (data.status == 200) {
          this.data_Nb_User = JSON.stringify(data.NbUsers);
        } else {
          this.data_Nb_User = '501';
        }
      });
    this.http
      .get<GetNbUserResponde>('http://localhost:3800/api/conge/getnbcongea')
      .subscribe((data) => {
        if (data.status == 200) {
          this.data_Nb_Conge_A = JSON.stringify(data.NbUsers);
        } else {
          this.data_Nb_Conge_A = '501';
        }
      });
    this.http
      .get<GetNbUserResponde>('http://localhost:3800/api/conge/getnbcongew')
      .subscribe((data) => {
        if (data.status == 200) {
          this.data_Nb_Conge_W = JSON.stringify(data.NbUsers);
        } else {
          this.data_Nb_Conge_W = '501';
        }
      });
    this.http
      .get<GetNbUserResponde>('http://localhost:3800/api/conge/getnbconger')
      .subscribe((data) => {
        if (data.status == 200) {
          this.data_Nb_Conge_R = JSON.stringify(data.NbUsers);
        } else {
          this.data_Nb_Conge_R = '501';
        }
      });
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetNbUserResponde } from 'src/app/interfaces/GetNbUsers-response';

@Component({
  selector: 'app-body-dashboard',
  templateUrl: './body-dashboard.component.html',
  styleUrls: ['./body-dashboard.component.css'],
})
export class BodyDashboardComponent implements OnInit {
  data_Nb_Conge_A: string = '401';
  data_Nb_Conge_W: string = '401';
  data_Nb_Conge_R: string = '401';
  data_Nb_Conge_RS: string = '401';
  userId = '951f9e63-8b5e-41b8-ba2f-3ac72fdf2786';

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    const tokon = localStorage.getItem('tk');
    this.http
      .post<GetNbUserResponde>(
        'http://localhost:3800/api/conge/getnbcongersuser',
        {},
        {
          headers: {
            Authorization: `Bearer ${tokon}`,
          },
        }
      )
      .subscribe((data) => {
        if (data.status == 200) {
          this.data_Nb_Conge_RS = JSON.stringify(data.NbUsers);
        } else {
          this.data_Nb_Conge_RS = '501';
        }
      });
    this.http
      .post<GetNbUserResponde>(
        'http://localhost:3800/api/conge/getnbcongeauser',
        {},
        {
          headers: {
            Authorization: `Bearer ${tokon}`,
          },
        }
      )
      .subscribe((data) => {
        if (data.status == 200) {
          this.data_Nb_Conge_A = JSON.stringify(data.NbUsers);
        } else {
          this.data_Nb_Conge_A = '501';
        }
      });
    this.http
      .post<GetNbUserResponde>(
        'http://localhost:3800/api/conge/getnbcongewuser',
        {},
        {
          headers: {
            Authorization: `Bearer ${tokon}`,
          },
        }
      )
      .subscribe((data) => {
        if (data.status == 200) {
          this.data_Nb_Conge_W = JSON.stringify(data.NbUsers);
        } else {
          this.data_Nb_Conge_W = '501';
        }
      });
    this.http
      .post<GetNbUserResponde>(
        'http://localhost:3800/api/conge/getnbcongeruser',
        {},
        {
          headers: {
            Authorization: `Bearer ${tokon}`,
          },
        }
      )
      .subscribe((data) => {
        if (data.status == 200) {
          this.data_Nb_Conge_R = JSON.stringify(data.NbUsers);
        } else {
          this.data_Nb_Conge_R = '501';
        }
      });
  }
}

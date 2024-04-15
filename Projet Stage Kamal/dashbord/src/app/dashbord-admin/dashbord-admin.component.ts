import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CommonService } from '../shared/common.service';
import { AuthService } from '../services/auth.service';
import { UserInfoResponse } from '../interfaces/UserInfo-response';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashbord-admin',
  templateUrl: './dashbord-admin.component.html',
  styleUrls: ['./dashbord-admin.component.css'],
})
export class DashbordAdminComponent implements OnInit {
  sidebar: any;
  closeBtn: any;
  searchBtn: any;
  isOpen: boolean = false;
  UserFullName!: string;
  status!: string;

  ngOnInit() {
    const tokon = localStorage.getItem('tk');
    if (tokon) {
      this.http
        .get<UserInfoResponse>('http://localhost:3800/api/user/getuserinfo', {
          headers: {
            Authorization: `Bearer ${tokon}`,
          },
        })
        .subscribe((resp) => {
          this.UserFullName =
            resp.userinfo?.prenom.toUpperCase() + ' ' + resp.userinfo?.nom;
          this.status = resp.userinfo?.statue_user || '';
        });
    } else {
    }
  }

  ToggleOpen() {
    this.isOpen = !this.isOpen;
  }

  constructor(
    private router: Router,
    private shared: CommonService,
    private readonly auth: AuthService,
    private http: HttpClient
  ) {}

  log_out() {
    this.auth.logout();
  }
}

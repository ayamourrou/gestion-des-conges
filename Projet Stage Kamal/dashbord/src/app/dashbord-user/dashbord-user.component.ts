import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../shared/common.service';
import { AuthInfosResponse, AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { UserInfoResponse } from '../interfaces/UserInfo-response';

@Component({
  selector: 'app-dashbord-user',
  templateUrl: './dashbord-user.component.html',
  styleUrls: ['./dashbord-user.component.css'],
})
export class DashbordUserComponent implements OnInit {
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
        .subscribe(async (resp) => {
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

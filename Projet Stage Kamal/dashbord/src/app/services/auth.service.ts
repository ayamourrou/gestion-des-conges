import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../interfaces/login-response';
import { Router } from '@angular/router';
import { Observable, map, switchMap, tap } from 'rxjs';

export interface AuthInfos {
  isAuth: boolean;
  authStatus: 'admin' | 'user';
}

export interface AuthInfosResponse {
  msg: string;
  status: number;
  data?: AuthInfos;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _authInfos: AuthInfos | null = null;
  private _jwtToken: string | null = null;

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {
    this.loadTokenFromLocalStorage(); // Load token when AuthService is created
  }

  private loadTokenFromLocalStorage() {
    const token = localStorage.getItem('tk');
    if (token) {
      this._jwtToken = token;
      this.refreshAuthInfo(); // Refresh auth information from server
    }
  }

  private saveTokenInLocalStorage() {
    if (this._jwtToken && this._jwtToken !== '') {
      localStorage.setItem('tk', this._jwtToken);
      this.refreshAuthInfo();
    }
  }

  private refreshAuthInfo(): void {
    if (this._jwtToken) {
      this.http
        .get<AuthInfosResponse>('http://localhost:3800/api/auth/', {
          headers: {
            Authorization: `Bearer ${this._jwtToken}`,
          },
        })
        .subscribe((resp: AuthInfosResponse) => {
          this._authInfos = resp.data || null;
        });
    }
  }

  public login(username: string, password: string): Observable<void> {
    const requestBody = {
      username: username,
      password: password,
    };

    return this.http
      .post<LoginResponse>('http://localhost:3800/api/auth/login', requestBody)
      .pipe(
        tap((data: LoginResponse) => {
          if (data.status === 200) {
            this._jwtToken = data.token || '';
            this.saveTokenInLocalStorage();
            this.router.navigate(['/dashboard/admin/']);
          } else {
            // console.error('NOT AUTH');
          }
        }),
        switchMap(async () => this.refreshAuthInfo()) // Refresh auth information from the server
      );
  }

  public logout(): Observable<void> {
    this._jwtToken = null;
    this._authInfos = null;

    localStorage.removeItem('tk');

    this.router.navigate(['/login']);

    return new Observable<void>((observer) => {
      observer.next();
      observer.complete();
    });
  }

  public isAnAdmin(): Observable<boolean> {
    if (this._jwtToken) {
      return this.http
        .get<AuthInfosResponse>('http://localhost:3800/api/auth/', {
          headers: {
            Authorization: `Bearer ${this._jwtToken}`,
          },
        })
        .pipe(
          tap((resp: AuthInfosResponse) => {
            this._authInfos = resp.data ?? null;
          }),
          map((resp: AuthInfosResponse) => resp.data?.authStatus === 'admin')
        );
    } else {
      return new Observable<boolean>((observer) => {
        observer.next(false);
        observer.complete();
      });
    }
  }

  public isAuthenticated(): Observable<boolean> {
    if (this._jwtToken) {
      return this.http
        .get<AuthInfosResponse>('http://localhost:3800/api/auth/', {
          headers: {
            Authorization: `Bearer ${this._jwtToken}`,
          },
        })
        .pipe(
          tap((resp: AuthInfosResponse) => {
            this._authInfos = resp.data ?? null;
          }),
          map((resp: AuthInfosResponse) => !!resp.data?.isAuth)
        );
    } else {
      return new Observable<boolean>((observer) => {
        observer.next(false);
        observer.complete();
      });
    }
  }

  get authInfos(): AuthInfos | null {
    return this._authInfos;
  }

  get jwtToken(): string | null {
    return this._jwtToken;
  }
}

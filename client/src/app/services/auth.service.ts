import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';

import '../shared/rxjs-operators';
import { ILoginForm, IRegisterForm, IMovie } from '../shared/interfaces';
import { UserUtils } from './userUtils';

@Injectable()
export class AuthService {
  private headers: Headers;
  private options: RequestOptions;

  constructor(private http: Http, private authHttp: AuthHttp) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  register(formData: IRegisterForm): Observable<boolean> {
    return this.post(formData, 'https://gentle-tor-88697.herokuapp.com/api/register');
  }

  login(formData: ILoginForm): Observable<boolean> {
    return this.post(formData, 'https://gentle-tor-88697.herokuapp.com/api/login');
  }

  logout(): void {
    localStorage.removeItem('id_token');
    localStorage.removeItem('user_info');
  }

  loggedIn(): boolean {
    return tokenNotExpired();
  }

  private post(data, url): Observable<boolean | Error> {
    return this.http.post(url, data, this.options)
      .map((res: Response) => {
        const data = res.json() || {};

        if (!data.token) { return false; }

        localStorage.setItem('id_token', data.token);

        return true;
      })
      .catch(err => UserUtils.handleError(err));
  }
}
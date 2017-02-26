import { Injectable }         from '@angular/core';
import {
  Http, Headers,
  Response, RequestOptions }  from '@angular/http';
import { Observable }         from 'rxjs/Observable';
import { 
  ILoginForm, IRegisterForm } from '../../shared/interfaces';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  private token: string;
  private headers: Headers;
  private options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  register(formData: IRegisterForm): Observable<boolean | Error> {
    // const dataToBeSubmitted: IRegisterForm = {
    //   first_name: formData.first_name,
    //   last_name: formData.last_name,
    //   email: formData.email,
    //   password: formData.password,
    // };
    const url: string = 'https://gentle-tor-88697.herokuapp.com/api/register';

    return this.request(formData, url);
  }

  login(formData: ILoginForm): Observable<boolean | Error> {
    const dataToBeSubmitted: ILoginForm = {
      email: formData.email,
      password: formData.password,
    };
    const url: string = 'https://gentle-tor-88697.herokuapp.com/api/login';

    return this.request(dataToBeSubmitted, url);
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    return this.token !== null;
  }

  private request(data, url): Observable<boolean | Error> {
    console.log(data);
    return this.http.post(url, data, this.options)
      .map((res: Response) => {
        const data = res.json() || {};

        if (!data.token) {
          return false;
        }

        this.token = data.token;
        localStorage.setItem('currentUser', JSON.stringify({ token: this.token }));
        return true;
      })
      .catch(err => this.handleError(err));
  }

  private handleError(err: any): Observable<Error> {
    let errorMessage: string = 'Something went wrong';
    const body = err.json() || {};

    if (body.message) {
      errorMessage = body.message;
    }

    return Observable.throw(errorMessage);
  }
}
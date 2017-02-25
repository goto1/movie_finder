import { Injectable }               from '@angular/core';
import { Http, Headers, 
  Response, RequestOptions }        from '@angular/http';
import { Observable }               from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface IUser {
  email: string;
  password: string;
};

const url = 'https://gentle-tor-88697.herokuapp.com/api/login';

@Injectable()
export class LoginService { 
  public token: string;

  constructor(private http: Http) { }

  login(email: string, password: string): Observable<boolean> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(url, { email, password }, options)
      .map((res: Response) => {
        let token = res.json().token || '';

        if (!token) {
          return false;
        }

        this.token = token;
        localStorage.setItem('currentUser', JSON.stringify({ token }));

        return true;
      });
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('currentUser');
  }
}
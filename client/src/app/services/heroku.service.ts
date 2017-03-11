import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

interface WakeupResponse {
  status: number;
  message: string;
};

@Injectable()
export class HerokuService {

  private url = 'https://gentle-tor-88697.herokuapp.com/api/wakeup';

  constructor(private http: Http) { }

  wakeUp(): Observable<WakeupResponse> {
    return this.http.get(this.url)
      .map((res: Response) => res.json() || {})
      .catch(err => Observable.throw('Could not wake up the server'));
  }
}
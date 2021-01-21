import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient : HttpClient) { }

  createUser(user: User): Observable<Object>{
    let url = 'http://localhost:8080/useradd';
    return this.httpClient.post(url, User);
  }

  verifyLisence(lisenceId : number): Observable<User>{
    return this.httpClient.get<User>(`${this.lisenceURL}/${lisenceId}`);
  }

  forgotPasswordFn(password : string): Observable<User>{
    return this.httpClient.get<User>(`${this.forgotPasswordURL}/${password}`);

  }

}

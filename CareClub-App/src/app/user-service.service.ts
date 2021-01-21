import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { UserReg } from './_model/userReg';
import { Login } from './_model/login';
import { LoginStatus } from './_model/login-status';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient : HttpClient) { }

  createUser(userReg: UserReg): Observable<Object>{
    let url = 'http://localhost:8080/useradd';
    return this.httpClient.post(url, UserReg);
  }
  login(login: Login) : Observable<LoginStatus> {
    let url = 'http://localhost:8080/login';
    return this.httpClient.post<LoginStatus>(url, login);
  }

  // verifyLisence(lisenceId : number): Observable<User>{
  //   return this.httpClient.get<User>(`${this.lisenceURL}/${lisenceId}`);
  // }

  

}

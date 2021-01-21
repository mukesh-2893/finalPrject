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

<<<<<<< HEAD
  private baseURL = "http://localhost:8080/useradd";
  private lisenceURL = "http://localhost:8080/licenseVerify";
  private forgotPasswordURL = "http://localhost:8080/api/"

  constructor(private httpClient: HttpClient) { }

  createUser(user: Object): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, user);
  }

  verifyLisence(lisenceId: number): Observable<User> {
    return this.httpClient.get<User>(`${this.lisenceURL}/${lisenceId}`);
  }

  forgotPasswordFn(password: string): Observable<User> {
    return this.httpClient.get<User>(`${this.forgotPasswordURL}/${password}`);
=======
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
>>>>>>> 2bbd8720c3f7ceeb70ca8080fc129913841daa1f

  

}

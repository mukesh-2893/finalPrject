import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

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

  }

}

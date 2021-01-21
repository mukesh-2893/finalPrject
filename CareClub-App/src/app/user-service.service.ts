import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { UserReg } from './_model/userReg';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient : HttpClient) { }

  createUser(userReg: UserReg): Observable<Object>{
    let url = 'http://localhost:8080/useradd';
    return this.httpClient.post(url, UserReg);
  }

  // verifyLisence(lisenceId : number): Observable<User>{
  //   return this.httpClient.get<User>(`${this.lisenceURL}/${lisenceId}`);
  // }

  

}

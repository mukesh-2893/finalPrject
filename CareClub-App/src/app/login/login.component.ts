import { Component, OnInit } from '@angular/core';

import{ faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import{ faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import{ Router } from '@angular/router';
import { UserReg } from '../_model/userReg';
import { UserServiceService } from '../user-service.service';
import { Login } from '../_model/login';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Edited
  public faUnlockAlt=faUnlockAlt;
  public faShoppingCart=faShoppingCart;
/*
  //for username 
  public unamecontrol= new FormControl('',[
    Validators.required,
    Validators.min(5),
    Validators.max(10),
    Validators.pattern(/([a-z][A-z][0-9]){1}/),
  ]);
  
  //for password
  public passcontrol= new FormControl('',[
    Validators.required,
    Validators.min(5),
    Validators.max(10),
    Validators.pattern(/([a-z][A-z][0-9]){1}/),
  ]);
  
*/

    fbFormGroup=this.fb.group({
    username:['',[ Validators.required,
      Validators.email]],
    password:['',[ Validators.required,
      Validators.min(5),
      Validators.max(10),
      Validators.pattern(/([a-z][A-z][0-9]){1}/),]]  
  });

  //constructor() { }
  constructor(private fb: FormBuilder , private http: HttpClient,private router: Router,
    private userService : UserServiceService) { }

  ngOnInit(): void {
  }

  public userReg: UserReg = new UserReg();

  // login(){
  //   let user = {
  //     'email' : this.userReg.email,
  //     'password' : this.userReg.password
  //   }

  //   alert(JSON.stringify(user));
  // }
  
  login: Login = new Login();

  loginCheck() {
    alert(JSON.stringify(this.login));
    this.userService.login(this.login).subscribe(loginStatus => {
      //alert(JSON.stringify(loginStatus));
      if(loginStatus.status == 'SUCCESS') {
        sessionStorage.setItem('userId', String(loginStatus.userId));
        sessionStorage.setItem('name', loginStatus.name);
        this.router.navigate(['userHome']);
      }
    })
  }

  gotoNGOSignUp(){
    this.router.navigate(['ngo_registration']);
  }

  gotoUserSignUp(){
    this.router.navigate(['user_registration']);
  }

}

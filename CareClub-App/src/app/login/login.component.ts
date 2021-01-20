import { Component, OnInit } from '@angular/core';

import{ faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import{ faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import{ Router } from '@angular/router';


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
  constructor(private fb: FormBuilder , private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
  }

  async userLogin(){
    const data=this.fbFormGroup.value;
    console.log(data);

    const url ='http://localhost:3000/adminlogin';
    const result= await this.http.post(url,data).toPromise();
    console.log(result);
    
    sessionStorage.setItem('sid','true');
    this.router.navigate(['']);
    this.fbFormGroup.reset();
  }


  gotoNGOSignUp(){
    this.router.navigate(['ngo_registration']);
  }

  gotoUserSignUp(){
    this.router.navigate(['user_registration']);
  }

}

import { Component, OnInit } from '@angular/core';

import{ faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import{ faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import{ Router } from '@angular/router';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  fbFormGroup=this.fb.group({
    //Username
    name:['',[ Validators.required,
      Validators.min(5),
      Validators.max(20),]],
    
      //Email
    emailid:['',[ Validators.required,
        Validators.email,]],
    
    //ContactNo
    contactno:['',[ Validators.required,
      Validators.min(0),
      Validators.max(10),]],
    
    //Password
    password:['',[ Validators.required,
      Validators.min(5),
      Validators.max(10),
      //Validators.pattern(/([a-z][A-z][0-9]){1}/),
      ]],

    //Address
    address:['',[ Validators.required,]],

    });

  //constructor() { }
  constructor(private fb: FormBuilder , private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
  }

  async sighup(){
    // const data=this.fbFormGroup.value;
    // console.log(data);

    // const url ='http://localhost:3000/adminlogin';
    // const result= await this.http.post(url,data).toPromise();
    // console.log(result);
    
    // sessionStorage.setItem('sid','true');
    // this.router.navigate(['']);
    // this.fbFormGroup.reset();
  }
  gotologin(){
    this.router.navigate(['login']);
  }

}

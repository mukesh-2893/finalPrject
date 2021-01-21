import { Component, OnInit } from '@angular/core';

import{ faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import{ faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { UserReg } from '../_model/userReg';
import { UserServiceService } from '../user-service.service'
import {Address} from '../_model/address';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { M_Role } from '../_model/m_Role';

@Component({
  selector: 'app-ngo-registration',
  templateUrl: './ngo-registration.component.html',
  styleUrls: ['./ngo-registration.component.css']
})

export class NGORegistrationComponent implements OnInit {

  

  //Edited
  public faUnlockAlt=faUnlockAlt;
  public faShoppingCart=faShoppingCart;

  
    fbFormGroup=this.fb.group({
    
    name:['',[ Validators.required,
      Validators.min(5),
      Validators.max(20),]],
    
      //Email
    emailid:['',[ Validators.required,
        Validators.email,]],
    
    //ContactNo
    mobileNo:['',[ Validators.required,
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

    //Userrole
    userrole:['',[ Validators.required]],

    //NicenseNo
    licenseno:['',[ Validators.required,
      Validators.min(5),
      Validators.max(10),
    ]],
    
    //NgoCategory
    ngocategory:['',[ Validators.required]],

  });

  //constructor() { }
  constructor(private fb: FormBuilder , private http: HttpClient,private router: Router,
     private userService : UserServiceService, private route: ActivatedRoute) { }
  

     
  submitted = false;
  ngOnInit(): void {
    this.submitted = false;
   }

  gotologin() {
    this.router.navigate(['login']);
  }
  public userReg: UserReg = new UserReg();
  public address: Address = new Address();
  public m_Role : M_Role = new M_Role();

  
  // role(){
  // var i =  this.m_Role.roleId;
  // alert(i);
  // };

  signUp() {
    let user = {
      'm_Role' :
       { 'roleId' : this.m_Role.roleId },
      'name' : this.userReg.name,
      'email' : this.userReg.email,
      'mobileNo' : this.userReg.mobileNo,
      'password' : this.userReg.password,
      'address' : 
        {
        'roomNo' : this.address.roomNo,
        'area' : this.address.area,
        'city' : this.address.city,
        'district' : this.address.district,
        'pincode' : this.address.pincode
      }
    }
    alert(JSON.stringify(user));
  }

  // signUp(){
  //   // console.log(this.user);

  //   alert(JSON.stringify(this.userReg));
  //   alert(JSON.stringify(this.userReg));
  //   this.userService.createUser(this.userReg).subscribe(response => {
  //     alert(JSON.stringify(response));
  //     // if(response. == 'SUCCESS')
  //     // sessionStorage.setItem('customerId', responce.registerCustomerId);
  //     // this.router.navigate(['thankyou']);
  //   })
  // }
  }

  
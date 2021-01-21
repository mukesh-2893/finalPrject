import { Component, OnInit } from '@angular/core';

import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { UserReg } from '../_model/userReg';
import { UserServiceService } from '../user-service.service'
<<<<<<< HEAD
import {Address} from '../_model/address';
=======
import { Address } from '../address';
>>>>>>> 206d70b8e6758f20324985e2a78f70473f1b366a
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { M_Role } from '../_model/m_Role';

@Component({
  selector: 'app-ngo-registration',
  templateUrl: './ngo-registration.component.html',
  styleUrls: ['./ngo-registration.component.css']
})

export class NGORegistrationComponent implements OnInit {



  //Edited
  public faUnlockAlt = faUnlockAlt;
  public faShoppingCart = faShoppingCart;


  fbFormGroup = this.fb.group({

    name: ['', [Validators.required,
    Validators.min(5),
    Validators.max(20),]],

    //Email
    emailid: ['', [Validators.required,
    Validators.email,]],

    //ContactNo
    mobileNo:['',[ Validators.required,
      Validators.min(0),
      Validators.max(10),]],
    
    //Password
    password: ['', [Validators.required,
    Validators.min(5),
    Validators.max(10),
      //Validators.pattern(/([a-z][A-z][0-9]){1}/),
    ]],

    //Address
    address: ['', [Validators.required,]],

    //Userrole
    userrole: ['', [Validators.required]],

    //NicenseNo
    licenseno: ['', [Validators.required,
    Validators.min(5),
    Validators.max(10),
    ]],

    //NgoCategory
    ngocategory: ['', [Validators.required]],

  });

  //constructor() { }
<<<<<<< HEAD
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router,
    private userService: UserServiceService, private route: ActivatedRoute) { }

=======
  constructor(private fb: FormBuilder , private http: HttpClient,private router: Router,
     private userService : UserServiceService, private route: ActivatedRoute) { }
  
<<<<<<< HEAD

     
=======
>>>>>>> 2bbd8720c3f7ceeb70ca8080fc129913841daa1f
>>>>>>> 206d70b8e6758f20324985e2a78f70473f1b366a
  submitted = false;
  ngOnInit(): void {
    this.submitted = false;
  }

<<<<<<< HEAD
  saveUser() {
    // this.user = new User();
    // this.user.lisenceId = this.lisenceId.value;
    // this.user.name = this.user.


    this.userService.createUser(this.user).subscribe(data => {
      console.log(data);
      this.gotologin();
    },
      error => console.log(error));
  }

=======
>>>>>>> 2bbd8720c3f7ceeb70ca8080fc129913841daa1f
  gotologin() {
    this.router.navigate(['login']);
  }
<<<<<<< HEAD
  public userReg: UserReg = new UserReg();
  public address: Address = new Address();
  public m_Role : M_Role = new M_Role();
=======
  // userReg: UserReg = new UserReg();
  address: Address = new Address();

<<<<<<< HEAD
  lisenceId: any;
  Category: any;
  name: any;
  email: any;
  contactNo: any;
  password: any;
  blockNo: any;
  area: any;
  city: any;
  district: any;
  pincode: number;



  sighup(): void {
    // console.log(this.user);

    let addNGO = {
      Category: this.Category,
      name: this.name,
      email: this.name,
      contactNo: this.contactNo,
      password: this.password,
      blockNo: this.blockNo,
      area: this.area,
      city: this.city,
      district: this.district,
      pincode: this.pincode,
    };

    let url = "http://localhost:8080/adduser";
    this.http.post('url', addNGO).subscribe((resp) => {
      this.router.navigate(['login']);
    });
  }

  verifyLisence(): void {
    let checked = {
      lisenceId: this.lisenceId,
    };

    let url = "write url here";
    this.http.post('url', checked).subscribe((resp) => {
      alert("lisence verified");
    });
=======

  sighup(){
    // console.log(this.user);
>>>>>>> 206d70b8e6758f20324985e2a78f70473f1b366a

  
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
<<<<<<< HEAD

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
=======
>>>>>>> 2bbd8720c3f7ceeb70ca8080fc129913841daa1f
>>>>>>> 206d70b8e6758f20324985e2a78f70473f1b366a
  }

  
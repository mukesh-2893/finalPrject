import { Component, OnInit } from '@angular/core';

import{ faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import{ faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { User } from '../user';
import { UserServiceService } from '../user-service.service'
import {Address} from '../address';
import { analyzeAndValidateNgModules } from '@angular/compiler';

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

  gotologin() {
    this.router.navigate(['login']);
  }
  user: User = new User();
  address: Address = new Address();

  lisenceId : any;
  Category : any;
  name :any;
  email: any;
  contactNo : any;
  password : any;
  blockNo : any;
  area : any;
  city : any;
  district : any;
  pincode : number;



  sighup(): void{
    // console.log(this.user);

    let addNGO = {
      Category : this.Category,
      name : this.name,
      email : this.name,
      contactNo : this.contactNo,
      password : this.password,
      blockNo : this.blockNo,
      area : this.area,
      city : this.city,
      district : this.district,
      pincode : this.pincode,
    };

    let url = "http://localhost:8080/addNGO";
    this.http.post('url', addNGO).subscribe((resp) => {
      this.router.navigate(['login']);
    });
  }

  verifyLisence(): void{
    let checked = {
      lisenceId:this.lisenceId,
    };

    let url = "write url here";
    this.http.post('url', checked).subscribe((resp) => {
      alert("lisence verified");
    });
  }
}

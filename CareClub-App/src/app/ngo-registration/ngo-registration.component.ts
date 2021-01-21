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

  gotologin() {
    this.router.navigate(['login']);
  }
  user: User = new User();
  address: Address = new Address();


  sighup(){
    // console.log(this.user);

    alert(JSON.stringify(this.user));
    this.userService.createUser(this.user).subscribe(responce => {
      // alert(JSON.stringify(responce));
      if(responce.status == 'SUCCESS')
      sessionStorage.setItem('customerId', responce.registerCustomerId);
      this.router.navigate(['thankyou']);
    })
  }
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

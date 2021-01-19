import { Component, OnInit } from '@angular/core';

import{ faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import{ faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { User } from '../user';
import { UserServiceService } from '../user-service.service'


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
    // username:['',[ Validators.required,
    //   Validators.min(5),
    //   Validators.max(10),
    //   Validators.pattern(/([a-z][A-z][0-9]){1}/),]],
    // password:['',[ Validators.required,
    //   Validators.min(5),
    //   Validators.max(10),
    //   Validators.pattern(/([a-z][A-z][0-9]){1}/),]]
    
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

  user: User = new User();
  lisenceId : number;
  ngOnInit(): void { }

  saveUser() {
    this.userService.createUser(this.user).subscribe(data => {
      console.log(data);
      this.gotologin();
    },
    error => console.log(error));
  }

  gotologin() {
    this.router.navigate(['login']);
  }

  sighup() {
    console.log(this.user);
    this.saveUser();
  }

  verifyLisence(){
    this.userService.verifyLisence(this.lisenceId).subscribe( data => {
      console.log("verify");
      this.router.navigate(['ngo_registration']);
    })
  }
}

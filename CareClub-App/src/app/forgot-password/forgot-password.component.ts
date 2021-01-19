import { Component, OnInit } from '@angular/core';

import{ faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import{ faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import{ Router } from '@angular/router';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  public faUnlockAlt=faUnlockAlt;
  public faShoppingCart=faShoppingCart;

   fbFormGroup = this.fb.group({
    username:['',[ Validators.required,
      Validators.email]]});

  constructor(private fb: FormBuilder , private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
  }

  gotoLogin(){
    this.router.navigate(['login']);
  }
  gotoSignUp(){
    this.router.navigate(['ngo_registration']);
  }

  resetpassword(){

  }
}

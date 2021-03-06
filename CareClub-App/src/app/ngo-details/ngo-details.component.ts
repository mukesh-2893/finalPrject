import { Component, OnInit } from '@angular/core';

import { RouteConfigLoadEnd } from '@angular/router';
import{ Router } from '@angular/router';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { UserReg } from '../_model/userReg';
import { Post } from '../_model/post';
import {Address} from '../_model/address';

@Component({
  selector: 'app-ngo-details',
  templateUrl: './ngo-details.component.html',
  styleUrls: ['./ngo-details.component.css']
})
export class NgoDetailsComponent implements OnInit {

  //Object User
  
  post: Post = new Post();
  address : Address = new Address();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoNgoHome(){
    this.router.navigate(['ngoHome']);
  }

}

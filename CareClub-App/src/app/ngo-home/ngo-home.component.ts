import { Component, OnInit } from '@angular/core';

import { RouteConfigLoadEnd } from '@angular/router';
import{ Router } from '@angular/router';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { User } from '../user';
import { Post } from '../post';
import { Address } from '../address';

@Component({
  selector: 'app-ngo-home',
  templateUrl: './ngo-home.component.html',
  styleUrls: ['./ngo-home.component.css']
})
export class NgoHomeComponent implements OnInit {

  //Object User
  user: User = new User();
  post: Post = new Post();
  address : Address = new Address();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoNgoDetailsEdit(){
    this.router.navigate(['ngoDetailsEdit']);
  }

  gotoNgoDetails(){
    this.router.navigate(['ngoDetails']);
  }

  gotoViewPost(){
    
  }

}

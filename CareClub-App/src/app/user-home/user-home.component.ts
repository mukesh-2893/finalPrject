import { Component, OnInit } from '@angular/core';

import { RouteConfigLoadEnd } from '@angular/router';
import{ Router } from '@angular/router';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { UserReg } from '../_model/userReg';
import { Post } from '../_model/post';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  //Object User
  // user: User = new User();
  post: Post = new Post();
  //Constructor
  constructor(private fb: FormBuilder , private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

}


import { Component, OnInit } from '@angular/core';

import { RouteConfigLoadEnd } from '@angular/router';
import{ Router } from '@angular/router';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { User } from '../user';
import { Post } from '../post';
import { Address } from '../address';

@Component({
  selector: 'app-ngo-details-edit',
  templateUrl: './ngo-details-edit.component.html',
  styleUrls: ['./ngo-details-edit.component.css']
})
export class NgoDetailsEditComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  gotoNgoHome(){
    this.router.navigate(['ngoHome']);
  }

}

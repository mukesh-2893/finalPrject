import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd } from '@angular/router';
import{ Router } from '@angular/router';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private fb: FormBuilder , private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
  }

  gotoAbout(){
    this.router.navigate(['/about'])
  }

}

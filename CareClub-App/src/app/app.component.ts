import { Component } from '@angular/core';
import { Router } from '@angular/router';

//import { FormControl } from '@angular/forms';  //for form

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CareClub-App';

  constructor(private router:Router){}

  /* gotoLogin(page){
    this.router.navigate([page]);
  } */
}

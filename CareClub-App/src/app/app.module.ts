import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';  //for form
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NGORegistrationComponent } from './ngo-registration/ngo-registration.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { from } from 'rxjs';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { DonationComponent } from './donation/donation.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { PostComponent } from './post/post.component';
import { NgoHomeComponent } from './ngo-home/ngo-home.component';
import { NgoDetailsComponent } from './ngo-details/ngo-details.component';
import { NgoDetailsEditComponent } from './ngo-details-edit/ngo-details-edit.component';
// import {DataTablesModule} from '@angular/angular-datatables'; 
// import {User} from './user';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NGORegistrationComponent,
    ForgotPasswordComponent,
    HeaderComponent,
    AboutComponent,
    DonationComponent,
    UserHomeComponent,
    PostComponent,
    UserRegistrationComponent,
    NgoHomeComponent,
    NgoDetailsComponent,
    NgoDetailsEditComponent,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // DataTablesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




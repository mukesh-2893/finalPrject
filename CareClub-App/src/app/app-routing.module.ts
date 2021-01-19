import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { NGORegistrationComponent } from './ngo-registration/ngo-registration.component';
// import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { DonationComponent } from './donation/donation.component';
import { UserHomeComponent } from './user-home/user-home.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'ngo_registration', component: NGORegistrationComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'about', component: AboutComponent},
  { path: 'donation', component: DonationComponent },
  { path: 'userHome', component: UserHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

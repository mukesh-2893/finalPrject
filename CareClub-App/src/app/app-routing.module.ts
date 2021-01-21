import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { NGORegistrationComponent } from './ngo-registration/ngo-registration.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { DonationComponent } from './donation/donation.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { PostComponent } from './post/post.component';
import { NgoHomeComponent } from './ngo-home/ngo-home.component';
import { NgoDetailsComponent } from './ngo-details/ngo-details.component';
import { NgoDetailsEditComponent } from './ngo-details-edit/ngo-details-edit.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { NgoViewPostComponent } from './ngo-view-post/ngo-view-post.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'ngo_registration', component: NGORegistrationComponent },
  { path: 'user_registration', component: UserRegistrationComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'about', component: AboutComponent},
  { path: 'donation', component: DonationComponent },
  { path: 'userHome', component: UserHomeComponent },
  { path: 'post', component: PostComponent },
  { path: 'ngoHome', component: NgoHomeComponent },
  { path: 'ngoDetails', component: NgoDetailsComponent },
  { path: 'ngoDetailsEdit', component: NgoDetailsEditComponent },
  { path: 'createPost', component: CreatePostComponent },
  { path: 'ngo_viewPost', component: NgoViewPostComponent },
  { path: "**", redirectTo: 'login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './user/contact-us/contact-us.component';
import { HomeComponent } from './user/home/home.component';
import { MainContentComponent } from './user/main-content/main-content.component';
import { ProductViewComponent } from './user/product-view/product-view.component';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';

const routes: Routes = [{
  path:"",component:HomeComponent,
  children:[{path:"",component:MainContentComponent},
    {
    path:"signin",component:SigninComponent
  },{path:"product-view", component:ProductViewComponent},
{
  path:"signup",component:SignupComponent
},
{
  path:"contact",component:ContactUsComponent
}]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

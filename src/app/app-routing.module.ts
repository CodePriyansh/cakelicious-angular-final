import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './user/cart/cart.component';
import { CategoryWiseCakeComponent } from './user/category-wise-cake/category-wise-cake.component';
import { ContactUsComponent } from './user/contact-us/contact-us.component';
import { EmptyCartComponent } from './user/empty-cart/empty-cart.component';
import { FlavourViseComponent } from './user/flavour-wise-cake/flavour-vise.component';

import { HomeComponent } from './user/home/home.component';
import { MainContentComponent } from './user/main-content/main-content.component';
import { OccassionWiseCakeComponent } from './user/occassion-wise-cake/occassion-wise-cake.component';
import { ProductViewComponent } from './user/product-view/product-view.component';
import { SearchComponent } from './user/search/search.component';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';
import { AppGuardGuard } from './auth.guard'
import { ViewWishlistComponent } from './user/view-wishlist/view-wishlist.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: MainContentComponent },
      {
        path: 'signin',
        component: SigninComponent,
      },
      { path: 'product-view/:pId', component: ProductViewComponent },
      {
        path: 'signup',
        component: SignupComponent,
      },
      {
        path: 'contact',
        component: ContactUsComponent,
      },
      { path: 'searchProduct/:text', component: SearchComponent },
      { path: 'category-wise/:categoryId/:catName', component: CategoryWiseCakeComponent },
      { path: 'occassion-wise/:occassionId/:occName', component: OccassionWiseCakeComponent },
      {path:"flavour-wise/:fid/:fname",component:FlavourViseComponent},
      {path:"cart",component:CartComponent,canActivate:[AppGuardGuard]},
      {path:"empty-cart",component:EmptyCartComponent},
      {path:'view-wishlist',component:ViewWishlistComponent}


    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

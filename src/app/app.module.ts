import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './user/signup/signup.component';
import { SigninComponent } from './user/signin/signin.component';
import { HomeComponent } from './user/home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainContentComponent } from './user/main-content/main-content.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule ,HTTP_INTERCEPTORS } from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';
import { CacheInterceptorsService } from './interceptors/cache-interceptors.service';
import { InterceptorService } from './interceptors/interceptor.service';
import { SocialLoginModule , GoogleLoginProvider  } from 'angularx-social-login';
import { ProductViewComponent } from './user/product-view/product-view.component';
import { ContactUsComponent } from './user/contact-us/contact-us.component';
import { UpdateProfleComponent } from './user/update-profle/update-profle.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { SearchComponent } from './user/search/search.component';
import { OccassionWiseCakeComponent } from './user/occassion-wise-cake/occassion-wise-cake.component';
import { CategoryWiseCakeComponent } from './user/category-wise-cake/category-wise-cake.component';
import { FlavourViseComponent } from './user/flavour-wise-cake/flavour-vise.component';
import { CartComponent } from './user/cart/cart.component';
import { EmptyCartComponent } from './user/empty-cart/empty-cart.component';
import { AllproductComponent } from './user/allproduct/allproduct.component';
import { ViewWishlistComponent } from './user/view-wishlist/view-wishlist.component';


const socialProvider={
  provide:"SocialAuthServiceConfig",
  useValue:{
    providers:[{
      id:GoogleLoginProvider.PROVIDER_ID,
      provider:new GoogleLoginProvider("150365577052-cv0ao56rbs5t7ojg3lnirmpe5qpebuqn.apps.googleusercontent.com")

    }]
  }
};



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    MainContentComponent,
    ProductViewComponent,
    ContactUsComponent,
    UpdateProfleComponent,
    SearchComponent,
    OccassionWiseCakeComponent,
    CategoryWiseCakeComponent,
    FlavourViseComponent,
    CartComponent,
    EmptyCartComponent,
    AllproductComponent,
    ViewWishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule ,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
    FilterPipeModule,
    NgxPaginationModule,
    ToastrModule.forRoot()

  ],
  providers: [socialProvider,{
    provide : HTTP_INTERCEPTORS,
    useClass : InterceptorService,
    multi : true
  },
{
  provide:HTTP_INTERCEPTORS,
  useClass: CacheInterceptorsService,
  multi : true
}],
  bootstrap: [AppComponent]
})
export class AppModule { }

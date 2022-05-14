import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    SearchComponent
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

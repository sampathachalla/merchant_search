import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MerchantregistrationComponent } from './merchantregistration/merchantregistration.component';
import { MerchantsearchComponent } from './merchantsearch/merchantsearch.component';
import { HeaderComponent } from './header/header.component';
import { DetailsComponent } from './details/details.component';
import { MerchantHeaderComponent } from './merchant-header/merchant-header.component';
import { MerchantListComponent } from './merchant-list/merchant-list.component';
import { MerchantReviewsComponent } from './merchant-reviews/merchant-reviews.component';
import { MerchantUsersComponent } from './merchant-users/merchant-users.component';
import { MerchantStoreComponent } from './merchant-store/merchant-store.component';
import { StoreReviewsComponent } from './store-reviews/store-reviews.component';

const routes: Routes=[
  { path: '',redirectTo:'default',pathMatch:'full'},
  { path: 'login',component:LoginComponent},
  { path: 'home',component:HomeComponent},
  { path:'display/:merchantID',component:DetailsComponent},
  { path:'default',component:MerchantsearchComponent},
  { path:'merchant-register',component:MerchantregistrationComponent},
  { path: 'merchant-header',component:MerchantHeaderComponent},
  { path: 'merchant-list',component:MerchantListComponent },
  { path: 'merchant-reviews',component:MerchantReviewsComponent},
  { path: 'merchant-users',component:MerchantUsersComponent},
  { path: 'merchant-store/:merchantID',component:MerchantStoreComponent },
  { path: 'store-reviews/:merchantID', component:StoreReviewsComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MerchantregistrationComponent,
    MerchantsearchComponent,
    HeaderComponent,
    DetailsComponent,
    MerchantHeaderComponent,
    MerchantListComponent,
    MerchantReviewsComponent,
    MerchantUsersComponent,
    MerchantStoreComponent,
    StoreReviewsComponent,
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes, { useHash: true }),
    HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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

const routes: Routes=[
  { path: '',redirectTo:'login',pathMatch:'full'},
  { path: 'login',component:LoginComponent},
  { path: 'home',component:HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MerchantregistrationComponent,
    MerchantsearchComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes, { useHash: true }),
    HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

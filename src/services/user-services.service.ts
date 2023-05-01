import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private http: HttpClient) { }

  private baseUrl = "https://7ckjfc9la4.execute-api.ap-south-1.amazonaws.com/Merchant_Search"

  private endpoint = "/customer/user_login";
  customerLoginService(pL:any) {

  return this.http
    .post(`${this.baseUrl + this.endpoint}`,pL)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
  
private endpoint_menuSearch="/customer/search"
menuSearch(pL:any) {

  return this.http
    .post(`${this.baseUrl + this.endpoint_menuSearch}`,pL)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

private endpoint_merchantRegistration="/merchant/register-merchant"
merchantRegistration(pL:any) {

  return this.http
    .post(`${this.baseUrl + this.endpoint_merchantRegistration}`,pL)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

private endpoint_merchant_reviews="/merchant/merchant-reviews"
merchantReviews(pL:any) {

  return this.http
    .post(`${this.baseUrl + this.endpoint_merchant_reviews}`,pL)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

private endpoint_merchant_admins="/merchant/admins-list"
merchantAdmins(pL:any) {

  return this.http
    .post(`${this.baseUrl + this.endpoint_merchant_admins}`,pL)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

private endpoint_user_merchant_view="/customer/view-merchant"
userMerchantView(pL:any) {

  return this.http
    .post(`${this.baseUrl + this.endpoint_user_merchant_view}`,pL)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

private endpoint_admin_merchant_list="/merchant/merchats-view"
adminMerchantList(pL:any) {
  return this.http
    .post(`${this.baseUrl + this.endpoint_admin_merchant_list}`,pL)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }


}




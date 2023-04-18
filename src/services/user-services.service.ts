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
  
private endpoint_menuSearch="/customer/home_search"
menuSearch(pL:any) {

  return this.http
    .post(`${this.baseUrl + this.endpoint_menuSearch}`,pL)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

private endpoint_merchantRegistration="/customer/merchant_registration"
merchantRegistration(pL:any) {

  return this.http
    .post(`${this.baseUrl + this.endpoint_merchantRegistration}`,pL)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

}




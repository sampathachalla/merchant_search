import { Component } from '@angular/core';
import {UserServicesService} from "../../services/user-services.service";
import { Router } from '@angular/router';
import { MerchantReviewModel } from 'src/models/login-model';

@Component({
  selector: 'app-merchant-reviews',
  templateUrl: './merchant-reviews.component.html',
  styleUrls: ['./merchant-reviews.component.css']
})
export class MerchantReviewsComponent {

  constructor(private menuService:UserServicesService)
  {

  }
  ngOnInit(){
    this.loadMerchatReviews();
  }

  merchantReviewList:any;

  loadMerchatReviews(){
    //this.demo=new ResultModel();
    var payLoad={
      "op":"0"
    }
    this.menuService.merchantReviews(payLoad).subscribe((resp:any) =>{
      console.log(resp);
      this.merchantReviewList=resp.dataJ;
      if(resp.statusCode == 200 && resp.message == "success"){
        console.log(resp);
        this.merchantReviewList=resp.dataJ;
      }
      else{
        alert(JSON.stringify(resp.info));
      }
    },
      error => {
        if (error.error.message = "Unauthorized") {
          console.log("Unauthorized: " + error.error.message);
        }
      
    });
  }

  goToAdminReviewAccept(merchantObject1:any){
    console.log(merchantObject1.merchant_id,merchantObject1.t_s)
    var payLoad={
      "op": "2",
     "merchant_id": merchantObject1.merchant_id,
     "review_id": merchantObject1.t_s,
     "adminO": "1",
    }
    this.menuService.merchantReviews(payLoad).subscribe((resp:any) =>{
    
      if(resp.statusCode == 200 && resp.message == "success"){
        console.log(resp);
        alert(JSON.stringify("Review Approved"));
      }
      else{
        alert(JSON.stringify(resp.info));
      }
    },
      error => {
        if (error.error.message = "Unauthorized") {
          console.log("Unauthorized: " + error.error.message);
        }
    });
    
  }
  goToAdminReviewReject(merchantObject2:any){
    console.log(merchantObject2.merchant_id,merchantObject2.t_s)
    var payLoad={
      "op": "2",
     "merchant_id": merchantObject2.merchant_id,
     "review_id": merchantObject2.t_s,
     "adminO": "0",
    }
    this.menuService.merchantReviews(payLoad).subscribe((resp:any) =>{
      if(resp.statusCode == 200 && resp.message == "success"){
        console.log(resp);
        alert(JSON.stringify("Review Rejected"));
      }
      else{
        alert(JSON.stringify(resp.info));
      }
    },
      error => {
        if (error.error.message = "Unauthorized") {
          console.log("Unauthorized: " + error.error.message);
        }
    });
  }

  

}

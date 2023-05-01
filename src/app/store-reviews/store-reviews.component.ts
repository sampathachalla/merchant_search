import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserServicesService} from "../../services/user-services.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-store-reviews',
  templateUrl: './store-reviews.component.html',
  styleUrls: ['./store-reviews.component.css']
})
export class StoreReviewsComponent {

  merchantID: string ="";
  constructor(private route: ActivatedRoute,private menuService:UserServicesService,private router: Router) {
   // this.merchantID = this.route.snapshot.paramMap.get('id');
    this.route.params.subscribe((params) => {
      this.merchantID = params["merchantID"];
      console.log(this.merchantID );
    })
    
  }

  ngOnInit(){
    this.loadMerchantReviews();
  }
  merchantReviewDetails:any;
  loadMerchantReviews(){

    var payLoad={
      "op":"1",
      "merchant_id":this.merchantID
    }
    this.menuService.merchantReviews(payLoad).subscribe((resp:any) =>{
      
      if(resp.statusCode == 200 && resp.message =="success")
      {
        console.log(resp);
        this.merchantReviewDetails=resp.dataJ;
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

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserServicesService} from "../../services/user-services.service";
import { Router } from '@angular/router';
import { userMerchantViewModel } from 'src/models/login-model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  visible1: boolean=false;

  merchantID: string = "";
  constructor(private route: ActivatedRoute,public menuService:UserServicesService) {
   // this.merchantID = this.route.snapshot.paramMap.get('id');
    this.route.params.subscribe((params) => {
      this.merchantID = params["merchantID"];
      console.log(this.merchantID );
    })
    this.reviewModel = new userMerchantViewModel()
  }
  ngOnInit(){
    this.getMerchantDetails();
    this.addUserReview();
  }


  review_click()
  {
    this.visible1=!this.visible1;
  }
  userMerchantList:any;
  userReviewList:any;
  reviewModel:any;

  getMerchantDetails(){
    var payLoad={
      "op":"0",
      "M_ID":this.merchantID,
      "user_id": "",
      "user_name": "",
      "user_rating": "",
      "user_review": ""
    }
    this.menuService.userMerchantView(payLoad).subscribe((resp:any) =>{
      console.log(resp);
      this.userMerchantList=resp.dataJ[0];
      this.userReviewList=resp.dataJ[1];
      console.log(this.userMerchantList);
      console.log(this.userReviewList);
      
    });
    
    
  }

  addUserReview(){
    var payLoad={
      "op":"1",
      "M_ID":this.merchantID,
      "user_id": this.reviewModel.user_id,
      "user_name": this.reviewModel.user_name,
      "user_rating": "3",
      "user_review": this.reviewModel.user_review
    }
    this.menuService.userMerchantView(payLoad).subscribe((resp:any) =>{
      console.log(resp);
      if(resp.statusCode == 200 && resp.message == "success"&& resp.info == "valid"){
        console.log(resp)
        alert(JSON.stringify(resp))
      }
      /*else{
        alert(JSON.stringify(resp));
      }*/
    },
    error => {
      if (error.error.message = "Unauthorized") {
        console.log("Unauthorized: " + error.error.message);
      }
      
      
    });
    
    
  }

}

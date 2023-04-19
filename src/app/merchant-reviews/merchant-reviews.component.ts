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

  constructor(public menuService:UserServicesService)
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
      console.log(resp.dataJ);
      this.merchantReviewList=resp.dataJ;
      
    });
  }

}

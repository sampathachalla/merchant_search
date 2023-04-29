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

}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserServicesService} from "../../services/user-services.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-merchant-store',
  templateUrl: './merchant-store.component.html',
  styleUrls: ['./merchant-store.component.css']
})
export class MerchantStoreComponent {

  merchantID: string ="";
  constructor(private route: ActivatedRoute,public menuService:UserServicesService,private router: Router) {
   // this.merchantID = this.route.snapshot.paramMap.get('id');
    this.route.params.subscribe((params) => {
      this.merchantID = params["merchantID"];
      console.log(this.merchantID );
    })
    
  }
  ngOnInit(){
    this.loadMerchantDetails();
  }
  merchantDetails:any;
  loadMerchantDetails(){

    var payLoad={
      "op":"1",
      "M_ID":this.merchantID
    }
    this.menuService.adminMerchantList(payLoad).subscribe((resp:any) =>{
      console.log(resp);
      this.merchantDetails=resp;
    });

  }

  goToAdminMerchantReviews(merchantObject:any){
    this.router.navigate(['/store-reviews'+"/"+merchantObject.M_ID]);
  }

}

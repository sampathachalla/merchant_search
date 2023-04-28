import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RegisterModel } from 'src/models/merchantRegister-model';
import { UserServicesService } from 'src/services/user-services.service';

@Component({
  selector: 'app-merchant-store',
  templateUrl: './merchant-store.component.html',
  styleUrls: ['./merchant-store.component.css']
})
export class MerchantStoreComponent {

  merchantID: string ="";
  constructor(private route: ActivatedRoute,public menuService:UserServicesService,private router: Router) {
   // this.merchantID = this.route.snapshot.paramMap.get('id');
   this.merchantModel=new RegisterModel();
   this.merchantModel2=new RegisterModel();
    this.route.params.subscribe((params) => {
      this.merchantID = params["merchantID"];
      console.log(this.merchantID );
    })

    this.editModel=new RegisterModel();
  }


  ngOnInit(){
    this.loadMerchantDetails();
  }


  editModel:any;
  merchantDetails:any;
  merchantModel:any = new RegisterModel();
  merchantModel2:any = new RegisterModel();
  loadMerchantDetails(){
    var payLoad={
      "op":"1",
      "M_ID":this.merchantID
    }
    console.log(payLoad);
    this.menuService.adminMerchantList(payLoad).subscribe((restResp: any) => {
      console.log('rest resp:',restResp)
      if(restResp.statusCode == 200 && restResp.message == "success"){
        this.merchantModel = restResp.dataJ[0];
        this.merchantModel2 = restResp.dataJ[0];
      }
      else{
        alert(JSON.stringify(restResp));
      }
    },
      error => {
        if (error.error.message = "Unauthorized") {
          console.log("Unauthorized: " + error.error.message);
        }
      });

  }

  editMerchant1(){
    let editMenu={
      "op":"1",
      "m_open_time":this.merchantModel.m_open_time,
      "m_specials":this.merchantModel.m_specials,
      "m_close_time":this.merchantModel.m_close_time,
      "m_services":this.merchantModel.m_services,
      "m_min_price":this.merchantModel.m_min_price,
      "m_cusines":this.merchantModel.m_cusines,
      "m_max_price":this.merchantModel.m_max_price,
      "m_categories":this.merchantModel.m_categories

    }
    console.log(editMenu)

    this.menuService.merchantRegistration(editMenu).subscribe((restResp: any) => {
      console.log('rest resp:',restResp)
      if(restResp.statusCode == 200 && restResp.message == "success"){
        
      }
      else{
        alert(JSON.stringify(restResp));
      }
    },
      error => {
        if (error.error.message = "Unauthorized") {
          console.log("Unauthorized: " + error.error.message);
        }
      });
  }

  editMerchant2(){
    let editMenu={
      "op":"1",
      "m_street":this.merchantModel.m_street,
      "m_area":this.merchantModel.m_area,
      "m_city":this.merchantModel.m_city,
      "m_pincode":this.merchantModel.m_pincode,
      "m_latitude":this.merchantModel.m_latitude,
      "m_longitude":this.merchantModel.m_longitude,
      "m_address":this.merchantModel.m_address
    }
    console.log(editMenu)
  }

  goToAdminMerchantReviews(merchantObject:any){
    this.router.navigate(['/store-reviews'+"/"+merchantObject.M_ID]);
  }




}

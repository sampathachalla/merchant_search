import { Component } from '@angular/core';
import { RegisterModel } from 'src/models/merchantRegister-model';
import { Router } from '@angular/router';
import {UserServicesService} from "../../services/user-services.service";

@Component({
  selector: 'app-merchantregistration',
  templateUrl: './merchantregistration.component.html',
  styleUrls: ['./merchantregistration.component.css']
})
export class MerchantregistrationComponent {
  constructor(private router: Router,private UserServicesService:UserServicesService){
    this.registerModel = new RegisterModel()

  }

  ngOnInit():void{

  }
  registerModel:any;
  merchantRegistration(){
    console.log(this.registerModel);
    //Verify with http service
    let payloadMenu = {
      "m_name": this.registerModel.m_name,
      "m_categories":this.registerModel.m_categories,
      "m_cusines":this.registerModel.m_cusines,
      "m_services":this.registerModel.m_services,
      "m_open_time":this.registerModel.m_open_time,
      "m_close_time":this.registerModel.m_close_time,
      "m_min_price":this.registerModel.m_min_price,
      "m_max_price":this.registerModel.m_max_price,
      "m_area":this.registerModel.m_area,
      "m_street":this.registerModel.m_street,
      "m_city":this.registerModel.m_city,
      "m_pincode":this.registerModel.m_pincode,
      "m_latitude":this.registerModel.m_latitude,
      "m_longitude":this.registerModel.m_longitude,
      "m_experience":this.registerModel.m_experience,
      "m_specials":this.registerModel.m_specials,
      "m_address":this.registerModel.m_address,
      
    }

    this.UserServicesService.merchantRegistration(payloadMenu).subscribe((restResp: any) => {
      console.log('rest resp:',restResp)
      if(restResp.statusCode == 200 && restResp.message == "success"&& restResp.info == "valid"){
        console.log(restResp)
        /*this.tokensJson = JSON.parse(JSON.stringify(restResp.d_json[0]))
        this.tokensJson["userId"] = restResp.userInfo[0].userId;
        localStorage.setItem('_YBCALS_', JSON.stringify(this.tokensJson));*/
        this.router.navigate(['/merchant-list']);
       //this.router.navigate([GlobalVariables.urlRTH_RTA_N + '/home']);
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

}

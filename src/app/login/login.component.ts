import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {LoginModel} from '../../models/login-model';
import {UserServicesService} from "../../services/user-services.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private router: Router,private UserServicesService:UserServicesService){
    this.loginModel = new LoginModel()

  }

  ngOnInit():void{

  }

  loginModel:any;
  tokensJson: any;
  adminLogin(){
    console.log(this.loginModel);
    //Verify with http service
    let payloadMenu = {
      "User_id": this.loginModel.user_id,
      "User_Password": this.loginModel.user_password
      
    }
    
    this.UserServicesService.customerLoginService(payloadMenu).subscribe((restResp: any) => {
      console.log('rest resp:',restResp)
      if(restResp.statusCode == 200 && restResp.message == "success"&& restResp.info == "valid"){
        console.log(restResp)
        /*this.tokensJson = JSON.parse(JSON.stringify(restResp.d_json[0]))
        this.tokensJson["userId"] = restResp.userInfo[0].userId;
        localStorage.setItem('_YBCALS_', JSON.stringify(this.tokensJson));*/
        this.router.navigate(['/home']);
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

   //this.router.navigate(['/home']);


  }
}

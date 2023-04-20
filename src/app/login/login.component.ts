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
        let lJosn = {"user_id":this.loginModel.user_id}
        localStorage.setItem('__CC__', JSON.stringify(lJosn));
        this.router.navigate(['/merchant-register']);
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

import { Component } from '@angular/core';
import {UserServicesService} from "../../services/user-services.service";
import { Router } from '@angular/router';
import { MerchantAdminModel } from 'src/models/login-model';

@Component({
  selector: 'app-merchant-users',
  templateUrl: './merchant-users.component.html',
  styleUrls: ['./merchant-users.component.css']
})
export class MerchantUsersComponent {

  constructor(private menuService:UserServicesService)
  {

  }
  ngOnInit(){
    this.loadMerchatAdmins();
  }

  merchantAdminList:any;

  loadMerchatAdmins(){
    //this.demo=new ResultModel();
    var payLoad={
      "op":"0"
    }
    this.menuService.merchantAdmins(payLoad).subscribe((resp:any) =>{
      
      if(resp.statusCode == 200 && resp.message == "success"){
        console.log(resp);
        this.merchantAdminList=resp.dataJ;
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

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

  constructor(public menuService:UserServicesService)
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
      console.log(resp);
      console.log(resp.dataJ);
      this.merchantAdminList=resp.dataJ;
      
    });
  }

}

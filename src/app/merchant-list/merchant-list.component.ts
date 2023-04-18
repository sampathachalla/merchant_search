import { Component } from '@angular/core';
import { ResultModel } from 'src/models/result-model';
import { UserServicesService } from 'src/services/user-services.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-merchant-list',
  templateUrl: './merchant-list.component.html',
  styleUrls: ['./merchant-list.component.css']
})
export class MerchantListComponent {
  // my code
  constructor(public menuService:UserServicesService)
  {

  }

  ngOnInit(){
    this.loadMerchatList();
  }


  merchantList:any;
  loadMerchatList(){
    //this.demo=new ResultModel();
    var payLoad={
      "sname":""
    }
    this.menuService.menuSearch(payLoad).subscribe((resp:any) =>{
      console.log(resp);
      this.merchantList=resp.info;
    });
  }

}

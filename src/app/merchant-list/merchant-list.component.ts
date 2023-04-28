import { Component } from '@angular/core';
import { adminMerchantList } from 'src/models/login-model';
import { UserServicesService } from 'src/services/user-services.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-merchant-list',
  templateUrl: './merchant-list.component.html',
  styleUrls: ['./merchant-list.component.css']
})
export class MerchantListComponent {
  // my code
  constructor(public menuService:UserServicesService,private router: Router)
  {
    this.userInp = new adminMerchantList
  }

  ngOnInit(){
    this.loadMerchatList();
  }

  userInp:any;
  merchantList:any;
  merchantList1:any;
  loadMerchatList(){
    //this.demo=new ResultModel();
    var payLoad={
      "op":"0"
    }
    this.menuService.adminMerchantList(payLoad).subscribe((resp:any) =>{
      console.log(resp);
      this.merchantList=resp.dataJ;
    });
  }

  loadMerchatList1(){
    //this.demo=new ResultModel();
    var payLoad={
      "op":"2",
      "search_inp":this.userInp.search_inp
    }
    this.menuService.adminMerchantList(payLoad).subscribe((resp:any) =>{
      console.log(resp);
      this.merchantList=resp.dataJ;
    });
  }

  goToAdminMerchantDetails(merchantObject:any){
    this.router.navigate(['/merchant-store'+"/"+merchantObject.M_ID]);
   // this.router.navigate([]).then(result => { window.open('/merchant-store'+"/"+merchantObject.M_ID , '_blank'); });
  }

  
  goToAdminMerchantDeactive(merchantObject1:any){
    console.log(merchantObject1.M_ID)
    var payLoad={
      "op": "2",
     "M_ID": merchantObject1.M_ID,
     "admin_m_status": merchantObject1.m_status,
    }
    this.menuService.merchantRegistration(payLoad).subscribe((resp:any) =>{
      console.log(resp);
    });
  }
  

  

  

  



}

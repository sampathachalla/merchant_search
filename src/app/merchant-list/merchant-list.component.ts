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

  }

  ngOnInit(){
    this.loadMerchatList();
  }


  merchantList:any;
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

  goToAdminMerchantDetails(merchantObject:any){
    this.router.navigate(['/merchant-store'+"/"+merchantObject.M_ID]);
  }

}

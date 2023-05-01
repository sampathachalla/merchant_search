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
  constructor(private UserServicesService:UserServicesService,private router: Router)
  {
    this.userInp = new adminMerchantList
  }

  ngOnInit(){
    this.loadMerchatList();
  }

  userInp:any;
  merchantList:any;
  merchantList1:any;
  isChecked:any;
  id:any;
  loadMerchatList(){
    //this.demo=new ResultModel();
    var payLoad={
      "op":"0"
    }
    this.UserServicesService.adminMerchantList(payLoad).subscribe((resp:any) =>{
      
      if(resp.statusCode == 200 && resp.message == "success"){
        console.log(resp);
        this.merchantList=resp.dataJ;
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

  loadMerchatList1(){
    //this.demo=new ResultModel();
    var payLoad={
      "op":"2",
      "search_inp":this.userInp.search_inp
    }
    this.UserServicesService.adminMerchantList(payLoad).subscribe((resp:any) =>{
      if(resp.statusCode == 200 && resp.message == "success"){
        console.log(resp);
        this.merchantList=resp.dataJ;
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

  goToAdminMerchantDetails(merchantObject:any){
    this.router.navigate(['/merchant-store'+"/"+merchantObject.M_ID]);
   // this.router.navigate([]).then(result => { window.open('/merchant-store'+"/"+merchantObject.M_ID , '_blank'); });
  }

  
  goToAdminMerchantDeactive(merchantObject1:any){
    console.log("goToAdminMerchantDeactive")
    var payLoad={
      "op": "2",
     "M_ID": merchantObject1.M_ID,
     "admin_m_status": merchantObject1.m_status,
    }
    this.UserServicesService.merchantRegistration(payLoad).subscribe((resp:any) =>{
      console.log(resp.info)
      if(resp.statusCode == 200 && resp.message == "success"){
      
        alert(JSON.stringify(resp.info));
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

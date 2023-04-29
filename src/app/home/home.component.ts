import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResultModel } from 'src/models/result-model';
import { UserServicesService } from 'src/services/user-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  //hiding info box
  /*constructor(public menuService:UserServicesService)
  {

  }
  visible4:boolean = false
  visible5:boolean = false
  demo:any;
  ngOnInit(){
    /*throw new Error('Method not implemented.');*/
  /* this.demo=new ResultModel();
   var payLoad={
     "search":""
   }
   this.menuService.menuSearch(payLoad).subscribe((resp:any) =>{
     console.log(resp);
     this.demo=resp;
   })

 }*/

  //my code for search api integration

  constructor(private router: Router, private userServicesService: UserServicesService) {
    this.resultModel = new ResultModel
  }

  ngOnInit(): void {

  }


  resultModel: any;
  tokenJson: any;
  demo: any;
  merchantSearch() {
    console.log(this.resultModel);
    let payloadMenu = {
      "sname": this.resultModel.sname
    }

    this.userServicesService.menuSearch(payloadMenu).subscribe((restResp: any) => {
      console.log('rest resp:', restResp)
      if (restResp.statusCode == 200 && restResp.message == "success") {
        console.log(restResp.info)
        this.demo = restResp.info

      }
      else {
        alert(JSON.stringify(restResp.info));
      }
    },
      error => {
        if (error.error.message = "Unauthorized") {
          console.log("Unauthorized: " + error.error.message);
        }
      });
  }


  //onclick toggling both
  visible1: boolean = true;
  display_click() {
    this.visible1 = !this.visible1
  }

  goToMerchantDetails(merchantObject:any){
    this.router.navigate(['/display'+"/"+merchantObject.M_ID]);
  }



}

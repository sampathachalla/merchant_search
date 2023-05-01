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


  constructor(private router: Router, private userServicesService: UserServicesService) {
    this.resultModel = new ResultModel
  }

  ngOnInit(): void {
     this. getCurrentLocation();
  }


  resultModel: any;
  tokenJson: any;
  merchantList: any;
  merchantSearch() {
    console.log(this.resultModel);
    let payloadMenu = {
      "sname": this.resultModel.sname,
      "userLat":this.currLat,
      "userLong":this.currLng
    }
    console.log(payloadMenu);
    console.log(this.searchDistance);
    console.log(this.searchRating);
    console.log(this.searchPrice);
    console.log(this.searchCategories);
    console.log(this.searchCusine);
    console.log(this.searchService);

    this.userServicesService.menuSearch(payloadMenu).subscribe((restResp: any) => {
      console.log('rest resp:', restResp)
      if (restResp.statusCode == 200 && restResp.message == "success") {
        console.log(restResp.info)
        this.merchantList = restResp.dataJ

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

  currLat:any;currLng:any
  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {

        this.currLat = position.coords.latitude;
        this.currLng = position.coords.longitude;
        console.log("LAt: "+this.currLat+"   Lng:"+this.currLng);
      });
    }
    else {
      console.log("Geolocation is not supported by this browser.");
    }
  }


  searchDistance:number = 0;
  searchRating:number = 0;
  searchCusine:string = "";
  searchPrice:number = 0;
  searchCategories:string = "";
  searchService:string ="";

  searchBasedOnFilters(){
  console.log(this.searchDistance);
  }



}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FilterModel, ResultModel } from 'src/models/result-model';
import { UserServicesService } from 'src/services/user-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userSearch: string = "";
  constructor(private router: Router,private route: ActivatedRoute, private userServicesService: UserServicesService) {
    this.resultModel = new ResultModel;
    this.filterModel=new FilterModel;
    this.route.params.subscribe((params) => {
      this.userSearch = params["userSearch"];
      console.log(this.userSearch );
    })
  }

  ngOnInit(): void {
     this. getCurrentLocation();
  }


  resultModel: any;
  filterModel: any;
  tokenJson: any;
  merchantList: any;
  searchDistance:number = 0;
  searchRating:number = 0;
  searchCusine:string = "";
  searchPrice:string = "";
  searchCategories:string = "";
  searchService:string ="";


  merchantSearch() {
    console.log(this.resultModel);
    let payloadMenu = {
      "op": "1",
      "user_inp": this.filterModel.user_inp,
      "user_latitude": this.currLat,
      "user_longitude": this.currLng
    }
    console.log(payloadMenu);

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

  merchantSearch1() {
    console.log(this.resultModel);
    let payloadMenu = {
      "op": "1",
      "user_inp": this.userSearch,
      "user_latitude": this.currLat,
      "user_longitude": this.currLng
    }
    console.log(payloadMenu);

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
        this.merchantSearch1();
      });
    }
    else {
      console.log("Geolocation is not supported by this browser.");
    }
  }


  searchBasedOnFilters(){
    let filterMenu = {
      "op": "0",
      "m_distance": this.searchDistance,
      "m_rating": this.searchRating,
      "m_price": this.searchPrice,
      "m_category": this.searchCategories,
      "m_cusine": this.searchCusine,
      "m_service": this.searchService,
      "user_latitude": this.currLat,
      "user_longitude":this.currLng
    }
    console.log(filterMenu);
    this.userServicesService.menuSearch(filterMenu).subscribe((restResp: any) => {
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



}

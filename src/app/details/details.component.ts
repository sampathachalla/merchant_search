import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  visible1: boolean=true;

  merchantID: string = "";
  constructor(private route: ActivatedRoute) {
   // this.merchantID = this.route.snapshot.paramMap.get('id');
    this.route.params.subscribe((params) => {
      this.merchantID = params["merchantID"];
      console.log(this.merchantID );
    })
  }


  review_click()
  {
    this.visible1=!this.visible1;
  }

  getMerchantDetails(){
    
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-merchant-header',
  templateUrl: './merchant-header.component.html',
  styleUrls: ['./merchant-header.component.css']
})
export class MerchantHeaderComponent {

  constructor(private router: Router){}

  ngOnInit():void{

  }

  gotToMerchantRegister(){this.router.navigate(['/merchant-register']);}
  gotToMerchantList(){this.router.navigate(['/merchant-list']);}
  gotToMerchantReviews(){this.router.navigate(['/merchant-reviews']);}
  gotToMerchantUsers(){this.router.navigate(['/merchant-users']);}

}

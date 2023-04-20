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

  goToMerchantRegister(){this.router.navigate(['/merchant-register']);}
  goToMerchantList(){this.router.navigate(['/merchant-list']);}
  goToMerchantReviews(){this.router.navigate(['/merchant-reviews']);}
  goToMerchantUsers(){this.router.navigate(['/merchant-users']);}
  goToDefault(){this.router.navigate(['/default']);}

}

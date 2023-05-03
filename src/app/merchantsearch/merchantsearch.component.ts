import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FilterModel } from 'src/models/result-model';
import { UserServicesService } from 'src/services/user-services.service';
@Component({
  selector: 'app-merchantsearch',
  templateUrl: './merchantsearch.component.html',
  styleUrls: ['./merchantsearch.component.css']
})
export class MerchantsearchComponent {
  constructor(private router: Router, private userServicesService: UserServicesService) {
    
    this.filterModel=new FilterModel
  }

  ngOnInit(): void {
    
 }
 filterModel: any;
 userSearch(merchantObject:any){
  this.router.navigate(['/home'+"/"+merchantObject]);

 }
}





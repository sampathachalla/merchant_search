import { Component,OnInit } from '@angular/core';
import { ResultModel } from 'src/models/result-model';
import { UserServicesService } from 'src/services/user-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  
  //hiding info box
  constructor(public menuService:UserServicesService)
  {

  }
  visible4:boolean = false
  visible5:boolean = false
  demo:any;
  ngOnInit(){
    /*throw new Error('Method not implemented.');*/
    this.demo=new ResultModel();
    var payLoad={
      "search":""
    }
    this.menuService.menuSearch(payLoad).subscribe((resp:any) =>{
      console.log(resp);
      this.demo=resp;
    })

  }
  


  //onclick toggling both
  
  onclick4()
  {
    this.visible4 = !this.visible4
  }
  onclick5()
  {
    this.visible5 = !this.visible5
  }
  

}

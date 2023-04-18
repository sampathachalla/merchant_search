import { Component } from '@angular/core';
import { RegisterModel } from 'src/models/merchantRegister-model';
import { Router } from '@angular/router';
import {UserServicesService} from "../../services/user-services.service";

@Component({
  selector: 'app-merchantregistration',
  templateUrl: './merchantregistration.component.html',
  styleUrls: ['./merchantregistration.component.css']
})
export class MerchantregistrationComponent {
  constructor(private router: Router,private UserServicesService:UserServicesService){
    this.registerModel = new RegisterModel()

  }

  ngOnInit():void{

  }
  registerModel:any;

}

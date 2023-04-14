import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  

  //hiding info box
  
  visible4:boolean = false
  visible5:boolean = false
  


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

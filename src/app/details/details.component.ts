import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  visible1: boolean=true;

  review_click()
  {
    this.visible1=!this.visible1;
  }

}

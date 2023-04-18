import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen=false;

  toggleMenu():void{
    this.isMenuOpen=this.isMenuOpen;
  }

  constructor(private router: Router){}

  ngOnInit():void{

  }

  gotToLogin(){
    this.router.navigate(['/login']);
  }

}
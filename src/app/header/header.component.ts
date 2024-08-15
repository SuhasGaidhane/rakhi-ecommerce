import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  
  constructor(private router: Router) {}
  onContactClick(){
  const phoneNumber = '7798599666';
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello!")}`;
  window.open(url, '_blank');
  }
  giftSection(){
    this.router.navigate(['/category-details/5']);
  }
  onHomeClick(){
    this.router.navigate(['category']);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  onContactClick(){
  const phoneNumber = '7798599666';
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello")}`;
  window.open(url, '_blank');
  }
}

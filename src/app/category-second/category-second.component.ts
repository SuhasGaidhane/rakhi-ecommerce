import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-second',
  templateUrl: './category-second.component.html',
  styleUrl: './category-second.component.css'
})
export class CategorySecondComponent {

  constructor( private router: Router) {}
  bestSaler = [
    { id: 3, name: 'Floral Meenakari Rakhi for Bhai Bhabhi', price: 200, photoUrl: 'https://imgcdn.floweraura.com/IMG_5456.jpg?tr=w-304,dpr-1.5,q-70', data: 'Data for Category 1', uri: 'category-details/1' },
    { id: 5, name: 'Best Sister Gift Box', price: 400, photoUrl: 'https://imgcdn.floweraura.com/bracelet-rakhi_6.jpg?tr=w-286,h-286,dpr-1.5,q-70', data: 'Data for Category 2', uri: 'category-details/1' },
    { id: 1, name: 'Best God Rakhi', price: 200, photoUrl: 'https://imgcdn.floweraura.com/embellished-pearl-n-blue-beaded-rakhi-9777267gf-B_0.jpg?tr=w-304,dpr-1.5,q-70', data: 'Data for Category 3', uri: 'category-details/1' },
    { id: 2, name: 'Elegant Stone Studded Rakhi Duo', price: 200, photoUrl: 'https://imgcdn.floweraura.com/elegant-stone-studded-rakhi-duo-9779217ra-B_0.jpg?tr=w-304,dpr-1.5,q-70', data: 'Data for Category 4', uri: 'category-details/1' },
    // { id: 5, name: 'Floral Meenakari Rakhi', price: 200, photoUrl: 'https://imgcdn.floweraura.com/best-bro-rakhi-gift-box-9771817ra-A_0.jpg?tr=w-304,dpr-1.5,q-70', data: 'Data for Category 5', uri: 'category-details/1' },
  ];

  bhejDe(uri: any){
    this.router.navigate(['category-details/'+uri]);
  }


}

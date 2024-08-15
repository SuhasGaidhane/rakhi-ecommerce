// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-category',
//   templateUrl: './category.component.html',
//   styleUrl: './category.component.css'
// })
// export class CategoryComponent {

//   categories = [
//     { id: 1, name: 'Category 1', photoUrl: 'https://imgcdn.floweraura.com/two-rakhi_1.png', data: 'Data for Category 1' },
//     { id: 2, name: 'Category 2', photoUrl: 'https://imgcdn.floweraura.com/two-rakhi_1.png', data: 'Data for Category 2' },
//     { id: 3, name: 'Category 3', photoUrl: 'https://imgcdn.floweraura.com/two-rakhi_1.png', data: 'Data for Category 3' },
//     { id: 4, name: 'Category 4', photoUrl: 'https://imgcdn.floweraura.com/two-rakhi_1.png', data: 'Data for Category 4' },
//     { id: 5, name: 'Category 5', photoUrl: 'https://imgcdn.floweraura.com/two-rakhi_1.png', data: 'Data for Category 5' },
//   ];

//   bestSaler = [
//     { id: 1, name: 'Floral Meenakari Rakhi for Bhai Bhabhi', price: 200, photoUrl: 'https://imgcdn.floweraura.com/IMG_5456.jpg?tr=w-304,dpr-1.5,q-70', data: 'Data for Category 1' },
//     { id: 2, name: 'Best Bro Rakhi Gift Box', price: 200, photoUrl: 'https://imgcdn.floweraura.com/best-bro-rakhi-gift-box-9771817ra-A_0.jpg?tr=w-304,dpr-1.5,q-70', data: 'Data for Category 2' },
//     { id: 3, name: 'Embellished Pearl N Blue Beaded Rakhi', price: 200, photoUrl: 'https://imgcdn.floweraura.com/embellished-pearl-n-blue-beaded-rakhi-9777267gf-B_0.jpg?tr=w-304,dpr-1.5,q-70', data: 'Data for Category 3' },
//     { id: 4, name: 'Elegant Stone Studded Rakhi Duo', price: 200, photoUrl: 'https://imgcdn.floweraura.com/elegant-stone-studded-rakhi-duo-9779217ra-B_0.jpg?tr=w-304,dpr-1.5,q-70', data: 'Data for Category 4' },
//     { id: 5, name: 'Floral Meenakari Rakhi', price: 200, photoUrl: 'https://imgcdn.floweraura.com/bracelet-rakhi_6.jpg?tr=w-286,h-286,dpr-1.5,q-70', data: 'Data for Category 5' },
//   ];



//   getCategories() {
//     return this.categories;
//   }

//   getCategoryById(id: number) {
//     return this.categories.find(category => category.id === id);
//   }

// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  // constructor(private router: Router) {}

  // navigateToCategory(categoryId: string) {
  //   this.router.navigate(['/category-details', categoryId]);
  // }

  categories = [
    { id: 1, name: 'God Rakhi', photoUrl: 'https://imgcdn.floweraura.com/one-rakhi_8.png', data: 'Data for Category 1' },
    { id: 2, name: 'Rakhi', photoUrl: 'https://imgcdn.floweraura.com/two-rakhi_2.png', data: 'Data for Category 2' },
    { id: 3, name: 'Bhaiya Bhabhi Rakhi', photoUrl: 'https://imgcdn.floweraura.com/bhaiya-bhabhi-rakhi_5.png', data: 'Data for Category 3' },
    { id: 5, name: 'Gifts for Sister', photoUrl: 'https://imgcdn.floweraura.com/bracelet-rakhi_6.jpg?tr=w-286,h-286,dpr-1.5,q-7', data: 'Data for Category 5' },
    { id: 4, name: 'Kids Rakhi (Soon)', photoUrl: 'https://imgcdn.floweraura.com/kids-rakhi_10.png', data: 'Data for Category 4' },
  ];



  constructor(private router: Router) {}

  navigateToDetails(categoryId: any) {
    console.log(categoryId);

    this.router.navigate(['/category-details', categoryId]);
  }
}

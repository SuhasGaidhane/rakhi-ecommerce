// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-category-details',
//   templateUrl: './category-details.component.html',
//   styleUrls: ['./category-details.component.css']
// })
// export class CategoryDetailsComponent {
//   products = [
//     {
//       name: 'Blue Designer Stone Rakhi',
//       price: 245,
//       stars: [1, 2, 3, 4, 5],
//       deliveryTime: '2-3 days',
//       isBestSeller: true,
//       image: 'https://imgcdn.floweraura.com/Rak-22-5206-BB.JPG?tr=w-264,dpr-1.5,q-70'
//     },
//     {
//       name: 'Red And Gold Kundan Rakhi',
//       price: 135,
//       stars: [1, 2, 3, 4, 5],
//       deliveryTime: '2-3 days',
//       isBestSeller: true,
//       image: 'https://imgcdn.floweraura.com/rak-21-4720-B.jpg?tr=w-264,dpr-1.5,q-70'
//     },
//     {
//       name: 'Red Designer Charm Rakhi With Almond Rocks',
//       price: 395,
//       stars: [1, 2, 3, 4, 5],
//       deliveryTime: '2-3 days',
//       isBestSeller: true,
//       image: 'https://imgcdn.floweraura.com/red-designer-charm-rakhi-with-almond-rocks-9774887ra-A_0.jpg?tr=w-264,dpr-1.5,q-70'
//     },
//     {
//       name: 'Beautiful Mor Pankh Rakhi',
//       price: 115,
//       stars: [1, 2, 3, 4, 5],
//       deliveryTime: '2-3 days',
//       isBestSeller: true,
//       image: 'https://imgcdn.floweraura.com/beautiful-mor-pankh-rakhi-9777167gf-B_1.jpg?tr=w-264,dpr-1.5,q-70'
//     },
//     {
//       name: 'Beautiful Mor Pankh Rakhi',
//       price: 115,
//       stars: [1, 2, 3, 4, 5],
//       deliveryTime: '2-3 days',
//       isBestSeller: true,
//       image: 'https://imgcdn.floweraura.com/beautiful-mor-pankh-rakhi-9777167gf-B_1.jpg?tr=w-264,dpr-1.5,q-70'
//     },
//     {
//       name: 'Beautiful Mor Pankh Rakhi',
//       price: 115,
//       stars: [1, 2, 3, 4, 5],
//       deliveryTime: '2-3 days',
//       isBestSeller: true,
//       image: 'https://imgcdn.floweraura.com/beautiful-mor-pankh-rakhi-9777167gf-B_1.jpg?tr=w-264,dpr-1.5,q-70'
//     },
//     {
//       name: 'Beautiful Mor Pankh Rakhi',
//       price: 115,
//       stars: [1, 2, 3, 4, 5],
//       deliveryTime: '2-3 days',
//       isBestSeller: true,
//       image: 'https://imgcdn.floweraura.com/beautiful-mor-pankh-rakhi-9777167gf-B_1.jpg?tr=w-264,dpr-1.5,q-70'
//     },
//     {
//       name: 'Beautiful Mor Pankh Rakhi',
//       price: 115,
//       stars: [1, 2, 3, 4, 5],
//       deliveryTime: '2-3 days',
//       isBestSeller: true,
//       image: 'https://imgcdn.floweraura.com/beautiful-mor-pankh-rakhi-9777167gf-B_1.jpg?tr=w-264,dpr-1.5,q-70'
//     },
//     {
//       name: 'Beautiful Mor Pankh Rakhi',
//       price: 115,
//       stars: [1, 2, 3, 4, 5],
//       deliveryTime: '2-3 days',
//       isBestSeller: true,
//       image: 'https://imgcdn.floweraura.com/beautiful-mor-pankh-rakhi-9777167gf-B_1.jpg?tr=w-264,dpr-1.5,q-70'
//     },
//     {
//       name: 'Beautiful Mor Pankh Rakhi',
//       price: 115,
//       stars: [1, 2, 3, 4, 5],
//       deliveryTime: '2-3 days',
//       isBestSeller: true,
//       image: 'https://imgcdn.floweraura.com/beautiful-mor-pankh-rakhi-9777167gf-B_1.jpg?tr=w-264,dpr-1.5,q-70'
//     },
//     {
//       name: 'Beautiful Mor Pankh Rakhi',
//       price: 115,
//       stars: [1, 2, 3, 4, 5],
//       deliveryTime: '2-3 days',
//       isBestSeller: true,
//       image: 'https://imgcdn.floweraura.com/beautiful-mor-pankh-rakhi-9777167gf-B_1.jpg?tr=w-264,dpr-1.5,q-70'
//     },
//     {
//       name: 'Beautiful Mor Pankh Rakhi',
//       price: 115,
//       stars: [1, 2, 3, 4, 5],
//       deliveryTime: '2-3 days',
//       isBestSeller: true,
//       image: 'https://imgcdn.floweraura.com/beautiful-mor-pankh-rakhi-9777167gf-B_1.jpg?tr=w-264,dpr-1.5,q-70'
//     },
//     {
//       name: 'Beautiful Mor Pankh Rakhi',
//       price: 115,
//       stars: [1, 2, 3, 4, 5],
//       deliveryTime: '2-3 days',
//       isBestSeller: true,
//       image: 'https://imgcdn.floweraura.com/beautiful-mor-pankh-rakhi-9777167gf-B_1.jpg?tr=w-264,dpr-1.5,q-70'
//     },
//     {
//       name: 'Beautiful Mor Pankh Rakhi',
//       price: 115,
//       stars: [1, 2, 3, 4, 5],
//       deliveryTime: '2-3 days',
//       isBestSeller: true,
//       image: 'https://imgcdn.floweraura.com/beautiful-mor-pankh-rakhi-9777167gf-B_1.jpg?tr=w-264,dpr-1.5,q-70'
//     }
//   ];
// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Define a type for the product
interface Product {
  productId: number;
  name: string;
  price: number;
  stars: number[];
  deliveryTime: string;
  isBestSeller: boolean;
  image: string;
}

// Define the type for allProducts with index signature
interface ProductsByCategory {
  [key: string]: Product[];
}

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

  // Initialize with an index signature
  allProducts: ProductsByCategory = {
    '1': [
      {
        productId:1,
        name: 'Blue Designer Stone Rakhi',
        price: 245,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: '2-3 days',
        isBestSeller: true,
        image: 'https://imgcdn.floweraura.com/Rak-22-5206-BB.JPG?tr=w-264,dpr-1.5,q-70'
      },
      {
        productId:2,
        name: 'Red And Gold Kundan Rakhi',
        price: 135,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: '2-3 days',
        isBestSeller: true,
        image: 'https://imgcdn.floweraura.com/rak-21-4720-B.jpg?tr=w-264,dpr-1.5,q-70'
      }
      // More products
    ],
    '2': [
      {
        productId:3,
        name: 'Red Designer Charm Rakhi With Almond Rocks',
        price: 395,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: '2-3 days',
        isBestSeller: true,
        image: 'https://imgcdn.floweraura.com/red-designer-charm-rakhi-with-almond-rocks-9774887ra-A_0.jpg?tr=w-264,dpr-1.5,q-70'
      },
      {
        productId:4,
        name: 'Beautiful Mor Pankh Rakhi',
        price: 115,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: '2-3 days',
        isBestSeller: true,
        image: 'https://imgcdn.floweraura.com/beautiful-mor-pankh-rakhi-9777167gf-B_1.jpg?tr=w-264,dpr-1.5,q-70'
      }
      // More products
    ]
  };

  filteredProducts: Product[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const categoryId = params.get('id');
      console.log(categoryId);
      
      if (categoryId) {
        this.filterProducts(categoryId);
      } else {
        this.filteredProducts = [];
      }
    });
  }

  filterProducts(categoryId: string) {
    this.filteredProducts = this.allProducts[categoryId] || [];
  }
 
  navigateToProductDetails(productId: any) {
    console.log(productId);
    this.router.navigate(['/product-details', productId]);
  }
}


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
    '2': [
      {
        productId:201,
        name: 'Ganesh Rakhi',
        price: 60,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: true,
        image: '../../assets/double1.jpeg'
      },
      {
        productId:202,
        name: 'Brother Rakhi',
        price: 60,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: true,
        image: '../../assets/double2.jpeg'
      },
      {
        productId:203,
        name: 'Evil Eye Rakhi Purpul',
        price: 135,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: false,
        image: '../../assets/double3.jpeg'
      },
      {
        productId:204,
        name: 'Sweet Bro Rakhi',
        price: 60,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: false,
        image: '../../assets/double4.jpeg'
      },
      {
        productId:205,
        name: 'Magical Rakhi',
        price: 65,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: false,
        image: '../../assets/double5.jpeg'
      },
     
      {
        productId:206,
        name: 'Evil Eye Rakhi',
        price: 70,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: '2-3 days',
        isBestSeller: true,
        image: '../../assets/double6.jpeg'
      },
      // More products
    ],



    '1': [
      {
        productId:101,
        name: 'Bhakti Rakhi',
        price: 70,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: true,
        image: '../../assets/god1.jpeg'
      },
      {
        productId:102,
        name: 'Bhakti Rakhi',
        price: 70,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: true,
        image: '../../assets/god2.jpeg'
      },
      {
        productId:103,
        name: 'Ganesh Rakhi',
        price: 70,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: true,
        image: '../../assets/god3.jpeg'
      },
      {
        productId:104,
        name: 'Ganesh Rakhi',
        price: 70,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: true,
        image: '../../assets/god4.jpeg'
      },
      {
        productId:105,
        name: 'Ganesh Rakhi',
        price: 70,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: true,
        image: '../../assets/god5.jpeg'
      },
     
      {
        productId:106,
        name: 'Ganesh Rakhi',
        price: 70,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: true,
        image: '../../assets/god6.jpeg'
      },
      {
        productId:107,
        name: 'Bhakti Rakhi',
        price: 70,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: true,
        image: '../../assets/god7.jpeg'
      },
      {
        productId:108,
        name: 'Bhakti Rakhi',
        price: 70,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: true,
        image: '../../assets/god8.jpeg'
      },
      {
        productId:109,
        name: 'Bhakti Rakhi',
        price: 70,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: true,
        image: '../../assets/god9.jpeg'
      },
      {
        productId:110,
        name: 'Bhakti Rakhi',
        price: 70,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: true,
        image: '../../assets/god10.jpeg'
      },
      {
        productId:111,
        name: 'Bhakti Rakhi',
        price: 70,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: true,
        image: '../../assets/god11.jpeg'
      },
     
      {
        productId:112,
        name: 'Bhakti Rakhi',
        price: 70,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: true,
        image: '../../assets/god12.jpeg'
      },
      // More products
    ],

    '3': [
      {
        productId:301,
        name: 'Beautiful Bhai Bhabhi Rakhi',
        price: 202,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: false,
        image: '../../assets/bhaibhabhi1.jpeg'
      },
      {
        productId:302,
        name: 'Beautiful Bhai Bhabhi Rakhi',
        price: 210,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: true,
        image: '../../assets/bhaibhabhi2.jpeg'
      },
      {
        productId:303,
        name: 'Beautiful Bhai Bhabhi Rakhi',
        price: 220,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: false,
        image: '../../assets/bhaibhabhi3.jpeg'
      },
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


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
        price: 49,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: true,
        image: '../../assets/double1.jpeg'
      },
      {
        productId:202,
        name: 'Brother Rakhi',
        price: 49,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: true,
        image: '../../assets/double2.jpeg'
      },
      {
        productId:203,
        name: 'Evil Eye Rakhi Purpul',
        price: 49,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: false,
        image: '../../assets/double3.jpeg'
      },
      {
        productId:204,
        name: 'Sweet Bro Rakhi',
        price: 49,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: false,
        image: '../../assets/double4.jpeg'
      },
      {
        productId:205,
        name: 'Magical Rakhi',
        price: 49,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: false,
        image: '../../assets/double5.jpeg'
      },
     
      {
        productId:206,
        name: 'Evil Eye Rakhi',
        price: 49,
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
        name: 'OM Rakhi',
        price: 49,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: true,
        image: '../../assets/god1.jpeg'
      },
      {
        productId:102,
        name: "Ram's Blessing Rakhi",
        price: 49,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: true,
        image: '../../assets/god2.jpeg'
      },
      {
        productId:103,
        name: 'Ram Rakhi',
        price: 49,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: true,
        image: '../../assets/god3.jpeg'
      },
      {
        productId:104,
        name: "Krishna's Celestial Pankh Rakhi",
        price: 49,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: true,
        image: '../../assets/god4.jpeg'
      },
      {
        productId:105,
        name: 'Beautiful Krishna Rakhi',
        price: 49,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: true,
        image: '../../assets/god5.jpeg'
      },
     
      {
        productId:106,
        name: "Mahakal's Damru Rakhi",
        price: 49,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: true,
        image: '../../assets/god6.jpeg'
      },
      {
        productId:107,
        name: 'OM Trishul Rakhi',
        price: 49,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: true,
        image: '../../assets/god7.jpeg'
      },
      {
        productId:108,
        name: 'Shivling Rakhi',
        price: 49,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: true,
        image: '../../assets/god8.jpeg'
      },
      {
        productId:109,
        name: 'Graceful OM Rakhi',
        price: 49,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: true,
        image: '../../assets/god9.jpeg'
      },
      {
        productId:110,
        name: 'Beautiful Rama Rakhi',
        price: 49,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: true,
        image: '../../assets/god10.jpeg'
      },
      {
        productId:111,
        name: 'Swastik Rakhi',
        price: 49,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: true,
        image: '../../assets/god11.jpeg'
      },
     
      {
        productId:112,
        name: 'Bhakti Rakhi',
        price: 49,
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
        price: 109,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: false,
        image: '../../assets/bhaibhabhi1.jpeg'
      },
      {
        productId:302,
        name: 'Beautiful Bhai Bhabhi Rakhi',
        price: 109,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: true,
        image: '../../assets/bhaibhabhi2.jpeg'
      },
      {
        productId:303,
        name: 'Beautiful Bhai Bhabhi Rakhi',
        price: 109,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: false,
        image: '../../assets/bhaibhabhi3.jpeg'
      },
      {
        productId:304,
        name: 'Beautiful Bhai Bhabhi Rakhi',
        price: 109,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: false,
        image: '../../assets/bhaibhabhi4.jpg'
      },
      {
        productId:305,
        name: 'Beautiful Bhai Bhabhi Rakhi',
        price: 109,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: true,
        image: '../../assets/bhaibhabhi5.jpg'
      },
      {
        productId:306,
        name: 'Beautiful Bhai Bhabhi Rakhi',
        price: 109,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: false,
        image: '../../assets/bhaibhabhi6.jpg'
      },
      {
        productId:307,
        name: 'Beautiful Bhai Bhabhi Rakhi',
        price: 109,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: false,
        image: '../../assets/bhaibhabhi7.jpg'
      },
      // More products
    ],
    '5': [
      {
        productId:501,
        name: "Elegant Women's Watch with Crystal Accents",
        price: 549,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: false,
        image: '../../assets/watch1.jpg'
      },
      {
        productId:502,
        name: "Sophisticated Ladies' Watch with Minimalist Dial",
        price: 599,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: true,
        image: '../../assets/watch2.jpg'
      },
      {
        productId:503,
        name: "Stylish Stainless Steel Women's Watch with Sparkling Bezel",
        price: 599,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: false,
        image: '../../assets/watch3.jpg'
      },
      {
        productId:504,
        name: "Classic Women's Watch with Mother-of-Pearl Face",
        price: 549,
        stars: [1, 2, 3, 4, 5],
        deliveryTime: 'Today',
        isBestSeller: false,
        image: '../../assets/watch4.jpg'
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
  getDiscountedPrice(originalPrice: number, discountPercentage: number): number {
    return originalPrice - (originalPrice * discountPercentage / 100);
  }

  filterProducts(categoryId: string) {
    this.filteredProducts = this.allProducts[categoryId] || [];
  }
 
  navigateToProductDetails(productId: any) {
    console.log(productId);
    this.router.navigate(['/product-details', productId]);
  }
}


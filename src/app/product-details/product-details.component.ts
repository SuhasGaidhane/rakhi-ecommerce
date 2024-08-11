import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products = [
    {
      id: '1',
      name: 'Red And Gold Kundan Rakhi',
      price: 135,
      images: [
        'https://imgcdn.floweraura.com/rak-21-4720-A.jpg',
        'https://imgcdn.floweraura.com/rak-21-4720-B.jpg?tr=w-170,q-60',
        'https://imgcdn.floweraura.com/rak-21-4720-C.jpg?tr=w-170,q-60',
      ],
      similarProducts: [
        { name: 'Basic', price: 135, image: 'https://imgcdn.floweraura.com/rak-21-4720-A.jpg' },
        { name: 'Serene Kundan', price: 395, image: 'https://imgcdn.floweraura.com/serene-kundan-rakhi-with-hazelnut-rocks-9772277ra-A_0.jpg' }
      ],
      specialAdditions: [
        { name: 'Set of 2 Chocolate Dragees', price: 395, image: 'https://imgcdn.floweraura.com/3-B_56.jpg' },
        { name: 'Almonds Rocks 100gms', price: 199, image: 'https://imgcdn.floweraura.com/serene-kundan-rakhi-with-hazelnut-rocks-9772277ra-A_0.jpg' },
        { name: 'Assorted Baklava 9 Pcs', price: 625, image: 'https://imgcdn.floweraura.com/1-B_95.jpg' },
        { name: 'Haldiram Kaju Katli 200gm', price: 395, image: 'https://imgcdn.floweraura.com/4-A_7.jpg' },
        { name: 'Roasted Cashew Almond Raisin Gift Box', price: 599, image: 'https://imgcdn.floweraura.com/17-A_1.jpg' }
      ],
      url: 'https://yourwebsite.com/product-page-url' // Ensure this URL is set for each product
    },
    // Add more products here with unique IDs
  ];

  product: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('productId');
      if (productId) {
        this.product = this.products.find(p => p.id === productId);
        console.log(this.product);
      } else {
        this.product = null;
      }
    });
  }

  shareOnWhatsApp() {
    if (this.product) {
      const message = `Check out this product!\n\n` +
        `**Name:** ${this.product.name}\n` +
        `**Price:** ₹${this.product.price}\n` +
        `**Description:** ${this.product.name}\n` +  // Update description as needed
        `**Company Name:** [Your Company Name Here]\n` +
        `**Image:** ${this.product.images[0]}\n` + // Display the image URL
        `For more details, visit: ${this.product.url}`;

      const phoneNumber = '7972726558';
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    }
  }
}

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
      id: '201',
      name: 'Ganesh Rakhi',
      price: 49,
      images: [
        'https://rakhi-sapna.web.app//assets/double1.jpeg',
        'https://rakhi-sapna.web.app//assets/double1.jpeg',
        'https://rakhi-sapna.web.app//assets/double1.jpeg',
      ],
    },
    {
      id: '202',
      name: 'Brother Rakhi',
      price: 49,
      images: [
        'https://rakhi-sapna.web.app//assets/double2.jpeg',
        'https://rakhi-sapna.web.app//assets/double2.jpeg',
        'https://rakhi-sapna.web.app//assets/double2.jpeg',
      ]
    },
    {
      id: '203',
      name: 'Evil Eye Rakhi Purpul',
      price: 49,
      images: [
        'https://rakhi-sapna.web.app/assets/double3.jpeg',
       'https://rakhi-sapna.web.app/assets/double3.jpeg',
       'https://rakhi-sapna.web.app/assets/double3.jpeg',
      ]
    },
    {
      id: '204',
      name: 'Sweet Bro Rakhi',
      price: 49,
      images: [
        'https://rakhi-sapna.web.app/assets/double4.jpeg',
        'https://rakhi-sapna.web.app/assets/double4.jpeg',
        'https://rakhi-sapna.web.app/assets/double4.jpeg',
      ]
    },
    {
      id: '205',
      name: 'Magical Rakhi',
      price: 49,
      images: [
        'https://rakhi-sapna.web.app/assets/double5.jpeg',
        'https://rakhi-sapna.web.app/assets/double5.jpeg',
        'https://rakhi-sapna.web.app/assets/double5.jpeg',
      ],
    },
    {
      id: '206',
      name: 'Evil Eye Rakhi',
      price: 49,
      images: [
        'https://rakhi-sapna.web.app/assets/double6.jpeg',
       'https://rakhi-sapna.web.app/assets/double6.jpeg',
       'https://rakhi-sapna.web.app/assets/double6.jpeg',
      ],


    },
    {
      id: '301',
      name: 'Beautiful Bhai Bhabhi Rakhi',
      price: 109,
      images: [
        'https://rakhi-sapna.web.app/assets/bhaibhabhi1.jpeg',
       'https://rakhi-sapna.web.app/assets/bhaibhabhi1.jpeg',
       'https://rakhi-sapna.web.app/assets/bhaibhabhi1.jpeg',
      ],
    },
    {
      id: '302',
      name: 'Beautiful Bhai Bhabhi Rakhi',
      price: 109,
      images: [
        'https://rakhi-sapna.web.app/assets/bhaibhabhi2.jpeg',
        'https://rakhi-sapna.web.app/assets/bhaibhabhi2.jpeg',
        'https://rakhi-sapna.web.app/assets/bhaibhabhi2.jpeg',
      ],
    },
    {
      id: '303',
      name: 'Beautiful Bhai Bhabhi Rakhi',
      price: 109,
      images: [
        'https://rakhi-sapna.web.app/assets/bhaibhabhi3.jpeg',
        'https://rakhi-sapna.web.app/assets/bhaibhabhi1.jpeg',
        'https://rakhi-sapna.web.app/assets/bhaibhabhi1.jpeg',
      ],
    },

    {
      id: '304',
      name: 'Beautiful Bhai Bhabhi Rakhi',
      price: 109,
      images: [
        'https://rakhi-sapna.web.app//assets/bhaibhabhi4.jpg',
       'https://rakhi-sapna.web.app/assets/bhaibhabhi1.jpeg',
       'https://rakhi-sapna.web.app/assets/bhaibhabhi1.jpeg',
      ],
    },
    {
      id: '305',
      name: 'Beautiful Bhai Bhabhi Rakhi',
      price: 109,
      images: [
        '../../assets/bhaibhabhi5.jpg',
        'https://rakhi-sapna.web.app/assets/bhaibhabhi2.jpeg',
        'https://rakhi-sapna.web.app/assets/bhaibhabhi2.jpeg',
      ],
    },
    {
      id: '306',
      name: 'Beautiful Bhai Bhabhi Rakhi',
      price: 109,
      images: [
        'https://rakhi-sapna.web.app//assets/bhaibhabhi6.jpg',
      ],
    },
    {
      id: '307',
      name: 'Beautiful Bhai Bhabhi Rakhi',
      price: 109,
      images: [
        'https://rakhi-sapna.web.app//bhaibhabhi7.jpg',
      ],
    },



    {
      id: '101',
      name: 'OM Rakhi',
      price: 49,
      images: [
        'https://rakhi-sapna.web.app/assets/god1.jpeg',
        'https://rakhi-sapna.web.app/assets/god1.jpeg',
        'https://rakhi-sapna.web.app/assets/god1.jpeg',
      ],


    },
    {
      id: '102',
      name: "Ram's Blessing Rakhi",
      price: 49,
      images: [
        'https://rakhi-sapna.web.app/assets/god2.jpeg',
      ],
    },
    {
      id: '103',
      name: 'Ram Rakhi',
      price: 49,
      images: [
        'https://rakhi-sapna.web.app/assets/god3.jpeg',
      ],
    },
    {
      id: '104',
      name: "Krishna's Celestial Pankh Rakhi",
      price: 49,
      images: [
        'https://rakhi-sapna.web.app/assets/god4.jpeg',
      ],
    },
    {
      id: '105',
      name: 'Beautiful Krishna Rakhi',
      price: 49,
      images: [
        'https://rakhi-sapna.web.app/assets/god5.jpeg',
      ],
    },
    {
      id: '106',
      name: "Mahakal's Damru Rakhi",
      price: 49,
      images: [
        'https://rakhi-sapna.web.app/assets/god6.jpeg',
      ],
    },
    {
      id: '107',
      name: 'OM Trishul Rakhi',
      price: 49,
      images: [
        'https://rakhi-sapna.web.app/assets/god7.jpeg',
      ],
    },
    {
      id: '108',
      name: 'Shivling Rakhi',
      price: 49,
      images: [
        'https://rakhi-sapna.web.app/assets/god8.jpeg',
      ],
    },
    {
      id: '109',
      name: 'Graceful OM Rakhi',
      price: 49,
      images: [
        'https://rakhi-sapna.web.app/assets/god9.jpeg',
      ],
    },
    {
      id: '110',
      name: 'Beautiful Rama Rakhi',
      price: 49,
      images: [
        'https://rakhi-sapna.web.app/assets/god10.jpeg',
      ],
    },
    {
      id: '111',
      name: 'Swastik Rakhi',
      price: 49,
      images: [
        'https://rakhi-sapna.web.app/assets/god11.jpeg',
      ],
    },
    {
      id: '112',
      name: 'Bhakti Rakhi',
      price: 49,
      images: [
        'https://rakhi-sapna.web.app/assets/god12.jpeg',
      ],
    },

    {
      id: '501',
      name: "Elegant Women's Watch with Crystal Accents",
      price: 549,
      images: [
        'https://rakhi-sapna.web.app//watch1.jpg',
      ],
    },
    {
      id: '502',
      name: "Sophisticated Ladies' Watch with Minimalist Dial",
      price: 599,
      images: [
        'https://rakhi-sapna.web.app//assets/watch2.jpg',
      ],
    },
    {
      id: '503',
      name: "Stylish Stainless Steel Women's Watch with Sparkling Bezel",
      price: 549,
      images: [
        'https://rakhi-sapna.web.app//assets/watch3.jpg',
      ],
    },
    {
      id: '504',
      name: "Classic Women's Watch with Mother-of-Pearl Face",
      price: 599,
      images: [
        'https://rakhi-sapna.web.app//assets/watch4.jpg',
      ],
    }
  ];

  product: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('productId');
      console.log(productId);

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
      const message = `Hii, I want this Prouct!\n\n` +
        `Name:${this.product.name}\n` +
        `Price: ₹${this.product.price}\n` +
        `Description: ${this.product.name}\n`+
        `Image: ${this.product.images[0]}\n`;

      const phoneNumber = '7798599666';
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    }
  }
}

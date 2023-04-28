import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products = [
    {
      id: 1,
      name: 'Minimalists Analog Watch',
      price: '109',
      color: 'Black',
      available: 'Available',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Finspirelle.com%2Fwp-content%2Fuploads%2F2016%2F05%2FWebsite-img.jpg&f=1&nofb=1&ipt=8b99f3f629946e12bb916684c835b7e1d65ad46d98cbd9bb30dbc29373d4ff0c&ipo=images',
    },
    {
      id: 2,
      name: 'Hisense Ultra HD Smart TV',
      price: '3339',
      color: 'Black',
      available: 'Available',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Finspirelle.com%2Fwp-content%2Fuploads%2F2016%2F05%2FWebsite-img.jpg&f=1&nofb=1&ipt=8b99f3f629946e12bb916684c835b7e1d65ad46d98cbd9bb30dbc29373d4ff0c&ipo=images',
    },
    {
      id: 3,
      name: 'APPLE Iphone 12',
      price: '1855',
      color: 'Black',
      available: 'Not Available',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Finspirelle.com%2Fwp-content%2Fuploads%2F2016%2F05%2FWebsite-img.jpg&f=1&nofb=1&ipt=8b99f3f629946e12bb916684c835b7e1d65ad46d98cbd9bb30dbc29373d4ff0c&ipo=images',
    },
    {
      id: 4,
      name: 'LG Fully Automatic Washing Machine',
      price: '1765',
      color: 'White',
      available: 'Available',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Finspirelle.com%2Fwp-content%2Fuploads%2F2016%2F05%2FWebsite-img.jpg&f=1&nofb=1&ipt=8b99f3f629946e12bb916684c835b7e1d65ad46d98cbd9bb30dbc29373d4ff0c&ipo=images',
    },
    {
      id: 5,
      name: 'LG Refrigerator with Door Cooling',
      price: '2815',
      color: 'White',
      available: 'Not Available',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Finspirelle.com%2Fwp-content%2Fuploads%2F2016%2F05%2FWebsite-img.jpg&f=1&nofb=1&ipt=8b99f3f629946e12bb916684c835b7e1d65ad46d98cbd9bb30dbc29373d4ff0c&ipo=images',
    },
    {
      id: 6,
      name: 'DELL Inspiron One 27 Ryzen 7',
      price: '2145',
      color: 'White',
      available: 'Available',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Finspirelle.com%2Fwp-content%2Fuploads%2F2016%2F05%2FWebsite-img.jpg&f=1&nofb=1&ipt=8b99f3f629946e12bb916684c835b7e1d65ad46d98cbd9bb30dbc29373d4ff0c&ipo=images',
    },
  ];
}

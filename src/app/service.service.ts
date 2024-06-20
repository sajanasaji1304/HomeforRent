import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  properties= [
    {
      name: 'Luxury Villa',
      location: 'Thorney, Peterborough',
      price: '$1500',
      description: 'A stunning villa with modern amenities.',
      image: '../../assets/P1.jpg',
      bedrooms: 5,
      bathrooms:3,
      owner: {
        name: 'Sajana Saji',
        contact: '123-456-7890',
        address: '123 Main St, Thorney, Peterborough',
        email: 'sajana@example.com'
      }
    },
    {
      name: 'Urban Apartment',
      location: 'Old Fletton, Peterborough',
      price: '$2000',
      description: 'A chic apartment in the heart of the city.',
      image: '../../assets/P2.jpg',
      bedrooms: 3,
      bathrooms:1,
      owner: {
        name: 'Sajana S',
        contact: '321-654-0987',
        address: '456 Elm St, Old Fletton, Peterborough',
        email: 'sajana@example.com'
      }
    },
    {
      name: 'Cozy Cottage',
      location: 'Werrington, Peterborough',
      price: '$2500',
      description: 'A charming cottage surrounded by landscapes.',
      image: '../../assets/P3.jpg',
      bedrooms: 2,
      bathrooms:1,
      owner: {
        name: 'Blesson John',
        contact: '213-546-7890',
        address: '789 Oak St, Werrington, Peterborough',
        email: 'blesson@example.com'
      }
    },
    {
      name: 'Modern Townhouse',
      location: 'Eye Green, Peterborough',
      price: '$1300',
      description: 'A modern townhouse with state-of-the-art facilities.',
      image: '../../assets/P4.jpg',
      bedrooms: 4,
      bathrooms:2,
      owner: {
        name: 'Emily Davis',
        contact: '987-654-3210',
        address: '321 Pine St, Eye Green, Peterborough',
        email: 'emily@example.com'
      }
    },
    {
      name: 'Urban Apartment',
      location: 'Maxey, Peterborough',
      price: '$1000',
      description: 'A chic apartment in the heart of the city.',
      image: '../../assets/P5.jpg',
      bedrooms: 3,
      bathrooms:2,
      owner: {
        name: 'Michael Brown',
        contact: '456-789-1230',
        address: '654 Birch St, Maxey, Peterborough',
        email: 'michael@example.com'
      }
    },
    {
      name: 'Cozy Cottage',
      location: 'Wansford, Peterborough',
      price: '$1350',
      description: 'A charming cottage surrounded by landscapes.',
      image: '../../assets/P6.jpg',
      bedrooms: 2,
      bathrooms:1,
      owner: {
        name: 'Sophia Johnson',
        contact: '789-123-4560',
        address: '987 Cedar St, Wansford, Peterborough',
        email: 'sophia@example.com'
      }
    },
    {
      name: 'Luxury Villa',
      location: 'Ailsworth, Peterborough',
      price: '$1800',
      description: 'A stunning villa with modern amenities.',
      image: '../../assets/P7.jpg',
      bedrooms: 5,
      bathrooms:3,
      owner: {
        name: 'Oliver Wilson',
        contact: '321-987-6540',
        address: '159 Spruce St, Ailsworth, Peterborough',
        email: 'oliver@example.com'
      }
    },
    {
      name: 'Urban Apartment',
      location: 'Glinton, Peterborough',
      price: '$1900',
      description: 'A chic apartment in the heart of the city.',
      image: '../../assets/P8.jpg',
      bedrooms: 3,
      bathrooms:2,
      owner: {
        name: 'Ava Martinez',
        contact: '654-321-9870',
        address: '357 Maple St, Glinton, Peterborough',
        email: 'ava@example.com'
      }
    },
    {
      name: 'Cozy Cottage',
      location: 'Wittering, Peterborough',
      price: '$1400',
      description: 'A charming cottage surrounded by landscapes.',
      image: '../../assets/P9.jpg',
      bedrooms: 2,
      bathrooms:1,
      owner: {
        name: 'Liam White',
        contact: '123-789-4560',
        address: '753 Willow St, Wittering, Peterborough',
        email: 'liam@example.com'
      }
    },
    {
      name: 'Contemporary House',
      location: 'Eye Green, Peterborough',
      price: '$2300',
      description: 'A contemporary house with elegant design.',
      image: '../../assets/P10.jpg',
      bedrooms: 4,
      bathrooms:2,
      owner: {
        name: 'Ella Taylor',
        contact: '987-321-6540',
        address: '951 Cypress St, Eye Green, Peterborough',
        email: 'ella@example.com'
      }
    },
    {
      name: 'Urban Apartment',
      location: 'Maxey, Peterborough',
      price: '$2100',
      description: 'A chic apartment in the heart of the city.',
      image: '../../assets/P1.jpg',
      bedrooms: 3,
      bathrooms:1,
      owner: {
        name: 'Noah Brown',
        contact: '654-789-3210',
        address: '654 Walnut St, Maxey, Peterborough',
        email: 'noah@example.com'
      }
    },
    {
      name: 'Cozy Cottage',
      location: 'Rennie, Peterborough',
      price: '$2600',
      description: 'A charming cottage surrounded by landscapes.',
      image: '../../assets/P2.jpg',
      bedrooms: 2,
      bathrooms:1,
      owner: {
        name: 'Mia Garcia',
        contact: '789-456-1230',
        address: '852 Chestnut St, Rennie, Peterborough',
        email: 'mia@example.com'
      }
    },
  ];

  user=[
    {
      username:'abc@gmail.com',
      password:'1234'
    }
  ]
  favoriteProperties: any[] = [];

  constructor() { }

  addProperty(newProperty: any) {
    this.properties.unshift(newProperty);
    console.log(this.properties)
  }

  addUser(user:any){
    this.user.push(user)
    console.log(this.user)
  }

  getFavoriteProperties(): any[] {
    return this.favoriteProperties;
  }

  addFavoriteProperty(property: any) {
    this.favoriteProperties.push(property);
    console.log(this.favoriteProperties)
  }

  removeFavoriteProperty(property: any) {
    this.favoriteProperties = this.favoriteProperties.filter(fav => fav.id !== property.id);
  }

}


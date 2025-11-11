import property1 from '../assets/property1.jpg';
import property2 from '../assets/property2.jpg';
import property3 from '../assets/property3.jpg';
import property4 from '../assets/property4.jpg';
import property5 from '../assets/property5.jpg';
import property6 from '../assets/property6.jpg';

export const listings = [
  {
    id: 1,
    title: "Modern Sunset Villa",
    location: "Cape Town, V&A",
    price: "R12 000 000",
    bedrooms: 6,
    bathrooms: 7,
    area: "8,500 sq ft",
    description: "Breathtaking contemporary villa featuring floor-to-ceiling glass walls, infinity pool, and panoramic city views.",
    image: property1,
    gallery: [property1, property2, property3],
    featured: true
  },
  {
    id: 2,
    title: "Sky Penthouse",
    location: "Manhattan, NY",
    price: "R28 000 000",
    bedrooms: 5,
    bathrooms: 6,
    area: "7,200 sq ft",
    description: "Exclusive penthouse with 360-degree city skyline views, private elevator access, and world-class amenities.",
    image: property2,
    gallery: [property2, property1, property4],
    featured: true
  },
  {
    id: 3,
    title: "Oceanfront Paradise",
    location: "Midrand, CA",
    price: "R18,900,000",
    bedrooms: 7,
    bathrooms: 8,
    area: "10,000 sq ft",
    description: "Stunning beachfront estate with private beach access, infinity pool, and unobstructed ocean views.",
    image: property3,
    gallery: [property3, property6, property1],
    featured: true
  },
  {
    id: 4,
    title: "Mountain View Estate",
    location: "Aspen, CO",
    price: "$15,750,000",
    bedrooms: 8,
    bathrooms: 9,
    area: "12,000 sq ft",
    description: "Spectacular mountain retreat with glass architecture, infinity pool, and breathtaking alpine vistas.",
    image: property4,
    gallery: [property4, property5, property2],
    featured: false
  },
  {
    id: 5,
    title: "Classic European Manor",
    location: "Greenwich, CT",
    price: "$22,300,000",
    bedrooms: 9,
    bathrooms: 10,
    area: "15,000 sq ft",
    description: "Timeless elegance meets modern luxury in this magnificent estate featuring manicured gardens and classical architecture.",
    image: property5,
    gallery: [property5, property1, property3],
    featured: false
  },
  {
    id: 6,
    title: "Contemporary Masterpiece",
    location: "Miami Beach, FL",
    price: "$9,800,000",
    bedrooms: 5,
    bathrooms: 6,
    area: "6,800 sq ft",
    description: "Architectural marvel with sleek design, gourmet kitchen, and resort-style amenities in exclusive neighborhood.",
    image: property6,
    gallery: [property6, property2, property4],
    featured: false
  }
];

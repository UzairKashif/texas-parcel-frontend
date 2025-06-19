export interface Property {
    id: string; // Document ID from Firestore
    title: string;
    description: string;
    price: number;
    location: string;
    images: string[]; // Array of image URLs
  }
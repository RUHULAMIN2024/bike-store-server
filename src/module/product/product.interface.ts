export interface IProduct {
  name: string;
  brand: string;
  price: number;
  model: string;
  category: 'Mountain' | 'Road' | 'Hybrid' | 'Electric';
  description: string;
  stock: number;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

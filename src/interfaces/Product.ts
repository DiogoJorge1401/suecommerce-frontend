export interface IProduct {
  _id: string;
  title: string;
  description: string;
  categories: Array<string>;
  color: Array<string>;
  img: string;
  inStock: boolean;
  price: number;
  size: Array<string>;
  createdAt: Date;
  updatedAt: Date;
}

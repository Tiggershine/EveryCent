import { user } from './userInterface';

export class Product {
  _id?: string;
  title?: string;
  price?: number;
  category?: string;
  description?: string;
  imageUrl?: string[];
  user?: user['username'];
  district?: string;
  dealType?: string;
  contact?: user['email'];
  createdAt?: string;
  //file?: FileList;
}

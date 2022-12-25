import { user } from "./userInterface";

export class Product{
  _id: string;
  title: string;
  price: number;
  category: string;
  description: string;
  imageUrl: string[];
  user: user["userId"];
  district: string;
  dealType: string;
  contact: string;
  createdAt?: Date;
}

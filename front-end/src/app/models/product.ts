export class Product {
  productId?: number;
  userId?: string;
  productTitle!: string;
  productPrice!: number;
  location?: string;
  productCategory?: string;
  productDescription?: string;
  productImage!: string[];
  contact?: string;
  dealType?: string;
  postDate!: string;
}

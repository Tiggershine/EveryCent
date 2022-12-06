export class Product {
  productId?: number;
  userId?: string;
  productTitle!: string;
  productPrice!: number;
  productCategory?: string;
  productDescription?: string;
  productImage!: string[];
  contact?: string;
  dealType?: string;
  postDate!: string;
}

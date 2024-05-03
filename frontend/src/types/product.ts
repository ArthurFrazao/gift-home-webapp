export type Product = {
  id: string;
  name: string;
  imageUrl: string;
  links: string[];
  isAvailable: boolean;
};

export interface ProductResponse {
  product: Product;
}

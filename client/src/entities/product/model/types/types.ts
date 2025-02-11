export interface ProductType {
  id: string;
  packsNumber: number;
  packageType: string;
  isArchived: boolean;
  description?: string;
  createdAt: string;
}

export interface ProductState {
  products: ProductType[];
  loading: boolean;
}
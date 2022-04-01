import { ProductDto } from "./productDto";

export interface ProductsResponse {
  items: ProductDto[];
  meta: {
    itemCount: number;
    totalItems: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  }
}
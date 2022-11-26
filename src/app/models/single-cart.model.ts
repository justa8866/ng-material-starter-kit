import { SingleProductModel } from "./single-product.model";

export interface SingleCartModel {
  readonly id: number;
  readonly userId: number;
  readonly date: string;
  readonly products: SingleProductModel[];
}

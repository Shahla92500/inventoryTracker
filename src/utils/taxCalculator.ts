import  {Product} from "../models/Product";
import { DigitalProduct } from "../models/DigitalProduct";
import { PhysicalProduct } from "../models/PhysicalProduct";
// import {sku, name, price } from "../models/Product";

export function calculateTax(product: Product): number {

  if (product instanceof DigitalProduct) {
    return product.getPriceWithTax(0);        // no tax
  }
  if (product instanceof PhysicalProduct) {
    return product.getPriceWithTax();        
  }
  // default for generic Product
  return product.getPriceWithTax(0.10);
}


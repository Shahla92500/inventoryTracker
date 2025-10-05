import { Product } from "./Product";
import type {DiscountableProduct} from "../utils/interfaces"

export class DigitalProduct extends Product implements DiscountableProduct {
    public fileSize: number;

    constructor(sku: string, name: string, price: number, fileSize: number) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    override getPriceWithTax(_: number): number {
        return this.price;
    }
    get sizeMB(): string {
        return `${(this.fileSize/ (1024 * 1024)).toFixed(2)} MB`;
    }
    applyDiscount (discountRate: number) : number{
        const discountPr= this.price * (1 - discountRate);
        this.price = +discountPr.toFixed(2);
        return this.price;
    }
}




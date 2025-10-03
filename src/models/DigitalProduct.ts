import { Product } from "./Product";

export class DigitalProduct extends Product {
    public fileSize: number;

    constructor(sku: string, name: string, price: number, fileSize: number) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    override getPriceWithTax(_: number): number {
        //why it does not accept super??? it does not come from parents?
        return this.price;
    }
    get sizeMB(): string {
        return `${(this.fileSize/ (1024 * 1024)).toFixed(2)} MB`;
    }
}
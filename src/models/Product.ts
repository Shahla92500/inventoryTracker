export class Product {
     sku: string;
    name: string;
    price: number;

    constructor(sku: string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
    }

    displayDetails(): string {
        return `${this.name} (SKU: ${this.sku}) costs $${this.price.toFixed(2)}.`;
    }

    getPriceWithTax(taxRate:number): number {
        return (this.price * (taxRate + 1));
    }

    set setPrice(newBasePrice: number) {
    this.price = newBasePrice;
    }
}
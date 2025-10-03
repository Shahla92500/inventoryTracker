    import {Product} from "./Product";
    export class PhysicalProduct extends Product {
        public weight : number;

        constructor(sku: string, name: string, price: number, weight: number) {
            super(sku, name, price);
            this.weight = weight;
        }

        override getPriceWithTax(): number {
            const tax = 0.1;
            return this.price * (1 + tax);
        }
        get weightKg() {
            return`${this.weight/2.2046} kg`;
        }
    }
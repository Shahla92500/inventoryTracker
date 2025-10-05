export interface DiscountableProduct{
        applyDiscount(discountRate: number) : number;
}

export interface SortProduct {
   name: string;
   price: number;
}
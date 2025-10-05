// Inside src/main.ts, import the PhysicalProduct and DigitalProduct classes, 
import { PhysicalProduct } from "./models/PhysicalProduct"; 
import { DigitalProduct } from "./models/DigitalProduct";
import { calculateTax } from "./utils/taxCalculator";
import type { SortProduct } from "./utils/interfaces"; 

// and create instances of both.
const products = [
  new PhysicalProduct ("PH-001", "Alchimiste", 28.31 , 0.82),
  new PhysicalProduct ("PH-002", "Laptop", 1200 , 2.82),
  new DigitalProduct ("DG-101", "E-Book (PDF)", 8.45, 2_500_000),
  new DigitalProduct ("DG-104", "music mp3", 8.45, 3_500_000)
]

function sortByName(products: SortProduct[]): SortProduct[] {
  return products.sort((a, b) => a.name.localeCompare(b.name));
}
function sortByPriceAsc(products: SortProduct[]): SortProduct[] {
  return products.sort((a, b) => a.price - b.price);
}
function sortByPriceDsc(products: SortProduct[]): SortProduct[] {
  return products.sort((a, b) => b.price - a.price);
}
// Use a loop to display the details of each product, calculate prices with tax, and display the final prices.
// Hint: Utilize polymorphism to your advantage here.

for (const product of products) {
    console.log(product.displayDetails());               
    console.log("Final price:", calculateTax(product));   //to ask the question in class:  will it be considered as polymorphic call??because we call it with different values?
    // also show subclass-specific getters
    if (product instanceof PhysicalProduct) {
      console.log("Weight:", product.weightKg);
    }
    if (product instanceof DigitalProduct && product.name.includes("E-Book")) {
        product.applyDiscount(0.20); 
        console.log("File size:", product.sizeMB , "Discounted price for ebook:", product.price);
    }
}
// =============sort by name Asc==============
let productSorted: SortProduct[] = [];
let sortSelect: "name" | "priceAsc" | "priceDsc" = "name";
  

if (sortSelect==="name") {
  productSorted = sortByName(products);
} else if (sortSelect==="priceAsc"){
  productSorted = sortByPriceAsc(products);
} else if (sortSelect==="priceDsc") {
  productSorted = sortByPriceDsc(products); 
}
console.log(`Sorted by ${sortSelect}: -----`);

for (const product of productSorted) {
    console.log(product);               
}


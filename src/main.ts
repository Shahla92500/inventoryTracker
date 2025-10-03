// Inside src/main.ts, import the PhysicalProduct and DigitalProduct classes, 
import { PhysicalProduct } from "./models/PhysicalProduct"; 
import { DigitalProduct } from "./models/DigitalProduct";
import { calculateTax } from "./utils/taxCalculator";

// and create instances of both.
const products = [
  new PhysicalProduct ("PH-001", "Alchimiste", 28.31 , 0.82),
  new PhysicalProduct ("PH-002", "Laptop", 1200 , 2.82),
  new DigitalProduct ("DG-101", "E-Book (PDF)", 8.45, 2_500_000),
  new DigitalProduct ("DG-104", "music mp3", 8.45, 3_500_000)
]

// Use a loop to display the details of each product, calculate prices with tax, and display the final prices.
// Hint: Utilize polymorphism to your advantage here.

for (const product of products) {
  console.log(product.displayDetails());               
  console.log("Final price:", calculateTax(product));   // polymorphic call
  // also show subclass-specific getters
  if (product instanceof PhysicalProduct) {
    console.log("Weight:", product.weightKg);
  }
  if (product instanceof DigitalProduct) {
    console.log("File size:", product.sizeMB);
  }
  console.log("-----");
}

import CarBuilder from "./car/car-builder";
import ProductBuilder from "./product/product-builder";

const product = new ProductBuilder()
    .setName("Sample")
    .setPrice(100)
    .build();

console.log(product);

const car = new CarBuilder()
  .setBrand("Toyota")
  .setModel("Camry")
  .setYear(2022)
  .setColor("Black")
  .setEngine("2.5L")
  .setPrice(35000)
  .build();

console.log(car);

// product without price
const product2 = new ProductBuilder()
  .setName("Sample")
  .build();

console.log(product2);
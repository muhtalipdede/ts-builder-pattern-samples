# Builder Pattern Examples in TypeScript

This document provides TypeScript examples of the Builder design pattern. The Builder pattern is a creational design pattern that is used to construct a complex object step by step. It allows you to create an object with many optional components in a more readable and flexible way.

## Example 1: ProductBuilder

In this example, we have a `Product` class representing a product with a name and a price. The `ProductBuilder` class allows you to construct `Product` objects by chaining method calls to set its properties. Here's how to use it:

```typescript
const product = new ProductBuilder()
  .setName("Product Name")
  .setPrice(100)
  .build();
```
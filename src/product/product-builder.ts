import { Product } from './product';

class ProductBuilder {
    private name: string = '';
    private price: number = 0;

    setName(name: string): this {
        this.name = name;
        return this;
    }

    setPrice(price: number): this {
        this.price = price;
        return this;
    }

    build(): Product {
        return new Product(this.name, this.price);
    }
}

export default ProductBuilder;
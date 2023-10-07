import { Car } from "./car";

class CarBuilder {
    private brand: string = '';
    private model: string = '';
    private year: number = 0;
    private color: string = '';
    private engine: string = '';
    private price: number = 0;

    setBrand(brand: string): this {
        this.brand = brand;
        return this;
    }

    setModel(model: string): this {
        this.model = model;
        return this;
    }

    setYear(year: number): this {
        this.year = year;
        return this;
    }

    setColor(color: string): this {
        this.color = color;
        return this;
    }

    setEngine(engine: string): this {
        this.engine = engine;
        return this;
    }

    setPrice(price: number): this {
        this.price = price;
        return this;
    }

    build(): Car {
        return new Car(
            this.brand,
            this.model,
            this.year,
            this.color,
            this.engine,
            this.price
        );
    }
}

export default CarBuilder;
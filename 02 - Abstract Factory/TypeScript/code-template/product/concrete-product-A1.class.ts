import { AbstractProductA } from '../interfaces/abstract-product-A.interface';

/**
 * These Concrete Products are created by corresponding Concrete Factories.
 */
export class ConcreteProductA1 implements AbstractProductA {
    public usefulFunctionA(): string {
        return 'The result of the product A1.';
    }
}
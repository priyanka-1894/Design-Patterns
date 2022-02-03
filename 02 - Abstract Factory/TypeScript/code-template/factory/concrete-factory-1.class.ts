import { AbstractFactoryInterface } from '../interfaces/abstract-factory.interface';
import { AbstractProductA } from '../interfaces/abstract-product-A.interface';
import { AbstractProductB } from '../interfaces/abstract-product-B.interface';

import { ConcreteProductA1 } from '../product/concrete-product-A1.class';
import { ConcreteProductB1 } from '../product/concrete-product-B1.class';

/**
 * Concrete Factories produce a family of products that belong to a single
 * variant. The factory guarantees that resulting products are compatible. Note
 * that signatures of the Concrete Factory's methods return an abstract product,
 * while inside the method a concrete product is instantiated.
 */
export class ConcreteFactory1 implements AbstractFactoryInterface {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB1();
    }
}
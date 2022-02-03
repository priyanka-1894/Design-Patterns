import { AbstractFactoryInterface } from '../interfaces/abstract-factory.interface';
import { AbstractProductA } from '../interfaces/abstract-product-A.interface';
import { AbstractProductB } from '../interfaces/abstract-product-B.interface';

import { ConcreteProductA2 } from '../product/concrete-product-A2.class';
import { ConcreteProductB2 } from '../product/concrete-product-B2.class';

/**
 * Each Concrete Factory has a corresponding product variant.
 */
export class ConcreteFactory2 implements AbstractFactoryInterface {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA2();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB2();
    }
}
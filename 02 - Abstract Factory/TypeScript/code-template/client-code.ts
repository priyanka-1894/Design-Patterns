import { AbstractFactoryInterface } from './interfaces/abstract-factory.interface';

import { ConcreteFactory1 } from './factory/concrete-factory-1.class';
import { ConcreteFactory2 } from './factory/concrete-factory-2.class';

/**
 * The client code works with factories and products only through abstract
 * types: AbstractFactory and AbstractProduct. This lets you pass any factory or
 * product subclass to the client code without breaking it.
 */
function clientCode(factory: AbstractFactoryInterface) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();

    console.log(productB.usefulFunctionB());
    console.log(productB.anotherUsefulFunctionB(productA));
}

/**
 * The client code can work with any concrete factory class.
 */
console.log('Client: Testing client code with the first factory type...');
clientCode(new ConcreteFactory1());

console.log('\n');

console.log('Client: Testing the same client code with the second factory type...');
clientCode(new ConcreteFactory2());
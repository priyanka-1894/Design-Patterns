/**
 * The Creator class declares the factory method that is supposed to return an
 * object of a Product class. The Creator's subclasses usually provide the
 * implementation of this method.
 * 
 * Example: Logistics
 */
class CreatorJS {
    /**
     * Note that the Creator may also provide some default implementation of the
     * factory method.
     */
    factoryMethod() { }

    /**
     * Also note that, despite its name, the Creator's primary responsibility is
     * not creating products. Usually, it contains some core business logic that
     * relies on Product objects, returned by the factory method. Subclasses can
     * indirectly change that business logic by overriding the factory method
     * and returning a different type of product from it.
     */
    someOperation() {
        // Call the factory method to create a Product object.
        const product = this.factoryMethod();
        // Now, use the product.
        return `Creator: The same creator's code has just worked with ${product.operation()}`;
    }
}

/**
 * Concrete Creators override the factory method in order to change the
 * resulting product's type.
 * 
 * Example: Road Logistics
 */
class ConcreteCreatorJS1 extends CreatorJS {
    /**
     * Note that the signature of the method still uses the abstract product
     * type, even though the concrete product is actually returned from the
     * method. This way the Creator can stay independent of concrete product
     * classes.
     */
    factoryMethod() {
        return new ConcreteProductJS1();
    }
}

/**
 * Example: Road Logistics
 */
class ConcreteCreatorJS2 extends CreatorJS {
    factoryMethod() {
        return new ConcreteProductJS2();
    }
}

/**
 * Concrete Products provide various implementations of the Product interface.
 * Example: Truck
 */
class ConcreteProductJS1 {
    operation() {
        return '{Result of the ConcreteProduct1}';
    }
}

/**
 * Example: Ship
 */
class ConcreteProductJS2 {
    operation() {
        return '{Result of the ConcreteProduct2}';
    }
}

/**
 * The client code works with an instance of a concrete creator, albeit through
 * its base interface. As long as the client keeps working with the creator via
 * the base interface, you can pass it any creator's subclass.
 */
function clientCodeJS(creator) {
    // ...
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.someOperation());
    // ...
}

/**
 * The Application picks a creator's type depending on the configuration or
 * environment.
 */
console.log('App: Launched with the ConcreteCreatorJS1.');
clientCodeJS(new ConcreteCreatorJS1());

console.log('\nApp: Launched with the ConcreteCreatorJS2.');
clientCodeJS(new ConcreteCreatorJS2());
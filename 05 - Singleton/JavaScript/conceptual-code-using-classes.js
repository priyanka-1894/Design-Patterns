/**
 * The Singleton class defines the `getInstance` method 
 * that lets clients access the unique singleton class
 */
class SingletonClass_UsingClasses {
    static #instance;

    /**
     * The Singleton's constructor should always be private
     * to prevent direct constructor calls with the `new` operator.
     */
    constructor() {
        if (SingletonClass_UsingPrototypes.instance) {
            return SingletonClass_UsingPrototypes.instance
        }
    }

    /**
     * The static method that controls the access to the Singleton instance.
     * 
     * This implementation let you subclass the Singleton class 
     * while keeping just one instance of each subclass around.
     */
    static getInstance() {
        if (!SingletonClass_UsingClasses.#instance) {
            SingletonClass_UsingClasses.#instance = new SingletonClass_UsingClasses();
        }
        return SingletonClass_UsingClasses.#instance;
    }

    /**
     * Finally, any Singleton class should define some business logic,
     * which can be executed on it's instance.
     */
    someBusinessLogic() {

    }
}

/**
 * Client Code
 */
function clientCode_UsingClasses() {
    const s1 = SingletonClass_UsingClasses.getInstance();
    const s2 = SingletonClass_UsingClasses.getInstance();

    if (s1 === s2) {
        console.log("Singleton works, both variables contain the same instance.");
    } else {
        console.log("Singleton failed, variables contain different value.");
    }
}

clientCode_UsingClasses();
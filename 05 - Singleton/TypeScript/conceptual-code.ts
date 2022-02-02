/**
 * The Singleton class defines the `getInstance` method 
 * that lets clients access the unique singleton class
 */
class SingletonClass {
    private static instance: SingletonClass;

    /**
     * The Singleton's constructor should always be private
     * to prevent direct constructor calls with the `new` operator.
     */
    private constructor() { }

    /**
     * The static method that controls the access to the Singleton instance.
     * 
     * This implementation let you subclass the Singleton class 
     * while keeping just one instance of each subclass around.
     */
    public static getInstance(): SingletonClass {
        if (!SingletonClass.instance) {
            SingletonClass.instance = new SingletonClass();
        }
        return SingletonClass.instance;
    }

    /**
     * Finally, any Singleton class should define some business logic,
     * which can be executed on it's instance.
     */
    public someBusinessLogic(): void {

    }
}

/**
 * Client Code
 */
function clientCodeFunction() {
    const s1 = SingletonClass.getInstance();
    const s2 = SingletonClass.getInstance();

    if (s1 === s2) {
        console.log("Singleton works, both variables contain the same instance.");
    } else {
        console.log("Singleton failed, variables contain different value.");
    }
}

clientCodeFunction();
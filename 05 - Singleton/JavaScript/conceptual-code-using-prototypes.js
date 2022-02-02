/**
 * The Singleton class defines the `getInstance` method
 * that lets clients access the unique singleton class
 */
var SingletonClass_UsingPrototypes = /** @class */ (function () {
    /**
     * The Singleton's constructor should always be private
     * to prevent direct constructor calls with the `new` operator.
     * 
     * But in JavaScript, we can't have private constructor,
     * So we can either throw an error or return existing instance!
     */
    function SingletonClass_UsingPrototypes() {
        if (SingletonClass_UsingPrototypes.instance) {
            return SingletonClass_UsingPrototypes.instance
        }
    }
    
    /**
     * The static method that controls the access to the Singleton instance.
     * 
     * Class.method: The Class.method is static and has no relation with any instance of the class. 
     * The class method must be called using the class name. 
     * Only one instance of this function exists in the memory.
     * 
     * This implementation let you subclass the Singleton class
     * while keeping just one instance of each subclass around.
     */
    SingletonClass_UsingPrototypes.getInstance = function () {
        if (!SingletonClass_UsingPrototypes.instance) {
            SingletonClass_UsingPrototypes.instance = new SingletonClass_UsingPrototypes();
        }
        return SingletonClass_UsingPrototypes.instance;
    };
    
    /**
     * Finally, any Singleton class should define some business logic,
     * which can be executed on it's instance.
     * 
     * Class.prototype.method: The Class.prototype.method is created which is related to the instance of the object. 
     * It is called using the object instance name. 
     * Each instance of the class will have its own copy of this method.
     */
    SingletonClass_UsingPrototypes.prototype.someBusinessLogic = function () {
    };
    
    return SingletonClass_UsingPrototypes;
}());

/**
 * Client Code
 */
function clientCodeFunction_UsingPrototypes() {
    var s1 = SingletonClass_UsingPrototypes.getInstance();
    var s2 = SingletonClass_UsingPrototypes.getInstance();

    if (s1 === s2) {
        console.log("Singleton works, both variables contain the same instance.");
    } else {
        console.log("Singleton failed, variables contain different value.");
    }
}

clientCodeFunction_UsingPrototypes();
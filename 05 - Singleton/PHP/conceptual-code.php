<?php

namespace PHP\Singleton;

/**
 * The Singleton class defines the `GetInstance` method that serves as an
 * alternative to constructor and lets clients access the same instance of this 
 * class over and over.
 */
class Singleton {
    /**
     * The Singleton's instance is stored in a static field.
     * 
     * This field is an array, because we'll allow our Singleton to have subclasses.
     * Each item in this array will be an instance of a specific Singleton's subclass.
     */
    private static $instances = [];

    /**
     * The Singleton's constructor should always be private 
     * to prevent direct constructor calls with the `new` operator.
     * 
     * 
     */
    private function __constructor() { }

    /**
     * Singleton's should not be cloneable
     */
    protected function __clone() { }

    /**
     * Singleton's should not be restorable from strings.
     */
    public function __wakeup() {
        throw new \Exception("Cannot unserialize a Singleton class.");
    }

    /**
     * This is the static method that controls the access to the singleton instance.
     * On the first run, it creates a Singleton object and plases it into the static field.
     * On subsequent runs, it returns the client existing object stored in the static field.
     * 
     * This implementation lets you subclass the Singleton class 
     * while keeping just one instance of each subclass around.
     */
    public static function getInstance(): Singleton {
        $cls = static::class;
        if (!isset (self::$instances[$cls])) {
            self::$instances[$cls] = new static();
        }
        return self::$instances[$cls];
    }

    /**
     * Finally, any Singleton class should define some business logic,
     * which can be executed on it's instance.
     */
    public function someBusinessLogic() { }
}

/**
 * Client Code
 */
function clientCode() {
    $s1 = Singleton::getInstance();
    $s2 = Singleton::getInstance();

    if ($s1 === $s2) {
        echo "Singleton works, both variables contain the same instance.";
    } else {
        echo "Singleton failed, variables contain different instances.";
    }
}

clientCode();
?>
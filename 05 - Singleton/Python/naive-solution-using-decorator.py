# The downside of using decorators for Singleton is that 
# the final class Sample becomes a function, 
# So we cannot use class methods.

def SingletonDecorator(class_):
    """
    The Singleton class can be implemented in different ways in Python. Some
    possible methods include: base class, decorator, metaclass.
    """
    instances = {}
    
    def getinstance(*args, **kwargs):
        if class_ not in instances:
            instances[class_] = class_(*args, **kwargs)
        return instances[class_]
    return getinstance

@SingletonDecorator
class Singleton():
    def some_business_logic(self):
        """
        Finally, any singleton should define some business logic, which can be
        executed on its instance.
        """

if __name__ == "__main__":
    # The client code.
    s1 = Singleton()
    s2 = Singleton()

    if id(s1) == id(s2):
        print("Singleton works, both variables contain the same instance.")
    else:
        print("Singleton failed, variables contain different instances.")
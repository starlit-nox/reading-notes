# Why Its Important:

The reason this information is important is because it provides a way to define common behaviors that classes can have and add to the code. This allows us to reuse the code in different classes and limits class clutter when they share common traits. It also allows objects of different classes to be treated and moved interchangeably based on their shared interface. Overall, it helps improve code design, management, and readability.

## Analogy

Interfaces are like recipe books. Imagine you have different types of desserts, like cakes, cookies, and ice cream. Each dessert has its own unique way of being made, but they all share some common instructions. The recipe book represents the interface, which defines the common instructions that all desserts must follow. The desserts themselves are the classes that implement the interface. By following the instructions in the recipe book, each dessert class can create its own delicious treat while ensuring they all have certain required features. Just like a recipe book helps you bake different desserts, an interface helps classes share common behaviors while still maintaining their individuality.

## Interfaces

<https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/interfaces>

- An interface defines a group of related functionalities that must be implemented by a class or struct.

- Interfaces allow inclusion of behavior from multiple sources in a class.

- Interfaces define a contract that a class or struct must fulfill.

- Interfaces can contain methods, properties, events, indexers, constructors, fields, constants, or operators.

- Interface members are public by default and can have accessibility modifiers.

- Implementing an interface requires providing implementations for all declared members.

- Interfaces can inherit from other interfaces, and a class implementing a derived interface must implement all members from the derived and base interfaces.

- A class can implement multiple interfaces and also inherit from a base class.

- Interfaces cannot be instantiated directly; their members are implemented by classes or structs that implement the interface.

- In C# 8.0 and later, interfaces can define default implementations for some or all of their members.

- Interface members can be overridden by derived classes using virtual members.

## Back to Basics

<https://simpleprogrammer.com/back-to-basics-what-is-an-interface/>

- Interfaces separate how we use something from how it is implemented.

- They allow writing code that can work with different implementations of a set of responsibilities.

- Interfaces define a contract that implementations must fulfill.

- Implementing an interface does not mean that the class is the interface itself.

- Creating interfaces without a concrete need violates the YAGNI principle.

- Interfaces are often misused to facilitate unit testing and dependency injection.

- Abusing interfaces for these purposes adds unnecessary indirection and can negatively impact performance.

- Interfaces should be used to control which implementation of an interface is used.

## Interfaces #2

<https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/interface>

- An interface defines a contract that classes or structs must implement.

- An interface contains only the signatures of methods, properties, events, or indexers.

- The implementing class or struct must implement all members of the interface.

- Interfaces separate how something is used from how it is implemented.

- Interfaces can provide default implementations for members and can define static members.

- Starting from C# 11, interfaces can declare static abstract and static virtual members.

- Interfaces can inherit from other interfaces.

- Instance state, instance auto-properties, and instance fields are not allowed in interfaces.

- A class can implement multiple interfaces and explicitly implement interface members.

- Default interface members can only be accessed through an instance of the interface.

## Ray Lecture

- An interface defines the actions or behaviors that a class can perform.

- An abstract class defines what an inherited class is in terms of structure and behavior.

- Interfaces are separate from concrete classes in terms of their purpose and usage.



# Q&A

- Can you inherit classes from an abstract class?
  - Yes, you can inherit methods from an abstract class. However, the inherited methods may not have any implementation logic.

- Does an interface have hierarchy?
  - No, an interface does not have a hierarchical structure. It defines the methods and properties that must be implemented by the classes that implement the interface.

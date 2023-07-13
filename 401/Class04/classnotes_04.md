# Why Its Important:

Its important because this information works are the foundations of C#. They are the building blocks to help us organize data and optimize resource usage and memory. Without it, we would have memory usage/storage issues which would effecet the programs and applications which we make and turn users and cilents away from our projects.

## Classes

- Classes are **reference types** in C#.

- When you declare a variable of a reference type, it'll initially contain the value of **null**. (You need to create an instance of the class yourself to create an object)

- **Declaring classes:** use the **class** keyword followed by an identifier.
    - Optional modifier: **public** (to control the visibility of the class)

- Creating objects, an instance of a **class**:
    - Use the **new** keyword followed by the class name to create it.

- **Constructors & initialization**: special methods used to initialize fields and properties of an object.

- **Class inheritance**: a fundamental concept of object-oriented programming.
    - Classes inherit from other classes to reuse data and behaviors.

- **Abstract and sealed classes**: contain abstract methods without implementations and cannot be instantiated.
    - They are meant to be inherited by other classes.
    - They don't allow other classes to inherit from them.

- **Interfaces**: a class implements one or more interfaces.
    - Interfaces define a contract of methods and properties that a class must implement.
    - They allow for multiple inheritances of behaviors.

- **Splitting class**: split between different source files using partial classes and methods.

<https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/classes>

## Constructors

<https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/constructors>

- **Constructors**: special methods that are called when an instance of a class or struct is created.

- **Order of initialization**: here's how it goes in order when a new instance is created:
    - Instance fields are set to 0.
    - Field initializers run in the most derived type.
    - Base type field initializers and base instance constructors run.
    - Instance constructor for the type runs.
    - Object initializers run.

- **Static constructors**: used to initialize static members of the type.
    - They are parameterless.
    - Executed before any instance constructors or other static members.

- **Inheritance and constructors**: can be used for inheritance scenarios.
    - When a derived class is created, its base class constructor is called first.
    - Derived class constructor(s) follow afterwards.

## Properties

<https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/properties>

**Properties in C#**: they read, write, and compute the values of a private field.

**Accessors**: special methods that expose data publicly.

**Properties access levels**:
- **public**
- **private**

**get** accessor: returns the property value.

**set** accessor: assigns a new value.

**init** accessor: assigns a value only during object construction.

## Stack & Heap

<https://www.c-sharpcorner.com/article/C-Sharp-heaping-vs-stacking-in-net-part-i/>

**Memory Management** in .NET: optimizes the performance of applications and helps with variable behavior comprehension.

**Stack & Heap**: store items in memory.

**Stack**: maintains a stack-like structure and is responsible for tracking the execution of code. It follows a Last-In-First-Out (LIFO) principle and is limited in terms of accessibility.

**Heap**: used to store objects and data. It does not have the same accessibility constraints as the Stack and allows for random access to its contents.

**Value Types**: are stored on the Stack when declared within a method and can be placed on the Heap if declared within a Reference Type.
- **int**
- **bool**
- **char**

**Reference Types**: stored on the Heap, and variables of reference type hold a reference (or pointer) to the actual object.
- **classes**
- **interfaces**
- **delegates**

**Pointers** (or references): used to access objects in memory. They are managed by the Common Language Runtime (CLR) and can be seen as memory addresses or null values.

**Memory Allocation**: variables of value types are allocated on the Stack, and their lifespan is determined by the method's execution. Variables of reference types are allocated on the Heap, and memory cleanup is handled by the garbage collector.

## Garbage Collection Fundamentals

<https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/fundamentals>

- **Garbage Collection (GC)**: automatically manages memory allocation and deallocation for managed code.

**Benefits**:
- Eliminates the need for manual memory management.
- Allocates objects efficiently.
- Reclaims memory for unused objects.
- Provides memory safety.
- Initializes objects with clean content.

**Virtual Memory**: can be in three stages.
- **free**
- **reserved**
- **committed**

It can also get fragmented, and running out of memory can occur if there isn't enough virtual or physical space.

- **Memory Allocation**: the runtime reserves a managed heap for each process, where the objects are allocated.

- **Memory Release**: the garbage collector determines which objects are no longer in use by examining roots.

# Q&A

**Properties**

- **What’s the difference between a static and an instance constructor?**

A static constructor is used to initialize static members of a class, and an instance constructor is used to create and initialize objects of a class.

- **How does the use of a static constructor differ from setting properties/values?**

A static constructor is used to initialize static members of a class (fields or static properties), and setting properties/values refers to the process of assigning values to instance members (properties, fields) of an object.

Static constructor: class - fields, static properties

Setting properties/values: object - fields, properties

**Stack and Heap**

- **Knowing what you now know about the stack and the heap, how might you rethink the way you did projects in previous courses to make more efficient use of memory?**

I would be more conscious of variable types and their memory allocation. Knowing the difference between value types and reference types allows me to properly pick the right type for variables to optimize memory usage.

**Garbage Collection Fundamentals**

- **Compare “Garbage Collection” in C# with the lifecycle of normal household items.**

The garbage collection is similar to a blender.

Ownership: you use the blender to blend and make food with in your recipes. In GC, you create a class (Blender) and it blends methods and objects.

Lifespan: it works for a set amount of times, usually a few years, and then it'll break. In GC, the object has a lifespan determined by how much you use it and reference it. As long as it's still being used and referenced, its memory will remain, but once it's no longer needed, it'll go to GC.

Disposal: when the blender breaks, you trash it and replace it after you take the accessories that you can reuse and throw away what you don't need. In GC, when the object is no longer needed, it goes to GC, and it'll automatically clean up the memory left behind and keep what's needed, freeing up memory and resources.

Efficiency & Optimization: to optimize the usage of the blender, you clean its parts and perform maintenance on it (or repair it if possible when it breaks). In GC, the memory usage is reclaimed to optimize memory usage by objects.

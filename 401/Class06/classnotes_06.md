# Why Its Important: 

It's important to understand this information because understanding object-oriented principles like inheritance, abstract classes, sealed classes allows us to reuse code and gives us more flexibility in our programs.

 

## Inheritance

<https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/object-oriented/inheritance>

Inheritance allows us to reuse code and behaviors from existing classes.

It is one of 3 main characteristics of obj oriented programming.

- It allows coders to create ne classes that reuse, extend, and modify the behavior defined in other classes

**Base Class:** class whose members are inherited 

**Derived Class:** class that inherits members from Base Class

- they can only have one base class, but can have levels of base classes

- can hide base class members w/ the same name or signature using a new modifier

**Sealed Classes/Members:** prevent further inheritance or overriding

## Abstract

<https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/abstract-and-sealed-classes-and-class-members>

**Abstract:** enables the user to create classes and class members that are incomplete and must be implemented in a derived class

**Sealed:** enables the user to prevent the inheritance of a class or certain class members that were previously marked virtual

**Virtual:**  is used to modify a method, property, indexer, or event declaration and allow for it to be overridden in a derived class.

```public virtual double Area()
{
    return x * y;
}
```

Use virtual when you already know what you want it to be doing - DJ's Lecture

It's sorta like a loose interpretation

### Abstract Classes and Class Members

Classes can be declared as abstract by putting the keyword abstract before the class definition. For example:

```public abstract class A
{
    // Class members here.
}
```

### Sealed Classes and Class Members

Classes can be declared as sealed by putting the keyword sealed before the class definition. For example:

```public sealed class D
{
    // Class members here.
}
```

## Polymorphism

<https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/object-oriented/polymorphism>

**Polymorphism** is third pillar of object-oriented programming, after encapsulation and inheritance.

FUN FACT: it comes from the greek word meaning 'many-shaped'

Polymorphism has two aspects:

**First Aspect:**

- Derived class objects can be treated as base class objects at runtime.

- This is called polymorphism and allows using derived class objects in places where base class objects are expected.

- Polymorphism changes the declared type of the object to match its runtime type.

- This flexibility allows for more generalized and reusable code.



## OOP Principles
<https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/tutorials/oop>

## Ray's Lecture

Abstract classes are like schemas
they're to be the hierchary of the code

if you define a virtual object/class/method  you have to define it, but you don't have to use it AT ALL

IF YOU WRITE AN ABSTRACT, YOU WONT HAVE TO WRITE ANY LOGIC

virtual is for all, it gives the same output

abstract is iniivudalized (but you can add them to everyting if you want) and it gives different out puts

virtual gives an output of a default implementation (depending on what you have it set up as in its method/writeline)



virtual and abstract are only for organizaitonal purposes

CLASSES ARE NOT A REQUIREMENT FOR YOUR PROGRAM TO RUN

hereditories aren't a requirement either, it makes things easier though

here's an example

(rhino) (monkey) (clown fish) (puffer fish) (eagle)

these are your classes

then there's more types

(Mammals) 
Fur (Characteristic)

(Fish)
Gills (Charactierstic)

 (Bird)
 Wings (Characteristics)

 Mammals, Fish, Gills would be ABSTRACT 
 
 
 CLASS

 Node will have two classes

 Property will/is a data type of node

 LAB HELP

 Link List

 Node Class

 ^ Implement both 


# Analogy 

Understanding object-oriented principles is like having a toolbox with different tools: inheritance allows you to reuse tools, abstract classes provide blueprint templates, polymorphism enables flexibility in tool usage, and sealed classes prevent others from borrowing your tools. Overall, they help you build and organize projects more efficiently.





# Why Its Important:

The reason this information is important because it helps us organize and work with groups of data easier. Learning this information allows us to organize code easier and it makes the code a lot cleaner and more readable. 

## Analogy

Collections are like containers that hold many pieces of information, allowing us to store and manipulate different types of objects.

## Collections

<https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/collections>

- Arrays are useful for working with a fixed number of strongly typed objects, while collections provide a more flexible way to work with groups of objects that can grow and shrink dynamically.

- Collections allow you to assign a key to each object, making it easier to retrieve specific objects by using the key.

- Generic collections in the `System.Collections.Generic` namespace enforce type safety and allow you to work with elements of only one data type.

- Collections in the `System.Collections.Concurrent` namespace provide efficient thread-safe operations for accessing collection items from multiple threads.

- Collections in the `System.Collections` namespace store elements as objects of type `Object` and are less type-safe compared to generic collections.

- The `Dictionary<TKey, TValue>` class allows you to access elements by using a key-value pair, and LINQ can be used to query collections for filtering, ordering, and grouping.

- LINQ: Language-Integrated Query

- LINQ: a powerful feature in C# that provides a unified way to query and manipulate data from different data sources. 

----

**EXAMPLE OF LINQ:**

```// Sample collection
List<int> numbers = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

// LINQ query to filter and project elements
var evenSquares = numbers
    .Where(n => n % 2 == 0)     // Filter even numbers
    .Select(n => n * n);        // Square each number

// Iterate over the result
foreach (var number in evenSquares)
{
    Console.WriteLine(number);
}
```

In the above example, we use LINQ to filter the even numbers from the collection and then square each of them. The query is written in a fluent syntax, chaining the Where and Select operators. Finally, we iterate over the result and print the squared numbers.

LINQ is a versatile tool that enhances productivity by providing a consistent query syntax across different data sources. It allows developers to express complex data operations concisely and intuitively, leading to more maintainable and readable code.

----

- Some sources include: arrays, collections, XML documents, SQL databases, etc.

- Sorting a collection can be achieved by implementing the `IComparable<T>` interface and defining comparison logic.

- Custom collections can be defined by implementing the `IEnumerable<T>` or `IEnumerable` interface, allowing custom iteration over the collection.

- Iterators, implemented as methods or get accessors, use the `yield return` statement to return elements one at a time during iteration.


## Enums

<https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/enum>

- An enumeration type represents a set of named constants of an underlying integral numeric type.

- Enum members are assigned default values starting from zero and increasing by one.

- You can specify a different integral type and explicitly assign constant values.

- Enum members can be defined as bit fields using powers of two as associated values.

- Use bitwise logical operators (&, |) to combine or intersect choices.

- Apply the [Flags] attribute to indicate a bit field enumeration.

**Example of enumeration type as bit flags**

```[Flags]
public enum Days
{
    None = 0b_0000_0000,
    Monday = 0b_0000_0001,
    Tuesday = 0b_0000_0010,
    Wednesday = 0b_0000_0100,
    Thursday = 0b_0000_1000,
    Friday = 0b_0001_0000,
    Saturday = 0b_0010_0000,
    Sunday = 0b_0100_0000,
    Weekend = Saturday | Sunday
}
```

- System.Enum is the base class for all enumeration types.
- It provides methods to retrieve information about enumeration types and values.

**Conversions**

- Explicit conversions exist between an enumeration type and its underlying integral type.

- Use the (int) or (EnumType)value syntax to get the integral value of an enum member.

**Example of enum conversions:**

```public enum Season
{
    Spring,
    Summer,
    Autumn,
    Winter
}

Season a = Season.Autumn;
Console.WriteLine($"Integral value of {a} is {(int)a}");  // Output: Integral value of Autumn is 2

var b = (Season)1;
Console.WriteLine(b);  // Output: Summer

var c = (Season)4;
Console.WriteLine(c);  // Output: 4
```

# Q&A


# Dependency Injection & Repository Design Pattern

## Why Its Important: 
The reason this is important is because it is a crucial part of software development because it promtes modular, flexible, and more maintainable code. It overall enhances data accesss by abstracting the databases interactions. 

## Analogy: 

Imagine you have a toolbox at home. Instead of putting all the tools together, you have separate spots for your hammers, screwdrivers, and wrenches. That's like the Repository Pattern in computer programming – it helps keep things neat and easy to find. And just like how you can borrow tools from a friend, Dependency Injection lets computer programs share different tools when they need them, making the programs work together smoothly.

## Dependency Injection

<https://learn.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-7.0>


### Dependency Injection

ASP.NET Core supports the dependency injection (DI) software design pattern, which is a technique for achieving Inversion of Control (IoC) between classes and their dependencies.

- A **dependency** is an object that **another object depends on**.

- It uses interfaces or base classes to talk to each other.

- Dependency injection lets parts of your app use other parts without getting too attached.

- It allows the programmer to be able to swap out dependencies (depending on the interface) and it makes the code easier to test.

**The benefits are:**

- Loose coupling
- Flexibility
- Maintainability
- Testability


### Service Lifetime

There are three service lifetimes in ASP.NET Core:

- **Transient:** This service instance is created every time it is requested. A new instance is provided for each separate request. It's useful for services that are short-lived and/or disposable.

- **Scoped:** This service is created once per client request (aka scope) and it's reused within the same request. It's used for services tied to the duration of a specific operation.
This one is used to create and share the entire app. The same instance is reused for all requests and operations. It's used for instances that have a single, consistent state.


## Repository Pattern

<https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/infrastructure-persistence-layer-design?view=aspnetcore-2.1#the-repository-pattern>

**Repository pattern** keeps pe

Data persistence components provide access to microservice data within a boundary. They implement components like repositories and Unit of Work classes.

- The Repository pattern keeps persistence concerns separated from the domain model.

- Interfaces are defined in the domain model, they're called persistence abstractions.

- Repository implementations encapsulate logic for data access.

- Centralizing data access improves maintainability and decouples technology.

- The repository pattern facilitates using Object-Relational Mappers (ORMs).


### Define One Repository per Aggregate

- Create one repository per aggregate or aggregate root.

- Repositories are used for database updates in microservices.

- Querying can be done through other channels, e.g., CQRS approach.

- Transactions and updates are controlled by repositories and aggregate roots.



## Repository Design Pattern

<https://medium.com/@pererikbergman/repository-design-pattern-e28c0f3e4a30>

**Repository Design Pattern**

- The repository pattern is currently popular and aligns with SOLID principles.
- It serves as an abstraction of the data layer and centralizes domain object handling.

**Data Access Objects (DAOs)**
DAOs are a common way to work with the data layer.

Example: An ArticleDao interface with methods like readAll(), readByTags(Tag... tags), etc

```public interface ArticleDao {
    List<Article> readAll();
    List<Article> readLatest();
    List<Article> readByTags(Tag... tags);
    Article readById(long id);
    Article create(Article article);
    Article update(Article article);
    Article delete(Article article);
}
```

**Abstraction and CRUD**

-The repository pattern abstracts data access, providing a generic way to work with the data layer.
-CRUD methods (Create, Read, Update, Delete) are central to this pattern.

```public interface Repository<T> {
    List<T> readAll();
    T read(Criteria criteria);
    T create(T entity);
    T update(T entity);
    T delete(T entity);
}
```

## SOLID Principles

<https://www.telerik.com/blogs/30-days-of-tdd-day-five-make-your-code-solid>


**Single Responsibility Principle (SRP):**

-Each method or class should have only one reason to change.
Classes/methods should have a single responsibility, leading to better maintainability.
-This practice results in simpler, more focused methods that are easier to test.
-Tests should ideally focus on testing exactly one thing to enhance test clarity and diagnostic capabilities.

**Open/Close Principle (OCP):**

-Software (methods/classes) should be open for extension but closed for modification.
-Encapsulation and inheritance are related to OCP.
OCP facilitates software components being extended without altering their existing behavior.
-Dependency Inversion Principle (DIP) plays a role in implementing OCP.
-OCP helps with mocking in TDD, enabling classes to be open for mocks through Dependency Inversion.

**Liskov Substitution Principle (LSP):**

-Objects of derived types should be substitutable for objects of their base types.
-Polymorphism is related to LSP.
-LSP enables writing code that's testable by creating substitutes for dependencies, which helps maintain test isolation.

**Interface Segregation Principle (ISP):**

-Clients should not be forced to depend on interfaces they do not use.
-Fine-grained interfaces tailored to specific client needs are favored.
-Smaller and more targeted interfaces lead to easier development and testing.
-ISP contributes to simpler and more comprehensible tests.

**Dependency Inversion Principle (DIP):**

-Code should depend on abstractions, not concrete implementations.
-Abstractions should not rely on implementation details.
-Dependency Injection (DI) is a methodology to achieve DIP.
-DIP helps in achieving loose coupling and making code more adaptable.
-DI is a crucial component of TDD, enabling code testing in isolation through the use of mocks.

## Why SOLID Matters

<https://www.telerik.com/blogs/why-solid-matters>

**Single Responsibility Principle (SRP):**

-Classes should have a single responsibility to improve maintainability.
-Avoid tightly coupling object creation and usage in a single method.
-Instead, use abstractions, factories, or dependency injection to separate concerns.

**Open-Closed Principle (OCP):**

-Modules should be open for extension but closed for modification.
-Prefer extending functionality through polymorphism rather than modifying base code.
-Reduces the risk of introducing bugs when making changes.

**Liskov Substitution Principle (LSP):**

-Subclasses should be substitutable for their base classes.
-Derived classes must maintain the behavior expected by the client code.
-Ensures that changes to derived classes don't break the client's functionality.

**Interface Segregation Principle (ISP):**

-Prefer many client-specific interfaces over a single general-purpose interface.
-Fine-grained interfaces reduce ambiguity and improve design clarity.

**Dependency Inversion Principle (DIP):**

-Depend on abstractions, not concrete implementations.
-Use interfaces or abstract classes to decouple components from specific implementations.
-Facilitates easier swapping of implementations without changing client code.

**Code Example Analysis:**

-The initial code example violates SRP by instantiating and using the LoginService within the same method. This makes it tightly coupled to a specific implementation.
-The solution begins by creating an interface, ILoginService, to abstract the implementation details. This adheres to the DIP principle.
-The extracted interface allows the code to depend on abstractions rather than concrete implementations.
-Factory pattern usage (such as LoginServiceFactory) encapsulates object creation and improves code maintainability.
-The code evolves further by applying Constructor Injection, following DIP, where dependencies are injected through the class constructor.
-The final SecurityHandler class demonstrates the application of Constructor Injection and adherence to SRP.

## SOLID Principles in Pictures

<https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898>

### S — Single Responsibility

-A class should have a single responsibility.
-Having multiple responsibilities in a class can lead to bugs and unintended side effects when making changes.

**Goal**: Separate behaviors to avoid impacting unrelated functionalities when making changes.

### O — Open-Closed

-Classes should be open for extension, but closed for modification.
-Changing the behavior of a class can affect systems using that class.
-Extending a class's behavior should involve adding new functions, not modifying existing ones.

**Goal**: Extend a class's behavior without altering its existing behavior to prevent introducing bugs in systems using the class.

### L — Liskov Substitution

-Subtypes must be substitutable for their base types without altering program properties.
-Child classes should be able to replace parent classes without causing bugs.
-Inheritance should ensure that a child class can perform the same actions and provide the same results as the parent class.

**Goal**: Enforce consistency and ensure that both parent and child classes can be used interchangeably without errors.

### I — Interface Segregation

-Clients should not be forced to depend on methods they do not use.
-Classes should only perform actions that are relevant to their roles.
-Unnecessary actions should be removed or moved to other classes if they might be used in the future.

**Goal**: Split sets of actions into smaller, focused sets so that classes execute only the actions they require.

### D — Dependency Inversion

-High-level modules should not depend on low-level modules; both should depend on abstractions.
-Abstractions should not depend on details; details should depend on abstractions.
-Classes should not be tightly coupled to the tools they use, but rather to interfaces that connect them to the tools.

**Goal**: Reduce dependency of high-level classes on low-level classes by introducing interfaces, allowing for flexibility and easier maintenance.

## Lecture Notes / What I Want to Know


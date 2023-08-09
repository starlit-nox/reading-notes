# Dependency Injection & Repository Design Pattern

## Why Its Important:

## Analogy:

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

## SOLID Principles

<https://www.telerik.com/blogs/30-days-of-tdd-day-five-make-your-code-solid>

## Why SOLID Matters

<https://www.telerik.com/blogs/why-solid-matters>

## SOLID Principles in Pictures

<https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898>

## Lecture Notes


# Entity Framework and APIs

## Why Its Important:

## Analogy:

## MVC with EF Get Started

<https://learn.microsoft.com/en-us/aspnet/core/data/ef-mvc/intro?view=aspnetcore-7.0>

**Some things this MVC tutorial has that the Razor Pages tutorial doesn't:**

- Implement inheritance in the data model

- Perform raw SQL queries

- Use dynamic LINQ to simplify code


**Some things the Razor Pages tutorial has that this one doesn't:**

- Use Select method to load related data

- Best practices for EF.

This guide explains how to download and set up a framework an what type of project to run. For more information check out the link, but notes aren't really needed for this tutorial. It's straight forward and direct. 

## Entity Framework Core

<https://learn.microsoft.com/en-us/ef/core/>

Entity Framework Core is a modern object-database mapper for .NET. It supports LINQ queries, change tracking, updates, and mapping from a relational database to .NET objects.

EF Core can serve as an object-relational mapper (O/RM), and provides the following main features:

- Enables .NET developers to work with a database using .NET objects.

- Eliminates the need for most of the data-access code that typically needs to be written.

- Includes LINQ queries.

- Supports both Code First (where the .NET classes are defined, and the database schema is created to match them) and Database First (where an existing database is used to generate the .NET classes).

### The Model

The model classes represent the entities in the database. They can have properties that map to table columns, as well as navigation properties that represent relationships.

EF supports the following model development approaches:

- Generate a model from an existing database.

- Hand code a model to match the database.

- Once a model is created, use EF Migrations to create a database from the model. Migrations allow evolving the database as the model changes.

### EF O/RM considerations

- Intermediate-level knowledge of the database server is crucial for managing and optimizing production apps.

- Thorough functional and integration testing replicates the production environment to identify issues and breaking changes.

- Performance and stress testing with representative loads is necessary for scalability.

- Security review includes handling connection strings, permissions, input validation, and data encryption.

- Sufficient logging and diagnostics ensure effective application insights.

- Prepare contingencies for error recovery and data backups.

- Plan migrations during deployment to avoid concurrency issues and excessive permissions.

- Thoroughly test generated migrations before applying them to production data.


## Data Seeding

<https://learn.microsoft.com/en-us/ef/core/modeling/data-seeding>

## Entity Framework Core

<https://learn.microsoft.com/en-us/aspnet/core/data/ef-rp/intro?view=aspnetcore-7.0&viewFallbackFrom=aspnetcore-2.1&tabs=visual-studio>

## User Secrets

<https://codefellows.github.io/code-401-dotnet-guide/resources/user-secrets.html>

## YouTube - Intro to APIs (60 min)

<https://www.youtube.com/watch?v=aIkpVzqLuhA&feature=youtu.be>

## Lecture Notes

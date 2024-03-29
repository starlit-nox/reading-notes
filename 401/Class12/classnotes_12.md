# Entity Framework and APIs

## Why Its Important:

The reason this information is important because it simplifies the way developers interact with databases in their apps. The way it does this is by providing easy-to-use object-relational mapping (ORM) system. This gets rid of the need for complex and repetitive data which makes the code cleaner and more maintainable.

## Analogy:

Imagine you have two groups of people who speak different languages. One group speaks English, and the other group speaks Spanish. Entity Framework Core is like a magic translator that helps these people understand each other. It translates what the English-speaking people say into Spanish and what the Spanish-speaking people say into English, so they can communicate and work together without any language barriers. Just like this translator makes it easy for people to talk and collaborate, Entity Framework Core makes it easy for computer programs and databases to "talk" and work together, making things simpler for developers and their applications.

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

- Data Seeding: Data seeding is the process of populating a database with an initial set of data.

- Ways to Seed Data: There are several ways to accomplish data seeding in EF Core:

   a. Model Seed Data: In EF Core, seeding data can be associated with an entity type as part of the model configuration. Migrations can automatically compute the operations needed to update the database to a new version of the model.

   b. Manual Migration Customization: You can manually add migration calls (e.g., InsertData, UpdateData, DeleteData) or custom operations to the migration to work around some limitations of model seed data.

   c. Custom Initialization Logic: Use `DbContext.SaveChanges()` before the main application logic begins execution to perform data seeding.

- Model Seed Data Example: Configure seed data for a Blog in `OnModelCreating`:

  ```csharp
  modelBuilder.Entity<Blog>().HasData(new Blog { BlogId = 1, Url = "http://sample.com" });
  ```

**Adding Entities with Relationships: To add entities with relationships, specify the foreign key values:**

```modelBuilder.Entity<Post>().HasData(
    new Post { BlogId = 1, PostId = 1, Title = "First post", Content = "Test 1" });
```

**Seeding Owned Entity Types: Owned entity types can be seeded similarly:**
```modelBuilder.Entity<Post>().OwnsOne(p => p.AuthorName).HasData(
    new { PostId = 1, First = "Andriy", Last = "Svyryd" },
    new { PostId = 2, First = "Diego", Last = "Vega" });
```

**Limitations of Model Seed Data:**

- Primary key value must be specified, even if it's usually generated by the database.

- Previously seeded data will be removed if the primary key is changed.

- Recommended for static data not expected to change outside of migrations and not dependent on anything else in the database.

- Custom Initialization Logic: Use DbContext.SaveChanges() to manually perform data seeding. Make sure the seeding code is not part of the normal app execution to avoid concurrency issues.


## Entity Framework Core

<https://learn.microsoft.com/en-us/aspnet/core/data/ef-rp/intro?view=aspnetcore-7.0&viewFallbackFrom=aspnetcore-2.1&tabs=visual-studio>

Entity Framework Core is a modern object-database mapper for .NET. It supports LINQ queries, change tracking, updates, and mapping from a relational database to .NET objects.

**The Tutorial's Summary is below:**

Prerequisites include familiarity with Razor Pages and having Visual Studio 2022 with the ASP.NET and web development workload installed.

**Creating the Project:**

- Start a new ASP.NET Core Web App project with the name "ContosoUniversity."

- Configure the site style by updating the Pages/Shared/_Layout.cshtml file.

**Creating the Data Model:**

- The data model consists of three entities: Student, Course, and Enrollment.

- The relationships between entities are represented in the Course-Enrollment-Student data model diagram.

- The DbContext class "SchoolContext" coordinates EF Core functionality for the data model.

- The DbSet properties are pluralized for better naming conventions.

- The DatabaseGenerated attribute is used to specify primary keys instead of having the database generate them.

**Scaffolding Student Pages:**

- Use the ASP.NET Core scaffolding tool to generate Razor pages that handle CRUD operations for the Student entity.

- The DbContext class "SchoolContext" is automatically registered with dependency injection.

- The connection string for SQL Server LocalDB is added to appsettings.json.

- The database exception filter is added for better error handling during development.

**Create the Database:**

- The app uses EnsureCreated to create the database and schema if it doesn't exist.

- If data preservation is required, migrations are recommended over EnsureCreated.

- Use the Microsoft.AspNetCore.Diagnostics.EntityFrameworkCore NuGet package for better Entity Framework Core error pages.

**Test the App:**

- Test the app by running it and interacting with the Students page.

**Seed the Database:**

- The DbInitializer class is created to populate the database with test data.

- The EnsureCreated method is updated to call DbInitializer.Initialize to seed the database.

**Asynchronous EF Methods:**

- Asynchronous programming is the default mode for ASP.NET Core and EF Core for better resource utilization.

- Use async and await to execute EF Core queries and commands asynchronously.

- Be aware of thread-safety issues with EF Core contexts and potential performance considerations.

**Performance Considerations:**

- EF Core queries should use paging or limiting to avoid loading an arbitrary number of rows.

- Enumerating a large table in a view without paging could result in partially constructed HTTP 200 responses if a database exception occurs.

## User Secrets

<https://codefellows.github.io/code-401-dotnet-guide/resources/user-secrets.html>

**Enabling User Secrets**

1. Right click on your project
2. Select "Manage User Secrets"
3. Right click on your project and select “Edit xxx.csproj file” (the xxx will be the name of your project)


**Azure Method**

1. Go to your App Services
2. Select the site you are working on
3. In the left hand navigation, select application settings
4. Under the “App Setting” you can add in user secret data. Azure sees this environment variable data.

**Check out link for more information.**

## YouTube - Intro to APIs (60 min)

<https://www.youtube.com/watch?v=aIkpVzqLuhA&feature=youtu.be>

## Lecture Notes

# Introduction to Databases and ERDs

## Why Its Important:

This information is important because it provides us with information of how databases should be developed and managed. Understanding this helps us create efficient databases, tables and keeps them clean.

## Data Models (Review the DB Schema)

<https://learn.microsoft.com/en-us/aspnet/core/data/ef-mvc/complex-data-model?view=aspnetcore-2.0>

- To display only the date and NOT the time in web pages, use DataType Attribute with DataType.Date

- The DataType.Date attribute doesn't specify the display format but conveys the semantic meaning of the data

- To explicitly specify the date format for display, use the DisplayFormat attribute with the DataFormatString parameter set to "{0:yyyy-MM-dd}"

- ApplyFormatInEditMode = true ensures that the specified formatting is also applied when the value is displayed in an editing text box.

- The DataType attribute enables HTML5 features like a date selector for browsers that support it, and the browser renders data based on the user's locale.

**Column Mapping**

- The Column attribute allows you to control how classes and properties are mapped to the database.

- You can use it to specify a different column name for a property in the database, which might be more suitable for ad-hoc queries.

**Regarding Migrations**

- Migrations are used to update the database schema without losing data.

- When changes are made to the data model, such as adding attributes or modifying property lengths, you can create migrations to apply these changes to the database.

- Migrations are created using the Add-Migration command. This analyzes the current model and creates a migration class with the Up() and Down() methods.

- The Up() method contains the code to apply the changes to the database. The Down() method reverts the changes.

- The command "dotnet ef migrations add MigrationName" creates a migration, and "dotnet ef database update" applies the migration to the database.

## DBMS

<https://www.tutorialspoint.com/dbms/dbms_overview.htm>

**Real-world entity** − A modern DBMS is more realistic and uses real-world entities to design its architecture. It uses the behavior and attributes too. For example, a school database may use students as an entity and their age as an attribute.

**Relation-based tables** − DBMS allows entities and relations among them to form tables. A user can understand the architecture of a database just by looking at the table names.

**Isolation of data and application** − A database system is entirely different than its data. A database is an active entity, whereas data is said to be passive, on which the database works and organizes. DBMS also stores metadata, which is data about data, to ease its own process.

**Less redundancy** − DBMS follows the rules of normalization, which splits a relation when any of its attributes is having redundancy in values. Normalization is a mathematically rich and scientific process that reduces data redundancy.

**Consistency** − Consistency is a state where every relation in a database remains consistent. There exist methods and techniques, which can detect attempt of leaving database in inconsistent state. A DBMS can provide greater consistency as compared to earlier forms of data storing applications like file-processing systems.

**Query Language** − DBMS is equipped with query language, which makes it more efficient to retrieve and manipulate data. A user can apply as many and as different filtering options as required to retrieve a set of data. Traditionally it was not possible where file-processing system was used.

**ACID Properties** − DBMS follows the concepts of Atomicity, Consistency, Isolation, and Durability (normally shortened as ACID). These concepts are applied on transactions, which manipulate data in a database. ACID properties help the database stay healthy in multi-transactional environments and in case of failure.

**Multiuser and Concurrent Access** − DBMS supports multi-user environment and allows them to access and manipulate data in parallel. Though there are restrictions on transactions when users attempt to handle the same data item, but users are always unaware of them.

**Multiple views** − DBMS offers multiple views for different users. A user who is in the Sales department will have a different view of database than a person working in the Production department. This feature enables the users to have a concentrate view of the database according to their requirements.

**Security** − Features like multiple views offer security to some extent where users are unable to access data of other users and departments. DBMS offers methods to impose constraints while entering data into the database and retrieving the same at a later stage. DBMS offers many different levels of security features, which enables multiple users to have different views with different features. For example, a user in the Sales department cannot see the data that belongs to the Purchase department. Additionally, it can also be managed how much data of the Sales department should be displayed to the user. Since a DBMS is not saved on the disk as traditional file systems, it is very hard for miscreants to break the code.

## Additional Information

Foreign = A key that isn't from a that specific table, it is the defining link between the tables. It's referencing a table that isn't the current table. 

Primary = The main key that identifies each row uniquely. It's referencing a table that is its current table. 


**HTML5**

HTML5, the latest version of the Hypertext Markup Language, incorporates new features and improvements over previous HTML versions (such as HTML4 and XHTML), introducing semantic elements, multimedia support, canvas for graphics, enhanced forms, geolocation, and offline capabilities for web applications. It enables better content organization with semantic elements and native support for multimedia elements like audio and video. The addition of the canvas element allows developers to create graphics and animations within web pages using JavaScript. Furthermore, HTML5 brings enhancements to web forms, geolocation access, and offline functionality, making web applications more interactive and responsive across various devices. Its adoption has significantly impacted modern web development, providing more possibilities for creating dynamic and multimedia-rich web pages and applications.

## Lecture Notes

- **Transactions**: Transactions in a database are similar to functions in programming. They allow you to group a set of database operations together into a single logical unit of work. Transactions ensure that all operations within the unit are completed successfully, or if any operation fails, the entire unit is rolled back, and the database remains in its original state.

- **BEGIN TRAN**: To start a transaction, you use the `BEGIN TRAN` command in the database management system.

- **END**: To mark the end of a transaction, you use the `END` command.

- **ROLLBACK TRAN**: If you encounter an error or want to undo the changes made within the transaction, you can execute the `ROLLBACK TRAN` command, which rolls back the transaction to its starting state.

- **COMMIT**: On the other hand, if all the operations within the transaction are successful, you can use the `COMMIT` command to save the changes permanently to the database.

- **Highlighting Sections of Code**: In some development environments, you can highlight sections of code, even if they are commented out, and execute them independently for testing or debugging purposes.

- **Error Handling in .NET ASP Console APP**: Errors encountered during the execution of an ASP.NET Core application route to the error page in the .NET ASP Console APP. This is helpful for diagnosing and handling errors gracefully.

- **View Start & View Import**: These are configuration files that help configure how Razor pages work. They allow you to set up layout-to-layout inheritance, which means you can define common layouts for pages and include dynamic content using `@RenderBody()` where necessary.

- **@RenderBody()**: In Razor pages, the `@RenderBody()` directive defines a placeholder where the content of the specific page being rendered will be inserted. It allows you to separate the common layout from the specific content of individual pages.

- **@RenderSection()**: The `@RenderSection()` directive allows you to define sections within a Razor page that can be optionally rendered in the layout. This allows you to encapsulate reusable content in sections that can be rendered condition

# Q&A

## Data Models

**Q.** Do some research on what a Database Schema is.its **A.** a blueprint that defines the structure and organization of a database

**Q.**  What is a Schema?
**A.** its the name for the blueprint for a database

**Q.** Why do we use them?
**A.** to organize and structure data

**Q.** What do they look like?
**A.** 

**Q.** What are the different types of Database Keys?
**A.** 

**Q.** What is a Primary Key?
**A.** uniquely identifies a record in a table

**Q.** What is a Foreign Key?
**A.** establishes a link between two tables

**Q.** What is a Composite Key?
**A.** combination of two or more columns used as a unique identifier

**Q.** How are they different? When do you use 1 over the others?
**A.** you use a primary key when you need a unique indefiier, a foregin key to estbalish relationships and a connection between tables, and a composite when a single column does not provide enough uniqueness

## DBMS

**Q.** What are Relationships in a relational database?
**A.** relationships in a relational databaase are connections between tables that define how they relate to each other

**Q.** What is a 1:1 relationship?
**A.** it is when one record in a table is related ONLY to 1 record in another table and vice verse

**Q.** What is a Many:Many relationship?
**A.** it is when mutliple records in one table are related to multiple records in another table

**Q.** How about a 1: Many or a Many:1?
**A.** it is when one record in a table is related to mutliple records n another table or vice verse

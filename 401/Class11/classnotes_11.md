# Introduction to Databases and ERDs

## Why Its Important:


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

### Customize Data Model

**Data Customization**


## Additional Information

**HTML5**

HTML5, the latest version of the Hypertext Markup Language, incorporates new features and improvements over previous HTML versions (such as HTML4 and XHTML), introducing semantic elements, multimedia support, canvas for graphics, enhanced forms, geolocation, and offline capabilities for web applications. It enables better content organization with semantic elements and native support for multimedia elements like audio and video. The addition of the canvas element allows developers to create graphics and animations within web pages using JavaScript. Furthermore, HTML5 brings enhancements to web forms, geolocation access, and offline functionality, making web applications more interactive and responsive across various devices. Its adoption has significantly impacted modern web development, providing more possibilities for creating dynamic and multimedia-rich web pages and applications.

## Lecture Notes

# Q&A

## Data Models

1. Do some research on what a Database Schema is.

2. What is a Schema?

3. Why do we use them?

4. What do they look like?

5. What are the different types of Database Keys?

6. What is a Primary Key?

7. What is a Foreign Key?

8. What is a Composite Key?

9. How are they different? When do you use 1 over the others?

## DBMS

1. What are Relationships in a relational database?

2. What is a 1:1 relationship?

3. What is a Many:Many relationship?

4. How about a 1: Many or a Many:1?

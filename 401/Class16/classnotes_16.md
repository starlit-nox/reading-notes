# Data Transfer Objects

## Why Its Important:

The reason this information is important is because the DTOs customize and optimizes data exchanges between different layers of web applications. This helps and improves the performance, security, and maintaiblity of web applications.

## Analogy:

Think of your computer program as a busy kitchen. Cooks prepare food, and servers bring it out. Instead of yelling, they use a smart menu (DTO). Cooks write the dish and any special requests on the menu. Servers read it to serve the correct food. DTOs help share only the necessary info, making the program run smoothly, just like a kitchen with an organized menu system.

## Data Transfer Objects
<https://learn.microsoft.com/en-us/aspnet/web-api/overview/data/using-web-api-with-entity-framework/part-5>

- **DTO Usage and Purpose:**
  - DTOs serve as specialized data containers for customizing data exchange between client and server in web applications.
  - They allow control over the structure and content of data sent over the network, optimizing data presentation for different use cases.

- **Advantages of Using DTOs:**
  - **Circular Reference Elimination:** DTOs help avoid circular references between related entities, preventing data duplication and enhancing data integrity.
  - **Property Hiding:** Sensitive or unnecessary properties can be excluded from DTOs, ensuring that only relevant data is exposed to clients.
  - **Payload Size Reduction:** By sending only required data, payload size is minimized, leading to faster data transfer and improved performance.
  - **Object Graph Flattening:** Nested object graphs can be flattened into simpler DTO structures, streamlining data consumption on the client side.
  - **Over-Posting Vulnerability Mitigation:** DTOs prevent over-posting issues, where unwanted or malicious data could be posted to the server.
  - **Decoupling Layers:** DTOs decouple the service layer from the database layer, promoting separation of concerns and maintainability.

- **DTO Definition and Structure:**
  - DTOs are defined as classes with properties that represent the desired data to be transmitted.
  - In the provided example, `BookDto` and `BookDetailDto` classes are created with selected properties for different levels of detail.

- **LINQ and DTO Conversion:**
  - In the `BooksController`, LINQ's `Select` method is used to convert `Book` entities into corresponding DTOs.
  - In the `GetBooks` method, a LINQ query retrieves books from the database while joining the `Authors` table to obtain author names.

- **Customization with DTOs:**
  - DTOs offer flexibility in customizing data presentation for specific scenarios, illustrated by selecting relevant properties and joining related tables.

- **PostBook Method Modification:**
  - The `PostBook` method is enhanced to return a DTO after successfully adding a new book to the database.
  - The DTO contains the book's ID, title, and associated author's name, providing a concise representation of the newly created resource.

- **Efficient Querying and Data Transfer:**
  - DTOs, combined with LINQ, ensure efficient querying by fetching only necessary data from the database.
  - This approach minimizes unnecessary data transfer, leading to faster response times and improved overall application performance.


## How to use DTOs
<https://www.infoworld.com/article/3562271/how-to-use-data-transfer-objects-in-aspnet-core-31.html>

### Create an ASP.NET Core 3.1 API project

1. Launch the Visual Studio IDE.
2. Click on “Create new project.”
3. In the “Create new project” window, select “ASP.NET Core Web Application” from the list of the templates displayed.
4. Click Next. 
5. In the “Configure your new project” window, specify the name and location for the new project.
6. Click Create. 
7. In the “Create New ASP.NET Core Web Application” window shown next, select .NET Core as the runtime and ASP.NET Core 3.1 (or later) from the drop-down list at the top.
8. Select “API” as the project template to create a new ASP.NET Core API application. 
9. Ensure that the check boxes “Enable Docker Support” and “Configure for HTTPS” are unchecked as we won’t be using those features here.
10. Ensure that Authentication is set as “No Authentication” as we won’t be using authentication either.
11. Click Create. 

**Using DTOs for Decoupling:** Data Transfer Objects (DTOs) help maintain a separation between different layers of an application, preventing the exposure of internal data structures. This design flaw can be avoided by using DTOs to transfer data between layers, enhancing flexibility and adaptability.

**Abstraction and Flexibility:** DTOs allow abstraction between the domain objects and the user interface, enabling changes in one layer without affecting the other. This separation is particularly valuable when altering either the presentation or domain layer, as the application continues to function seamlessly.

**Data Hiding:** DTOs enable data hiding by transmitting only the required data. For instance, when retrieving employee information, a tailored DTO can carry specific attributes, avoiding unnecessary exposure of sensitive details like salaries. This promotes better security and efficiency.

**Immutability of DTOs:** Immutable DTOs ensure that data remains consistent during transmission, enhancing reliability and predictability. Immutable DTOs can be achieved using mechanisms like ReadOnlyCollection, immutable collection types, or C# 9 record types.

**Serialization Challenges:** While DTOs facilitate data exchange, serialization issues may arise when handling complex object relationships. Lazy loading or asynchronous loading can address this problem by loading entities only as needed, optimizing serialization processes.

**Focus on Data:** DTOs primarily serve as carriers of data, devoid of business logic. Immutability and well-defined data structures are key attributes for effective DTO usage.

**Lazy Loading for Efficiency:** To manage complex object dependencies during serialization, lazy loading allows entities to be loaded only upon request, minimizing unnecessary data transfer and optimizing performance.

## Lecture Notes / What I Want to Know
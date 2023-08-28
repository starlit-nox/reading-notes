# Intro to MVC

## Why Its Important:

The reason this information is important is because it shows the modern software development work flow for Azure DevOps and it provides the tools and best practices for integration and deployment. It teaches the MVC architecture that's needed to build efficient and secure web apps. The tag helpers and bootstraps enhance the frontend dev portion of it by making HTML simlified and gives the app more responsiveness.

## Analogy
Think about it like this, you need a mancave and you're building one in the shed in the backyard (or a womancave / whatever a hang out spot), Azure DevOps is the special toolkit that helps everyone who's working on it work on a different parts of the shed and it makes sure everything comes together right. MVC is like arranging the furntiure in the place once its completed. Model exists as the items you put inside it and View exists as how the interior design portion of the man cave/hang out shed looks like. The controller would be you, controlling who comes in and does what inside of the shed. As for tag helpers and boostrape work as signs (like neon signs, pictures, route 44 road sign etc) that you hang around the man cave. They're premade and all you have to do is put them up to decorate them.

## Azure Dev Ops
<https://learn.microsoft.com/en-us/azure/devops/?view=azure-devops>

## MVC Basics
<https://www.c-sharpcorner.com/article/learn-basics-of-mvc-architecture/>

## Introduction to MVC
- MVC (Model-View-Controller) is a design pattern for efficient web application development.
- Separates application logic into three components: Model, View, and Controller.
- Models represent data and functionality, Views handle UI, and Controllers manage interactions.

## Differences between Traditional ASP.NET and MVC
- Traditional ASP.NET combines UI and action logic tightly.
- MVC separates UI (View) from action logic (Controller).
- MVC follows action-based architecture with user actions defined in Controllers.

## View State and State Management
- ASP.NET uses View State, leading to heavy pages and inefficient server communication.
- MVC avoids View State, resulting in lighter pages and more efficient server interactions.

## Page Life Cycle and Response Time
- ASP.NET's full page life cycle may lead to slower response times.
- MVC lacks a page life cycle, leading to faster responses due to selective action execution.

## Testing and Code Quality
- In ASP.NET, tight coupling makes testing challenging.
- MVC's loose coupling enhances test-driven development, allowing separate testing of layers.

## MVC Architecture Overview
- Model, View, and Controller are core components.
- Model holds data and functionality.
- View contains UI elements using Razor Engine.
- Controller handles user requests and coordinates actions.

## Controller in MVC
- Controller processes incoming user requests and triggers actions.
- Actions are methods within the Controller class.
- Routing maps URLs to Controller actions.

## Routing
- Routing defines URL patterns for mapping user requests to actions.
- Route Table created during Application Start event.
- Routes registered in Global.asax's Application_Start().

## Data Access Layer (DAL)
- DAL is separate, communicates with the database, and returns results to Models.

## ASP.NET MVC and ASP.NET Web Application Compatibility
- ASP.NET MVC built atop ASP.NET, supports its features.
- Same logic can be used across ASP.NET MVC and other applications by changing views.

## Front Controller vs. Page Controller
- MVC uses Front Controller approach where the Controller manages all requests.
- ASP.NET Web Application uses Page Controller approach, handling requests within each page.

## Choosing the Right Framework
- ASP.NET MVC suits light-weight apps, large teams, and applications with separation of concerns.
- Traditional ASP.NET Web Application better for RAD models and small-scale apps.

## Advantages of ASP.NET MVC
- Enhances reusability with separated concerns.
- Supports teamwork by allowing different developers to focus on different layers.
- Suitable for both small and large-scale applications.

## Tag Helpers
<https://learn.microsoft.com/en-us/aspnet/core/mvc/views/tag-helpers/intro?view=aspnetcore-2.1>

**Tag Helpers:** enable server-side code to create and render HTML elements in Razor files. 
- They provide an HTML-friendly development experience, making it easier for front-end designers to work with Razor files.
- Tag Helpers are not supported in Razor components.

### Key Features and Benefits:

- Tag Helpers simplify the creation of HTML elements in Razor views.
- They provide an alternative approach to HTML Helpers for server-side markup.
- Tag Helpers enhance productivity and maintainability by generating code based on server-side information.
- They allow developers to create more robust and reliable code, such as automatically managing image versioning for cache control.

### Tag Helper Scope Management:

- Tag Helper scope is controlled by `@addTagHelper`, `@removeTagHelper`, and the "!" opt-out character.
- `@addTagHelper` makes Tag Helpers available globally or within specific views.
- `@removeTagHelper` removes previously added Tag Helpers.
- `_ViewImports.cshtml` files control scope for specific view folders.

### Using Tag Helper Prefix:

- `@tagHelperPrefix` sets a tag prefix to make Tag Helper usage explicit.
- Tag Helpers with the specified prefix are enabled, while others are not.

### Self-Closing Tag Helpers:

- Some Tag Helpers can be used as self-closing tags, while others must have separate opening and closing tags.
- Using non-self-closing Tag Helpers as self-closing tags suppresses their rendered output.

### IntelliSense Support for Tag Helpers:

- Assists in writing Tag Helper markup by suggesting matching HTML elements and attributes.
- Tag Helper-targeted elements are identified with an "@" symbol and "<>" icon.
- IntelliSense provides suggestions for C# properties and methods on page models.

### Comparison with HTML Helpers:

- Provide a more HTML-like approach compared to HTML Helpers.
- Markup is cleaner and more readable, making it easier to maintain.
- More intuitive for front-end designers and developers.

### Comparison with Web Server Controls:

- Tag Helpers participate in rendering elements and content but don't own them.
- No direct control over the DOM.
- More focused scope and avoid unintended side effects.
- Use native C# instead of type converters and System.ComponentModel.

## Bootstrap
<https://getbootstrap.com/>

## 1 Hour tutorial Bootstrap
<https://scrimba.com/learn/bootstrap4>

## Lecture Notes / What I Want to Know

## Q&A
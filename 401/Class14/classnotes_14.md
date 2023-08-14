# Navigation Properties and Routing

## Why Its Important:

The reason this is important is because it efficeintly maps URLs to actions, controllers, and endpoints. This allows us to be able to move across a webpage and request and accept processing for URLs.

## Analogy:

Consider being in a large kitchen, eager to make a sandwich. The kitchen's routing system is akin to a helpful guide familiar with where every ingredient is stored. When you request bread, it promptly directs you to the correct shelf. Similarly, routing assists your computer in locating the appropriate recipe (web page) as you enter a unique name (web address).

## Routing within MVC

<https://learn.microsoft.com/en-us/aspnet/mvc/overview/older-versions-1/controllers-and-routing/asp-net-mvc-routing-overview-cs>

- ASP.NET MVC relies on routing to determine how incoming URL requests are processed and which controller actions should handle them.

- Routing is a core component that enables clean and user-friendly URLs by mapping them to specific controller actions.

**Default Route Table:**

Upon creating an ASP.NET MVC application, it's pre-configured to utilize ASP.NET Routing.

Routing is established both in the Web.config file and the Global.asax file, ensuring that URLs are properly processed.

**Global.asax:**

- Global.asax is a special file containing event handlers that respond to various application lifecycle events in ASP.NET.
- The Application_Start() method is called when the application begins, and it initializes the routing system.
- The RegisterRoutes() method, invoked within - Application_Start(), sets up the routing rules and creates the route table.
- The default route, named "Default," specifies the structure for mapping URL segments to controller, action, and parameter values.
- The URL pattern follows the format: "{controller}/{action}/{id}".

Default values for each parameter can be defined in the route configuration, providing flexibility in handling different scenarios.


When a URL like /Home/Index/3 is requested, the Default route performs the following mapping:

**Controller:** Maps to "Home"
**Action:** Maps to "Index"
**Parameter:** Maps "3" to the id parameter

### Controller Actions:

Controller actions are invoked based on the parsed URL pattern and extracted parameter values.

The MVC framework identifies the appropriate controller class and method to execute, matching them to the URL segments.

Examples:

**/Home:** Maps to the Index() method within the HomeController class. The id parameter defaults to an empty value.

**/Home/Index/3:** Maps to the Index() method of HomeController with id parameter set to 3.

**/Home/Index:** Depending on the method signature, it could map to different overloads of the Index() method.

**/Home/Index/:** Successfully maps to methods that have nullable parameter types, accommodating scenarios where parameters are absent.

**/Home/Index/3:** Maps to the Index() method of HomeController with a non-nullable id parameter.
HandleError Attribute:

The **HandleError** attribute is applied to controller classes to gracefully manage errors within the actions of that controller.

It enhances the user experience by providing a consistent error-handling mechanism across the controller's actions.


## Routing within Core

<https://learn.microsoft.com/en-us/aspnet/core/fundamentals/routing?view=aspnetcore-3.1>


**Routing Responsibility:** Routing manages incoming HTTP requests, directing them to executable endpoints within the app.

**Endpoints:** Endpoints are distinct units of executable code for handling requests, defined in the app and set up during app startup.

**URL Extraction:** Routing can extract values from the request URL, allowing these values to be used for request processing.

**URL Generation:** Routing can also generate URLs that map to specific endpoints.

**Configuring Routing:** Apps can configure routing using various techniques, including controllers, Razor Pages, SignalR, gRPC services, middleware, delegates, and lambdas.

### Route Configuration:

**Middleware Setup:** In the Startup.Configure method, routing is added to the middleware pipeline using app.UseRouting().

**Endpoint Execution:** The app.UseEndpoints method is used to configure endpoint execution within the pipeline.

**Endpoint Definitions:** Endpoints are defined using methods like MapGet, MapPost, MapRazorPages, etc.

**Route Templates:** Route templates define how URLs are matched to endpoints. They specify placeholders and constraints.

**Route Constraints:** Constraints refine route matching, allowing validation of placeholders like {name:alpha} for alphabetic characters.
Endpoint Metadata:

**Metadata Usage:** Endpoints can be augmented with metadata, which can be any .NET type.

**Middleware Interaction:** Routing-aware middleware can process endpoint metadata, influencing request processing based on metadata properties.

**Authorization Example:** Authorization middleware can utilize endpoint metadata to determine access permissions.
Endpoint Concepts:

**Endpoint Definition:** An ASP.NET Core endpoint consists of:

- A RequestDelegate responsible for handling the request.
Metadata, which can be used by middleware and can be any .NET type.
- Optional routing information that aids in endpoint selection.
- Enumerable Endpoints: Endpoints can be listed by retrieving the EndpointDataSource from Dependency Injection.
Endpoint Inspection:

**Retrieving Endpoint:** The context.GetEndpoint() method retrieves the currently selected endpoint (if any).

**Endpoint Properties:** Properties of the endpoint can be examined, including display name, route pattern, and metadata.

**Endpoint Variants:** Different types of endpoints, like RouteEndpoint, provide access to specialized properties (e.g., route pattern).

### Middleware Interaction with Routing:

**Middleware Order:** Middleware can run before and after routing.

**Before Routing:** Middleware before routing can manipulate request properties before route matching.

**After Routing:** Middleware between routing and endpoint execution can make decisions based on endpoint metadata.
Example - Audit Log Middleware:

**Audit Middleware:** The example showcases custom middleware that logs access to sensitive data based on endpoint metadata.

**Pre-Routing Influence:** Middleware before routing, like app.UseHttpMethodOverride(), can modify request properties.

**Metadata-Driven Logic:** Middleware between routing and endpoint execution can inspect endpoint metadata, such as AuditPolicyAttribute.

**Selective Auditing:** The audit middleware demonstrates an opt-in pattern, where only endpoints marked as sensitive trigger the audit.

## Lecture Notes / What I Want to Know
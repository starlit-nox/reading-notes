# Testing and Swagger and Deployment

## Why Its Important:
This information is important because it covers the doccumentation for Swaghger/OpenAPI. It hilightsd the importances of unit etsting when using ASP.NET MVC apps and it gives examples for testing controllers actions to help us test their reliablility. 

## Analogy

Swagger is like a special dictionary for computer programs that helps them understand how to talk to each other. We learn new words and their meanings from a dictionary, Swagger helps computers learn how to share information in a similiar manner. 

## Swagger
<https://learn.microsoft.com/en-us/aspnet/core/tutorials/web-api-help-pages-using-swagger?tabs=visual-studio&view=aspnetcore-2.1>

**Description:** Swagger, now referred to as OpenAPI, is a language-agnostic specification used for describing REST APIs. It enables both machines and humans to understand the capabilities of a REST API without needing direct access to the source code. Its primary aims are to simplify the connection of decoupled services and to expedite the process of accurately documenting a service.

**Implementations for .NET:** The two main OpenAPI implementations for .NET are Swashbuckle and NSwag.

**Swashbuckle and NSwag:** Swashbuckle and NSwag are tools that implement OpenAPI for .NET. They allow you to generate OpenAPI specifications and provide Swagger UI for interactive testing of APIs.

**OpenAPI vs. Swagger:** The Swagger project was donated to the OpenAPI Initiative, and "Swagger" now refers to the family of products from SmartBear that work with the OpenAPI Specification. "OpenAPI" specifically denotes the specification itself.

**OpenAPI Specification (openapi.json):** The OpenAPI specification is a document describing an API's capabilities. It's based on XML and attribute annotations within controllers and models. The specification drives tools like Swagger UI. The default filename is openapi.json.

**Example of OpenAPI Specification:**

```json
{
  "openapi": "3.0.1",
  "info": {
    "title": "API V1",
    "version": "v1"
  },
  "paths": {
    "/api/Todo": {
      "get": {
        "tags": ["Todo"],
        "operationId": "ApiTodoGet",
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ToDoItem"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ToDoItem"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ToDoItem"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        // ...
      }
    },
    "/api/Todo/{id}": {
      "get": {
        // ...
      },
      "put": {
        // ...
      },
      "delete": {
        // ...
      }
    }
  },
  "components": {
    "schemas": {
      "ToDoItem": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32"
          },
          "name": {
            "type": "string",
            "nullable": true
          },
          "isCompleted": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }
    }
  }
}
```

**Swagger UI:** Swagger UI provides a web-based interface for interacting with an API using the generated OpenAPI specification. Both Swashbuckle and NSwag include an embedded version of Swagger UI that can be hosted in an ASP.NET Core app. It allows testing of public action methods in controllers and provides an intuitive web UI.

![Swagger UI](https://learn.microsoft.com/en-us/aspnet/core/tutorials/web-api-help-pages-using-swagger/_static/swagger-ui.png?view=aspnetcore-2.1)


## Unit Testing
<https://learn.microsoft.com/en-us/aspnet/mvc/overview/older-versions-1/unit-testing/creating-unit-tests-for-asp-net-mvc-applications-cs>

**Create the central element:** ProductController.

ProductController houses **Index()** and **Details(int Id)** action methods.

Example:

```csharp
public class ProductController : Controller
{
     public ActionResult Index()
     {
          // Action logic
          throw new NotImplementedException();
     }

     public ActionResult Details(int Id)
     {
          var product = new Product(Id, "Laptop");
          return View("Details", product);
     }
}
```

### Testing Views Returned by Controller

Ensure **ProductController.Details()** action returns desired view (Details view).

Develop **TestDetailsView()** unit test:

```csharp
[TestMethod]
public void TestDetailsView()
{
     var controller = new ProductController();
     var result = controller.Details(2) as ViewResult;
     Assert.AreEqual("Details", result.ViewName);
}
```

- Validating View Data from Controller
- Examine View Data flow within controller.
- Validate expected data in View Data.

Enhance **ProductController.Details(**) action:

```csharp
public ActionResult Details(int Id)
{
     var product = new Product(Id, "Laptop");
     return View("Details", product);
}
```

Develop **TestDetailsViewData()** test method:

```csharp
[TestMethod]
public void TestDetailsViewData()
{
     var controller = new ProductController();
     var result = controller.Details(2) as ViewResult;
     var product = (Product)result.ViewData.Model;
     Assert.AreEqual("Laptop", product.Name);
}
```

### Assessing Action Results from Controller

- Investigate diverse action results from controller actions.
- Explore modified Details() action's varied responses based on product ID.

Develop **TestDetailsRedirect()** method:

```csharp
[TestMethod]
public void TestDetailsRedirect()
{
     var controller = new ProductController();
     var result = (RedirectToRouteResult)controller.Details(-1);
     Assert.AreEqual("Index", result.Values["action"]);
}
```

**Culmination**

- Summarize essence of constructing unit tests for MVC controller actions.
- Cover specific view evaluation, accurate View Data transmission, and diverse action outcomes.
- Lay foundation for reliable and functional ASP.NET MVC applications.

## Testing Controllers
<https://learn.microsoft.com/en-us/aspnet/core/mvc/controllers/testing?view=aspnetcore-2.1>

### Unit Tests of Controller Logic

- Unit tests focus on isolating specific parts of the application from its dependencies and infrastructure.
- The primary goal of unit testing controller logic is to test individual actions within the controller.
- Unit tests of controllers should avoid scenarios involving filters, routing, and model binding.
- Integration tests cover interactions among various components responding to a request.

### Controller Example: HomeController

- `HomeController` serves as an example, displaying brainstorming sessions and enabling session creation.
- Follows the Explicit Dependencies Principle and relies on dependency injection (DI).
- Includes both a GET `Index` method and a POST `Index` method for session creation.

### Unit Testing GET Index Method

1. The test involves mocking the `IBrainstormSessionRepository` using the `GetTestSessions` method.
2. The `Index` method is executed, and the returned result is analyzed.
3. Assertions are made to confirm that:
   - A `ViewResult` is returned.
   - The `ViewDataDictionary.Model` contains a `StormSessionViewModel` with details of two brainstorming sessions.

### Unit Testing POST Index Method

1. The test examines the behavior when `ModelState.IsValid` is evaluated.
2. If the model state is invalid, the test asserts that the method returns a `BadRequest` result.
3. For valid input, the test verifies:
   - The addition of a new brainstorming session.
   - A `RedirectToActionResult` with the appropriate arguments.

### Unit Testing SessionController

- `SessionController` is responsible for displaying information about specific brainstorming sessions.
- Unit tests cover scenarios where session IDs are missing, sessions are not found, and valid sessions are retrieved.

### Unit Testing IdeasController

- `IdeasController` exposes API functionality for brainstorming session ideas.
- The `ForSession` method is tested for both invalid and valid session scenarios.

### Unit Testing Create Method

1. The test suite examines the behavior of the `Create` method.
2. For invalid model state, the test ensures that the method returns a `BadRequest` result.
3. When creating a new idea, the test verifies:
   - Repository interactions, such as method calls.
   - A `CreatedAtActionResult` with appropriate details.

### Using ActionResult<T>

- ASP.NET Core 2.1 introduced `ActionResult<T>`, enabling more specific return types.

### Unit Testing ForSessionActionResult

- Unit tests evaluate the `ForSessionActionResult` method for scenarios involving invalid and valid sessions.

### Unit Testing CreateActionResult

- Tests focus on the `CreateActionResult` method, covering cases of an invalid model, a nonexistent session, and successful idea creation.


## Lecture Notes / What I Want to Know

## Q&A
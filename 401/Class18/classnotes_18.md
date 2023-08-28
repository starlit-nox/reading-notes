# Identity

## Why Its Important:
This information is important because it is crucial web application security and user authenication. It covers the key features, components, and authenication flow using claims and verbs which is needed to properly understand and manage authentication.

# Analogy
ASP.NET Core Identity is like a key to your bedroom when you live in a house with multiple people. This key has your name and important info on it and when you want to get inside, the key is checked to make sure it's really yours before letting you in.If the key isn't yours, it won't let you into the bedroom since the bedroom isn't yours. 

## Intro to Identity
<https://learn.microsoft.com/en-us/aspnet/core/security/authentication/identity?view=aspnetcore-7.0&viewFallbackFrom=aspnetcore-2.1&tabs=visual-studio>

ASP.NET Core Identity is an API that provides user interface (UI) login functionality and manages various aspects of user authentication and authorization. Some key features of ASP.NET Core Identity include:

- Managing users, passwords, profile data, roles, claims, tokens, and email confirmation.
- Support for creating accounts with stored login information or using external login providers like Facebook, Google, Microsoft Account, and Twitter.
- Configuration using a SQL Server database for data storage, with alternative persistent storage options like Azure Table Storage.

ASP.NET Core Identity is used to build web applications with authentication features. For securing web APIs and SPAs, other options like Azure Active Directory or Duende Identity Server are recommended.

## Creating a Web App with Authentication

To create a web app with authentication using ASP.NET Core Identity:

1. Create an ASP.NET Core Web Application project with Individual User Accounts authentication.

2. Apply migrations to initialize the database.

3. Test the registration and login functionality of the app.

4. Configure Identity services in the `Program.cs` file.

5. Scaffold the Register, Login, LogOut, and RegisterConfirmation pages.

6. Customize the registration and login actions in the generated pages.

## Identity Components

ASP.NET Core Identity consists of various components, including:

- `IdentityUser`: Represents a user with properties like UserName and Email.
- `SignInManager`: Manages user sign-in and sign-out.
- `UserManager`: Manages user-related operations like creating, updating, and deleting users.
- `EmailSender`: Handles email-related functionality, like sending confirmation emails.
- `IdentityDbContext`: A database context for storing Identity-related data.
- `IdentityOptions`: Configuration options for Identity features.
- Razor pages for registration, login, and other Identity-related tasks.


## Identity Demystified
<https://freetimeprogrammer.com/>

In ASP.NET Core 2.0, identity is represented by three classes:

- **Claim:** Represents a single fact about a user.
- **ClaimsIdentity:** Represents a form of digital identification with associated claims.
- **ClaimsPrincipal:** Represents the user and contains one or more instances of ClaimsIdentity.

### Claims

Claims are individual pieces of information about a user, such as name, email, etc. Each claim has a type and a value.

```csharp
// Example claims creation
var fullNameClaim = new Claim("FullName", "Dark Helmet");
var emailClaim = new Claim(ClaimTypes.Email, "dark.helmet@spaceballs.com");
```

### Verbs

There are five verbs (behaviors) in the authentication system:

- **Authenticate:** Retrieves user information.
- **Challenge:** Requests user authentication (e.g., shows a login page).
- **SignIn:** Persists user information (e.g., writes cookies).
- **SignOut:** Removes persisted user information (e.g., deletes cookies).
- **Forbid:** Denies access to resources for unauthorized users.

### Authicantion

**Authentication handlers** implement the behaviors associated with the verbs. The default handler is the Cookies authentication handler.

**Middleware** runs on every request. The authentication middleware checks if a user is authenticated and populates the HttpContext.User object.

The **flow of authentication** and **authorization** involves multiple components working together:

1. Unauthenticated user requests a protected resource.
2. Authentication middleware triggers, and the default handler authenticates if possible.
3. If the resource is decorated with [Authorize], the user's authorization is checked.
4. If unauthorized, a Challenge is issued (e.g., the login page is shown).
5. After successful authentication, the user is authorized to access the resource.


## Lecture Notes / What I Want to Know

## Q&A
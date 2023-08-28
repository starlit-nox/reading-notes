# Roles, Claims and JWT Tokens

## Why Its Important:
This info is important because its the essentials of implementing claims-based authorization in ASP.NET Core. It shows how claims are checked and how policies are enforced, which makes this info crucial for access control. It also gives us information on the fundamentals of identity management and tokens. 

## Analogy
In general, this information is like having an ID for a college campus. It shows who you are and let's you have accces to your school (aka website/app). You can use your card to prove you're part of the class and the security checks your card to make sure its real before they let you go into buildings. 

## Claims-Based auth
<https://learn.microsoft.com/en-us/aspnet/core/security/authorization/claims?view=aspnetcore-7.0&viewFallbackFrom=aspnetcore-2.1>

### Adding Claims Checks

- Claim-based authorization checks are:
  - Declarative.
  - Applied to Razor Pages, controllers, or actions within a controller.
  - Cannot be applied at the Razor Page handler level; they must be applied to the Page.
- Claims in code specify claims that the current user must possess, optionally with a required claim value.
- Claims requirements are policy-based, requiring the developer to build and register a policy expressing the claims requirements.

**Example Policy Registration**

```csharp
options.AddAuthorization(options =>
{
   options.AddPolicy("EmployeeOnly", policy => policy.RequireClaim("EmployeeNumber"));
});
```

### Applying Policies

[Authorize] attribute specifies policy enforcement.
- The attribute can be applied to entire controllers or Razor Pages.

[AllowAnonymous] can be used to allow anonymous access to specific actions.

**Specifying Allowed Claim Values**

- Most claims have values; a list of allowed values can be specified.

**Example: Allowing access only for employees with employee numbers 1 to 5.**

```csharp
options.AddPolicy("Founders", policy =>
                  policy.RequireClaim("EmployeeNumber", "1", "2", "3", "4", "5"));
```

**Using RequireAssertion for Complex Checks**

- If the claim value isn't a single value or requires transformation, use RequireAssertion.

**Multiple Policy Evaluation**

- When multiple policies are applied, all must pass for access to be granted.
- Policies are applied at the controller and action levels.

```csharp
[Authorize(Policy = "EmployeeOnly")]
[Authorize(Policy = "HumanResources")]
public class SalaryModel : PageModel
{
    // ...
}
```

## Intro to Claims
<https://andrewlock.net/introduction-to-authentication-with-asp-net-core/>

### Authentication vs Authorization

- **Authentication** determines who the user is, while **Authorization** defines what the user is allowed to do (permissions).
- Authentication must happen before Authorization, as you need to know the user's identity to determine their permissions.

### Authentication in ASP.NET Core

- ASP.NET Core maintains the concept of identity similar to previous versions.
- In ASP.NET Core, the `User` property in `HttpContext` is a `ClaimsPrincipal` (a type of `IPrincipal`).

### Claims-based Authentication

- Claims-based authentication involves associating **claims** with an identity.
- Claims represent properties of an identity, like FirstName, LastName, DateOfBirth.
- Claims are used to describe the identity, not the permissions.
- Claims can be used to provide fine-grained access control.

### ClaimsPrincipal and ClaimsIdentity

- `ClaimsPrincipal` represents a user and holds one or more `ClaimsIdentities`.
- Each `ClaimsIdentity` contains a collection of claims associated with that identity.
- ASP.NET Core's `ClaimsPrincipal` inherits all claims from its `ClaimsIdentities`.

### Creating a ClaimsPrincipal

1. Build a list of claims representing the identity's properties.
2. Create a new `ClaimsIdentity` using the list of claims and specify the authentication type.
3. Construct a `ClaimsPrincipal` using the created identity.
4. Use the `AuthenticationManager` to sign in the user using a specified authentication handler (e.g., "Cookie").

```csharp
public async Task<IActionResult> Login(string returnUrl = null)
{
    const string Issuer = "https://gov.uk";
    var claims = new List<Claim> {
        new Claim(ClaimTypes.Name, "Andrew", ClaimValueTypes.String, Issuer),
        new Claim(ClaimTypes.Surname, "Lock", ClaimValueTypes.String, Issuer),
        // ... other claims ...
    };
    
    var userIdentity = new ClaimsIdentity(claims, "Passport");
    var userPrincipal = new ClaimsPrincipal(userIdentity);

    await HttpContext.Authentication.SignInAsync("Cookie", userPrincipal,
        new AuthenticationProperties
        {
            ExpiresUtc = DateTime.UtcNow.AddMinutes(20),
            IsPersistent = false,
            AllowRefresh = false
        });

    return RedirectToLocal(returnUrl);
}
```

## JWT Authentication
<https://codeburst.io/jwt-to-authenticate-servers-apis-c6e179aa8c4e?gi=7b976da13412>

### Parts of a JWT Token

1. Header
- Contains algorithm (`alg`) for signing (e.g., HS256, RS256).
- Specifies token type (`typ`), which is JWT.
2. Payload
- Holds claims (custom data) and standard claims (e.g., `exp`, `iat`).
- Claims can identify issuer, subject, audience, expiration time, and more.
3. Signature
- Created by encoding header and payload and then signing them using HMAC-SHA256.
- The signature ensures token integrity and authenticity.

### Producer and Consumer Concept

**Producer:**
- Provides JWT-protected APIs.

**Producer's Role**
- Validate the headers for the JWT token and consumer identity.
- Verify the token's authenticity using the shared secret.
- Check if the payload matches the request data.

```csharp
const jwt = require('jsonwebtoken');
const secret = SECRETS[jwtConsumer];
const decoded = jwt.decode(jwtToken, { complete: true });

if (_.isEqual(decoded.payload, payload)) {
  // Proceed with API response
} else {
  return res.status(403).json({ message: MESSAGES.NOT_VALID_PAYLOAD });
}
```

**Consumer:**
- Uses APIs and provides valid JWT tokens for authentication.

**Consumer's Role**
- Generate a JWT token using the `jsonwebtoken` library.
- Include the token in the request header with the Bearer scheme.
- Add consumer identity using the `jwt-consumer` header.

```csharp
const jwt = require('jsonwebtoken');
const secret = 'hello-reader';
const clientName = 'consumer-1-erx97812';

const token = jwt.sign({ email: 'rachitgulati26@gmail.com' }, secret);
const options = {
  headers: {
    'jwt-token': token,
    'jwt-consumer': clientName,
  },
};

axios.get(PRODUCER_URL, options);
```

## Lecture Notes / What I Want to Know

## Q&A
# Introduction to React and Components

## Why It's Important

The reason this information is important is because it is telling us the different types of authorization and authentication we can use on our applications. It is important to know what each one does so we can best determine what we need for the security of our applications.

## Authentication


### Authorization Code Flow

![flow-img](https://images.ctfassets.net/cdy7uua7fh8z/2nbNztohyR7uMcZmnUt0VU/2c017d2a2a2cdd80f097554d33ff72dd/auth-sequence-auth-code.png)


### PKCE

PKCE are used when public clients request access tokens. Some additional security concerns are posed that are not protected by the usual Authorization Code Flow alone because they're either a native app or a single page app.

----

Reasons why they aren't secure

**Native Apps**

Cannot securely store a Client Secret. Decompiling the app will reveal the Client Secret, which is bound to the app and is the same for all users and devices.

May make use of a custom URL scheme to capture redirects (e.g., MyApp://) potentially allowing malicious applications to receive an Authorization Code from your Authorization Server.

**Single-page apps**

Cannot securely store a Client Secret because their entire source is available to the browser.

**PKCE Flow Chart**

![pkce-flow](https://images.ctfassets.net/cdy7uua7fh8z/3pstjSYx3YNSiJQnwKZvm5/33c941faf2e0c434a9ab1f0f3a06e13a/auth-sequence-auth-code-pkce.png)


### Client Flow Credentials

**M2M:** Machine to Machine

**Client ID:** Identification value given to your registered resource from Auth0.

**Client Secret:** Secret used by a client (application) to authenticate with the Authorization Server; it should be known to only the client and the Authorization Server and must be sufficiently random to not be guessable.

-----------------

## Reading Q&A

### **What is OAuth**

<https://www.csoonline.com/article/3216404/what-is-oauth-how-the-open-authorization-framework-works.html>

**What is OAuth?**

- An open-standard authorization protocol or framework that describes how unrelated servers and services can safely allow authenticated access to their assets without actually sharing the initial, related, single logon credential. In authentication parlance, this is known as secure, third-party, user-agent, delegated authorization.

---

**Give an example of what using OAuth would look like.**

- An OAuth scenario could be a user sending cloud stored files to someone else via email when the cloud storage and email systems are unrelated other than supporting the OAuth framework.

OAuth Framework Supports

- Google Gmail
- Microsoft OneDrive

---

**How does OAuth work? What are the steps that it takes to authenticate the user?**

OAuth only works on HTTPS. The user initiates a feature/transaction that needs to access another that's unrelated to the site or service. When that happens it goes through the OAuth Steps below.

OAuth Steps

1. The first website connects to the second website on behalf of the user, using OAuth, providing the user’s verified identity.

2. The second site generates a one-time token and a one-time secret unique to the transaction and parties involved.

3. The first site gives this token and secret to the initiating user’s client software.

4. The client’s software presents the request token and secret to their authorization provider (which may or may not be the second site).

5. If not already authenticated to the authorization provider, the client may be asked to authenticate. After authentication, the client is asked to approve the authorization transaction to the second website.

6. The user approves (or their software silently approves) a particular transaction type at the first website.

7. The user is given an approved access token (notice it’s no longer a request token).

8. The user gives the approved access token to the first website.

9. The first website gives the access token to the second website as proof of authentication on behalf of the user.

10. The second website lets the first website access their site on behalf of the user.

11. The user sees a successfully completed transaction occurring.

12. OAuth is not the first authentication/authorization system to work this way on behalf of the end-user. In fact, many authentication systems, notably Kerberos, work similarly. What is special about OAuth is its ability to work across the web and its wide adoption. It succeeded with adoption rates where previous attempts failed (for various reasons).

---

**What is OpenID?**

- OpenID works as an authenticator. It serves as a single sign-in, vouching for the identities of users. 

-----------------

### **Authorization and Authentication flows**

<https://auth0.com/docs/get-started/authentication-and-authorization-flow>

**What is the difference between authorization and authentication?**

- authorization determines the ability to access clients or services

-authentication verifies the identity of the user or service

---

**What is Authorization Code Flow?**

- It is the flow which exchanges an Authorization Code for a token.

- This flow can only be used for confidential applications (such as Regular Web Applications) because the application's authentication methods are included in the exchange and must be kept secure.

---

**What is Authorization Code Flow with Proof Key for Code Exchange (PKCE)?**

- PKCE gives additional security, typically used  for mobile and native applications

- It is an openID connection flow.

---

**What is Implicit Flow with Form Post?**

- It is intended for public clients or applications which are unable to securely store client secrets. 

- it's not the best practice for requesting access tokens

---

**What is Client Credentials Flow?**

- This flow involves an application exchanging its application credentials, such as client ID and client secret for an access token. 

- best suited for M2M

---

**What is Device Authorization Flow?**

- The authenticate asks the user to go to a link on their computer or smartphone to authorize the device

---

**What is Resource Owner Password Flow?**

- this flow requests that users provide credentials (username and password) with an interactive form

-----------------

### Bookmarks & Review

Auth0 for single page apps
<https://auth0.com/docs/libraries/auth0-react>

-----------------

## Things I Want to Know More About

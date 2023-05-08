# Introduction to React and Components

## Why It's Important

Words

## Authentication


-----------------

## Reading Q&A

### **What is OAuth**

<https://www.csoonline.com/article/3216404/what-is-oauth-how-the-open-authorization-framework-works.html>

**What is OAuth?**

- An open-standard authorization protocol or framework that describes how unrelated servers and services can safely allow authenticated access to their assets without actually sharing the initial, related, single logon credential. In authentication parlance, this is known as secure, third-party, user-agent, delegated authorization.

---

**Give an example of what using OAuth would look like.**

- An OAuth scenario cold be a user sending cloud stored files to somene else via email when the cloud storage and email systems are unrelaed other than supporting the OAuth framework.

OAuth Framework Supports

- Google Gmail
- Microsoft OneDrive

---

**How does OAuth work? What are the steps that it takes to authenticate the user?**

OAuth only works on HTTPS. The user intiates a feature/transaction that needs to acess another that's unreleated to the site or service. When that happens it goes through the OAuth Steps below.

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

- OpenID works as an authenicator. It serves as a single sign-in, vouching for the identities of users. 

-----------------

### **Authorization and Authentication flows**

<https://auth0.com/docs/get-started/authentication-and-authorization-flow>

**What is the difference between authorization and authentication?**

- Answer

---

**What is Authorization Code Flow?**

- Answer

---

**What is Authorization Code Flow with Proof Key for Code Exchange (PKCE)?**

- Answer

---

**What is Implicit Flow with Form Post?**

- Answer

---

**What is Client Credentials Flow?**

- Answer

---

**What is Device Authorization Flow?**

- Answer
---

**What is Resource Owner Password Flow?**

- Answer

-----------------

### Bookmarks & Review

Auth0 for single page apps
<https://auth0.com/docs/libraries/auth0-react>

-----------------

## Things I Want to Know More About

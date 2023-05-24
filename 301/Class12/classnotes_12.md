# Introduction to React and Components

## Why It's Important

This information is important so you know what codes mean when your applications show errors and give back a code. It helps you figure out and fix the problem faster. 

## CRUD


-----------------

## Reading Q&A

### **Status Codes Based On REST Methods**

<https://www.moesif.com/blog/technical/api-design/Which-HTTP-Status-Code-To-Use-For-Every-CRUD-App/>

**In your own words, describe what each group of status code represents:**

**100’s** = there is an issue with the header part of the request

**200’s** = these are success codes, it lets the request show that its been accepted (when it's a 202 request it means it isn't successfully processed when its asynchronous)

**300’s** = these are redirection codes and it tells the client what they're requesting isn't available at the expected page anymore 

**400’s** = these are client error codes, it tells the user that the requests are invalid (timeouts, wrong URI, missing authentication, etc.)

**500’s** = these are server error codes. these are problems with overwhelmed or unreachable servers behind proxies

---

**What is the status code 202?**

- 202 is Accepted 

---

**What is the status code 308?**

- 308 is Permanent Redirect

---

**What code would you use if an update didn’t return data to a client?**

- 204 No Content

---

**What code would you use if a resource used to exist but no longer does?**

- 410 Gone

---

**What is the ‘Forbidden’ status code?**

- 403

-----------------

### **Build A REST API With Node.js, Express, & MongoDB - Quick **

<https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw>

**Why do we need to pull our MongoDB database string out of our server and put it into our .env?**

- Storing it in a .env file makes it more secure and manageable.

---

**What is middleware?**

- It is a software or function that acts as the "middle man" between different parts of an app.

---

**What does app.use(express.json()) do?**

- It enables parsing of JSON data in incoming requests in express apps

---

**What does the /:id mean in a route?**

- it captures a value or identifier from the URL path

---

**What is the difference between PUT and PATCH?**

- PUT replaces the entire resource identified by the URL

- PATCH partially updates the resources with the provided changes

---

**How do you make a default value in a schema?**

- you set the schema as new
- you set it with name
- then you set it with type and require
- then you set it as a default property

---

**What does a 500 error status code mean?**

- it means something unexpected occurred that prevents the server from completing the request

---

**What is the difference between a status 200 and a status 201?**

- 200 is a successful request and response

- 201 is a successful request that results in the creation of a new resource

-----------------


## Things I Want to Know More About


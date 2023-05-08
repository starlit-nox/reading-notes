# Introduction to React and Components

## Why It's Important

Words

## APIs


### URI CSS

<https://css-tricks.com/guidelines-for-uri-design/>

### Define API Operations in HTTP Methods

**GET** retrieves a representation of the resource at the specified URI. The body of the response message contains the details of the requested resource.

**POST** creates a new resource at the specified URI. The body of the request message provides the details of the new resource. Note that POST can also be used to trigger operations that don't actually create resources.

**PUT** either creates or replaces the resource at the specified URI. The body of the request message specifies the resource to be created or updated.

**PATCH** performs a partial update of a resource. The request body specifies the set of changes to apply to the resource.

**DELETE** removes the resource at the specified URI.

![imgGetPost]<https://cdn.discordapp.com/attachments/442113342501552147/1103699343569068142/image.png>

The differences between POST, PUT, and PATCH can be confusing.

- A **POST** request creates a resource. The server assigns a URI for the new resource, and returns that URI to the client. In the REST model, you frequently apply **POST** requests to collections. The new resource is added to the collection. A **POST** request can also be used to submit data for processing to an existing resource, without any new resource being created.

- A **PUT** request creates a resource or updates an existing resource. The client specifies the URI for the resource. The request body contains a complete representation of the resource. If a resource with this URI already exists, it is replaced. Otherwise a new resource is created, if the server supports doing so. **PUT** requests are most frequently applied to resources that are individual items, such as a specific customer, rather than collections. A server might support updates but not creation via **PUT**. Whether to support creation via **PUT** depends on whether the client can meaningfully assign a URI to a resource before it exists. If not, then use **POST** to create resources and **PUT** or **PATCH** to update.

- A **PATCH** request performs a partial update to an existing resource. The client specifies the URI for the resource. The request body specifies a set of changes to apply to the resource. This can be more efficient than using **PUT**, because the client only sends the changes, not the entire representation of the resource. Technically **PATCH** can also create a new resource (by specifying a set of updates to a "null" resource), if the server supports this.

**PUT** requests must be idempotent. If a client submits the same **PUT** request multiple times, the results should always be the same (the same resource will be modified with the same values). **POST** and **PATCH** requests are not guaranteed to be idempotent.

### Creating Regular Expressions

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions>

```
const pattern = /w/;
```

the / / is called a regular expression syntax

- it created a new regular expression object (pattern)

**/** characters start and end the regular expression pattern

- you write it around the variable

example: /w/ /x/ /y/ /z/

Usage: Its used to match patterns in strings.

---

Using a regular expression literal, which consists of a pattern enclosed between slashes:

```
const re = /wx+y/;
```

Reg. expression literals can compile reg. rexpressions when the script is closed. Or call constructor functions of the object

below RegExp (constructor function) is being called

```
const r = new RegExp("ab+c");
```

---

### Simple Patterns

**Simple patterns:** constructed of characters/variales which you want to find a direct match for

```
/abc/ /xyz/
```

Let's use /abc/ for this example:

/abc/ neds to match the character combinations in strings only when the exact sequence is "abc" (all characters MUST be together in that order)

```
"Hi, do you know your abc's?"
```

The subscrib 'abc' won't be picked up because abc isn't exactly in orer. In the exaple, the substring is reading:

```
ab c
```

instead of

```
abc
```

### Special Characters in Regular Expressions


-----------------

## Reading Q&A

### **API Design Best Practices**

<https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design>

**What does REST stand for?**

- Representational State Transfer

---

**REST APIs are designed around a ____.**

- resource

- any kind of object, data, or service that can be accessed by the cilent

---

**What is an identifier of a resource? Give an example.**

- A resource has an identifier, which is a URI that uniquely identifies that resource.

---

**What are the most common HTTP verbs?**

- Get

- Post

- Put

- Patch

- Delete

---

**What should the URIs be based on?**

- URIs should be based on nouns (the resource) and not verbs (the operations on the resource)

---

**Give an example of a good URI.**

```
https://adventure-works.com/orders/1
```

---

**What does it mean to have a ‘chatty’ web API? Is this a good or a bad thing?**

- A "Chatty" web API exposes large numbers of small resources. 

- It is bad to have a chatty API

---

**What status code does a successful GET request return?**

- It'll return HTTP status code 200 (OK)

---

**What status code does an unsuccessful GET request return?**

- It'll return HTTP status code 404 (Not Found) or 204 (No Content).

---

**What status code does a successful POST request return?**

- It'll return HTTP status code 201 (Created)

---

**What status code does a successful DELETE request return?**

- It'll respond with HTTP status coe 204 (No Content). This indicates that the process has been successfully handled and that the body contains no further information.

-----------------

### Bookmarks & Review

**RegExr*Cheatsheet**
<https://regexr.com/>

**Regex Tutorial**
<https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285>

**Regex 101**
<https://regex101.com/>

-----------------

## Things I Want to Know More About

**What does URI stand for?**
Uniform Resource Identifier

**What is a URI?**
It is a character sequence that idenitfies a logical or physical resource.

**What's the difference between URI and URL?**
They body follow the same specifications: RFC 3986
URLs allow you to locate a resource while a URI simply indentifies a resource. 

URI is not really intended as an address to geta resource. It's just there to identify resources.
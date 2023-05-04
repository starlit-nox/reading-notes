# Introduction to React and Components

## Why It's Important

Words

## APIs

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

- Answer

---

**REST APIs are designed around a ____.**

- Answer

---

**What is an identifier of a resource? Give an example.**

- Answer

---

**What are the most common HTTP verbs?**

- Answer

---

**What should the URIs be based on?**

- Answer

---

**Give an example of a good URI.**

- Answer

---

**What does it mean to have a ‘chatty’ web API? Is this a good or a bad thing?**

- Answer

---

**What status code does a successful GET request return?**

- Answer

---

**What status code does an unsuccessful GET request return?**

- Answer

---

**What status code does a successful POST request return?**

- Answer

---

**What status code does a successful DELETE request return?**

- Answer

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

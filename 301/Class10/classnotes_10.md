# Introduction to React and Components

## Why It's Important

This is important because it allows us to see how the flow of a call stack looks like which is important to be able to properly stack functions and predict how the code will flow through it. It also shows us how to avoid stack overflow.

## ReadingSubject


-----------------

## In memory storage

### **Understanding the JavaScript Call Stack**

<https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4>

**What is a ‘call’?**

- A call stack is a data structure that uses the Last In, First Out (LIFO) principle to temporarily store and manage function invocation (call).

- A call is the function invocation.

---

**How many ‘calls’ can happen at once?**

- One

---

**What does LIFO mean?**

- Last In, First Out

- It means the last function that gets pushed into the stack is the first to be popped out when the function returns. 

---

**Draw an example of a call stack and the functions that would need to be invoked to generate that call stack.**

```
function firstFunction(){
  console.log("Hello from firstFunction");
}

function secondFunction(){
  firstFunction();
  console.log("The end from secondFunction");
}

secondFunction();
```

---

**What causes a Stack Overflow?**

- A stack overflow occurs when there is a recursive function (a function that calls itself) without an exit point. 

-----------------

### **JavaScript error messages**

<https://codeburst.io/javascript-error-messages-debugging-d23f84f0ae7c>

**What is a ‘reference error’?**

- object represents an error when a variable that doesn't exist (or hasn't yet been initialized) in the current scope is referenced

---

**What is a ‘syntax error’?**

- occurs when you have something that cannot be parsed in terms of syntax

- EX: when you try to parse an invalid object using JSON.parse

---

**What is a ‘range error’?**

- occurs when a value is outside the allowable range of values for a given operation or data type

---

**What is a ‘type error’?**

- his types of errors show up when the types (number, string and so on) you are trying to use or access are incompatible

- EX: like accessing a property in an undefined type of variable

---

**What is a breakpoint?**

- is the point in the program where the code stops executing

---

**What does the word ‘debugger’ do in your code?**

- the debugger statement triggers a breakpoint in the code

-----------------

## Things I Want to Know More About

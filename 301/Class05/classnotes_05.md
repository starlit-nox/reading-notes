# Introduction to React and Components

## Why It's Important

This information is important because it explains the best way to determine if something is state as well as how to identify state.

## ReadingSubject

Thinking in React

Break up the UI into a component hierarchy

![reactUI](https://react.dev/images/docs/s_thinking-in-react_ui_outline.png)

- **Programming—** use the same techniques for deciding if you should create a new function or object. One such technique is the single responsibility principle, that is, a component should ideally only do one thing. If it ends up growing, it should be decomposed into smaller subcomponents

-  **CSS—** consider what you would make class selectors for. (However, components are a bit less granular.)

-  **Design—** consider how you would organize the design’s layers.

-----------------

## Reading Q&A

### **Putting it all together**

<https://react.dev/learn/thinking-in-react>

**What is the single responsibility principle and how does it apply to components?**

-  **Single Responsibility Pricinple:** a computer programming principle that states that "A module should be responsible to one and only one actor."

It applies to components because components should only do one thing. If it does multiple things, it should be broken down into smaller additional components instead o one big one. 

---

**What does it mean to build a ‘static’ version of your application?**

- A static verison of your applications means that it lacks interactivity and doesn't do anything.

---

**Once you have a static application, what do you need to add?**

- After you have a static applications you should add elements that make the application interactive.

**What are the three questions you can ask to determine if something is state?**

1. Does it remain unchanged over time? If so, it isn't state.
2. Is it passed in from a parent via props? If so, it isn't state.
3. Can you compute it based on existing state or props in your component? If so, it definitely isn't state!

**How can you identify where state needs to live?**

1. You can put the state directly into their common parent. 


2. You can also put the state into some component about their common parent.

3. If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common parent component.

-----------------

### **Higher-Order Functions**

<https://eloquentjavascript.net/05_higher_order.html#h_xxCc98lOBK>

**What is a “higher-order function”?**

- functions that operate on other functions either by taking them as argument sor by returning them

---

**Explore the greaterThan function as defined in the reading. In your own words, what is line 2 of this function doing?**

Code from the Reading:

```
function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true
```

- the function is comparing the variables and anything that is greater than n will be true and less than n will be false

- line two of the function is returning m as it being greater than n 

---

**Explain how either map or reduce operates, with regards to higher-order functions.**

- reduce computes a single value from an array. it builds a value by repeatedly taking a single element from the array and combining it with the current value when it comes to higher order operations

-----------------

## Things I Want to Know More About

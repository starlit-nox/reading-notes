# Introduction to React and Components

## Why It's Important

The reason that this information is important is because it's explaining the difference between State and Props. The two have different uses and purposes. If you were to confuse them, it could ruin your code or cause errors to happen.

## State & Props Notes


### React Lifestyle Chart 

![React-Lifestyle](https://miro.medium.com/v2/resize:fit:1100/0*0saPKFiTUk6W3FYp)

-----------------

### How to use Props

**Props** resides **outside a component**

Props can be used as **arguments in a function.**

**Passing counter components** (or w/e you want your component to initialize) **to render it**

You can **pass props** through a **component**

Props can store things!

Example: Title & Subtitle

Store a title & subtitle in a **prop** and then you can **pass it through the prop**.

**Note:** Props pass through components

Prop is handled **only outside** the component.

Props are useful for displaying components **without hard coding it.**


If that is **static** and **won't change**, you'll use **props** for it. 

-----------------

### How to use State

**State** resides **inside a component**

Set the **state** to the initialized **prop**

State is handled **only inside** the component.

When the state **changes** it will **re-render** the component. 

What the state does is **re-render & update an application**

Information that's inside of a component and is **NO WHERE OUTSIDE IT**, you'll use state for.

-----------------

## Reading Q&A

### **React Lifecycle**

<https://medium.com/@joshuablankenshipnola/react-component-lifecycle-events-cb77e670a093>

**Based off the diagram, what happens first, the ‘render’ or the ‘componentDidMount’?**

- Rendering Phase

---

**What is the very first thing to happen in the lifecycle of React?**

- Mounting

---

**Put the following things in the order that they happen: componentDidMount, render, constructor, componentWillUnmount, React Updates**

- Constructor
- Render 
- componentDidMount
- React Updates
- componentWillUnmount


-----------------

### **React State vs. Props**

<https://www.youtube.com/watch?v=IYvD9oBCuJI>

**What types of things can you pass in the props?**

Any type of data can be passed in as props in React. 

- Objects
- Arrays
- Functions

You can also pass in information as props if they're in a component.

- Title & Subtitle together


---

**What is the big difference between props and state?**

- The big difference is that **state is internal and is controlled by the component** and **props are external and controlled by what renders the component**.

---

**When do we re-render our application?**

State can re-render an application.  We re-render an application when the value or information has been updated or changed. 

---

**What are some examples of things that we could store in state?**

We use state for things that may need to be updated by the users or if the values change

- Inside of a form
- A counter 
- Input elements

-----------------

### Bookmarks & Review

React Docs - State and Lifecycle
<https://legacy.reactjs.org/docs/state-and-lifecycle.html>

React Docs - handling events
<https://legacy.reactjs.org/docs/handling-events.html>

React Tutorial through ‘Developer Tools’
<https://react.dev/learn/tutorial-tic-tac-toe>

React Bootstrap Documentation
<https://react-bootstrap.github.io/>

Bootstrap Cheatsheet
<https://getbootstrap.com/docs/5.0/examples/cheatsheet/>

Bootstrap Shuffle - a class “sandbox”
<https://bootstrapshuffle.com/classes>

Netlify
<https://www.netlify.com/>

-----------------

## Things I Want to Know More About

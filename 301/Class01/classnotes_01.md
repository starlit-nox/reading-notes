# Introduction to React and Components

## Component-Based Architecture 



-----------------

### Reading Q&A

**Component-Based Architecture**
<https://www.tutorialspoint.com/software_architecture_design/component_based_architecture.htm>

**What is a "component"?**

A component is a modular, portable, replacabe, and reusable set of well-defined funtional code that captures its implentations and exports it as a higher level interface for users. 

It also is a software object that is used to interact with other components.

---

**What are the characters of a component?**

- **Reusability:** Components are sually designed to be reused in different siutations in diferent applications. However, some components may be designed for a specific task

- **Replacable:**  Compoents may be freely subtistuted with other similiar components

- **Not Context Specific:** Components are desgined to operate in different enviroemnts and contexts

- **Extensible:** Component can be extended from existing components to provide new behavior

- **Encapsulated:** Complents depict the interfaces, which allow the caller to use its functionality, and do not expose details of the internal processes or any internal variables or state.

- **Independent:** Components are designed to have minimal dependencies on toher components

---

**What are the advantages of using component-based architecture?**

- **Ease of Deployment:**  As new compatible versions become available, it is easier to replace existing versions with no impact on the other components or the system as a whole.

- **Reduced Cost:** The use of third-party components allows you to spread the cost of development and maintenance.

- **Ease of Development:** Components implement well-known interfaces to provide defined functionality, allowing development without impacting other parts of the system.

- **Reusable:** The use of reusable components means that they can be used to spread the development and maintenance cost across several applications or systems.

- **Modification of Technical Complexity:** A component modifies the complexity through the use of a component container and its services.

- **Reliability:** The overall system reliability increases since the reliability of each individual component enhances the reliability of the whole system via reuse.

- **System Maintenance and Evolution:** Easy to change and update the implementation without affecting the rest of the system.

- **Independent:** Independency and flexible connectivity of components. Independent development of components by different group in parallel. Productivity for the software development and future software development.


-----------------

**What is Props and How to Use it in React**
<https://itnext.io/what-is-props-and-how-to-use-it-in-react-da307f500da0#:~:text=%E2%80%9CProps%E2%80%9D%20is%20a%20special%20keyword,way%20from%20parent%20to%20child>

**What is "props" short for?**

Props is a special keyword in React. It stands for properities. 


---

**How are props used in React?**

They are used for passing data from one component to another. 

---

**What is the flow of props?**

Its uni-directional, which means the data coming from the parent **should not** be changed by child components

-----------------

### Bookmarks & Review

React Tutorial through ‘Passing Data Through Props’
<https://react.dev/learn/tutorial-tic-tac-toe>

React Docs - Hello world
<https://legacy.reactjs.org/docs/hello-world.html>

React Docs - Introducing JSX
<https://legacy.reactjs.org/docs/introducing-jsx.html>

React Docs - Rendering elements
<https://legacy.reactjs.org/docs/rendering-elements.html>

React Docs - Components and props
<https://legacy.reactjs.org/docs/components-and-props.html>
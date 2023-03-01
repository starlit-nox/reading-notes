# Domain Modeling, Intro to the DOM & Object Literal Notation'

## **JavaScript Object Basics Q&A**

<https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics>

**How would you describe an object to a non-technical friend you grew up with?**

- Objects hold things for you. You can put whatever you want in it, and it'll contain it.

**What are some advantages to creating object literals?**

- convient
- flexible in declaration
- reusability
- less code during decalarations

**How do objects differ from arrays?**

- object represents things and aren't ordered
- arrays represent list in a single variable and is ordered

**Give an example for when you would need to use bracket notation to access an object’s property instead of dot notation.**

- if we waned to iterate over all keys in an object & access their values we'd use a bracket notation. we'd be able to pull up the key through bracket notations and pass in the variables and property name

**Evaluate the code below. What does the term this refer to and what is the advantage to using this?**

```
const dog = {
  name: 'Spot',
  age: 2,
  color: 'white with black spots',
  humanAge: function (){
    console.log(`${this.name} is ${this.age*7} in human years`);
  }
}
```

- its refering to dog
- its calling things from the object and referencing it through the keyword
- the advantages of this is that its resuabile and uses less code by filing out the information then it outputs it back where its called to

## **Introduction To The DOM Q&A**

<https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction>

**What is the DOM?**

- Document Object Model: a programming interface for web documents
- model of HTML page that stores memory
- its makes it eaiser to work with the browser api

**Briefly describe the relationship between the DOM and JavaScript.**

- It enables the connection
- DOM can manipulate JS
- Dom manipulation lets you use JavaScript to add, remove, and modify eleents of a website

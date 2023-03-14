# JavaScript Glossary

Inside of here you will find a commonly used commands and functions along with simple examplations, examples, and websites. This is meant to be a brief reference summary.

```
 Please hit ctrl + f to search.
```

### Constructors for Dummies

**Defintion:**

A **constructor** is a special function that creates & initializes an object instance of a class.

**When is it called?**
When an object is created using a new keyword. 

**What's it for?**
To create a **new object** and set values for **any existing objects**.

**So it gets called, what happens?**

- new **empty** object is created
- the keyword begins to refer to the **new object** and makes it the **current instance object**
- the new object is then returned as the value of the constructor

#### Example Below:

**"this" keyword**
When the this keyword is used in a constructor, it refers to the newly created object:

![objectBreakdown](https://cdn.discordapp.com/attachments/442113342501552147/1085262322760695910/image.png)

#### Constructor with Parameters

![objectBreakdown2](https://cdn.discordapp.com/attachments/442113342501552147/1085263986985017475/image.png)

In the above example, arguments are passed to the constructor during object creation. This allows each object to have different property values.

For more information visit the link below:
<https://rollbar.com/blog/javascript-constructors/#:~:text=In%20JavaScript%2C%20multiple%20objects%20can,created%20using%20the%20same%20constructor.>
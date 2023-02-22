# Introduction to Web Development

## HTEML Fundamentals

Ordered list is numbered, alphabetical, or roman numerals

Unordered lists aren't ordered. 

Emphasis is an em tag. It's like a semi-italic

```
<em>
```

Itliacs is an i tag. 
```
<i>
```

### Adbanced Test Formating

Description Lists wil be used with a dl
```
<dl>
```
Description List Title
```
<dt>
```
Description List Description
```
dd
```

**Quotes**

Blockquotes
```
<blockquote>
```

Cite is the text description
```
<cite>
```

Cite = will have a link to the cite. 
```
<cite = "abc.org">
```

Title
```
<abbr title=Revered"> Red </abbr>

Sup text raises the variable
```
cool <sup>8</sup>
```

Sub text lowers the variable
```
cool <sub>4</sub>

## CSS Fundamentals

ID can only apply to one element, while class can be applied to different ones. 

In cass class is indentified by the . 
```
.special {
    color:red
}
```
Astrek covers everything, its universal
```
*
```

Everything that is the element (p tag) inside the class (box). Its more specific to whatever element you want.
```
.box p
```

or

```
.box p:first-child
h1, h2, intro
```

Proprety: value; (everything together is called a delcaration block)
```
background: orange;
```

@rules

@ combines files together

```
@import 'styles2.css
```

How to make a comment in HTML
```
<!-- Comment in CSS --->
```

How to make a comment in CSS & JS
```
/* Comment in CSS & JS */
```

## Q & A

### **HTML**

**Why is it important to use semantic elements in our HTML?**
It makes code easier to understand/read. Defines the content to tell us about it.

**How many levels of headings are there in HTML?**
Six

**What are some uses for the <-sup> and <-sub> elements?**
Chemical elements or exponents. They’re used to place things above or below text.

**When using the <-abbr> element, what attribute must be added to provide the full expansion of the term?**
Title

### **CSS**

**What are ways we can apply CSS to our HTML?**
We can add it with a link or inline.

**Why should we avoid using inline styles?**
So we don’t repeat ourselves and we can see what’s going on easier.

**Review the block of code below and answer the following questions:**

**What is representing the selector?**
H2
**Which components are the CSS declarations?**
black & 5px
**Which components are considered properties?**
color & padding

### **JS**

**What data type is a sequence of text enclosed in single quote marks?**
String

**List 4 types of JavaScript operators.**

Assignment operators
Comparison operators
Arithmetic operators
Logical operators

**Describe a real world Problem you could solve with a Function.**
You can use a function to determine math equations such as additional, subtraction, division, and multiplication quickly. As well as use a function to solve the gratuity on tips, how many hours you need to work to reach a certain goal, or other situations. 

### **Conditional**

**An if statement checks a __ and if it evaluates to ___, then the code block will execute.**
value  ,  true 

**What is the use of an else if?**
it creates an extra choice

**List 3 different types of comparison operators.**
strict equality, less than, greater than or equal to

**What is the difference between the logical operator && and ||?**

```
&& allows you to chain together 2 or more expression so that all of them have to individually evaluate to true
```

```
|| allows you to chain together 2 or more expression so that one or more of them  have to individually evaluate to true
```
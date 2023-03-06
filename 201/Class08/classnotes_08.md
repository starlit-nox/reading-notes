# Flexboxes

## What Can You Do with Flex Layout

<https://web.dev/learn/css/flexbox/>

- Can display as a row or column

- They respect the writing mode of a cument

- They are single line by default, but can be asked to wrap onto multiple lines

- Items in the layout can be visually reordered, away from their order in the DOM.

- Space can be distrubted inside the items so the can become bigger or smaller according to the space available in their parent

- Space can be distrubed around the items and flexlines in a wrapped layout, using the Box Aligment poperties

- Items themselves can be aligned on the cross axis.

## Creating a Flex Container

```
<div class="container" id="container">
  <div>One</div>
  <div>Item two</div>
  <div>The item we will refer to as three</div>
</div>
```

Use flexbox to declare that you want to use a flex ormat

Change value of the **diplsay** property to **flex** to do this

```
.container {
  display: flex;
}
```


**Tid Bit:** 

All CSS properties have initial values which control how they behave "out of the box" when you haven't applied any CSS to change that initial behavior. The children of our flex container become flex items as soon as their parent gets **display: flex**, so these initial values mean that we start seeing some flexbox behavior.

**Inital Values Mean:**

- Items display as a row
- They do not wrap
- They do not grow to fill the container
- They line up at the start of the container

## Controling Directions of Items

- **row:** the items lay out as a row

- **row-reverse:** the items lay out as a row from the end of the flex container

- **column:** the items lay out as a column

- **column-reverse:** the items lay out as a column from the end of the flex container

## Main Axis

![main-axis](https://web-dev.imgix.net/image/VbAJIREinuYvovrBzzvEyZOpw5w1/xKtf0cHRw0xQyiyYuuyz.svg)

Main Axis is set by: **flex-direction** property

If that is **row**, your main axis is along the row.

If that is **column**, your main axis is along the column.

----

![cross-axis](https://web-dev.imgix.net/image/VbAJIREinuYvovrBzzvEyZOpw5w1/5wCsZcBmK5L33LS7nOmP.svg)

The cross axis runs in the other direction to the main axis, so if **flex-direction** is **row** the cross axis runs along the column.

- Items can be moved indivudally or as a group

- If you wrap flex lines, you can treat them as a group and asign those lines

## Flex Box Master Guide for Commands

### flex-flow shorthand
 

 ### Assuming our container has more space than is needed to display the items, the items line up at the start and do not grow to fill the space. They stop growing at their max-content size. This is because the initial value of the flex- properties is:

- **flex-grow: 0** - items do not grow

- **flex-shrink: 1** - items can shrink smaller than their flex-basis

- **flex-basis: auto** - items have a base size of auto

### To cause the items to grow, while allowing large items to have more space than small ones use flex:auto. You can try this using the demo above. This sets the properties to:

- **flex-grow: 1** - items can grow larger than their flex-basis

- **flex-shrink: 1** - items can shrink smaller than their flex-basis

- **flex-basis: auto** - items have a base size of auto



## Q&A Below

**Flexbox is designed for one-dimensional content. Explain what this means.**

This means there will be greater control over the aligment and space distrubtion between items within the container. It deals with layout in columns or rows, one direction at a time. 

**Explain the difference between the main axis and cross axis.**

Main axis lines the flex boxes along the horizontal axis 

Cross axis lines the flex boxes along the vertical axis

**How can using certain properties of flexbox negatively impact accessibility?**

It changes the visability on the browser
 
It can sometimes have perfomance issues for the site / increased load time for large sites

**What are some advantages of using flexbox over float?**

Flexbox is more versitile than float, float focuses on manipulating the display

Flexbox is more mobile friendly too and it changes the order of the elements in the site without making changes in the htmls

**How does this topic connect with your long term goals?**

It connects with my long term goals seeing that I want to make make freelnace Toyhou.se profiles.
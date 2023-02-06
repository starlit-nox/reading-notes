#Things I'd Like to Know

##  How To Make Your First Wireframe

```
(How to Make Your First Wireframe)[https://careerfoundry.com/en/blog/ux-design/how-to-create-your-first-wireframe/]
```

### What is a wireframe?

- a practice used by UX designers
- allows designers to define & plan an information hierarchy

It's good for getting to know how users interact with the interface via positioning of buttons & menus on diagrams

- In short it lets you plan out the design without distractions

### Wireframe Examples & Things to Consider

Some people like to draw their framewire, some applications are:

-Invision
-Balsamiq

Keep in mind when deciding your wireframe:

-**Wireframes drawn with paper & pencil**, or at a whiteboard, have the advantage of looking and being very easy to change, which can help tremendously in early conversations about your website or product
-**Paper-prototypes** can test with end users at every stage of ideation & design. Changes at these stages are much easier & therefore cheaper than changes deemed necessary after coding is under way.
-**Switching later to software** (after initially hand-drawing your wireframe) allows you to keep tracking of more detailed decisions. 

Here are a number of ways designers structure the process:
1. Wireframe > Interactive Prototype > Visual > Design
2. Sketch > Code
3. Sketch > Wireframe > Hi-Def Wireframe >Visual > Code
4. Sketch > Wireframe > Visual > Code

```
If the task is very narrow and the visual design is either set or considered unimportant, then going from a sketch to coding/development makes sense.
```

### Possible Websites to Use

- **Uxpin:** wide range of functionalities, but one of the best ones is how it facilitates building responsive, clickable prototypes directly into browser
- **InVision:** allows you to get feedback straight from your team & users through clickable mock-ups of our site design. (FREE!)
- **Wireframe.cc:** provides you with the technology to create wireframes really quickly within your browser.

## When Wireframing focuses on:

- **Usability conventions:** putting the navigation at the top next to the logo, having a search box on the top, etc.
- **Simplicity:** instructional wording for i.e calls-to-actions
- **Trust-building elements:** What you need to build trust in your customers / where would the best place to put these elements be?
- **Tooltips:** indicate any functionality that could be included in prototype transition


## Good Wireframe: 3 Key Principles
1. Clarity
2. Confidence
3. Simplicity is key


# HTML Basics

```
What is HTML?
It's a markup language that defines the structure of your content
```
## HTML Definitions

1. **Opening Tag:** consists of the name of the element, wrapped in opening and closing angle brackets. 
2. **Closing tag:** same as the opening tag, except that it includes a forward slash before the element name; states where the element ends
3. **Content:** content of the element
4. **Element:** opening tags, closing tag, and the content together comprise the element
5. **Angle Brackets:** < >
6. **Attributes:** extra information about the element that does not appear in actual content
    -examples: class, editor-note
7. **Class:** attribute allows you to give the element a non-unique identifier that can be used to target it (and others with the same class value)
8. **Nesting Elements:** putting elements inside of other elements
9. **Void Elements:** elements that have no content 

**Attributes that set a value always have:**
1. Space between it & the element name (or previous attribute, if the element already has one or more attributes)
2. Attribute name followed by an equal sign. 
3. Attribute value wrapped by opening & closing quotation marks.



## Paragraphs

When making a paragraph use <> with the abbreviation inside of it. When closing use </>.

The abbreviation for paragraph is **p**

**FOR EXAMPLE PURPOSES, THERE ARE SPACES BETWEEN THE TAGS. DO NOT EVER ADD SPACES BETWEEN THE TAGS.**

```
My cat is very grumpy
```
```
< p > My cat is very grumpy < / p >
```
![Img](https://cdn.discordapp.com/attachments/442113342501552147/1072199447393620060/IMG_4083.png)

## Strong / Bold

The < strong > < / strong > makes things bold.

My cat is **very grumpy.**

```
<p> My cat is <stong>very grumpy.</strong></p>
```

## Images Insertion

```
<img scr="images/firefox-icon.png" alt="My test image" />
```

# Anatomy of HTML Document

![img doctype](https://cdn.discordapp.com/attachments/442113342501552147/1072199447162917004/IMG_4084.png)

## Definitions


```
<!Doctype html> | It's a required preamble. It makes sure the document behaves correctly.
```

```
<html> </html> | this element wraps all the content on the entire page & is sometimes known as the root element (includes the lang attributes, setting primary language of document)
```

```
<head> </head> | header element, this element acts as a container for all the stuff you want to include on the HTML page
```

```
<meta name="viewport" content="width=device-width"> | viewport element ensures the page renders at the width of viewport, preventing mobile browsers from rendering pages wider than the viewport and then shrinking them down
```

```
<title> </title> | this sets the title of your page, which is the title that appears in the browser tab the page is loaded in (also shows in bookmarks/favorites)
```

```
<body> </body> | contains all the content that you want to show to web users when they visit your page (text, images, videos, games, playable audio tracks, etc.)
```


## Heading Levels

```
<h1> My main title </h1>
```

<h1> My main title </h1>

-

```
<h2> My top level heading</h2>
```

<h2> My top level heading</h2>

-

```
<h3> My subheading</h3>
```

<h3> My subheading</h3>

-

```
<h4>  My sub-subheading</h4>
```

<h4> My sub-subheading </h4>


## Lists

**Lists:** < li >


```
<li> Lists stuff here </li>
```


**Unordered Lists:**  < ul > 


```
<ul> Lists stuff here </ul>
```

**Ordered Lists:** < ol> 


```
<ol> Lists Stuff Here </ol>
```

![img lists](https://cdn.discordapp.com/attachments/442113342501552147/1072199446949019688/IMG_4085.png)


## Links

```
<a href="text.com"><Text</a>
```


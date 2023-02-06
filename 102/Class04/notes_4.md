#Things I'd Like to Know

##  How To Make Your First Wireframe

```
(How to Make Your First Wireframe)[https://careerfoundry.com/en/blog/ux-design/how-to-create-your-first-wireframe/]
```

### What is a wireframe?

- a practice used by UX designers
- allows desginers to define & plan an information hiechary

Its good for getting to knw how users interact with the interface via positoning of buttons & menus on diagrams

- In short it lets you plan out the desiggn without distractions

### Wireframe Examples & Things to Consider

Some people like to draw their framewire, some applications are:

-Invision
-Balsamiq

Keep in mind when deciding your framewire:

-**Wireframes drawn with paper & pencil**, or at a whiteboard, have the advantage of looking and being very easy to change, which can help tremendously in early conversations about your website or product
-**Paper-prototypes** can test with end users at every stage of ideation & design. Changes at these stages are much easier & therefore cheaper than changes deemed necessary after coding is under way.
-**Switching later to software** (after intially hand-drawing your wireframe) allows you to keep tracking of more detailed decisions. 

Here are a number of ways designers structure the proces:
1. Wirerame > Interactive Prototype > Visual > Design
2. Sketch > Code
3. Sketch > Wireframe > Hi-Def Wireframe >Visual > Code
4. Sketch > Wireframe > Visual > Code

```
If the task is very narow and the visual design is either set or considered unimportant, then going from a sketch to coding/development makes sense.
```

### Possible Websites to Use

- **Uxpin:** wide range of cuntionalities, but one of the best ones is how it facilitates building responive, clickable prototypes directly into browser
- **InVision:** allows you to get feedback striaght from yourteam & users through clickable mock-ups of our site design. (FREE!)
- **Wireframe.cc:** provides you with the technonnlogy to create wireframes really quickly within your brower.

## When Wireframing focuses on:

- **Usability conventions:** putting the navigation at the top next to the logo, having a search box on the top, etc.
- **Simplicitity:** instructional wording for i.e calls-to-actions
- **Trust-building elemnts:** What you need to build trust in yoru customers / where would the best place to put these elments be?
- **Tooltips:** indicate any functionality that could be incldued in prototype transition


## Good Wierframe: 3 Key Principles
1. Clarity
2. Confidence
3. Simplicity is key


# HTML Basics

```
What is HTML?
Its a markup language that defines the strucutre of your content
```
## HTML Defintions

1. **Opening Tag:** consists of the name of the elemnt, wrapped in opening and closing angle brackets. 
2. **Closing tag:** same as the opening tag, except that it includes a forward slash before the elment name; states where the elemnt ends
3. **Content:** content of the elemnt
4. **Element:** opening tage, closing tag, and the content together comrpise the element
5. **Angle Brackets:** < >
6. **Atributes:** extra information about the ement that desn't appear in actual content
    -examples: class, editor-note
7. **Class:** atribute allows you to give the elemnt a non-unique indenfier that can be used to target it (and others with the same class value)
8. **Nesting Elements:** putting elements inside of other elments
9. **Void Elements:** elements that have no content 

**Attributes that set a value always have:**
1. Space between it & the elemnt name (or previous atribute, if the elemnt already has one or more attributes)
2. Attribute name followe dby an equal sign. 
3. Atribute value wrapped by opening & closing quotation marks.



## Paragraphs

When making a paragraph use <> with the abbreviation inside of it. When closing use </>.

The abbrevation for paragraph is **p**

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

## Defintions


```
<!Doctype html> | Its a required preamble. It makes sure the document behave correctly.
```

```
<html> </html> | this element wraps all the content on the entire page & is smetimes knwona s the root element (includes the lang attributes, setting primary language of document)
```

```
<head> </head> | header element, this element acts as a container for all the stuff you want to include on the HTML page
```

```
<meta name="viewport" content="width=device-width"> | viewport element ensures the page renders at the width of viewport, preventing mobile browsers from rendering pages wier than the viewport and then shrinking them down
```

```
<title> </title> | this sets the title of your page, which is the tittle that appears in the bowser tab the page is laoded in (also shows in bookmarks/favorites)
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
<h3> My subheadding</h3>
```

<h3> My subheadding</h3>

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


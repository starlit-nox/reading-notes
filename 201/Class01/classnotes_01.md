# Setup Developer Toolbelt

## [Lab 01](classlab_01)

## Summary

### Getting Started Summary

### Introduction to HTML Summary
**Compose a short poem describing how HTTP sends data between computers.**

Haiku

```
Send a request to the server friend
Asking for something to be returned
Oh client, where is my copy?
Finally, approved with a 200 OK.
```

**Describe how HTML, CSS, and JS files are “parsed” in the browser.**

- browser parses the files by which one that leads, which is HTML and it reads and recognizes any link elements referenced to external CSS stylesheets and script elements referenced to scripts

- it sends requests back to the server for any CSS and JS files and from those it parses CSS and JS

- browser then generates an in-memory DOM tree from the parsed HTML, CSSOM from the CSS, and complies & executes from JS

- browser builds the DOM tree and applies the styles from the CSSOM tree and executes the JS

- it works similar to a painter building up a painting

**How can you find images to add to a Website?**

- Looking for royalty free / copyright free images on google

- png tree, pixabay, etc.

**How do you create a String vs a Number in JavaScript?**

- a string can be defined by single, double, or backtick quotes
```
let name = "John";
```

- numbers have no quotations and are
```
let a = 1;
```

**What is a Variable and why are they important in JavaScript?**

- used to hold and change data values

- they are important for changing inputs, such as adding usernames, passwords, etc.

### How to Start to Design a Website Summary
**What is an HTML attribute?**

- an attribute is a special element that can embed, change color, size, or other descriptions of the element it's attached to

**Describe the Anatomy of an HTML element.**

- starting off the anatomy is the opening tag < >
- in the middle is the content < content >
- ending it is the closing tag < / >
- when all together it is called an element < / content >

**What is the Difference between article and section element tags?**

- the role of the article tag is to wrap autonomous content on a page (information than can be moved from one page to another)

- the role of the section tag is similar to the div tag, it wraps logical groups of content together

**What Elements does a "typical" website include?**

- header

- navigation bar

- main content

- sidebar

- footer

**How does metadata influence Search Engine Optimization?**

- sets up keywords for search engines

**How is the meta HTML tag used when specifying metadata?**

- metadata is the data which describes the HTML data in the head

### Semantics Summary
**Why should you use an h1 element over a span element to display a top level heading?**

- Span is an inline element and its similar to div

- H1 will directly show the results of the markdown as the header

- Depending on how you use Span it may cause an error

**What are the benefits of using semantic tags in our HTML?**

- Search engines consider its contents as important keywords

- Screen readers use it as a signpost to help visually impaired navigate the page

- Finding blocks of meaningful code significantly easier than searching through endless divs or classes

- Suggests to the developer the type of data that will be populated

- Semantic naming mirrors proper custom element/component naming

### What is JavaScript
**Describe 2 things that *require* JavaScript in the Browser?**

1. In browser games
2. Creating web and mobile apps

**How can you add JavaScript to an HTML document?**

**Internal JavaScript is added in the head, example below.**
```
<script>
  // JavaScript goes here
</script>
```

**External JavaScript is added in the head, example below.**
```
<script src="script.js" defer></script>
```

And Inline JavaScript!


```
BELOW THIS POINT ARE NOTES
```

### Getting Started
<https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web>


### How the Web Works
<https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works>

**How the web works:** provides a simplified view of what happens when you view a webpage in a web browser on your device. 

This theory is **not essential** to write web code in the short term.

#### Clients & Servers

**clients & servers:** computers connected to the internet

![cilent-server-img](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works/simple-client-server.png)

**Clients**
- typically web user's internet connected devices

**Servers**
- computers that store web pages, sites, or apps

**How it works:**
A copy of the webpage is downloaded from the server onto the client machine to display in the user's web browser

#### What Happens, Exactly?
1. Browser goes to the DNS server, finds the real address of the server that the website lives on. 

2. Browser sends an HTTP request message to the server, asking it to send a copy of the website to the client.

3. If the server approves the client's request, the server sends the client a "200 OK" message, which means "Of course you can look at that website! Here it is", and then starts sending the website's files to the browser as a series of small chunks called data packets.

4. Browser assembles the small chunks into a complete web page and displays it to you.

#### Order in Which Files are Parsed

```
<link> element references to external CSS stylesheets
```

```
<script> element refrences to scripts
```

- Browsers parses HTML and sends requests back to the server for any CSS files it found from the **link** element and any JS files from the **script** element. It then parses them.

- Browser generate in-memory DOM tree from parsed HTML

- Generates an in-memory CSSOM structure from parsed CSS

- Compiles and executes from parsed JS

#### DNS & Packets Explained

- IP Address represents a unique location on the web. 

- Domain Name Servers were invented to be memorable alongside IP Addresses

- Packets are the format in which data is sent from server to client


### Website Design & Progress
<https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like>

#### Planning
 1. What is your

 2. What information are you presenting on the subject?

 3. What does your website look like

 #### Sketch Design
- Draw out the layout

#### Choosing Assets
- Pick contents that will appear on page
- Text, Theme Color, Images, Font

### JavaScript Basics
<https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics>

## Introduction to HTML

### Getting Started
<https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started>

### HTML Document Structure
<https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure>

### Metadata in HTML
<https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML>

## Miscellaneous

### How to Start Website Design
<https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Design_and_accessibility/Thinking_before_coding>

### Semantics
<https://developer.mozilla.org/en-US/docs/Glossary/Semantics>

### What's JavaScript?
<https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript>

**JavaScript:** scripting or programming language that allows you to implement complex features on web pages

![delopver.mozzilla.img](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript/execution.png)

- common use is to dynamically modify HTML and CSS to update user interface

- this is done via the document Object Model API (above image)

- **NOTE** errors may occur if JavaScript is loaded and ran before the HTML and CSS


#### Add Internal JavaScript

1. Make a script.JS file

2. Go to your text editor and add the following in the head </head> in html

![img-js.1](https://cdn.discordapp.com/attachments/442113342501552147/1077240242098159636/image.png)

3. Now we'll add some JavaScript inside our script element to make the page do something more interesting — add the following code just below the "// JavaScript goes here" line:

![img.js.2](https://cdn.discordapp.com/attachments/442113342501552147/1077240809444872262/image.png)

5. Save your file and refresh the browser — now you should see that when you click the button, a new paragraph is generated and placed below.


#### Add External JavaScript

1. Make a script.JS file

2. Replace current script with the following below:

![img.js.3](https://cdn.discordapp.com/attachments/442113342501552147/1077241272105967677/image.png)

3. Inside script.js add the following script:

![img.js.4](https://cdn.discordapp.com/attachments/442113342501552147/1077241554479095879/image.png)

4. Save and refresh your browser, and you should see the same thing! It works just the same, but now we've got our JavaScript in an external file. This is generally a good thing in terms of organizing your code and making it reusable across multiple HTML files. Plus, the HTML is easier to read without huge chunks of script dumped in it.

**To look at other methods of adding, check out the link under What's JavaScript?**

## Definitions

**Your Internet Connection:**  Allows you to send and receive data on the web.

**TCP/IP:** Communication protocols that define how data should travel across the internet. 
- TCP: Transmission Control Protocol
- IP: Internet Protocol

**DNS:** Address book for websites.
- DNS: Domain Name System

**HTTP:** Application protocol that defines a language for clients and servers to speak to each other. 
- HTTP: Hypertext Transfer Protocol

**Component Files:** Many different files that make up a website.

**Code Files:** HTML, CSS, and JavaScript

**Assets:** Collective name for all other stuff that makes up a website.

**HTML:** markup language that we use to structure and give meaning to our web content
- Paragraphs, headings, data tables, embedded images, videos, etc.

**CSS:** a language of style rules that we use to apply styling to our HTML content
- Background colors, fonts, laying out content in multiple columns

**JavaScript:** scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else
- Images, music, videos, word documents, and PDFs

## Things I want to know more about

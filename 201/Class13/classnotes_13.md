# Introduction to Persistence with Local Storage

.stringify turns a object into a string

.parse turns a string into a object



.getItem **always** turns items into strings 

strings go to localstorage

once it comes out of localstorage it'll come out as a string

.parse takes in a string

you can only store strings in local storage

if we wanted to save our object we have to save it in a locastorage object like below:

```
console.log(tom)
console.log(JSON.stringify(tom))
```


If you do use .toString and .stringify it won't work because...
```
console.log(tom)
console.log(tom.toString())
console.log(JSON.stringify(tom))
```
the code cannot be parsed 

JavaScript Object Notation: 

You can send things in string formats and send them and they can fully be converted into a method through a parse


# Q&A Questions

## Local Storage and How To Use It On Websites
<https://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/>

**Why would a developer use local storage for a web application?**

direct reasoning: it allows people to store and retrieve data in the browser

it would be good to add pieces from former projects, it would also be good for offline referencing

**What information should not be stored in local storage?**

personal information (passwords, bank info, etc.). anything that can comrpomise you or someone else

**Local storage can store what type of data? How would you convert it to that type before storing?**
strings, json 

you can turn it to a string to end data anywhere
# Why Its Important

This information is important because its giving guidance on what the best practices for READMEs and tests are. Without using the best practices, users and other developers won't want to read or use your tests due to errors and the lack of information. Maintains a clean and well-written README and having a clean code for a Unit Test, it will encourage users to explore your projects.

## Unit Testing Best Practices

<https://stackify.com/unit-testing-basics-best-practices/>

**What is Unit Testing?**

Unit testing is a software testing method where individual units or components of a software are tested to determine if they are fit for use.

In C#, you can consider it to be similar to a method.

By writing a unit test, it'll test a method.

**Unit Testing Best Practices**

- Arrange, Act, Assert

Arrange everything we need to run the test

Then we Act by calling the method we want to test

Finally we Assert that the result matches what we expected

- Use Relevant and High-Quality Test Data

The test data should cover a variety of scenarios, including edge cases ad invalid inputs

Also include real-world data if possible

- One Assert Per Test Method

Each test method should have one assert statement. This makes it easier to identify which test failed.

- Avoid Test Interdependence

Tests should not depend on each other. Each test should run independently.

You can't count on the test suite / class to maintain state in between tests.

- Write Tests before Code

Writing tests first helps define requirements and ensures you cover all functionality.

- Keep It Short, Sweet, and Visible

Keep tests simple and readable. Long, complex tests are hard to debug.

- Use Headless Testing when Appropriate

Headless testing means running tests without a graphical user interface, which can speed up test execution.

- Test Positive and Negative Scenarios

Test both valid and invalid inputs. Make sure error handling works properly.

- Use Mock Objects when Necessary

Mock objects can replace complex dependencies and ensure your tests focus on the component under test.

- Ensure Compliance with Industry Standards

Follow best practices and standards for unit testing to ensure high quality.

- Ensure Tests are Repeatable

They should produce the same result every time they are ran.

- Test for Security Vulnerabilities

Identify and address any security issues in the app.

Common vulnerabilities are SQL injection, cross-site scripting, or buffer overflows.

- Recognize Test Setup Pain as a Smell

Tests carry a maintenance weight like production codes. So avoid unwieldy tests.

- Add Them to the Build

### Q&A

1. Name 3 ways in which Unit Testing improves your codebase and productivity

1 Catches bugs early so you have less mistakes

2 Improves Code Quality so that the code is functioning correctly

3 Encourages Good Programming Habits which overall improves productivity and speed

2. How would you write a unit test for a household task such as putting away laundry

```
using NUnit.Framework;

[TestFixture]
public class LaundryManagementTests
{
    [Test]
    public void PutAwayLaundry_AllClothesSorted_Success()
    {
        // Arrange
        LaundryManagement laundryManagement = new LaundryManagement();
        int expectedClothesCount = 10;

        // Act
        laundryManagement.PutAwayLaundry();

        // Assert
        Assert.AreEqual(expectedClothesCount, laundryManagement.GetClothesCount());
        Assert.IsTrue(laundryManagement.AreAllClothesSorted());
    }
}
```

--------------

## Art of Readme

<https://github.com/hackergrrl/art-of-readme>

README dates back at least to th e1980s

README is in all caps because its visually striking

UNIX systems sort capitals before lower case letters which put README before everything else in the directory

Overall it means the information is important

**Modules**

Some README modules have important / useful information such as:

- npm install
- How To Use
- etc

Other modules don't have good information for consumers such as:

- Saved snippets of code
- Brief notes about the app
- Hex Codes saved

**Professional Module README**

1. Tells what is within it
2. Shows what it is in action (or screenshots)
3. Shows or tells users how to use it
4. Relays relevant details / important details

Lack of a powerful and well written README is a red flag.

**The ideal README is short, but informative.**

**Key Elements in a README**

**Name**
self-explanatory names are best. collide-2d-aabb-aabb sounds promising, though it assumes I know what an "aabb" is. If the name sounds too vague or unrelated, it may be a signal to move on

 **One-liner**
having a one-liner that describes the module is useful for getting an idea of what the module does in slightly greater detail. collide-2d-aabb-aabb says it

 Determines whether a moving axis-aligned bounding box (AABB) collides with other AABBs.

Awesome: it defines what an AABB is, and what the module does. Now to gauge how well it'd fit into my code:

**Usage**
rather than starting to delve into the API docs, it'd be great to see what the module looks like in action. I can quickly determine whether the example JS fits the desired style and problem. People have lots of opinions on things like promises/callbacks and ES6. If it does fit the bill, then I can proceed to greater detail.

**API**
the name, description, and usage of this module all sound appealing to me. I'm very likely to use this module at this point. I just need to scan the API to make sure it does exactly what I need and that it will integrate easily into my codebase. The API section ought to detail the module's objects and functions, their signatures, return types, callbacks, and events in detail. Types should be included where they aren't obvious. Caveats should be made clear.

**Installation**
if I've read this far down, then I'm sold on trying out the module. If there are nonstandard installation notes, here's where they'd go, but even if it's just a regular npm install, I'd like to see that mentioned, too. New users start using Node all the time, so having a link to npmjs.org and an install command provides them the resources to figure out how Node modules work.

**License**
most modules put this at the very bottom, but this might actually be better to have higher up; you're likely to exclude a module VERY quickly if it has a license incompatible with your work. I generally stick to the MIT/BSD/X11/ISC flavours. If you have a non-permissive license, stick it at the very top of the module to prevent any confusion.

## Readme Best Practices

<https://github.com/jehna/readme-best-practices>

### Q&A

1. Name 3 reasons a quality README is just as important as quality code.

1 It makes it easier to understand what is inside of the code without having to delve into the code

2 It lets users know what the code is or isn't allow to be used for, otherwise no one would know and credits those who contributed

3 It also allows users to see installation guides and usage instructions to be able to use the site

2. When writing a README for your co-developers, name 4 crucial elements to include.

1 Name
2 Usage
3 Installation
4 License

# Why Its Important:

## Big O: Analysis of Algorithm Efficieny

<https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-05/resources/big_oh.html>

**Big O(oh) notation** is used to describe the **efficiency of an algorithm or function**. This efficiency is evaluated based on 2 factors:
- **Running Time:** The amount of time a function needs to complete.
- **Memory Space:** The amount of memory resources a function uses to store data and instructions.

 4 Key Areas for Analysis (Running Time):

- **1 Input Size:** the size of the parameter values that are read by the algorithm

- **2 Units of Measurement:** a function for Time and Space complexitiy

The time in milliseconds from the start of a function execution until it ends.
- For the purposes of Big O, we won’t be considering this measurement since different machines will have different individual run times depending on how powerful they are. Regardless, this will always be a measurement of run-time.

The number of operations that are executed.
- Think of this as the number of lines of code that are executed from start to finish of a function.

The number of “Basic Operations” that are executed.
- “Basic Operation” refers to the operation that is contributing the most to the total running time. This is usually the most time consuming operation within the inner most loop.

 4 Key Areas for Analysis (Memory Space):

- **1 The amount of space needed to hold the code for the algorithm.**
Think of this as the number of bytes required to store the characters for the instructions specified in your function.

- **2 The amount of space needed to hold the input data.**
If direct input data is not considered, we may just refer to this as Additional Memory Space since not all functions have direct input values.

- **3 The amount of space needed for the output data.**

- **4The amount of space needed to hold working space during the calculation.**
Working Space can be thought of as the creation of variables and reference points as our function performs calculations. This will also include Stack Space of recursive function calls … specifically how memory usage scales relatively with the size of the input.

- **3 Orders of Growth:** We can describe overall efficiency by using the input size n and measuring the overall Units of Space and Time required for the given input size n. As the value of n grows, the Order of Growth represents the increase in Running Time or Memory Space.

[![Orders of Growth](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-05/resources/images/OrdersOfGrowth.png)](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-05/resources/images/OrdersOfGrowth.png)

Check out the link for more information & charts

- **4 Best Case, Worst Case, and Average Case:**

**Worst Case:** The efficiency for the worst possible input of size n

**Best Case:** The efficiency for the best possible input of size n

**Average Case:** The efficiency for a “typical” or “random” input of size n.

Review

**Big O:** The worst case analysis of algorithm efficiency.

**Running Time:** The amount of time required for an algorithm to complete.

**Memory Space:** The amount of memory resources required for an algorithm to complete.

**Input Size:** Represented by the variable n, the total size of values used as parameters in an algorithm.

**Big Omega:** The best case analysis of algorithm efficiency.

**Big Theta:** The typical or random case used for analysis of algorithm efficiency.

[![Efficiency Notations](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-05/resources/images/EfficiencyNotations.png)](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-05/resources/images/EfficiencyNotations.png)


## Linked Lists

**Linked List:** A data structure that contains nodes that links/points to the next node in the list.

**Singly:** refers to the number of references the node has

**Singly Linked List:** means that there is only one reference, and the reference points to the Next node in a linked list

**Doubly:** refers to there being two (double) references within the node

**Doubly Linked List:** means that there is a reference to both the Next and Previous node.

**Nodes:** individual items/links that live in a linked list.

**Next:** this property contains the reference to the next node

**Head:** reference of type Node to the first node in the linked list

**Current:** reference of type Node to the node that is currently being looked at
- you create a new Current variable at the Head to guarantee you are starting from the beginning of the linked lis

<https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-05/resources/singly_linked_list.html>

## What's a Linked List Anyway? [Part 1]

<https://medium.com/basecs/whats-a-linked-list-anyway-part-1-d8b7e6508b9d>

[![Image](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Xokk6XOjWyIGCBujkJsCzQ.jpeg)](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Xokk6XOjWyIGCBujkJsCzQ.jpeg)


## What's a Linked List Anyway? [Part 2]

<https://medium.com/basecs/whats-a-linked-list-anyway-part-2-131d96f71996>

[![Image](https://miro.medium.com/v2/resize:fit:720/format:webp/1*cUehR5S18XSoVLaPNfNzlA.jpeg)](https://miro.medium.com/v2/resize:fit:720/format:webp/1*cUehR5S18XSoVLaPNfNzlA.jpeg)

## Review Quiz 

1. <details><summary>A linked list is a data structure that contains ... that links/points to the next node in the list.</summary>Answer 1: nodes</details>
2. <details><summary>In a ... linked list, there is only one reference, and the reference points to the Next node in the linked list.</summary>Answer 2: singly</details>
3. <details><summary>In a ... linked list, there is a reference to both the Next and Previous node.</summary>Answer 3: doubly</details>
4. <details><summary>4Each individual item/link in a linked list is called a ....
</summary>Answer 4: node</details>
5. <details><summary>The ... property of a node contains the reference to the next node in the linked list.</summary>Answer 5: Next</details>
6. <details><summary>The ... reference in a linked list points to the first node in the list.</summary>Answer 6: Head</details>
7. <details><summary>The ... reference in a linked list points to the node that is currently being looked at.</summary>Answer 7: Current</details>
8. <details><summary>When traversing a linked list, you start from the ... to guarantee you are starting from the beginning of the linked list.</summary>Answer 8: Head</details>
9. <details><summary>The first part of the article "What's a Linked List Anyway?" provides an introduction to linked lists, focusing on ....</summary>Answer 9: the concept and basics</details>
10. <details><summary>The second part of the article "What's a Linked List Anyway?" delves deeper into the implementation and advantages of ... linked lists.</summary>Answer 10: doubly</details>

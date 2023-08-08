# Trees

<https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-15/resources/Trees.html>

Trees are a hierarchical data structure that consists of nodes connected by edges. Each node contains a value and may also contain a list of child nodes.

Tree Node: A component which may contain it's own values, and references to other nodes

Root: the beginning of the tree

K: Number that specifies that max number of children any node can have in a K-ary tree. This is a binary tree

```k = 2
```

Left: one child node

Right: the other child node

Edge: The link between two nodes (parent and child)

Leaf: A node that does not have any children.

Height: The number of edges from the root node to the furthest leaf node.

![Binary Tree](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-15/resources/images/BinaryTree1.PNG)


## Traversals

There are two types:

- Depth First
- Breadth First

### Depth First

Prioritizes going through the depth (height) of the tree first.

**Pre-order:** root >> left >> right

- Traverse root node first, then traverse left subtree, then right subtree

**In-order:** left >> root >> right

- Traverse left subtree first, then root, then right subtree

**Post-order:** left >> right >> root

- Traverse left subtree, then right subtree, then root node

### Breadth First

Iterates through the tree by level, traversing all nodes on the current level before moving on to the next.

**Algorithm**

- Create a queue and enqueue the root node
- Dequeue a node from the queue and visit it
- Enqueue its left child (if it exists)
- Enqueue its right child (if it exists)
- Repeat until the queue is empty

## K-ary Trees

Trees that contain more than 2 child nodes are called K-ary trees. K specifies the max number of children any node can have.

## Quiz

<details>
<summary>What is a node in a tree data structure?</summary>
A) The root node
B) A component that contains values and references to other nodes
C) A leaf node
D) A binary node

**Answer:** B) A component that contains values and references to other nodes
</details>

<details>
<summary>What does the "root" refer to in a tree?</summary>
**Answer:** The beginning of the tree
</details>

<details>
<summary>What does "K" represent in a K-ary tree?</summary>
**Answer:** The maximum number of children any node may have in a K-ary tree
</details>

<details>
<summary>What is the purpose of the "Left" reference in a binary tree?</summary>
**Answer:** A reference to one child node, in a binary tree
</details>

<details>
<summary>What type of traversal prioritizes going through the depth (height) of a tree first?</summary>
**Answer:** Depth First
</details>

<details>
<summary>In a Pre-order traversal, in what order are the nodes visited?</summary>
**Answer:** root >> left >> right
</details>

<details>
<summary>Which traversal starts by traversing the left subtree, then the root, and then the right subtree?</summary>
**Answer:** In-order traversal
</details>

<details>
<summary>How does Breadth First traversal proceed through the tree?</summary>
**Answer:** Iterates through the tree level by level, traversing all nodes on the current level before moving on to the next.
</details>

<details>
<summary>What is the primary difference between a binary tree and a K-ary tree?</summary>
**Answer:** A binary tree allows two children per node, while a K-ary tree can have more than two children per node.
</details>

<details>
<summary>How is the height of a tree defined?</summary>
**Answer:** The number of edges from the root node to the furthest leaf node.
</details>
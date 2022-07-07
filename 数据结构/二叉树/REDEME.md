# 二叉树
## 递归遍历
- 前序遍历：先遍历根节点，然后左子树，再右子树

![alt](https://img.php.cn/upload/article/000/000/024/d9dec53a5cf0aa2db265295bfbdca558-0.png)

- 中序遍历：先遍历左子树，然后根节点，再右子树

![alt](https://img.php.cn/upload/article/000/000/024/8bccc652526392479526a0fba211969e-1.png)

- 后续遍历：先遍历左子树，然后右子树，再根节点

![alt](https://img.php.cn/upload/article/000/000/024/a607e0d2e82567a1c6e884cd15e5e0e5-2.png)

代码

```
function TreeCode() {

    let BiTree = function (ele) {

        this.data = ele;

        this.lChild = null;

        this.rChild = null;

    }

 

    this.createTree = function () {

        let biTree = new BiTree('A');

        biTree.lChild = new BiTree('B');

        biTree.rChild = new BiTree('C');

        biTree.lChild.lChild = new BiTree('D');

        biTree.lChild.lChild.lChild = new BiTree('G');

        biTree.lChild.lChild.rChild = new BiTree('H');

        biTree.rChild.lChild = new BiTree('E');

        biTree.rChild.rChild = new BiTree('F');

        biTree.rChild.lChild.rChild = new BiTree('I');

        return biTree;

    }

}

 

//前序遍历

function ProOrderTraverse(biTree) {

    if (biTree == null) return;

    console.log(biTree.data);

    ProOrderTraverse(biTree.lChild);

    ProOrderTraverse(biTree.rChild);

}

 

//中序遍历

function InOrderTraverse(biTree) {

    if (biTree == null) return;

    InOrderTraverse(biTree.lChild);

    console.log(biTree.data);

    InOrderTraverse(biTree.rChild);

}

 

//后续遍历

function PostOrderTraverse(biTree) {

    if (biTree == null) return;

    PostOrderTraverse(biTree.lChild);

    PostOrderTraverse(biTree.rChild);

    console.log(biTree.data);

}

 

let myTree = new TreeCode();

console.log(myTree.createTree());

console.log('前序遍历')

ProOrderTraverse(myTree.createTree());

console.log('中序遍历')

InOrderTraverse(myTree.createTree());

console.log('后续遍历')

PostOrderTraverse(myTree.createTree());
```
## 非递归遍历
- 深度优先遍历（主要利用栈的先进后出）
- 广度优先遍历（主要利用队列的先进先出
```
//深度优先非递归

function DepthFirstSearch(biTree) {

    let stack = [];

    stack.push(biTree);

 

    while (stack.length != 0) {

        let node = stack.pop();

        console.log(node.data);

        if (node.rChild) {

            stack.push(node.rChild);

        }

        if (node.lChild) {

            stack.push(node.lChild);

        }

 

    }

 

}

 

 

//广度优先非递归

function BreadthFirstSearch(biTree) {

    let queue = [];

    queue.push(biTree);

    while (queue.length != 0) {

        let node = queue.shift();

        console.log(node.data);

        if (node.lChild) {

            queue.push(node.lChild);

        }

        if (node.rChild) {

            queue.push(node.rChild);

        }

    }

 

}
```
深度优先主要是利用栈，先压右子树，再压左子树
广度优先主要利用队列，先入左子树，再入右子树

深度优先的遍历结果与前序遍历相同ABDGHCEIF，广度优先的遍历结果是 ABCDEFGHI
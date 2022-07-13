# 二叉树
## 创建二叉树
### 思路
- 
```
function TreeNode(value){
    this.value = value
    this.left = this.right = null
}

// 构建二叉树
let createTree = function(...nodes){
    let root = new TreeNode(nodes[0])
    let result = [], i = 1
    result.push(root)
    while(result.length != 0){
        let node = result.shift()
        if(node != null){
            if(i < nodes.length){
                result.push(insertLNode(node,nodes[i]));
                result.push(insertRNode(node,nodes[i+1]));
            }
            i+=2
        }
    }
    return root
}

// 插入左节点
let insertLNode = function(root, data){
    if(data != null){
        root.left = new TreeNode(data)
        return root.left
    }
}

// 插入右节点
let insertRNode = function(root, data){
    if(data != null){
        root.right = new TreeNode(data)
        return root.right
    }
}

let root = createTree(0,1,2,3,4,5,6,7,8,9)
console.log(root)
```
## 递归遍历
- 前序遍历：先遍历根节点，然后左子树，再右子树

![alt](https://img.php.cn/upload/article/000/000/024/d9dec53a5cf0aa2db265295bfbdca558-0.png)

- 中序遍历：先遍历左子树，然后根节点，再右子树

![alt](https://img.php.cn/upload/article/000/000/024/8bccc652526392479526a0fba211969e-1.png)

- 后续遍历：先遍历左子树，然后右子树，再根节点

![alt](https://img.php.cn/upload/article/000/000/024/a607e0d2e82567a1c6e884cd15e5e0e5-2.png)

代码

```
//前序遍历
function ProOrderTraverse(root){
    if (root == null) return;

    console.log(root.value);

    ProOrderTraverse(root.left);

    ProOrderTraverse(root.right);
}

//输出顺序：0->1->3->7->8->4->9->2->5->6
ProOrderTraverse(root)

//中序遍历
function InOrderTraverse(root) {
    if (root == null) return;

    InOrderTraverse(root.left);

    console.log(root.value);

    InOrderTraverse(root.right);

}

//输出顺序：7->3->8->1->9->4->0->5->2->6
InOrderTraverse(root)

//后序遍历
function PostOrderTraverse(root) {
    if (root == null) return;

    PostOrderTraverse(root.left);

    PostOrderTraverse(root.right);

    console.log(root.value);

}

//输出顺序：7->8->3->9->4->1->5->6->2->0
PostOrderTraverse(root)

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
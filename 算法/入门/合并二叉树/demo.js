/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
// 二叉树节点
class TreeNode{
    constructor(val){
        this.val = val
        this.left = this.right = null
    }
}

// 构建二叉树
let createTree = function(...nodes){
    if(!nodes[0])return;
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
let root1 = createTree(...[1,3,2,5])
let root2= createTree(...[2,1,3,null,4,null,7])

//递归实现
function BreadthFirstSearch(root) {
    let queue = [];
    let origin=[]
    queue.push(root);
    while (queue.length != 0) {
        let node = queue.shift();
        origin.push(node?.val||null);
        if(!node?.left&&!node?.right)continue
        if (node?.left) {
            queue.push(node?.left);
        }else{
            queue.push(null);
        }
        if (node?.right) {
            queue.push(node?.right);
        }else{
            queue.push(null);
        }
    }

    return origin
}

//深度优先搜索
var mergeTrees1 = function(root1, root2) {
    if (root1 == null) {
        return root2;
    }
    if (root2 == null) {
        return root1;
    }
    let merged = new TreeNode(root1.val + root2.val);
    merged.left = mergeTrees(root1.left, root2.left);
    merged.right = mergeTrees(root1.right, root2.right);
    return merged;
}

//广度优先搜索
//1,3,2,5
//2,1,3,null,4,null,7
var mergeTrees = function(root1, root2) {
    if (root1 == null) {
        return root2;
    }
    if (root2 == null) {
        return root1;
    }
    let merged = new TreeNode(root1.val + root2.val);
    let queue=[];
    let queue1=[];
    let queue2=[];
    queue.push(merged);
    queue1.push(root1);
    queue2.push(root2);

    while(queue1.length&&queue2.length){
        let node=queue.shift(),node1=queue1.shift(),node2=queue2.shift();
        let left1=node1.left,left2=node2.left,right1=node1.right,right2=node2.right;

        if(left1||left2){
            if(left1&&left2){
                let left=new TreeNode(left1.val+left2.val);
                node.left=left;
                queue.push(left);
                queue1.push(left1);
                queue2.push(left2);
            }else if(!left1){
               node.left=left2; 
            }else if(!left2){
                node.left=left1;
            }
        }

        if(right1||right2){
            if(right1&&right2){
                let right=new TreeNode(right1.val+right2.val);
                node.right=right;
                queue.push(right);
                queue1.push(right1);
                queue2.push(right2);
            }else if(!right1){
                node.right=right2;
            }else if(!right2){
                node.right=right1;
            }
        } 
    }
    return merged;
}

mergeTrees(root1,root2)
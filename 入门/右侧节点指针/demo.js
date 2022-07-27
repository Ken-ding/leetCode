/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
// 二叉树节点
class TreeNode{
    constructor(val){
        this.val = val
        this.left = this.right = this.next=null
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
let root = createTree(...[1,2,3,4,5,6,7]);

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (root === null) {
        return root;
    }
    let queen=[];
    queen.push(root);
    while(queen.length){
        const size=queen.length
        for (let i = 0; i < size; i++) {
            const node=queen.shift();

            if (i < size - 1) {
                node.next = queen[0];
            }

            if(node.left){
                queen.push(node.left)
            }

            if(node.right){
                queen.push(node.right)
            }
        }
    }
    return root;
};

connect(root)
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
 class TreeNode{
    constructor(value){
        this.value = value
        this.left = this.right = null
    }
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

 var mergeTrees = function(root1, root2) {

};

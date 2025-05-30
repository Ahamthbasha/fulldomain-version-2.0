class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class Bst{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        let node = new Node(value)

        if(this.isEmpty()){
            this.root = node
        }else{
            this.insertNode(this.root,node)
        }
    }

    insertNode(root,node){
        if(node.value < root.value){
            if(root.left == null){
                root.left = node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right == null){
                root.right = node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }

    search(root,value){
        if(!root){
            return false
        }
        else if(root.value == value){
            return true
        }
        else if(value < root.value){
            return this.search(root.left,value)
        }
        else{
            return this.search(root.right,value)
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    levelOrder(){
        let queue = []
        queue.push(this.root)

        while(queue.length){
            let root = queue.shift()

            console.log(root.value)

            if(root.left){
                queue.push(root.left)
            }

            if(root.right){
                queue.push(root.right)
            }
        }
    }

    min(root){
        if(!root){
            return null
        }

        while(root.left){
            root = root.left
        }

        return root.value
    }

    max(root){
        if(!root){
            return null
        }

        while(root.right){
            root = root.right
        }

        return root.value
    }

    delete(value){
        this.root = this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if(!root){
            return null
        }
        else if(value < root.value){
            root.left = this.deleteNode(root.left,value)
        }
        else if(value > root.value){
            root.right = this.deleteNode(root.right,value)
        }
        else{
            if(!root.left && !root.right){
                return null
            }

            if(!root.left){
                return root.right
            }

            if(!root.right){
                return root.left
            }

            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }

    isPrime(value){
        if(value < 2){
            return false
        }

        for(let i=2;i<=Math.sqrt(value);i++){
            if(value % i == 0){
                return false
            }
        }

        return true
    }

    findPrimes(root,list=[]){
        if(root){
            this.findPrimes(root.left,list)
            if(this.isPrime(root.value)){
                list.push(root.value)
            }
            this.findPrimes(root.right,list)
        }

        return list
    }

    isBst(root,min=-Infinity,max=Infinity){
        if(!root){
            return true
        }

        if(root.value <= min || root.value >= max){
            return false
        }

        return this.isBst(root.left,min,root.value) && this.isBst(root.right,root.value,max)
    }

    isIdentical(tree1,tree2){
        if(!tree1 && !tree2){
            return true
        }

        if(!tree1 || !tree2){
            return false
        }

        return tree1.value == tree2.value && this.isIdentical(tree1.left,tree2.left) && this.isIdentical(tree1.right,tree2.right)
    }

    inOrderTraversal(root,list=[]){
        if(root){
            this.inOrderTraversal(root.left,list)
            list.push(root.value)
            this.inOrderTraversal(root.right,list)
        }
        return list
    }

    findKthSmallest(root,k){
        let result = this.inOrderTraversal(root)
        return result[k-1] || null
    }

    findKthLargest(root,k){
        let result = this.inOrderTraversal(root)
        return result[result.length-k] || null
    }

    closestValue(root,k){
        let result = this.inOrderTraversal(root)
        let closest = result[0]
        for(let i=0;i<result.length;i++){
            if(Math.abs(result[i] - k) < Math.abs(closest - k)){
                closest = result[i]
            }
        }
        return closest
    }

    successor(root,k){
        let result = this.inOrderTraversal(root)

        let successor = null

        for(let i=0;i<result.length;i++){
            if(result[i] == k){
                if(i+1 < result.length){
                    successor = result[i+1]
                }
            }
        }

        return successor
    }

    predecessor(root,k){
        let result = this.inOrderTraversal(root)
        let predecessor = null

        for(let i=0;i<result.length;i++){
            if(result[i] == k){
                if(i-1 >= 0){
                    predecessor = result[i-1]
                }
            }
        }
        return predecessor
    }

    removeDuplicates(root){
        let unique = new Set()

        function inOrder(root){
            if(root){
                inOrder(root.left)
                unique.add(root.value)
                inOrder(root.right)
            }
        }

        inOrder(root)

        this.root = null

        unique.forEach((val)=>{
            this.insert(val)
        })
    }

    findParent(root,value){
        if(!root){
            return null
        }

        let parent = null

        function inOrder(root){
            if(root){
                inOrder(root.left)

                if(root.left && root.left.value == value){
                    parent = root.value
                }

                if(root.right && root.right.value == value){
                    parent = root.value
                }

                inOrder(root.right)
            }
        }

        inOrder(root)

        return parent
    }

    findChildren(root,value){
        if(!root){
            return null
        }
        else if(root.value == value){
            const children = {
                leftChildren : root.left ? root.left.value : null,
                rightChildren: root.right ? root.right.value : null
            }

            return children
        }
        else if(value < root.value){
            return this.findChildren(root.left,value)
        }
        else{
            return this.findChildren(root.right,value)
        }
    }

    findSiblings(root,value){
        if(!root){
            return null
        }
        let sibling = null
        function inOrder(root){
            if(root){
                inOrder(root.left)

                if(root.left && root.left.value == value){
                    sibling = root.right.value
                }

                if(root.right && root.right.value == value){
                    sibling = root.left.value
                }

                inOrder(root.right)
            }
        }

        inOrder(root)

        return sibling
    }

    findLeafNode(root,list=[]){
        if(root){
            if(!root.left && !root.right){
                list.push(root.value)
            }
            this.findLeafNode(root.left,list)
            this.findLeafNode(root.right,list)
        }
        return list
    }

    findAncestor(root,value,anscestor = []){
        if(!root){
            return null
        }
        anscestor.push(root.value)
        if(root.value == value){
            return anscestor
        }
        else if(value < root.value){
            return this.findAncestor(root.left,value,anscestor)
        }
        else{
            return this.findAncestor(root.right,value,anscestor)
        }
    }

    findDescendants(root,value){
        if(!root){
            return null
        }
        else if(root.value == value){
            return this.collectDescendant(root)
        }
        else if(value < root.value){
            return this.findDescendants(root.left,value)
        }
        else{
            return this.findDescendants(root.right,value)
        }
    }

    collectDescendant(root,list=[]){
        if(root){
            list.push(root.value)
            this.collectDescendant(root.left,list)
            this.collectDescendant(root.right,list)
        }
        return list
    }

    findHeight(){
        let queue = []
        queue.push(this.root)
        let height = 0
        while(queue.length){
            let nodeCount = queue.length
            height++

            while(nodeCount){
                let cur = queue.shift()

                if(cur.left){
                    queue.push(cur.left)
                }

                if(cur.right){
                    queue.push(cur.right)
                }

                nodeCount--
            }
        }

        return height
    }

    findDegree(root,k){
        if(!root){
            return null
        }
        else if(root.value == k){
            let degree = 0

            if(root.left){
                degree++
            }

            if(root.right){
                degree++
            }

            return degree
        }
        else if(k < root.value){
            return this.findDegree(root.left,k)
        }
        else{
            return this.findDegree(root.right,k)
        }
    }

    findDepth(root,k){
        if(!root){
            return null
        }


        let depth = 0

        while(root){
            if(k < root.value){
                root = root.left
                depth++
            }
            else if(k > root.value){
                root = root.right
                depth++
            }
            else{
                return depth
            }
        }
    }

    findDistance(root,k){
        if(!root){
            return null
        }

        let distance = 0

        while(root){
            if(k < root.value){
                root = root.left
                distance++
            }
            else if(k > root.value){
                root = root.right
                distance++
            }
            else{
                return distance
            }
        }
    }

    findpath(root,k){
        if(!root){
            return null
        }
        let path = []
        while(root){
            path.push(root.value)

            if(k < root.value){
                root = root.left
            }
            else if(k > root.value){
                root = root.right
            }
            else{
                return path
            }
        }
    }

    findLCA(n1,n2){
        let root = this.root

        while(root){
            if(n1 < root.value && n2 < root.value){
                root = root.left
            }
            else if(n1 > root.value && n2 > root.value){
                root = root.right
            }
            else{
                return root
            }
        }
    }

    findPathBetweenTwoNodes(n1,n2){
        let LCA = this.findLCA(n1,n2)
        if(!LCA){
            return []
        }

        let path1 = this.findpath(LCA,n1)
        let path2 = this.findpath(LCA,n2)
        return [...path1.reverse(),...path2.slice(1)]
    }

    findDistanceBetweenTwoNodes(n1,n2){
        let LCA = this.findLCA(n1,n2)

        if(!LCA){
            return 0
        }

        let distance1 = this.findDistance(LCA,n1)
        let distance2 = this.findDistance(LCA,n2)

        return distance1 + distance2
    }

    oneChildNode(root){
        if(!root){
            return null
        }
        let count = 0
        let nodes = []
        function preOrder(root){
            if(root){

                if((root.left && !root.right) ||(!root.left && root.right)){
                    count++
                    nodes.push(root.value)
                }
                preOrder(root.left)

                preOrder(root.right)
            }
        }

        preOrder(root)

        return {count,nodes}
    }

    noOfNodes(root){
        if(!root){
            return null
        }

        let queue = []
        queue.push(root)

        let count = 0
        while(queue.length){
            let cur = queue.shift()
            count++

            if(cur.left){
                queue.push(cur.left)
            }

            if(cur.right){
                queue.push(cur.right)
            }
        }

        return count
    }

    leftNodeOnly(root){
        if(!root){
            return null
        }

        let count = 0

        function preOrder(root){
            if(root){
                if(root.left && !root.right){
                    count++
                }
                preOrder(root.left)
                preOrder(root.right)
            }
            return count
        }

        preOrder(root)

        return count
    }

    rightNodeOnly(root){
        if(!root){
            return null
        }
        let count = 0
        function preOrder(root){
            if(root){
                if(!root.left && root.right){
                    count++
                }
                preOrder(root.left)
                preOrder(root.right)
            }
        }

        preOrder(root)

        return count
    }
}

// const tree = new Bst();
// tree.insert(10);
// tree.insert(5);
// tree.insert(15);
// tree.insert(3);
// tree.insert(7);
// tree.insert(12);
// tree.insert(17);

// console.log("Is BST:", tree.isBst(tree.root)); // Should print: true


// function testBST() {
//     const bst = new Bst();

//     [10, 5, 3, 7, 20, 15, 25, 7, 3].forEach(n => bst.insert(n));

//     console.log("InOrder Traversal:");
//     bst.inOrder(bst.root); // Should print in sorted order

//     console.log("Search 15:", bst.search(bst.root, 15)); // true
//     console.log("Search 100:", bst.search(bst.root, 100)); // false

//     console.log("PreOrder Traversal:");
//     bst.preOrder(bst.root);

//     console.log("PostOrder Traversal:");
//     bst.postOrder(bst.root);

//     console.log("LevelOrder Traversal:");
//     bst.levelOrder();

//     console.log("Min:", bst.min(bst.root)); // 3
//     console.log("Max:", bst.max(bst.root)); // 25

//     console.log("Find Primes:", bst.findPrimes(bst.root)); // [3, 5, 7]

//     console.log("Is BST:", bst.isBst(bst.root)); // true

//     console.log("Kth Smallest (3rd):", bst.findKthSmallest(bst.root, 3)); // 5
//     console.log("Kth Largest (2nd):", bst.findKthLargest(bst.root, 2)); // 20

//     console.log("Closest Value to 16:", bst.closestValue(bst.root, 16)); // 15

//     console.log("Successor of 15:", bst.successor(bst.root, 15)); // 20
//     console.log("Predecessor of 15:", bst.predecessor(bst.root, 15)); // 10

//     console.log("Deleting 20...");
//     bst.delete(20);
//     bst.inOrder(bst.root); // 20 should be gone

//     console.log("Removing duplicates...");
//     bst.removeDuplicates(bst.root);
//     bst.inOrder(bst.root); // No duplicates should appear
// }
// testBST()

function testTree() {
    const tree = new Bst();

    [20, 10, 30, 5, 15, 25, 35, 3, 7, 13, 17].forEach(n => tree.insert(n));

    console.log("Parent of 15:", tree.findParent(tree.root, 15)); // 10
    console.log("Children of 10:", tree.findChildren(tree.root, 10)); // { leftChildren: 5, rightChildren: 15 }
    console.log("Siblings of 5:", tree.findSiblings(tree.root, 5)); // 15

    console.log("Leaf Nodes:", tree.findLeafNode(tree.root)); // [3, 7, 13, 17, 25, 35]
    console.log("Ancestors of 13:", tree.findAncestor(tree.root, 13)); // [20, 10, 15]
    console.log("Descendants of 10:", tree.findDescendants(tree.root, 10)); // [10, 5, 3, 7, 15, 13, 17]

    console.log("Tree Height:", tree.findHeight()); // 4
    console.log("Degree of 10:", tree.findDegree(tree.root, 10)); // 2
    console.log("Depth of 17:", tree.findDepth(tree.root, 17)); // 3
    console.log("Distance from root to 17:", tree.findDistance(tree.root, 17)); // 3

    console.log("Path to 17:", tree.findpath(tree.root, 17)); // [20, 10, 15, 17]
    console.log("LCA of 3 and 7:", tree.findLCA(3, 7).value); // 5
    console.log("Path between 3 and 17:", tree.findPathBetweenTwoNodes(3, 17)); // [3, 5, 10, 15, 17]
    console.log("Distance between 3 and 17:", tree.findDistanceBetweenTwoNodes(3, 17)); // 4

    const { count, nodes } = tree.oneChildNode(tree.root);
    console.log("One-child nodes count:", count); // 0 or more depending on structure
    console.log("One-child nodes:", nodes);

    console.log("Total nodes:", tree.noOfNodes(tree.root)); // 11
    console.log("Left-only nodes count:", tree.leftNodeOnly(tree.root)); // count of nodes with only left child
    console.log("Right-only nodes count:", tree.rightNodeOnly(tree.root)); // count of nodes with only right child
}

testTree()
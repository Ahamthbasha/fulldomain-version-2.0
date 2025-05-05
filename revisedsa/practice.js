//tree

class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class bst{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        const node = new Node(value)

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
            }
            else{
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
            return null
        }

        if(root.value == value){
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
            console.log(root.value)
            this.postOrder(root.right)
        }
    }

    levelOrder(){
        let queue =[]
        let node = this.root

        queue.push(node)

        while(queue.length){
            let cur = queue.shift()

            console.log(cur.value)

            if(cur.left){
                queue.push(cur.left)
            }

            if(cur.right){
                queue.push(cur.right)
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

    isPrime(num){
        if(num < 2){
            return false
        }

        for(let i=2;i<=Math.sqrt(num);i++){
            if(num % i === 0){
                return false
            }
        }

        return true
    }

    findPrime(root,result=[]){
        if(root){
            this.findPrime(root.left,result)
            
            if(this.isPrime(root.value)){
                result.push(root.value)
            }

            this.findPrime(root.right,result)
        }

        return result
    }

    isBST(root,min=-Infinity,max=Infinity){
        if(!root){
            return true
        }

        if(root.value <= min || root.value >= max){
            return false
        }

        return this.isBST(root.left,min,root.value) && this.isBST(root.right,root.value,max)
    }

    isIdentical(tree1,tree2){
        if(!tree1 && !tree2){
            return true
        }

        if(!tree1 || !tree2){
            return false
        }

        return (tree1.value === tree2.value) && this.isIdentical(tree1.left,tree2.left) && this.isIdentical(tree1.right,tree2.right)
    }

    inOrderTraversal(root,result=[]){
        if(root){
            this.inOrderTraversal(root.left,result)

            result.push(root.value)

            this.inOrderTraversal(root.right,result)
        }

        return result
    }

    findKthSmallest(root,k){
        let result = this.inOrderTraversal(root)

        return result[k-1] || null
    }

    findKthLargest(root,k){
        let result = this.inOrderTraversal(root)

        return result[result.length-k] || null
    }

    closestValue(root,target){
        let result = this.inOrderTraversal(root)
        let closest = null
        for(let i=0;i<result.length;i++){
            if(result[i] >= target){
                closest = result[i]
                break
            }
        }
        return closest
    }
    
    findSuccessor(root,target){
        let result = this.inOrderTraversal(root)

        let successor = null

        for(let i=0;i<result.length;i++){
            if(result[i] == target){
                if(i+1 < result.length){
                    successor = result[i+1]
                    break
                }
            }
        }

        return successor
    }

    findPredecessor(root,target){
        let result = this.inOrderTraversal(root)

        let predecessor = null

        for(let i=0;i<result.length;i++){
            if(result[i] == target){
                if(i-1 >= 0){
                    predecessor = result[i-1]
                    break
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

        unique.forEach((value)=>{
            this.insert(value)
        })
    }

    findHeight(root){
        let queue = []

        queue.push(root)

        let height = 0
        while(queue.length){
            let nodeCount = queue.length
            height ++

            while(nodeCount){
                let cur = queue.shift()

                if(cur){
                    queue.push(cur.left)
                }

                if(cur){
                    queue.push(cur.right)
                }
                nodeCount-- 
            }
        }
        return height
    }

    findParent(root,target){
        if(!root){
            return null
        }
        
        let parent = null

        function inOrder(root){
            inOrder(root.left)

            if(root.left && root.left.value == target){
                parent = root
                return
            }

            if(root.right && root.right.value == target){
                parent = root
                return
            }

            inOrder(root.right)
        }

        inOrder(root)

        return parent
    }

    findChildren(root,target){
        if(!root){
            return null
        }
        else if(root.value == target){
            const children ={
                leftChild: root.left ? root.left.value : null,
                rightChild: root.right ? root.right.value : null
            }

            return children
        }
        else if(target < root.value){
            return this.findChildren(root.left,target)
        }
        else{
            return this.findChildren(root.right,target)
        }
    }

    findSibling(root,target){
        if(!root){
            return null
        }

        let sibling = null

        function inOrder(root){
            inOrder(root.left)

            if(root.left && root.left.value == target){
                sibling = root.right
                return
            }

            if(root.right && root.right.value == target){
                sibling = root.left
                return
            }

            inOrder(root.right)
        }

        inOrder(root)

        return sibling
    }

    findLeafNode(root,result=[]){
        if(root){
            if(!root.left && !root.right){
                result.push(root.value)
            }

            this.findLeafNode(root.left,result)
            this.findLeafNode(root.right,result)
        }
        return result 
    }

    findAncestor(root,target){
        if(!root){
            return null
        }
        let result = []
        result.push(root.value)
        if(root.value == target){
            return result
        }
        else if(target < root.value){
            return this.findAncestor(root.left,target)
        }
        else{
            return this.findAncestor(root.right,target)
        }
    }

    findDescendant(root,target){
        if(!root){
            return null
        }

        if(root.value == target){
            return this.collectDescendant(root)
        }
        else if(target < root.value){
            return this.findDescendant(root.left,target)
        }
        else{
            return this.findDescendant(root.right,target)
        }
    }

    collectDescendant(root,result=[]){
        if(root){
            result.push(root.value)
            this.collectDescendant(root.left,result)
            this.collectDescendant(root.right,result)
        }
        return result
    }

    findDegree(root,target){
        if(!root){
            return null
        }
        let degree = 0
        if(root.value == target){
            if(root.left){
                degree++
            }

            if(root.right){
                degree++
            }

            return degree
        }
        else if(target < root.value){
            return this.findDegree(root.left,target)
        }
        else{
            return this.findDegree(root.right,target)
        }
    }

    findDepth(root,target){
        if(!root){
            return null
        }

        let depth = 0

        while(root){
            if(target < root.value){
                root = root.left
                depth++
            }
            else if(target > root.value){
                root = root.right
                depth++
            }
            else{
                return depth
            }
        }
    }

    findDistance(root,target){
        if(!root){
            return null
        }

        let distance = 0

        while(root){
            if(target < root.value){
                root = root.left
                distance++
            }
            else if(target > root.value){
                root = root.right
                distance++
            }
            else{
                return distance
            }
        }
    }

    findLCA(root,n1,n2){
        if(!root){
            return null
        }

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

    findPath(root,target){
        if(!root){
            return null
        }

        let result = []

        while(root){
            result.push(root.value)

            if(target < root.value){
                root = root.left
            }
            else if(target > root.value){
                root = root.right
            }
            else{
                break
            }
        }

        return result
    }

    findPathBetweenTwoNodes(n1,n2){
        let LCA = this.findLCA(this.root,n1,n2)

        if(!LCA){
            return null
        }

        let path1 = this.findPath(LCA,n1)
        let path2 = this.findPath(LCA,n2)

        return [...path1.reverse(),...path2.slice(1)]
    }

    findDistanceBetweenTwoNodes(n1,n2){
        let LCA = this.findLCA(this.root,n1,n2)

        if(!LCA){
            return null
        }

        let distance1 = this.findDistance(LCA,n1)
        let distance2 = this.findDistance(LCA,n2)

        return distance1 + distance2
    }

    totalNoOfNodes(root){
        let queue = []
        queue.push(root)

        let nodeCount = 0

        while(queue.length){
            let cur = queue.shift()
            nodeCount++

            if(cur.left){
                queue.push(cur.left)
            }

            if(cur.right){
                queue.push(cur.right)
            }
        }

        return nodeCount
    }

    countOneChildNode(root){
        if(!root){
            return null
        }

        let nodeCount = 0
        let result =[]

        function preOrder(root){
            if(root){
                if((root.right && !root.left) || (root.left && !root.right)){
                    nodeCount++
                    result.push(root.value)
                }

                preOrder(root.left)
                preOrder(root.right)
            }
        }

        preOrder(root)

        return {nodeCount,result}
    }

    countLeftChild(root){
        if(!root){
            return null
        }
        let leftNode = 0
        function preOrder(root){
            if(root){
                if(root.left && !root.right){
                    leftNode++
                }

                preOrder(root.left)
                preOrder(root.right)
            }
        }

        preOrder(root)

        return leftNode
    }

    countRightChild(root){
        if(!root){
            return null
        }

        let countRightChild = 0

        function preOrder(root){
            if(root){
                if(root.right && !root.left){
                    countRightChild++
                }

                preOrder(root.left)
                preOrder(root.right)
            }
        }

        preOrder(root)

        return countRightChild
    }
}

const tree = new bst();
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(20);
tree.insert(40);
tree.insert(60);
tree.insert(80);
tree.inOrder(tree.root); // Expected: 20 30 40 50 60 70 80

console.log(tree.search(tree.root, 40)); // true
console.log(tree.search(tree.root, 100)); // false

console.log(tree.min(tree.root)); // 20
console.log(tree.max(tree.root)); // 80


// tree.delete(20); // delete leaf
// tree.delete(30); // delete node with one child
// tree.delete(70); // delete node with two children
// tree.inOrder(tree.root); // Expected: 40 50 60 80


// tree.preOrder(tree.root);    // Expected: 50 40 60 80
// tree.postOrder(tree.root);   // Expected: 40 60 80 50
// tree.levelOrder();           // Expected: [50], [40, 60], [80]


// Try inserting some prime numbers
tree.insert(41);
tree.insert(67);
console.log(tree.findPrime(tree.root)); // [41, 67]

console.log(tree.findKthSmallest(tree.root, 3)); // e.g., 50
console.log(tree.findKthLargest(tree.root, 2)); // e.g., 67

console.log(tree.closestValue(tree.root, 66)); // Should return 67 (or 60, depending on what's inserted)

console.log(tree.findSuccessor(tree.root, 60)); // e.g., 67 or 80
console.log(tree.findPredecessor(tree.root, 60)); // e.g., 50 or 41

console.log(tree.findHeight(tree.root)); // e.g., 2 or 3

console.log(tree.findLeafNode(tree.root)); // e.g., [40, 67, 80]

console.log(tree.findAncestor(tree.root, 80)); // [50]
console.log(tree.findDescendant(tree.root, 50)); // all children under 50

console.log(tree.findDegree(tree.root, 50)); // 2 (left and right children)

console.log(tree.findDepth(tree.root, 40)); // e.g., 2
console.log(tree.findDistance(tree.root, 80)); // e.g., 2 or 3

console.log(tree.findPathBetweenTwoNodes(40, 80)); // [40, 50, 80]

console.log(tree.findDistanceBetweenTwoNodes(40, 80)); // e.g., 2

console.log(tree.totalNoOfNodes(tree.root)); // e.g., 7
console.log(tree.countOneChildNode(tree.root)); // depends on tree structure

console.log(tree.countLeftChild(tree.root)); // number of nodes with only left child
console.log(tree.countRightChild(tree.root)); // number with only right child

console.log(tree.isBST(tree.root)); // true

const t2 = new bst();
t2.insert(50);
t2.insert(40);
t2.insert(80);
console.log(tree.isIdentical(tree.root, t2.root)); // false

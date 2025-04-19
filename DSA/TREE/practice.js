class Node{
    constructor(value){
        this.value=value
        this.right=null
        this.left=null
    }
}

class bst{
    constructor(){
        this.root=null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.root=node
        }else{
            this.insertNode(this.root,node)
        }
    }

    insertNode(root,node){
        if(node.value < root.value){
            if(root.left == null){
                root.left=node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right==null){
                root.right=node
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
        let queue=[]
        queue.push(this.root)

        while(queue.length > 0){
            let cur=queue.shift()

            if(cur){
                console.log(cur.value)

                if(cur.left){
                    queue.push(cur.left)
                }

                if(cur.right){
                    queue.push(cur.right)
                }
            }
        }
    }

    min(root){
        if(!root){
            return null
        }

        while(root.left){
            root=root.left
        }

        return root.value
    }

    max(root){
        if(!root){
            return null
        }

        while(root.right){
            root=root.right
        }

        return root.value
    }

    delete(value){
        this.root=this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if(!root){
            return null
        }

        if(value < root.value){
            root.left=this.deleteNode(root.left,value)
        }
        else if(value > root.value){
            root.right=this.deleteNode(root.right,value)
        }
        else{
            if(!root.right && !root.left){
                return null
            }

            if(!root.left){
                return root.right
            }

            if(!root.right){
                return root.left
            }

            root.value=this.min(root.right)
            root.right=this.deleteNode(root.right,root.value)
        }      
        return root  
    }

    isbst(root,min=null,max=null){
        if(!root){
            return true
        }

        if((min!=null && root.value <= min) || (max!=null && root.value >= max)){
            return false
        }

        return this.isbst(root.left,min,root.value) && this.isbst(root.right,root.value,max)
    }

    isIdentical(tree1,tree2){
        if(!tree1 && !tree2){
            return true
        }

        if(!tree1 || !tree2){
            return false
        }

        return (tree1.value == tree2.value) && this.isIdentical(tree1.left,tree2.left) && this.isIdentical(tree1.right,tree2.right)
    }

    findHeight(root){
        let queue=[]
        queue.push(root)
        let height=0

        while(queue.length > 0){
            let nodeCount=queue.length
            height++

            while(nodeCount > 0){
                let cur=queue.shift()
                if(cur){
                    if(cur.left){
                        queue.push(cur.left)
                    }

                    if(cur.right){
                        queue.push(cur.right)
                    }
                }
                nodeCount--
            }
        }

        return height
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

    findPrimes(root,result=[]){
        if(root){
            this.findPrimes(root.left,result)
            if(this.isPrime(root.value)){
                result.push(root.value)
            }
            this.findPrimes(root.right,result)
        }
        return result
    }

    inOrderTraversal(root,result=[]){
        if(root){
            this.inOrderTraversal(root.left,result)
            result.push(root.value)
            this.inOrderTraversal(root.right,result)
        }
        return result
    }

    findKthLargest(root,k){
        if(!root){
            return null
        }

        let result=this.inOrderTraversal(root)

        return result[result.length - k] || null
    }

    findKthSmallest(root,k){
        if(!root){
            return null
        }

        let result=this.inOrderTraversal(root)

        return result[k-1] || null
    }

    closestValue(root,target){
        if(!root){
            return null
        }

        let result=this.inOrderTraversal(root)
        let closest=null
        for(let i=-0;i<result.length;i++){
            if(result[i]>=target){
                closest=result[i]
                break
            }
        }
        return closest
    }

    successor(root,target){
        if(!root){
            return null
        }

        let result=this.inOrderTraversal(root)
        let successor=null
        for(let i=0;i<result.length;i++){
            if(result[i]==target){
                if(i+1 < result.length-1){
                    successor=result[i+1]
                }
                break
            }
        }
        return successor
    }

    predecessor(root,target){
        if(!root){
            return null
        }

        let result=this.inOrderTraversal(root)
        let predecessor=null
        for(let i=0;i<result.length;i++){
            if(result[i] == target){
                if(i-1 >= 0){
                    predecessor=result[i-1]
                }
                break
            }
        }
        return predecessor
    }

    removeDuplicates(root){
        let unique=new Set()
        if(!root){
            return null
        }

        function inOrder(root){
            if(root){
                inOrder(root.left)
                unique.add(root.value)
                inOrder(root.right)
            }
        }

        inOrder(root)

        this.root=null

        unique.forEach(value=> this.insert(value))
    }

    findParent(root,value){
        if(!root){
            return null
        }
        
        let parent=null
        function inOrder(root){
            if(root){
                inOrder(root.left)

                if(root.left && root.left.value == value){
                    parent=root
                    return parent
                }

                if(root.right && root.right.value== value){
                    parent=root
                    return parent
                }

                inOrder(root.right)
            }
        }
        inOrder(root)
        return parent
    }

    findChildren(root,target){
        if(!root){
            return null
        }
        else if(root.value == target){
            const children={
                leftChild:root.left ? root.left.value:null,
                rightChild:root.right ? root.right.value:null
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

    findSiblings(root,target){
        if(!root){
            return null
        }

        let parent=this.findParent(root,target)

        if(!parent){
            return null
        }
        else if(parent.left && parent.left.value == target){
            return parent.right.value
        }
        else if(parent.right && parent.right.value == target){
            return parent.left.value
        }
        else{
            return -1
        }
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

    findAncestor(root,target,result=[]){
        if(!root){
            return null
        }

        if(root.value == target){
            return result
        }

        result.push(root.value)

        if(target < root.value){
            return this.findAncestor(root.left,target,result)
        }
        else{
            return this.findAncestor(root.right,target,result)
        }
    }

    findDescendant(root,target,descendant=[]){
        if(!root){
            return null
        }

        if(root.value=== target){
            this.collectDescendant(root,descendant)
            return descendant
        }
        else if(target < root.value){
            return this.findDescendant(root.left,target,descendant)
        }
        else{
            return this.findDescendant(root.right,target,descendant)
        }
    }

    collectDescendant(root,descendant){
        if(root){
            descendant.push(root.value)
            this.collectDescendant(root.left,descendant)
            this.collectDescendant(root.right,descendant)
        }
        return descendant
    }

    findDegree(root,target){
        if(!root){
            return null
        }
        let c=0
        if(root.value == target){
            if(root.left){
                c++
            }

            if(root.right){
                c++
            }
        }
        else if(target < root.value){
            return this.findDegree(root.left,target)
        }
        else{
            return this.findDegree(root.right,target)
        }

        return c
    }

    findDepth(root,target){
        if(!root){
            return null
        }
        let depth=0
        while(root){
            if(target < root.value){
                root=root.left
                depth++
            }
            else if(target > root.value){
                root=root.right
                depth++
            }
            else{
                return depth
            }
        }
        return -1
    }

    findDistance(root,target){
        if(!root){
            return null
        }

        let distance=0

        while(root){
            if(target < root.value){
                root=root.left
                distance++
            }
            else if(target > root.value){
                root=root.right
                distance++
            }
            else{
                return distance
            }
        }

        return -1
    }

    //common node
    findLCA(root,n1,n2){
        if(!root){
            return null
        }

        while(root){
            if(n1 < root.value && n2 < root.value){
                root=root.left
            }
            else if(n1 > root.value && n2 > root.value){
                root=root.right
            }
            else{
                return root
            }
        }
        return -1
    }

//lca to target
    path(root,target){
        if(!root){
            return null
        }
        let path=[]
        while(root){
            path.push(root.value)
            if(target < root.value){
                root=root.left
            }
            else if(target > root.value){
                root=root.right
            }
            else{
                break
            }
        }
        return path
    }

    findDistancBetweenTwoNodes(n1,n2){
        let lca=this.findLCA(this.root,n1,n2)

        let distance1=this.findDistance(lca,n1)
        let distance2=this.findDistance(lca,n2)

        return distance1+distance2
    }

    //slice removes duplicates and reverse is used to construct the path from the target
    findPathBetweenTwoNodes(n1,n2){
        let lca=this.findLCA(this.root,n1,n2)
        if(!lca){
            return []
        }

        let path1=this.path(lca,n1)
        let path2=this.path(lca,n2)

        return [...path1.reverse(),...path2.slice(1)]
    }
}
let b = new bst()
let b1=new bst()
b.insert(10);
b.insert(5);
b.insert(15);
b.insert(3);
b.insert(7);
b.insert(12);
b.insert(18);

// b1.insert(10);
// b1.insert(5);
// b1.insert(100);
// b1.insert(3);
// b1.insert(7);
// b1.insert(12);
// b1.insert(18);
//search works
// console.log(b.search(b.root,20))
// console.log(b.search(b.root,18))

//DFS

// b.preOrder(b.root)
// b.inOrder(b.root)
// b.postOrder(b.root)

//BFS

// b.levelOrder()

//minimum and maximum

// console.log(b.min(b.root))
// console.log(b.max(b.root))

//deletion

// b.levelOrder()

// b.delete(5)
// console.log("After")
// b.levelOrder()

//findPrime

// console.log(b.findPrimes(b.root))

//IsBst

// console.log(b.isbst(b.root))

//isIdentical

// console.log(b.isIdentical(b.root,b1.root))

//height:Root to leaf node.The edges is calculated

// console.log(b.findHeight(b.root))

//inOrder Traversal final result is

// console.log(b.inOrderTraversal(b.root))

// kth largest 

// console.log(b.findKthLargest(b.root,3))

// kth smallest

// console.log(b.findKthSmallest(b.root,2))

//closest value

// console.log(b.closestValue(b.root,5))

//successor:next value

// console.log(b.successor(b.root,5))

//predecessor:Befor value

// console.log(b.predecessor(b.root,5))

//removeDuplicates

// b.levelOrder()
// b.removeDuplicates(b.root)
// console.log("After removing duplicates")
// b.levelOrder()


//finding parent
// let parent=b.findParent(b.root,7)
// console.log(parent?parent.value:null)

//find children

// console.log(b.findChildren(b.root,15))

//find leaf node

// console.log(b.findLeafNode(b.root))

//findAncestor:parent parent

// console.log(b.findAncestor(b.root,7))

//findDescendant

// console.log(b.findDescendant(b.root,5))

//findSiblings

// console.log(b.findSiblings(b.root,18))

//findDegree:No of childrens for a node

// console.log(b.findDegree(b.root,10))

// //findDepth:Edges from top of the root node to 7
// console.log(b.findDepth(b.root,7))

// console.log("find path between 7 to 18",b.findPathBetweenTwoNodes(5,15))

// console.log("find distance between 7 to 18",b.findDistancBetweenTwoNodes(5,15))
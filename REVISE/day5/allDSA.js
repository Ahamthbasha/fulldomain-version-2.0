// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class bst{
//     constructor(){
//         this.root = null
//     }

//     isEmpty(){
//         return this.root === null
//     }

//     insert(value){
//         const node = new Node(value)

//         if(this.root === null){
//             this.root = node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }

//     insertNode(root,node){
//         if(node.value < root.value){
//             if(root.left == null){
//                 root.left = node
//             }else{
//                 return this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right == null){
//                 root.right =node
//             }else{
//                 return this.insertNode(root.right,node)
//             }
//         }
//     }

//     search(root,value){
//         if(!root){
//             return null
//         }
//         else if(root.value === value){
//             return true
//         }
//         else if(value < root.value){
//             return this.search(root.left,value)
//         }
//         else{
//             return this.search(root.right,value)
//         }
//     }

//     preOrder(root){
//         if(root){
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value)
//             this.inOrder(root.right)
//         }
//     }

//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value)
//         }
//     }

//     levelOrder(){
//         let node = this.root
//         let queue = []
//         queue.push(node)

//         while(queue.length){
//             let cur = queue.shift()

//             if(cur){
//                 console.log(cur.value)

//                 if(cur.left){
//                     queue.push(cur.left)
//                 }

//                 if(cur.right){
//                     queue.push(cur.right)
//                 }
//             }
//         }
//     }

//     delete(value){
//         this.root = this.deleteNode(this.root,value)
//     }

//     deleteNode(root,value){
//         if(!root){
//             return null
//         }

//         if(value < root.value){
//             root.left = this.deleteNode(root.left,value)
//         }
//         else if(value > root.value){
//             root.right = this.deleteNode(root.right,value)
//         }
//         else {
//             if(!root.left && !root.right){
//                 return null
//             }

//             if(!root.left){
//                 return root.right
//             }

//             if(!root.right){
//                 return root.left
//             }

//             root.value = this.min(root.right)
//             root.right = this.deleteNode(root.right,root.value)
//         }
//     }

//     isPrime(nums){
//         if(nums < 2){
//             return false
//         }

//         for(let i=2;i<=Math.sqrt(nums);i++){
//             if(nums % i == 0){
//                 return false
//             }
//         }

//         return true
//     }

//     findPrimes(root,result=[]){
//         if(root){
//             this.findPrimes(root.left,result)

//             if(this.isPrime(root.value)){
//                 result.push(root.value)
//             }

//             this.findPrimes(root.right,result)
//         }

//         return result
//     }

//     inOrderTraversal(root,result=[]){
//         if(root){
//             this.inOrderTraversal(root.left,result)
//             result.push(root.value)
//             this.inOrderTraversal(root.right,result)
//         }
//         return result
//     }

//     findKthSmallest(root,k){
//         if(!root){
//             return null
//         }

//         let result = this.inOrderTraversal(root)

//         return result[k-1] || null
//     }

//     findKthLargest(root,k){
//         if(!root){
//             return null
//         }

//         let result = this.inOrderTraversal(root)

//         return result[result.length -k]|| null
//     }

//     findSuccessor(root,target){
//         if(!root){
//             return null
//         }

//         let result = this.inOrderTraversal(root)
//         let successor = null

//         for(let i=0;i<result.length;i++){
//             if(result[i]==target){
//                 if(i+1 < result.length){
//                     successor = result[i+1]
//                     break
//                 }
//             }
//         }

//         return successor
//     }

//     findPredecessor(root,target){
//         if(!root){
//             return null
//         }

//         let result = this.inOrderTraversal(root)
//         let predecessor = null
//         for(let i=0;i<result.length;i++){
//             if(result[i] == target){
//                 if(i-1 >= 0){
//                     predecessor = result[i-1]
//                     break
//                 }
//             }
//         }
//         return predecessor
//     }

//     findClosest(root,target){
//         if(!root){
//             return null
//         }

//         let result = this.inOrderTraversal(root)
//         let closest = null
//         for(let i=0;i<result.length;i++){
//             if(result[i] >= target){
//                 closest = result[i]
//                 break
//             }
//         }

//         return closest
//     }

//     removeDuplicates(root){
//         if(!root){
//             return null
//         }
//         let unique = new Set()
//         function inOrder(root){
//             if(root){
//                 inOrder(root.left)
//                 unique.add(root.value)
//                 inOrder(root.right)
//             }
//         }

//         inOrder(root)

//         this.root = null
        
//         unique.forEach((val)=>{
//             this.insert(val)
//         })
//     }

//     min(root){
//         if(!root){
//             return null
//         }

//         while(root.left){
//             root = root.left
//         }

//         return root.value
//     }

//     max(root){
//         if(!root){
//             return null
//         }

//         while(root.right){
//             root = root.right
//         }

//         return root.value
//     }

//     isIdentical(tree1,tree2){
//         if(!tree1 && !tree2){
//             return true
//         }

//         if(!tree1 || !tree2){
//             return false
//         }

//         return tree1.value === tree2.value && this.isIdentical(tree1.left,tree2.left) && this.isIdentical(tree1.right,tree2.right)
//     }

//     isBst(root,min=-Infinity,max=Infinity){
//         if(!root){
//             return true
//         }

//         if(root.value <= min || root.value >= max){
//             return false
//         }

//         return this.isBst(root.left,min,root.value) && this.isBst(root.right,root.value,max)
//     }

//     findHeight(){
//         let queue = []
//         let node = this.root
//         queue.push(node)
//         let height = 0
//         while(queue.length){
//             let nodeCount = queue.length
//             height++

//             while(nodeCount){
//                 let cur = queue.shift()

//                 if(cur.left){
//                     queue.push(cur.left)
//                 }

//                 if(cur.right){
//                     queue.push(cur.right)
//                 }

//                 nodeCount--
//             }
//         }
//         return height
//     }

//     findParent(root,target){
//         if(!root){
//             return null
//         }

//         let parent = null

//         function inOrder(root){
//             if(root){
//                 inOrder(root.left)

//                 if(root.left && root.left.value == target){
//                     parent = root.value
//                     return
//                 }

//                 if(root.right && root.right.value == target){
//                     parent = root.value
//                     return
//                 }

//                 inOrder(root.right)
//             }
//         }

//         inOrder(root)

//         return parent
//     }

//     findChildren(root,target){
//         if(!root){
//             return null
//         }
//         else if(root.value === target){
//             const children ={
//                 leftChildren:root.left ? root.left.value : null,
//                 rightChildren:root.right ? root.right.value : null
//             }
//             return children
//         }
//         else if(target < root.value){
//             return this.findChildren(root.left,target)
//         }
//         else{
//             return this.findChildren(root.right,target)
//         }
//     }

//     findLeafNode(root,result=[]){
//         if(root){
//             if(!root.left && !root.right){
//                 result.push(root.value)
//             }
//             this.findLeafNode(root.left,result)
//             this.findLeafNode(root.right,result)
//         }
//         return result
//     }

//     findSiblings(root,target){
//         if(!root){
//             return null
//         }

//         let siblings = null

//         function inOrder(root){
//             inOrder(root.left)

//             if(root.left && root.left.value == target){
//                 siblings = root.right
//             }

//             if(root.right && root.right.value == target){
//                 siblings = root.left
//             }

//             inOrder(root.right)
//         }

//         inOrder(root)

//         return siblings
//     }

//     findAncestor(root,target,result=[]){
//         if(!root){
//             return null
//         }

       
//         result.push(root.value)
//         if(root.value == target){
//             return result
//         }
//         else if(target < root.value){
//             return this.findAncestor(root.left,target,result)
//         }
//         else{
//             return this.findAncestor(root.right,target,result)
//         }

//     }

//     findDescendant(root,target){
//         if(!root){
//             return null
//         }

//         if(root.value == target){
//             return this.collectDescendant(root)
//         }
//         else if(target < root.value){
//             return this.findDescendant(root.left,target)
//         }
//         else{
//             return this.findDescendant(root.right,target)
//         }
//     }
    
//     collectDescendant(root,result=[]){
//         if(root){
//             result.push(root.value)
//             this.collectDescendant(root.left,result)
//             this.collectDescendant(root.right,result)
//         }
//         return result
//     }

//     findDegree(root,target){
//         if(!root){
//             return null
//         }

//         let c = 0

//         if(root.value == target){
//             if(root.left){
//                 c++
//             }

//             if(root.right){
//                 c++
//             }
//         }
//         else if(target < root.value){
//             return this.findDegree(root.left,target)
//         }
//         else{
//             return this.findDegree(root.right,target)
//         }

//         return c
//     }

//     findDepth(root,target){
//         if(!root){
//             return null
//         }
//         let depth = 0
//         while(root){
//             if(target < root.value){
//                 root = root.left
//                 depth++
//             }
//             else if(target > root.value){
//                 root = root.right
//                 depth++
//             }
//             else {
//                 return depth
//             }
//         }
//     }

//     findDistance(root,target){
//         if(!root){
//             return null
//         }

//         let distance = 0 
//         while(root){
//             if(target < root.value){
//                 root = root.left
//                 distance++
//             }
//             else if(target > root.value){
//                 root = root.right
//                 distance++
//             }
//             else{
//                return distance
//             }
//         }
//     }

//     LCA(root,n1,n2){
//         if(!root){
//             return null
//         }

//         while(root){
//             if(n1 < root.value && n2 < root.value){
//                 root = root.left
//             }
//             else if(n1 > root.value && n2 > root.value){
//                 root = root.right
//             }
//             else{
//                 return root
//             }
//         }
//     }

//     path(root,target){
//         if(!root){
//             return null
//         }
//         let path = []
//         while(root){
//             path.push(root.value)
//             if(target < root.value){
//                 root = root.left
//             }
//             else if(target > root.value){
//                 root = root.right
//             }
//             else{
//                 return path
//             }
//         }
//     }

//     findPathBetweenTwoNodes(n1,n2){
//         let LCA = this.LCA(this.root,n1,n2)

//         if(!LCA){
//             return []
//         }

//         let path1 = this.path(LCA,n1)
//         let path2 = this.path(LCA,n2)

//         return [...path1.reverse(),...path2.slice(1)]
//     }

//     findDistanceBetweenTwoNodes(n1,n2){
//         let LCA = this.LCA(this.root,n1,n2)

//         if(!LCA){
//             return 0
//         }

//         let distance1 = this.findDistance(LCA,n1)
//         let distance2 = this.findDistance(LCA,n2)

//         return distance1+distance2
//     }


//     onlyOneChildNode(root){

//         if(!root){
//             return null
//         }

//         let count = 0
//         let result =[]
//         function inOrder(root){
//             if(!root){
//                 return
//             }

//                 inOrder(root.left)
    
//                 if((root.left && !root.right) || (root.right && !root.left)){
//                     count++
//                     result.push(root.value)
//                 }
    
//                 inOrder(root.right)
            

//         }

//         inOrder(root)

//         return {count,result}
//     }

//     onlyLeftChildNode(root){
//         if(!root){
//             return null
//         }
//         let leftChildCount = 0
        
//         function inOrder(root){
//             if(root){
//                 inOrder(root.left)
//                 if(root.left && !root.right){
//                     leftChildCount ++ 
//                 }
//                 inOrder(root.right)
//             }
//         }

//         inOrder(root)

//         return leftChildCount
//     }

//     onlyRightChildNode(root){
//         if(!root){
//             return null
//         }
//         let rightChildNode = 0
//         function inOrder(root){
//             if(root){

//                 inOrder(root.right)
//                 if(root.right && !root.left){
//                     rightChildNode++
//                 }
//                 inOrder(root.left)
//             }
//         }

//         inOrder(root)

//         return rightChildNode
//     }

//     noOfNodes(){
//         let queue = []
//         let node = this.root

//         queue.push(node)
//         let nodeCount = 0
//         while(queue.length){
//             let cur = queue.shift()
//             nodeCount++

//             if(cur.left){
//                 queue.push(cur.left)
//             }

//             if(cur.right){
//                 queue.push(cur.right)
//             }
//         }

//         return nodeCount
//     }
// }

// const tree = new bst()

// // Insert nodes
// tree.insert(50)
// tree.insert(30)
// tree.insert(70)
// tree.insert(20)
// tree.insert(40)
// tree.insert(60)
// tree.insert(80)

// // Traversals
// console.log('InOrder:')
// tree.inOrder(tree.root)

// console.log('PreOrder:')
// tree.preOrder(tree.root)

// console.log('PostOrder:')
// tree.postOrder(tree.root)

// console.log('LevelOrder:')
// tree.levelOrder()

// // Search
// console.log('Search 60:', tree.search(tree.root, 60)) // true
// console.log('Search 100:', tree.search(tree.root, 100)) // false

// // Min & Max
// console.log('Min:', tree.min(tree.root)) // 20
// console.log('Max:', tree.max(tree.root)) // 80

// // Kth smallest/largest
// console.log('3rd Smallest:', tree.findKthSmallest(tree.root, 3)) // 40
// console.log('2nd Largest:', tree.findKthLargest(tree.root, 2))   // 70

// // Primes
// console.log('Primes:', tree.findPrimes(tree.root)) // [ 2, 3, 5, 7 ]

// // Successor/Predecessor
// console.log('Successor of 60:', tree.findSuccessor(tree.root, 60)) // 70
// console.log('Predecessor of 60:', tree.findPredecessor(tree.root, 60)) // 50

// // Closest value to 65
// console.log('Closest to 65:', tree.findClosest(tree.root, 65)) // 70

// // Path, LCA, Distance
// console.log('Path to 20:', tree.path(tree.root, 20)) // [50, 30, 20]
// console.log('LCA of 20 and 40:', tree.LCA(tree.root, 20, 40).value) // 30
// console.log('Path Between 20 & 60:', tree.findPathBetweenTwoNodes(20, 60)) // [20, 30, 50, 60]
// console.log('Distance Between 20 & 60:', tree.findDistanceBetweenTwoNodes(20, 60)) // 4

// // Leaf nodes
// console.log('Leaf Nodes:', tree.findLeafNode(tree.root)) // [20, 40, 60, 80]

// // Degree of a node
// console.log('Degree of 30:', tree.findDegree(tree.root, 30)) // 2

// // Depth & Distance
// console.log('Depth of 40:', tree.findDepth(tree.root, 40)) // 2
// console.log('Distance of 60 from root:', tree.findDistance(tree.root, 60)) // 2

// // Parent & Children
// console.log('Parent of 40:', tree.findParent(tree.root, 40)) // 30
// console.log('Children of 70:', tree.findChildren(tree.root, 70)) // { leftChildren: 60, rightChildren: 80 }

// // Ancestor & Descendant
// console.log('Ancestors of 40:', tree.findAncestor(tree.root, 40)) // [50, 30]
// console.log('Descendants of 70:', tree.findDescendant(tree.root, 70)) // [70, 60, 80]

// // Check BST validity
// console.log('Is BST:', tree.isBst(tree.root)) // true

// // Identical trees
// const tree2 = new bst()
// tree2.insert(50)
// tree2.insert(30)
// tree2.insert(70)
// tree2.insert(20)
// tree2.insert(40)
// tree2.insert(60)
// tree2.insert(80)

// console.log('Trees identical:', tree.isIdentical(tree.root, tree2.root)) // true


// let bst2 = new bst(); // Assuming your BST class is named like this
// [50, 30, 70, 20, 60, 80, 65].forEach(val => bst2.insert(val));

// // Total Nodes
// console.log("Total Nodes:", bst2.noOfNodes()); // 7

// // Only One Child Nodes
// console.log("Only One Child Nodes:", bst2.onlyOneChildNode(bst2.root)); 
// // Expected: { count: 2, result: [30, 60] } (30 has only left 20, 60 has only right 65)

// // Only Left Child Nodes
// console.log("Only Left Child Nodes:", bst2.onlyLeftChildNode(bst2.root)); 
// // Expected: 1 (only node 30 has only left child)

// // Only Right Child Nodes
// console.log("Only Right Child Nodes:", bst2.onlyRightChildNode(bst2.root)); 
// // Expected: 1 (only node 60 has only right child)


// class maxHeap{
//     constructor(){
//         this.heap = []
//     }

//     getParentIndex(index){
//         return Math.floor((index-1)/2)
//     }
    
//     getLeftChildIndex(index){
//         return 2 * index + 1
//     }

//     getRightChildIndex(index){
//         return 2 * index + 2
//     }

//     getParent(index){
//         return this.heap[this.getParentIndex(index)]
//     }

//     getLeftChild(index){
//         return this.heap[this.getLeftChildIndex(index)]
//     }

//     getRightChild(index){
//         return this.heap[this.getRightChildIndex(index)]
//     }

//     hasParent(index){
//         return this.getParentIndex(index) >= 0
//     }

//     hasLeftChild(index){
//         return this.getLeftChildIndex(index) < this.heap.length
//     }
    
//     hasRightChild(index){
//         return this.getRightChildIndex(index) < this.heap.length
//     }

//     print(){
//         console.log(this.heap)
//     }

//     swap(index1,index2){
//         let temp = this.heap[index1]
//         this.heap[index1] = this.heap[index2]
//         this.heap[index2] = temp
//     }

//     isEmpty(){
//         return this.heap.length === 0
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'heap is empty'
//         }

//         return this.heap[0]
//     }

//     add(value){
//         this.heap.push(value)
//         this.heapifyUp()
//     }

//     heapifyUp(){
//         let index = this.heap.length-1
//         while(this.hasParent(index) && this.getParent(index) < this.heap[index]){
//             this.swap(this.getParentIndex(index),index)
//             index = this.getParentIndex(index)
//         }
//     }

//     remove(){
//         if(this.isEmpty()){
//             return 'heap is empty'
//         }

//         let val = this.heap[0]

//         this.heap[0] = this.heap[this.heap.length-1]

//         this.heap.pop()

//         this.heapifyDown()

//         return val
//     }

//     heapifyDown(){
//         let index = 0
//         let largest
//         while(this.hasLeftChild(index)){
//             largest = this.getLeftChildIndex(index)

//             if(this.hasRightChild(index) && this.getRightChild(index) > this.getLeftChild(index)){
//                 largest = this.getRightChildIndex(index)
//             }

//             if(this.heap[index] >= this.heap[largest]){
//                 break
//             }
//             else{
//                 this.swap(index,largest)
//             }

//             index = largest
//         }
//     }

//     heapSort(arr){
//         let h = new maxHeap()

//         for(let i=0;i<arr.length;i++){
//             h.add(arr[i])
//         }

//         let sortedArr=[]

//         while(h.heap.length){
//             sortedArr.push(h.remove())
//         }

//         return sortedArr
//     }

//     findKthSmallest(arr,k){
//         if(arr.length < k){
//             return null
//         }

//         const h = new maxHeap()

//         for(let i=0;i<arr.length;i++){
//             h.add(arr[i])
//             if(h.heap.length > k){
//                 h.remove()
//             }
//         }

//         return h.peek()
//     }
// }

// const heap = new maxHeap()

// // Test: Adding elements
// heap.add(10)
// heap.add(20)
// heap.add(5)
// heap.add(100)
// heap.add(1)
// heap.add(40)
// heap.add(30)

// console.log("Heap after insertion:")
// heap.print() // Should show max-heap (root = 100)

// // Test: Peek
// console.log("Peek:", heap.peek()) // Should be 100

// // Test: Remove elements
// console.log("Removed:", heap.remove()) // Should remove 100
// console.log("Heap after removing max:")
// heap.print()

// // Test: Continue removing to test heapifyDown
// console.log("Removed:", heap.remove()) // Should remove next max
// console.log("Heap:")
// heap.print()

// // Test: heapSort
// let unsorted = [3, 9, 2, 1, 4, 5]
// let hsort = new maxHeap()
// let sorted = hsort.heapSort(unsorted)
// console.log("Heap Sort Result:", sorted) // Should be descending order [9, 5, 4, 3, 2, 1]

// // Test: findKthSmallest
// let input = [50, 20, 30, 10, 40, 60, 70]
// let k = 3
// let h = new maxHeap()
// let kthSmallest = h.findKthSmallest(input, k)
// console.log(`${k}rd smallest is:`, kthSmallest) // Should be 30

// // Test: Empty heap peek/remove
// const emptyHeap = new maxHeap()
// console.log("Peek empty:", emptyHeap.peek()) // 'heap is empty'
// console.log("Remove empty:", emptyHeap.remove()) // 'heap is empty'


// class minHeap{
//     constructor(){
//         this.heap = []
//     }

//     getParentIndex(index){
//         return Math.floor((index-1)/2)
//     }

//     getLeftChildIndex(index){
//         return 2 * index + 1
//     }

//     getRightChildIndex(index){
//         return 2 * index + 2
//     }

//     getParent(index){
//         return this.heap[this.getParentIndex(index)]
//     }

//     getLeftChild(index){
//         return this.heap[this.getLeftChildIndex(index)]
//     }

//     getRightChild(index){
//         return this.heap[this.getRightChildIndex(index)]
//     }

//     hasParent(index){
//         return this.getParentIndex(index) >= 0
//     }

//     hasLeftChild(index){
//         return this.getLeftChildIndex(index) < this.heap.length
//     }

//     hasRightChild(index){
//         return this.getRightChildIndex(index) < this.heap.length
//     }

//     swap(index1,index2){
//         let temp = this.heap[index1]
//         this.heap[index1] = this.heap[index2]
//         this.heap[index2] = temp
//     }

//     isEmpty(){
//         return this.heap.length === 0
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'heap is empty'
//         }

//         return this.heap[0]
//     }

//     add(value){
//         this.heap.push(value)
//         this.heapifyUp()
//     }

//     heapifyUp(){
//         let index = this.heap.length-1

//         while(this.hasParent(index) && this.getParent(index) > this.heap[index]){
//             this.swap(this.getParentIndex(index),index)

//             index = this.getParentIndex(index)
//         }
//     }

//     remove(){
//         if(this.isEmpty()){
//             return 'heap is empty'
//         }

//         let val = this.heap[0]

//         this.heap[0] = this.heap[this.heap.length-1]

//         this.heap.pop()

//         this.heapifyDown()

//         return val
//     }

//     heapifyDown(){
//         let index = 0
//         let smallest 
//         while(this.hasLeftChild(index)){
//             smallest =this.getLeftChildIndex(index)

//             if(this.hasRightChild(index) && this.getRightChild(index) < this.getLeftChild(index)){
//                 smallest = this.getRightChildIndex(index)
//             }

//             if(this.heap[index] <= this.heap[smallest]){
//                 break
//             }
//             else{
//                 this.swap(index,smallest)
//             }

//             index = smallest
//         }
//     }

//     heapSort(arr){
//         let h = new minHeap()

//         for(let i=0;i<arr.length;i++){
//             h.add(arr[i])
//         }

//         let sortedArr = []

//         while(h.heap.length){
//             sortedArr.push(h.remove())
//         }

//         return sortedArr
//     }

//     findKthLargest(arr,k){
//         if(arr.length < k){
//             return null
//         }

//         let h = new minHeap()

//         for(let i=0;i<arr.length;i++){
//             h.add(arr[i])

//             if(h.heap.length > k){
//                 h.remove()
//             }
//         }

//         return h.peek()
//     }
// }

// const heap = new minHeap()

// // Test: Insert elements
// heap.add(20)
// heap.add(5)
// heap.add(15)
// heap.add(22)
// heap.add(3)
// heap.add(10)
// heap.add(7)

// console.log("Heap after insertion:")
// console.log(heap.heap)  // Should be a valid min-heap: root is smallest

// // Test: Peek
// console.log("Peek:", heap.peek())  // Should be 3 (min element)

// // Test: Remove root
// console.log("Remove min:", heap.remove())  // Should remove 3
// console.log("Heap after remove:")
// console.log(heap.heap)

// // Test: Remove few more to validate heapifyDown
// heap.remove()
// console.log("Heap after second remove:")
// console.log(heap.heap)

// // Test: heapSort
// const unsorted = [45, 10, 30, 20, 5, 60, 1]
// const hsort = new minHeap()
// const sorted = hsort.heapSort(unsorted)
// console.log("Heap Sort result (Ascending):", sorted) // Should be [1, 5, 10, 20, 30, 45, 60]

// // Test: findKthLargest
// const arr = [10, 30, 5, 40, 20, 60, 50]
// const k = 3
// const kthLargest = new minHeap().findKthLargest(arr, k)
// console.log(`${k}rd largest is:`, kthLargest) // Should return 50

// // Test: peek/remove on empty heap
// const empty = new minHeap()
// console.log("Peek on empty:", empty.peek())       // "heap is empty"
// console.log("Remove on empty:", empty.remove())   // "heap is empty"

// function findnthFrequency(arr,n){
//     let valMap = {}

//     for(let i=0;i<arr.length;i++){
//         let val = arr[i]
//         if(valMap[val]){
//             valMap[val]++
//         }else{
//             valMap[val] = 1
//         }
//     }
//     let result = []
//     for(let key in valMap){
//         if(valMap[key] === n){
//             result.push(Number(key))
//         }
//     }
//     return result
// }

// console.log(findnthFrequency([1,2,3,1,2,3,1,2,3,5],2))

// function heapify(arr,n,i){
//     let largest = i 
//     let left = 2 * i + 1
//     let right = 2 * i + 2

//     if(left < n && arr[left] > arr[largest]){
//         largest = left
//     }

//     if(right < n && arr[right] > arr[largest]){
//         largest = right
//     }

//     if(i!=largest){
//         [arr[i],arr[largest]] = [arr[largest],arr[i]]
//         heapify(arr,n,largest)
//     }
// }

// function heapSort(arr){
//     let n = arr.length

//     for(let i=Math.floor((n/2)-1);i>=0;i--){
//         heapify(arr,n,i)
//     }

//     for(let i=n-1;i>=0;i--){
//         [arr[0],arr[i]] = [arr[i],arr[0]]
//         heapify(arr,i,0)
//     }
// }

// let arr = [12, 11, 13, 5, 6, 7];
// heapSort(arr);
// console.log("Sorted array:", arr);  // [5, 6, 7, 11, 12, 13]


// class Node{
//     constructor(){
//         this.children = {}
//         this.isEndOfWords = false
//     }
// }

// class trie{
//     constructor(){
//         this.root = new Node()
//     }

//     insert(word){
//         let node = this.root

//         for(let i=0;i<word.length;i++){
//             let char = word[i]

//             if(!node.children[char]){
//                 node.children[char] = new Node()
//             }

//             node = node.children[char]
//         }

//         node.isEndOfWords = true
//     }

//     search(word){
//         let node = this.root

//         for(let i=0;i<word.length;i++){
//             let char = word[i]

//             if(!node.children[char]){
//                 return false
//             }

//             node = node.children[char]
//         }

//         return node.isEndOfWords
//     }

//     startsWith(prefix){
//         let node = this.root
        
//         for(let i=0;i<prefix.length;i++){
//             let char = prefix[i]

//             if(!node.children[char]){
//                 return false
//             }

//             node = node.children[char]
//         }

//         return true
//     }

//     autoComplete(word){
//         let node = this.root

//         for(let i=0;i<word.length;i++){
//             let char = word[i]

//             if(!node.children[char]){
//                 return 'no match'
//             }

//             node = node.children[char]
//         }

//         return this.collectWord(node,word)

//     }

//     collectWord(node,word,result=[]){
//         if(node.isEndOfWords){
//             result.push(word)
//         }

//         for(let char in node.children){
//             this.collectWord(node.children[char],word+char,result)
//         }

//         return result
//     }

//     print(){
//         return this.collectWord(this.root,'')
//     }

//     delete(word){
//         let node = this.root
//         let path = []
//         for(let i=0;i<word.length;i++){
//             let char = word[i]

//             if(!node.children[char]){
//                 return 'no found'
//             }
//             path.push([node,char])
//             node = node.children[char]
//         }

//         if(!node.isEndOfWords){
//             return 'it is not found'
//         }

//         node.isEndOfWords = false

//         for(let i=word.length-1;i>=0;i--){
//             let [parentNode,char] = path[i]

//             let childrenNode = parentNode.children[char]

//             if(Object.keys(childrenNode.children).length > 0 || childrenNode.isEndOfWords){
//                 break
//             }

//             delete parentNode.children[char]
//         }

//         return 'word is deleted'
//     }
// }

// const t = new trie();

// t.insert("apple");
// t.insert("app");
// t.insert("apex");
// t.insert("bat");
// t.insert("bath");
// t.insert("batman");

// console.log(t.search("app"));           // true
// console.log(t.search("apple"));         // true
// console.log(t.search("batman"));        // true
// console.log(t.search("batwoman"));      // false
// console.log(t.startsWith("ba"));        // true
// console.log(t.startsWith("cat"));       // false
// console.log(t.autoComplete("ba"));      // ["bat", "bath", "batman"]
// console.log(t.autoComplete("batm"));    // ["batman"]
// console.log(t.autoComplete("z"));       // "no match"
// console.log(t.print());                 // ["app", "apple", "apex", "bat", "bath", "batman"]

// console.log(t.delete("bat"));           // "word deleted"
// console.log(t.search("bat"));           // false
// console.log(t.search("batman"));        // true
// console.log(t.delete("batwoman"));      // "not found"
// console.log(t.delete("ap"));            // "not found"


// class Node{
//     constructor(){
//         this.children = {}
//         this.isEndOfWords = false
//     }
// }

// class suffixTrie{
//     constructor(word){
//         this.root = new Node()
//         this.buildSuffixTrie(word)
//     }

//     buildSuffixTrie(word){
//         for(let i=0;i<word.length;i++){
//             this.insert(word.slice(i))
//         }
//     }

//     insert(word){
//         let node = this.root

//         for(let i=0;i<word.length;i++){
//             let char = word[i]

//             if(!node.children[char]){
//                 node.children[char] = new Node()
//             }

//             node = node.children[char]
//         }

//         node.isEndOfWords = true
//     }

//     search(word){
//         let node = this.root

//         for(let i=0;i<word.length;i++){
//             let char = word[i]

//             if(!node.children[char]){
//                 return false
//             }

//             node = node.children[char]
//         }

//         return true
//     }
// }

// const st = new suffixTrie("banana");

// console.log(st.search("nana"));    // true
// console.log(st.search("ana"));     // true
// console.log(st.search("ban"));     // true
// console.log(st.search("n"));       // true
// console.log(st.search("a"));       // true
// console.log(st.search("anana"));   // true
// console.log(st.search("bana"));    // true
// console.log(st.search("bananas")); // false
// console.log(st.search("nab"));     // false

// class Node{
//     constructor() {
//         this.children = {}
//         this.isEndOfWords = false
//     }
// }

// class trie{
//     constructor(){
//         this.root = new Node()
//     }

//     insert(word){
//         let node = this.root
//         for(let i=0;i<word.length;i++){
//             let char = word[i]

//             if(!node.children[char]){
//                 node.children[char] = new Node()
//             }

//             node = node.children[char]
//         }

//         node.isEndOfWords = true
//     }

//     countWord(){
//         let node =this.root
//         let queue = []
//         queue.push(node)
//         let countWord = 0
//         while(queue.length){
//             let node = queue.shift()

//             if(node.isEndOfWords){
//                 countWord++
//             }

//             for(let char in node.children){
//                 queue.push(node.children[char])
//             }
//         }

//         return countWord
//     }

//     longestPrefix(word){
//         let node = this.root

//         let longestPrefix = ''

//         for(let i=0;i<word.length;i++){
//             let char = word[i]
//             if(!node.children[char]){
//                 break
//             }
//             longestPrefix+=char
//             node = node.children[char]
//         }

//         return longestPrefix
//     }

//     countPrefix(word){
//         let node = this.root

//         for(let i=0;i<word.length;i++){
//             let char = word[i]

//             if(!node.children[char]){
//                 return 0
//             }

//             node = node.children[char]
//         }

//         let queue =[]
//         queue.push(node)
//         let countPrefix = 0
//         while(queue.length){
//             let val = queue.shift()

//             if(val.isEndOfWords){
//                 countPrefix++
//             }

//             for(let char in val.children){
//                 queue.push(val.children[char])
//             }
//         }

//         return countPrefix
//     }
// }

// const t = new trie();
// t.insert("apple");
// t.insert("app");
// t.insert("applet");
// t.insert("banana");
// t.insert("band");
// t.insert("bandana");

// console.log(t.countWord());          // 6
// console.log(t.countPrefix("app"));   // 3 → "app", "apple", "applet"
// console.log(t.countPrefix("ban"));   // 3 → "banana", "band", "bandana"
// console.log(t.countPrefix("bad"));   // 0 → no such prefix
// console.log(t.longestPrefix("appleseed")); // "apple"
// console.log(t.longestPrefix("bandage"));   // "band"
// console.log(t.longestPrefix("car"));       // ""

//graph

// class graph{
//     constructor(){
//         this.adjancyList = {}
//     }

//     addVertex(vertex){
//         if(!this.adjancyList[vertex]){
//             this.adjancyList[vertex] = new Set()
//         }
//     }

//     addEdge(vertex1,vertex2){
//         if(!this.adjancyList[vertex1]){
//             this.addVertex(vertex1)
//         }

//         if(!this.adjancyList[vertex2]){
//             this.addVertex(vertex2)
//         }

//         this.adjancyList[vertex1].add(vertex2)
//         this.adjancyList[vertex2].add(vertex1)
//     }

//     hasEdge(vertex1,vertex2){
//         if(!this.adjancyList[vertex1] && !this.adjancyList[vertex2]){
//             return 'no vertex'
//         }

//         return this.adjancyList[vertex1].has(vertex2) && this.adjancyList[vertex2].has(vertex1)
//     }

//     removeEdge(vertex1,vertex2){
//         if(!this.adjancyList[vertex1] && !this.adjancyList[vertex2]){
//             return 'no vertex'
//         }

//        this.adjancyList[vertex1].delete(vertex2)
//        this.adjancyList[vertex2].delete(vertex1)
//     }

//     print(){
//         for(let vertex in this.adjancyList){
//             console.log(`${vertex} => ${[...this.adjancyList[vertex]]}`)
//         }
//     }

//     removeVertex(vertex){
//         if(!this.adjancyList[vertex]){
//             return 'no vertex found'
//         }

//         for(let adjancyVertex of this.adjancyList[vertex]){
//             this.removeEdge(vertex,adjancyVertex)
//         }

//         delete this.adjancyList[vertex]

//         return 'vertex deleted'
//     }

//     bfs(start){
//         let visitedNode=new Set()
//         visitedNode.add(start)
//         let queue = []
//         queue.push(start)

//         while(queue.length){
//             let vertex = queue.shift()

//             console.log(vertex)

//             this.adjancyList[vertex].forEach((neighbour)=>{
//                 if(!visitedNode.has(neighbour)){
//                     visitedNode.add(neighbour)
//                     queue.push(neighbour)
//                 }
//             })
//         }
//     }

//     dfs(start,visitedNode=new Set()){
//         visitedNode.add(start)
//         console.log(start)

//         this.adjancyList[start].forEach((neighbour)=>{
//             if(!visitedNode.has(neighbour)){
//                 this.dfs(neighbour,visitedNode)
//             }
//         })
//     }

//     bfsCycleDetection(start){
//         let visitedNode = new Set()
//         visitedNode.add(start)
//         let queue = []

//         queue.push({vertex:start,parent:null})

//         while(queue.length){
//             let {vertex,parent} = queue.shift()

//             for(let neighbour of this.adjancyList[vertex]){
//                 if(!visitedNode.has(neighbour)){
//                     visitedNode.add(neighbour)
//                     queue.push({vertex:neighbour,parent:vertex})
//                 }
//                 else if(neighbour != parent){
//                     return "cycle is detected"
//                 }
//             }
//         }

//         return 'cycle is not detected'
//     }

//     dfsCycleDetection(start,visitedNode=new Set(),parent=null){
//         visitedNode.add(start)

//         for(let neighbour of this.adjancyList[start]){
//             if(!visitedNode.has(neighbour)){
//                 this.dfsCycleDetection(neighbour,visitedNode,start)
//                 return true
//             }
//             else if(neighbour != parent){
//                 console.log("cycle is detected")
//                 return true
//             }
//         }

//         return "cycle is not detected"
//     }
// }

// const g = new graph();

// g.addEdge('A', 'B');
// g.addEdge('A', 'C');
// g.addEdge('B', 'D');
// g.addEdge('C', 'D'); // Creates a cycle

// console.log("Print Graph:");
// g.print();

// console.log("Has Edge A-B:", g.hasEdge('A', 'B')); // true
// console.log("Has Edge A-E:", g.hasEdge('A', 'E')); // 'no vertex'

// console.log("BFS from A:");
// g.bfs('A');

// console.log("DFS from A:");
// g.dfs('A');

// console.log("Cycle Detection (BFS):", g.bfsCycleDetection('A')); // cycle is detected
// console.log("Cycle Detection (DFS):", g.dfsCycleDetection('A') ? 'cycle is detected' : 'cycle is not detected');

// console.log("Removing edge B-D");
// g.removeEdge('B', 'D');
// g.print();

// console.log("Removing vertex C");
// g.removeVertex('C');
// g.print();


// function bubbleSort(arr){
//     let swapped

//     do{
//         swapped = false
//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i] > arr[i+1]){
//                 let temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp
//                 swapped = true
//             }
//         }
//     }while(swapped)
//         return arr
// }

// function insertionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let cur =arr[i]
//         let j = i-1

//         while(j>=0 && arr[j] > cur){
//             arr[j+1] = arr[j]
//             j--
//         }

//         arr[j+1] = cur
//     }

//     return arr
// }

// function selectionSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let minElement = i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[minElement] > arr[j]){
//                 minElement = j
//             }
//         }

//         let temp = arr[minElement]
//         arr[minElement] = arr[i]
//         arr[i] = temp
//     }

//     return arr
// }

// function quickSort(arr){
//     if(arr.length < 2){
//         return arr
//     }

//     let pivot =arr[arr.length-1]
//     let leftArr = []
//     let rightArr = []

//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i] < pivot){
//             leftArr.push(arr[i])
//         }else{
//             rightArr.push(arr[i])
//         }
//     }

//     return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
// }

// function mergeSort(arr){
//     if(arr.length < 2){
//         return arr
//     }

//     let mid = Math.floor((arr.length)/2)
//     let leftArr = arr.slice(0,mid)
//     let rightArr = arr.slice(mid)

//     return merge(mergeSort(leftArr),mergeSort(rightArr))
// }

// function merge(leftArr,rightArr){
//     let sortedArr = []
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0] < rightArr[0]){
//             sortedArr.push(leftArr.shift())
//         }else{
//             sortedArr.push(rightArr.shift())
//         }
//     }

//     return sortedArr.concat(leftArr,rightArr)
// }

// const testCases = [
//     [],
//     [1],
//     [5, 3, 8, 4, 2],
//     [10, 9, 8, 7, 6],
//     [1, 2, 3, 4, 5],
//     [4, 5, 4, 3, 3, 2],
//     [100, -5, 0, 20, -1, 50],
// ];

// const algorithms = [bubbleSort, insertionSort, selectionSort, quickSort, mergeSort];

// algorithms.forEach((sortFn) => {
//     console.log(`\n--- Testing ${sortFn.name} ---`);
//     testCases.forEach((test, i) => {
//         const input = [...test];  // copy to avoid mutation
//         const result = sortFn([...input]);  // ensure original test case is preserved
//         console.log(`Test ${i + 1}: Input: [${input}] → Output: [${result}]`);
//     });
// });


// class stack{
//     constructor(){
//         this.item = []
//     }

//     isEmpty(){
//         return this.item.length == 0
//     }

//     getSize(){
//         return this.item.length
//     }

//     push(value){
//         this.item.push(value)
//     }

//     pop(){
//         if(this.isEmpty()){
//             return 'empty'
//         }

//         return this.item.pop()
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'empty'
//         }

//         return this.item[this.item.length-1]
//     }

//     reverseString(str){
//         const s = new stack()

//         for(let i=0;i<str.length;i++){
//             s.push(str[i])
//         }

//         let reverseStr=''

//         while(s.item.length){
//             reverseStr+=s.pop()
//         }

//         return reverseStr
//     }

//     reverseArr(arr){
//         const s = new stack()

//         for(let i=0;i<arr.length;i++){
//             s.push(arr[i])
//         }

//         let reversedArr = []

//         while(s.item.length){
//             reversedArr.push(s.pop())
//         }

//         return reversedArr
//     }

//     print(){
//         console.log(this.item)
//     }
// }

// const s = new stack();

// // Test push and print
// s.push(10);
// s.push(20);
// s.push(30);
// console.log("Stack after push:");
// s.print();  // [10, 20, 30]

// // Test peek
// console.log("Peek:", s.peek());  // 30

// // Test pop
// console.log("Pop:", s.pop());    // 30
// console.log("Peek after pop:", s.peek()); // 20

// // Test getSize and isEmpty
// console.log("Size:", s.getSize());  // 2
// console.log("Is Empty:", s.isEmpty()); // false

// // Empty stack completely
// s.pop();
// s.pop();
// console.log("Pop on empty stack:", s.pop()); // 'empty'
// console.log("Peek on empty stack:", s.peek()); // 'empty'

// // Test reverseString
// console.log("Reverse of 'hello':", s.reverseString("hello")); // "olleh"

// // Test reverseArr
// console.log("Reverse of [1, 2, 3, 4]:", s.reverseArr([1, 2, 3, 4])); // [4, 3, 2, 1]


// class stack{
//     constructor() {
//         this.item = {}
//         this.size= 0
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     getSize(){
//         return this.size
//     }

//     push(value){
//         this.item[this.size] = value
//         this.size++
//     }

//     pop(){
//         if(this.isEmpty()){
//             return 'empty'
//         }

//         let val = this.item[this.size-1]
//         delete this.item[this.size-1]
//         this.size--
//         return val
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'empty'
//         }

//         return this.item[this.size-1]
//     }

//     print(){
//         console.log(this.item)
//     }
// }

// const s = new stack();

// console.log("Initial isEmpty:", s.isEmpty());  // true
// console.log("Initial getSize:", s.getSize());  // 0

// s.push(5);
// s.push(10);
// s.push(15);

// console.log("After pushes:");
// s.print();  // {0: 5, 1: 10, 2: 15}

// console.log("Peek:", s.peek());  // 15
// console.log("Size:", s.getSize()); // 3

// console.log("Pop:", s.pop());  // 15
// console.log("Peek after pop:", s.peek());  // 10
// console.log("Size after pop:", s.getSize());  // 2

// s.pop();
// s.pop();
// console.log("Pop on empty stack:", s.pop());  // 'empty'
// console.log("Peek on empty stack:", s.peek());  // 'empty'

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class stack{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size  === 0
//     }

//     getSize(){
//         return this.size
//     }

//     push(value){
//         const node = new Node(value)

//         if(this.isEmpty()){
//             this.head = node
//             this.size++
//         }
//         else{
//             node.next = this.head

//             this.head = node
//             this.size++
//         }
//     }

//     pop(){
//         if(this.isEmpty()){
//             return 'stack is empty'
//         }
//         else if(this.size === 1){
//             this.head = null
//             this.size--
//         }
//         else{
//            let val = this.head.value

//            this.head = this.head.next

//            this.size--

//            return val
//         }
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'stack is empty'
//         }

//         return this.head.value
//     }

//     print(){
//         if(this.isEmpty()){
//             return 'stack is empty'
//         }
//         else{
//             let temp = this.head
//             let list = ''

//             while(temp){
//                 list+=temp.value+'->'
//                 temp=temp.next
//             }

//             list+='null'

//             console.log(list)
//         }
//     }
// }

// const s = new stack();

// console.log(s.isEmpty());        // true
// s.push(10);
// s.push(20);
// s.push(30);
// s.print();                       // 30 -> 20 -> 10 -> null

// console.log(s.peek());           // 30
// console.log(s.pop());            // 30
// console.log(s.pop());            // 20
// console.log(s.getSize());        // 1
// s.print();                       // 10 -> null

// console.log(s.pop());            // 10
// console.log(s.pop());            // 'stack is empty'
// s.print();                       // 'stack is empty'

// class queue{
//     constructor(){
//         this.item  = []
//     }

//     isEmpty(){
//         return this.item.length === 0
//     }

//     getSize(){
//         return this.item.length
//     }

//     enqueue(value){
//         this.item.push(value)
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return 'empty'
//         }

//         return this.item.shift()
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'empty'
//         }

//         return this.item[0]
//     }
// }

// const q = new queue();

// console.log(q.isEmpty());       // true
// console.log(q.getSize());       // 0
// console.log(q.dequeue());       // 'empty'
// console.log(q.peek());          // 'empty'

// q.enqueue(10);
// q.enqueue(20);
// q.enqueue(30);

// console.log(q.isEmpty());       // false
// console.log(q.getSize());       // 3
// console.log(q.peek());          // 10

// console.log(q.dequeue());       // 10
// console.log(q.dequeue());       // 20
// console.log(q.getSize());       // 1
// console.log(q.peek());          // 30

// console.log(q.dequeue());       // 30
// console.log(q.dequeue());       // 'empty'
// console.log(q.isEmpty());       // true


// class queue{

//     constructor(){
//         this.item ={}
//         this.head = 0
//         this.tail = 0
//     }

//     isEmpty(){
//         return this.tail - this.head === 0
//     }

//     getSize(){
//         return this.tail - this.head
//     }

//     enqueue(value){
//         this.item[this.tail] = value
//         this.tail++
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return 'queue is empty'
//         }

//         let val = this.item[this.head]
//         delete this.item[this.head]
//         this.head++
//         return val
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'queue is empty'
//         }

//         return this.item[this.head]
//     }
// }

// const q = new queue();

// console.log(q.isEmpty());       // true
// console.log(q.getSize());       // 0
// console.log(q.dequeue());       // 'queue is empty'
// console.log(q.peek());          // 'queue is empty'

// q.enqueue(5);
// q.enqueue(10);
// q.enqueue(15);

// console.log(q.isEmpty());       // false
// console.log(q.getSize());       // 3
// console.log(q.peek());          // 5

// console.log(q.dequeue());       // 5
// console.log(q.peek());          // 10
// console.log(q.dequeue());       // 10
// console.log(q.dequeue());       // 15
// console.log(q.dequeue());       // 'queue is empty'
// console.log(q.isEmpty());       // true


// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class queue{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     getSize(){
//         return this.size
//     }

//     enqueue(value){
//         const node = new Node(value)

//         if(this.isEmpty()){
//             this.head = node
//             this.size++
//         }else{
//             let temp = this.head

//             while(temp.next){
//                 temp = temp.next
//             }

//             temp.next = node
//             node.next = null

//             this.size++
//         }
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return 'queue is empty'
//         }else if(this.size === 1){
//             const val = this.head.value
//             this.head = null
//             this.size--
//             return val
//         }
//         else{
//             const val = this.head.value
//             this.head = this.head.next
//             this.size--
//             return val
//         }
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'queue is empty'
//         }

//         return this.head.value
//     }
// }

// const q = new queue();

// console.log(q.isEmpty());   // true
// console.log(q.getSize());   // 0
// console.log(q.dequeue());   // 'queue is empty'
// console.log(q.peek());      // 'queue is empty'

// q.enqueue(10);
// q.enqueue(20);
// q.enqueue(30);

// console.log(q.peek());      // 10
// console.log(q.getSize());   // 3
// console.log(q.dequeue());   // 10
// console.log(q.peek());      // 20
// console.log(q.dequeue());   // 20
// console.log(q.dequeue());   // 30
// console.log(q.dequeue());   // 'queue is empty'
// console.log(q.getSize());   // 0
// console.log(q.isEmpty());   // true

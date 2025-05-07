// //tree

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

//         if(this.isEmpty()){
//             this.root = node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }

//     insertNode(root,node){
//         if(node.value < root.value){
//             if(root.left == null){
//                 root.left = node
//             }
//             else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right == null){
//                 root.right = node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }

//     search(root,value){
//         if(!root){
//             return null
//         }

//         if(root.value == value){
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
//             console.log(root.value)
//             this.postOrder(root.right)
//         }
//     }

//     levelOrder(){
//         let queue =[]
//         let node = this.root

//         queue.push(node)

//         while(queue.length){
//             let cur = queue.shift()

//             console.log(cur.value)

//             if(cur.left){
//                 queue.push(cur.left)
//             }

//             if(cur.right){
//                 queue.push(cur.right)
//             }
//         }
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

//     delete(value){
//         this.root = this.deleteNode(this.root,value)
//     }

//     deleteNode(root,value){
//         if(!root){
//             return null
//         }
//         else if(value < root.value){
//             root.left = this.deleteNode(root.left,value)
//         }
//         else if(value > root.value){
//             root.right = this.deleteNode(root.right,value)
//         }
//         else{
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
//         return root
//     }

//     isPrime(num){
//         if(num < 2){
//             return false
//         }

//         for(let i=2;i<=Math.sqrt(num);i++){
//             if(num % i === 0){
//                 return false
//             }
//         }

//         return true
//     }

//     findPrime(root,result=[]){
//         if(root){
//             this.findPrime(root.left,result)
            
//             if(this.isPrime(root.value)){
//                 result.push(root.value)
//             }

//             this.findPrime(root.right,result)
//         }

//         return result
//     }

//     isBST(root,min=-Infinity,max=Infinity){
//         if(!root){
//             return true
//         }

//         if(root.value <= min || root.value >= max){
//             return false
//         }

//         return this.isBST(root.left,min,root.value) && this.isBST(root.right,root.value,max)
//     }

//     isIdentical(tree1,tree2){
//         if(!tree1 && !tree2){
//             return true
//         }

//         if(!tree1 || !tree2){
//             return false
//         }

//         return (tree1.value === tree2.value) && this.isIdentical(tree1.left,tree2.left) && this.isIdentical(tree1.right,tree2.right)
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
//         let result = this.inOrderTraversal(root)

//         return result[k-1] || null
//     }

//     findKthLargest(root,k){
//         let result = this.inOrderTraversal(root)

//         return result[result.length-k] || null
//     }

//     closestValue(root,target){
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
    
//     findSuccessor(root,target){
//         let result = this.inOrderTraversal(root)

//         let successor = null

//         for(let i=0;i<result.length;i++){
//             if(result[i] == target){
//                 if(i+1 < result.length){
//                     successor = result[i+1]
//                     break
//                 }
//             }
//         }

//         return successor
//     }

//     findPredecessor(root,target){
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

//     removeDuplicates(root){
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

//         unique.forEach((value)=>{
//             this.insert(value)
//         })
//     }

//     findHeight(root){
//         let queue = []

//         queue.push(root)

//         let height = 0
//         while(queue.length){
//             let nodeCount = queue.length
//             height ++

//             while(nodeCount){
//                 let cur = queue.shift()

//                 if(cur){
//                     queue.push(cur.left)
//                 }

//                 if(cur){
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
//             inOrder(root.left)

//             if(root.left && root.left.value == target){
//                 parent = root
//                 return
//             }

//             if(root.right && root.right.value == target){
//                 parent = root
//                 return
//             }

//             inOrder(root.right)
//         }

//         inOrder(root)

//         return parent
//     }

//     findChildren(root,target){
//         if(!root){
//             return null
//         }
//         else if(root.value == target){
//             const children ={
//                 leftChild: root.left ? root.left.value : null,
//                 rightChild: root.right ? root.right.value : null
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

//     findSibling(root,target){
//         if(!root){
//             return null
//         }

//         let sibling = null

//         function inOrder(root){
//             inOrder(root.left)

//             if(root.left && root.left.value == target){
//                 sibling = root.right
//                 return
//             }

//             if(root.right && root.right.value == target){
//                 sibling = root.left
//                 return
//             }

//             inOrder(root.right)
//         }

//         inOrder(root)

//         return sibling
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

//     findAncestor(root,target){
//         if(!root){
//             return null
//         }
//         let result = []
//         result.push(root.value)
//         if(root.value == target){
//             return result
//         }
//         else if(target < root.value){
//             return this.findAncestor(root.left,target)
//         }
//         else{
//             return this.findAncestor(root.right,target)
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
//         let degree = 0
//         if(root.value == target){
//             if(root.left){
//                 degree++
//             }

//             if(root.right){
//                 degree++
//             }

//             return degree
//         }
//         else if(target < root.value){
//             return this.findDegree(root.left,target)
//         }
//         else{
//             return this.findDegree(root.right,target)
//         }
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
//             else{
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
//                 return distance
//             }
//         }
//     }

//     findLCA(root,n1,n2){
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

//     findPath(root,target){
//         if(!root){
//             return null
//         }

//         let result = []

//         while(root){
//             result.push(root.value)

//             if(target < root.value){
//                 root = root.left
//             }
//             else if(target > root.value){
//                 root = root.right
//             }
//             else{
//                 break
//             }
//         }

//         return result
//     }

//     findPathBetweenTwoNodes(n1,n2){
//         let LCA = this.findLCA(this.root,n1,n2)

//         if(!LCA){
//             return null
//         }

//         let path1 = this.findPath(LCA,n1)
//         let path2 = this.findPath(LCA,n2)

//         return [...path1.reverse(),...path2.slice(1)]
//     }

//     findDistanceBetweenTwoNodes(n1,n2){
//         let LCA = this.findLCA(this.root,n1,n2)

//         if(!LCA){
//             return null
//         }

//         let distance1 = this.findDistance(LCA,n1)
//         let distance2 = this.findDistance(LCA,n2)

//         return distance1 + distance2
//     }

//     totalNoOfNodes(root){
//         let queue = []
//         queue.push(root)

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

//     countOneChildNode(root){
//         if(!root){
//             return null
//         }

//         let nodeCount = 0
//         let result =[]

//         function preOrder(root){
//             if(root){
//                 if((root.right && !root.left) || (root.left && !root.right)){
//                     nodeCount++
//                     result.push(root.value)
//                 }

//                 preOrder(root.left)
//                 preOrder(root.right)
//             }
//         }

//         preOrder(root)

//         return {nodeCount,result}
//     }

//     countLeftChild(root){
//         if(!root){
//             return null
//         }
//         let leftNode = 0
//         function preOrder(root){
//             if(root){
//                 if(root.left && !root.right){
//                     leftNode++
//                 }

//                 preOrder(root.left)
//                 preOrder(root.right)
//             }
//         }

//         preOrder(root)

//         return leftNode
//     }

//     countRightChild(root){
//         if(!root){
//             return null
//         }

//         let countRightChild = 0

//         function preOrder(root){
//             if(root){
//                 if(root.right && !root.left){
//                     countRightChild++
//                 }

//                 preOrder(root.left)
//                 preOrder(root.right)
//             }
//         }

//         preOrder(root)

//         return countRightChild
//     }
// }

// const tree = new bst();
// tree.insert(50);
// tree.insert(30);
// tree.insert(70);
// tree.insert(20);
// tree.insert(40);
// tree.insert(60);
// tree.insert(80);
// tree.inOrder(tree.root); // Expected: 20 30 40 50 60 70 80

// console.log(tree.search(tree.root, 40)); // true
// console.log(tree.search(tree.root, 100)); // false

// console.log(tree.min(tree.root)); // 20
// console.log(tree.max(tree.root)); // 80


// // tree.delete(20); // delete leaf
// // tree.delete(30); // delete node with one child
// // tree.delete(70); // delete node with two children
// // tree.inOrder(tree.root); // Expected: 40 50 60 80


// // tree.preOrder(tree.root);    // Expected: 50 40 60 80
// // tree.postOrder(tree.root);   // Expected: 40 60 80 50
// // tree.levelOrder();           // Expected: [50], [40, 60], [80]


// // Try inserting some prime numbers
// tree.insert(41);
// tree.insert(67);
// console.log(tree.findPrime(tree.root)); // [41, 67]

// console.log(tree.findKthSmallest(tree.root, 3)); // e.g., 50
// console.log(tree.findKthLargest(tree.root, 2)); // e.g., 67

// console.log(tree.closestValue(tree.root, 66)); // Should return 67 (or 60, depending on what's inserted)

// console.log(tree.findSuccessor(tree.root, 60)); // e.g., 67 or 80
// console.log(tree.findPredecessor(tree.root, 60)); // e.g., 50 or 41

// console.log(tree.findHeight(tree.root)); // e.g., 2 or 3

// console.log(tree.findLeafNode(tree.root)); // e.g., [40, 67, 80]

// console.log(tree.findAncestor(tree.root, 80)); // [50]
// console.log(tree.findDescendant(tree.root, 50)); // all children under 50

// console.log(tree.findDegree(tree.root, 50)); // 2 (left and right children)

// console.log(tree.findDepth(tree.root, 40)); // e.g., 2
// console.log(tree.findDistance(tree.root, 80)); // e.g., 2 or 3

// console.log(tree.findPathBetweenTwoNodes(40, 80)); // [40, 50, 80]

// console.log(tree.findDistanceBetweenTwoNodes(40, 80)); // e.g., 2

// console.log(tree.totalNoOfNodes(tree.root)); // e.g., 7
// console.log(tree.countOneChildNode(tree.root)); // depends on tree structure

// console.log(tree.countLeftChild(tree.root)); // number of nodes with only left child
// console.log(tree.countRightChild(tree.root)); // number with only right child

// console.log(tree.isBST(tree.root)); // true

// const t2 = new bst();
// t2.insert(50);
// t2.insert(40);
// t2.insert(80);
// console.log(tree.isIdentical(tree.root, t2.root)); // false


//heap

// class maxHeap{
//     constructor(){
//         this.heap = []
//     }

//     getParentIndex(index){
//         return (Math.floor((index-1)/2))
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

//     isEmpty(){
//         return this.heap.length === 0
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'heap is empty'
//         }
//         return this.heap[0]
//     }

//     swap(index1,index2){
//         let temp = this.heap[index1]
//         this.heap[index1] = this.heap[index2]
//         this.heap[index2] = temp
//     }

//     add(value){
//         this.heap.push(value)
//         this.heapifyUp()
//     }

//     heapifyUp(){
//         let index = this.heap.length - 1

//         while(this.hasParent(index) && this.getParent(index) < this.heap[index]){
//             this.swap(this.getParentIndex(index),index)
//             index = this.getParentIndex(index)
//         }
//     }

//     remove(){
//         if(this.isEmpty()){
//             return 'heap is empty'
//         }

//         let value = this.heap[0]

//         this.heap[0] = this.heap[this.heap.length-1]

//         this.heap.pop()

//         this.heapifyDown()

//         return value
//     }

//     heapifyDown(){
//         let index = 0
//         let largest 

//         while(this.hasLeftChild(index)){
//             largest = this.getLeftChildIndex(index)

//             if(this.hasRightChild(index) && this.getRightChild(index)> this.getLeftChild(index)){
//                 largest = this.getRightChildIndex(index)
//             }

//             if(this.heap[index] >= this.heap[largest]){
//                 break
//             }else{
//                 this.swap(index,largest)
//                 index = largest
//             }
//         }
//     }

//     heapSort(arr){
//         let h = new maxHeap()

//         for(let i=0;i<arr.length;i++){
//             h.add(arr[i])
//         }

//         let sortedArr = []

//         while(h.heap.length){
//             sortedArr.push(h.remove())
//         }

//         return sortedArr
//     }

//     findKthSmallest(arr,k){
//         if(arr.length < k){
//             return 'k is invalid'
//         }

//         let h = new maxHeap()

//         for(let i=0;i<arr.length;i++){
//             h.add(arr[i])

//             if(h.heap.length > k){
//                 h.remove()
//             }
//         }

//         return h.heap[0]
//     }
// }



// const heap = new maxHeap();

// // Test 1: Basic insert and peek
// heap.add(10);
// heap.add(20);
// heap.add(5);
// console.log(heap.peek()); // Expected: 20

// // Test 2: Remove max
// console.log(heap.remove()); // Expected: 20
// console.log(heap.peek());   // Expected: 10

// // Test 3: Heap sort
// const arr = [3, 1, 5, 2, 4];
// const sorted = heap.heapSort(arr);
// console.log(sorted); // Expected: [5, 4, 3, 2, 1]

// // Test 4: K-th smallest
// const arr2 = [7, 10, 4, 3, 20, 15];
// console.log(heap.findKthSmallest(arr2, 3)); // Expected: 7 (3rd smallest)

// // Test 5: Invalid k
// console.log(heap.findKthSmallest(arr2, 10)); // Expected: 'k is invalid'

// // Test 6: Edge case with empty heap
// const emptyHeap = new maxHeap();
// console.log(emptyHeap.remove()); // Expected: 'heap is empty'
// console.log(emptyHeap.peek());   // Expected: 'heap is empty'


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

//     isEmpty(){
//         return this.heap.length === 0
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'heap is empty'
//         }

//         return this.heap[0]
//     }

//     print(){
//         console.log(this.heap)
//     }

//     swap(index1,index2){
//         let temp = this.heap[index1]
//         this.heap[index1] = this.heap[index2]
//         this.heap[index2] = temp
//     }

//     add(value){
//         this.heap.push(value)
//         this.heapifyUp()
//     }

//     heapifyUp(){
//         let index = this.heap.length - 1

//         while(this.hasParent(index) && this.getParent(index) > this.heap[index]){
//             this.swap(this.getParentIndex(index),index)
            
//             index = this.getParentIndex(index)
//         }
//     }

//     remove(){
//         if(this.isEmpty()){
//             return 'nothing to remove'
//         }

//         let val = this.heap[0]
//         this.heap[0] = this.heap[this.heap.length-1]
//         this.heap.pop()
//         this.heapifyDown()
//         return val
//     }

//     heapifyDown(){
//         let index =0 
//         let smallest

//         while(this.hasLeftChild(index)){
//             smallest = this.getLeftChildIndex(index)

//             if(this.hasRightChild(index) && this.getRightChild(index) < this.getLeftChild(index)){
//                 smallest = this.getRightChildIndex(index)
//             }

//             if(this.heap[index] <= this.heap[smallest]){
//                 break
//             }else{
//                 this.swap(index,smallest)
//                 index = smallest
//             }
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
//             return 'k is invalid'
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

// const heap = new minHeap();

// // Test 1: Insert and Peek
// heap.add(10);
// heap.add(5);
// heap.add(20);
// console.log(heap.peek()); // Expected: 5

// // Test 2: Remove
// console.log(heap.remove()); // Expected: 5
// console.log(heap.peek());   // Expected: 10

// // Test 3: Heap Sort
// const arr = [7, 2, 9, 4, 1];
// const sorted = heap.heapSort(arr);
// console.log(sorted); // Expected: [1, 2, 4, 7, 9]

// // Test 4: Find Kth Largest
// const arr2 = [3, 2, 1, 5, 6, 4];
// console.log(heap.findKthLargest(arr2, 2)); // Expected: 5 (2nd largest)

// // Test 5: Invalid k
// console.log(heap.findKthLargest(arr2, 10)); // Expected: 'k is invalid'

// // Test 6: Edge Case - Empty Heap
// const emptyHeap = new minHeap();
// console.log(emptyHeap.remove()); // Expected: 'nothing to remove'
// console.log(emptyHeap.peek());   // Expected: 'heap is empty'

// // Test 7: Print heap (visual test)
// heap.print(); // Should show internal array of min-heap


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

//     if(i != largest){
//         [arr[i],arr[largest]] = [arr[largest],arr[i]]
//         heapify(arr,n,largest)
//     }
// }


// function heapSort(arr){
//     let n = arr.length

//     for(let i=Math.floor((n-1)/2);i>=0;i--){
//         heapify(arr,n,i)
//     }

//     for(let i=n-1;i>=0;i--){
//         [arr[0],arr[i]] = [arr[i],arr[0]]
//         heapify(arr,i,0)
//     }

//     return arr
// }

// function testHeapSort() {
//     console.log(heapSort([4, 10, 3, 5, 1]));       // ➤ [1, 3, 4, 5, 10]
//     console.log(heapSort([1]));                    // ➤ [1]
//     console.log(heapSort([]));                     // ➤ []
//     console.log(heapSort([9, 8, 7, 6, 5]));         // ➤ [5, 6, 7, 8, 9]
//     console.log(heapSort([3, 3, 3]));              // ➤ [3, 3, 3]
//     console.log(heapSort([10, -1, 2, -5, 7]));      // ➤ [-5, -1, 2, 7, 10]
// }
// testHeapSort();

// class Node{
//     constructor(){
//         this.children ={}
//         this.isEndOfWord = false
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
//         node.isEndOfWord = true
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

//         return node.isEndOfWord
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
//                 return []
//             }

//             node = node.children[char]
//         }

//         let list = []

//         return this.CollectWord(node,word,list)
//     }

//     CollectWord(root,word,list=[]){
//         if(root.isEndOfWord){
//             list.push(word)
//         }

//         for(let char in root.children){
//             this.CollectWord(root.children[char],word+char,list)
//         }

//         return list
//     }

//     print(){
//         return this.CollectWord(this.root,'')
//     }

//     delete(word){
//         let node = this.root
//         let path = []

//         for(let i=0;i<word.length;i++){
//             let char = word[i]

//             if(!node.children[char]){
//                 return 'no match'
//             }

//             path.push([node,char])
//             node = node.children[char]
//         }

//         if(!node.isEndOfWord){
//             return 'it is not ending word'
//         }

//         node.isEndOfWord = false

//         for(let i=word.length-1;i>=0;i--){
//             let [parentNode,char] = path[i]

//             let childrenNode = parentNode.children[char]

//             if(Object.keys(childrenNode.children).length > 0 || childrenNode.isEndOfWord){
//                 break
//             }

//             delete parentNode.children[char]
//         }

//         return 'word is deleted'
//     }
// }

// function testTrie() {
//     const t = new trie();

//     t.insert("cat");
//     t.insert("car");
//     t.insert("care");
//     t.insert("cart");
//     t.insert("dog");
//     t.insert("dot");

//     console.log(t.search("cat"));       // true
//     console.log(t.search("cap"));       // false
//     console.log(t.startsWith("ca"));    // true
//     console.log(t.startsWith("do"));    // true
//     console.log(t.startsWith("du"));    // false

//     console.log(t.autoComplete("ca"));  // [ 'cat', 'car', 'care', 'cart' ]
//     console.log(t.autoComplete("do"));  // [ 'dog', 'dot' ]
//     console.log(t.autoComplete("x"));   // []

//     console.log(t.print());             // All words in trie

//     console.log(t.delete("car"));       // word is deleted
//     console.log(t.search("car"));       // false
//     console.log(t.search("care"));      // true
//     console.log(t.autoComplete("ca"));  // [ 'cat', 'care', 'cart' ]

//     console.log(t.delete("car"));       // no match
//     console.log(t.delete("care"));      // word is deleted
//     console.log(t.print());             // remaining words
// }

// testTrie();

// class Node{
//     constructor(){
//         this.children ={}
//         this.isEndOfWord = false
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

//         node.isEndOfWord = true
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

// function testSuffixTrie() {
//     const sTrie = new suffixTrie("banana");

//     console.log(sTrie.search("banana")); // true
//     console.log(sTrie.search("anana"));  // true
//     console.log(sTrie.search("nana"));   // true
//     console.log(sTrie.search("ana"));    // true
//     console.log(sTrie.search("na"));     // true
//     console.log(sTrie.search("a"));      // true

//     console.log(sTrie.search("bananaa")); // false
//     console.log(sTrie.search("band"));    // false
//     console.log(sTrie.search("nab"));     // false
//     console.log(sTrie.search("an"));      // true
// }

// testSuffixTrie();


// class Node{
//     constructor(){
//         this.children ={}
//         this.isEndOfWord = false
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

//         node.isEndOfWord = true
//     }

//     countWord(){
//         let node = this.root
//         let queue = []

//         queue.push(node)

//         let word = 0

//         while(queue.length){
//             let root = queue.shift()

//             if(root.isEndOfWord){
//                 word++
//             }

//             for(let char in root.children){
//                 queue.push(root.children[char])
//             }
//         }

//         return word
//     }

//     countPrefix(word){
//         let node = this.root

//         for(let i=0;i<word.length;i++){
//             let char = word[i]
//             if(!node.children[char]){
//                 return ' no matching word '
//             }
//             node = node.children[char]
//         }

//         let countPrefix = 0

//         let queue = []

//         queue.push(node)

//         while(queue.length){
//             let root = queue.shift()

//             if(root.isEndOfWord){
//                 countPrefix++
//             }

//             for(let char in root.children){
//                 queue.push(root.children[char])
//             }
//         }

//         return countPrefix
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
// }

// function testTrie() {
//     const t = new trie();

//     t.insert("apple");
//     t.insert("app");
//     t.insert("application");
//     t.insert("bat");
//     t.insert("batch");
//     t.insert("banana");

//     console.log("Total words in trie:", t.countWord()); // ✅ 6

//     console.log("Count of words starting with 'app':", t.countPrefix("app")); // ✅ 3
//     console.log("Count of words starting with 'ba':", t.countPrefix("ba"));   // ✅ 3
//     console.log("Count of words starting with 'bat':", t.countPrefix("bat")); // ✅ 2
//     console.log("Count of words starting with 'cat':", t.countPrefix("cat")); // ✅ ' no matching word '

//     console.log("Longest prefix of 'applepie':", t.longestPrefix("applepie"));   // ✅ 'apple'
//     console.log("Longest prefix of 'applicationform':", t.longestPrefix("applicationform")); // ✅ 'application'
//     console.log("Longest prefix of 'batman':", t.longestPrefix("batman"));       // ✅ 'bat'
//     console.log("Longest prefix of 'caterpillar':", t.longestPrefix("caterpillar")); // ✅ ''
// }

// testTrie();

// class graph{
//     constructor(){
//         this.adjacencyList = {}
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = new Set()
//         }
//     }

//     addEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1]){
//             this.addVertex(vertex1)
//         }

//         if(!this.adjacencyList[vertex2]){
//             this.addVertex(vertex2)
//         }

//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex1)
//     }

//     hasEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1] && !this.adjacencyList[vertex2]){
//             return 'vertex is not there'
//         }

//         return this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
//     }

//     removeEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1] && !this.adjacencyList[vertex2]){
//             return ' vertex is not there' 
//         }

//         this.adjacencyList[vertex1].delete(vertex2)
//         this.adjacencyList[vertex2].delete(vertex1)
//     }

//     print(){
//         for(let vertex in this.adjacencyList){
//             console.log(`${vertex} => ${[...this.adjacencyList[vertex]]}`)
//         }
//     }

//     removeVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             return 'no vertex'
//         }

//         for(let adjacancyVertex of this.adjacencyList[vertex]){
//             this.removeEdge(vertex,adjacancyVertex)
//         }

//         delete this.adjacencyList[vertex]
//     }

//     bfs(start){
//         let visitedNode = new Set()
//         let queue = []
//         visitedNode.add(start)
//         queue.push(start)

//         while(queue.length){
//             let vertex = queue.shift()
//             console.log(vertex)

//             this.adjacencyList[vertex].forEach((neighbour)=>{
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

//         this.adjacencyList[start].forEach((neighbour)=>{
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

//             for(let neighbour of this.adjacencyList[vertex]){
//                 if(!visitedNode.has(neighbour)){
//                     visitedNode.add(neighbour)
//                     queue.push({vertex:neighbour,parent:vertex})
//                 }
//                 else if(neighbour != parent){
//                     return "cycle detected"
//                 }
//             }
//         }

//         return "cycle is not detected"
//     }

//     dfsCycleDetection(start,visitedNode=new Set(),parent = null){
//         visitedNode.add(start)

//         for(let neighbour of this.adjacencyList[start]){
//             if(!visitedNode.has(neighbour)){
//                 if(this.dfsCycleDetection(neighbour,visitedNode,start)){
//                     return true
//                 }
//             }else if(neighbour != parent){
//                 return true
//             }
//         }

//         return false
//     }
// }

// const g = new graph();

// g.addEdge("A", "B");
// g.addEdge("A", "C");
// g.addEdge("B", "D");
// g.addEdge("D", "E");
// g.addEdge("E", "F");

// console.log("Print graph:");
// g.print();
// // Expected: adjacency list of A, B, C, D, E, F

// console.log("\nHas edge A-B:", g.hasEdge("A", "B")); // ✅ true
// console.log("Has edge A-D:", g.hasEdge("A", "D"));   // ✅ false

// console.log("\nBFS:");
// g.bfs("A");
// // Expected: A B C D E F (order may vary slightly)

// console.log("\nDFS:");
// g.dfs("A");
// // Expected: A B D E F C (depending on order of neighbors)

// console.log("\nCycle Detection:");
// console.log("BFS Cycle:", g.bfsCycleDetection("A")); // ✅ No cycle
// console.log("DFS Cycle:", g.dfsCycleDetection("A")); // ✅ false

// // Now add a cycle
// g.addEdge("F", "B"); // Introducing a cycle

// console.log("\nAfter adding cycle:");
// console.log("BFS Cycle:", g.bfsCycleDetection("A")); // ✅ Cycle detected
// console.log("DFS Cycle:", g.dfsCycleDetection("A")); // ✅ true

// console.log("\nRemove Vertex B:");
// g.removeVertex("B");
// g.print(); // B and its connections removed


//bubble sort

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
//         let cur = arr[i]
//         let j = i - 1

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
//         let minElements = i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[minElements]>arr[j]){
//                 minElements = j
//             }
//         }

//         let temp = arr[minElements]
//         arr[minElements] = arr[i]
//         arr[i] = temp
//     }

//     return arr
// }

// function quickSort(arr){
//     if(arr.length < 2){
//         return arr
//     }

//     let pivot = arr[arr.length-1]
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

// const arr = [5, 3, 8, 4, 2];

// console.log("Original:", [...arr]);

// console.log("Bubble Sort:     ", bubbleSort([...arr]));     // [2, 3, 4, 5, 8]
// console.log("Insertion Sort:  ", insertionSort([...arr]));  // [2, 3, 4, 5, 8]
// console.log("Selection Sort:  ", selectionSort([...arr]));  // [2, 3, 4, 5, 8]
// console.log("Quick Sort:      ", quickSort([...arr]));      // [2, 3, 4, 5, 8]
// console.log("Merge Sort:      ", mergeSort([...arr]));      // [2, 3, 4, 5, 8]

// console.log("Empty Array:     ", bubbleSort([])); // []
// console.log("Single Element:  ", insertionSort([1])); // [1]
// console.log("All Equal:       ", selectionSort([7, 7, 7])); // [7, 7, 7]
// console.log("Descending:      ", quickSort([9, 8, 7, 6])); // [6, 7, 8, 9]
// console.log("Negative Values: ", mergeSort([3, -1, 4, -2])); // [-2, -1, 3, 4]

// class stack{
//     constructor(){
//         this.item = []
//     }

//     isEmpty(){
//         return this.item.length === 0
//     }

//     getSize(){
//         return this.item.length
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'it is empty'
//         }

//         return this.item[this.item.length-1]
//     }

//     push(value){
//         this.item.push(value)
//     }

//     pop(){
//         if(this.isEmpty()){
//             return 'stack is empty'
//         }

//         return this.item.pop()
//     }

//     print(){
//         console.log(this.item)
//     }

//     reverseArr(arr){
//         const s = new stack()

//         for(let i=0;i<arr.length;i++){
//             s.push(arr[i])
//         }

//         let reversedArr  = []

//         while(s.item.length){
//             reversedArr.push(s.pop())
//         }

//         return reversedArr
//     }

//     reverseStr(str){
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
// }

// const s = new stack();

// // Basic stack operations
// console.log("Is empty:", s.isEmpty());      // true
// s.push(1);
// s.push(2);
// s.push(3);
// console.log("Peek:", s.peek());             // 3
// console.log("Size:", s.getSize());          // 3
// console.log("Popped:", s.pop());            // 3
// s.print();                                  // [1, 2]
// console.log("Is empty:", s.isEmpty());      // false
// console.log("Peek:", s.peek());             // 2
// console.log("Popped:", s.pop());            // 2
// console.log("Popped:", s.pop());            // 1
// console.log("Popped:", s.pop());            // "stack is empty"

// // Reverse array
// let arr = [10, 20, 30, 40];
// console.log("Reverse Array:", s.reverseArr(arr)); // [40, 30, 20, 10]

// // Reverse string
// let str = "hello";
// console.log("Reverse String:", s.reverseStr(str)); // "olleh"

// class stack{
//     constructor(){
//         this.item = {}
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size == 0
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
//             return 'stack is empty'
//         }

//         this.size--

//         let val = this.item[this.size]

//         delete this.item[this.size]

//         return val
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'stack is empty'
//         }

//         return this.item[this.size-1]
//     }

//     print(){
//         console.log(this.item)
//     }
// }

// const s = new stack();

// // Test 1: isEmpty on a new stack
// console.log("Is empty?", s.isEmpty()); // true

// // Test 2: push values
// s.push(100);
// s.push(200);
// s.push(300);
// console.log("Size after 3 pushes:", s.getSize()); // 3

// // Test 3: peek top value
// console.log("Top element (peek):", s.peek()); // 300

// // Test 4: pop values
// console.log("Pop:", s.pop()); // 300
// console.log("Pop:", s.pop()); // 200
// console.log("Size after pops:", s.getSize()); // 1

// // Test 5: peek after pops
// console.log("Top element (peek):", s.peek()); // 100

// // Test 6: pop remaining and check empty
// console.log("Pop:", s.pop()); // 100
// console.log("Pop from empty stack:", s.pop()); // "stack is empty"
// console.log("Is empty?", s.isEmpty()); // true

// // Test 7: push after empty
// s.push(999);
// console.log("New top after pushing 999:", s.peek()); // 999

// // Test 8: print internal storage
// s.print(); // Should log something like: { '0': 999 }


// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class ll{
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

//     //prepend
//     push(value){
//         const node = new Node(value)

//         if(this.isEmpty()){
//             this.head = node
//             this.size++
//         }else{
//             node.next = this.head
//             this.head = node

//             this.size++
//         }
//     }

//     //removeFromStart

//     pop(){
//         if(this.isEmpty()){
//             return 'nothing to remove'
//         }
//         else{
//             let val = this.head.value

//             this.head = this.head.next

//             this.size--

//             return val
//         }
//     }

//     peek(){
//         if(this.isEmpty()){
//             return ' nothing here'
//         }

//         return this.head.value
//     }

//     print(){
//         if(this.isEmpty()){
//             return 'nothing to display'
//         }
//         else{
//             let temp = this.head
//             let list =''
//             while(temp){
//                 list += temp.value + '->'
//                 temp = temp.next
//             }

//             list+='null'
//             return list
//         }
//     }
// }

// const stack = new ll();

// // Test 1: Stack should be empty
// console.log("Is empty?", stack.isEmpty()); // true
// console.log("Size:", stack.getSize());     // 0
// console.log("Peek:", stack.peek());        // "nothing here"
// console.log("Pop:", stack.pop());          // "nothing to remove"

// // Test 2: Push elements
// stack.push(10);
// stack.push(20);
// stack.push(30);
// console.log("Peek after pushes:", stack.peek()); // 30
// console.log("Size after pushes:", stack.getSize()); // 3
// console.log("Stack:", stack.print()); // 30->20->10->null

// // Test 3: Pop elements
// console.log("Pop:", stack.pop()); // 30
// console.log("Pop:", stack.pop()); // 20
// console.log("Stack after pops:", stack.print()); // 10->null
// console.log("Size after pops:", stack.getSize()); // 1

// // Test 4: Final pops and empty state
// console.log("Pop:", stack.pop()); // 10
// console.log("Pop (empty):", stack.pop()); // "nothing to remove"
// console.log("Is empty now?", stack.isEmpty()); // true
// console.log("Stack print:", stack.print()); // "nothing to display"

// class queue{
//     constructor(){
//         this.item=[]
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
//             return 'queue is empty'
//         }
//         let val = this.item[0]
//         this.item.shift()
//         return val
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'queue is empty'
//         }

//         return this.item[0]
//     }

//     print(){
//         console.log(this.item)
//     }
// }

// const q = new queue();

// // Test 1: Initially empty
// console.log("Is empty?", q.isEmpty()); // true
// console.log("Size:", q.getSize());     // 0
// console.log("Peek:", q.peek());        // "queue is empty"
// console.log("Dequeue:", q.dequeue());  // "queue is empty"

// // Test 2: Enqueue items
// q.enqueue(10);
// q.enqueue(20);
// q.enqueue(30);
// console.log("After enqueue:", q.item);  // [10, 20, 30]
// console.log("Peek after enqueue:", q.peek()); // 10
// console.log("Size after enqueue:", q.getSize()); // 3

// // Test 3: Dequeue items
// console.log("Dequeue:", q.dequeue()); // 10
// console.log("Dequeue:", q.dequeue()); // 20
// console.log("Peek:", q.peek());       // 30
// console.log("Queue after dequeue:", q.item); // [30]

// // Test 4: Final dequeue and empty check
// console.log("Dequeue:", q.dequeue()); // 30
// console.log("Dequeue:", q.dequeue()); // "queue is empty"
// console.log("Is empty?", q.isEmpty()); // true
// console.log("Size:", q.getSize());     // 0

// class queue{
//     constructor() {
//         this.item = {}
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
//             return 'nothing to remove'
//         }

//         let val = this.item[this.head]

//         delete this.item[this.head]

//         this.head++

//         return val
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'nothing to remove'
//         }

//         return this.item[this.head]
//     }

//     print(){
//         console.log(this.item)
//     }
// }

// const q = new queue();

// // Test 1: Empty queue
// console.log("Is empty?", q.isEmpty());  // true
// console.log("Size:", q.getSize());      // 0
// console.log("Peek:", q.peek());         // "nothing to remove"
// console.log("Dequeue:", q.dequeue());   // "nothing to remove"

// // Test 2: Enqueue elements
// q.enqueue(100);
// q.enqueue(200);
// q.enqueue(300);
// console.log("Peek:", q.peek());         // 100
// console.log("Size:", q.getSize());      // 3
// q.print();                              // {0: 100, 1: 200, 2: 300}

// // Test 3: Dequeue
// console.log("Dequeue:", q.dequeue());   // 100
// console.log("Peek:", q.peek());         // 200
// console.log("Size:", q.getSize());      // 2

// // Test 4: Dequeue all and check
// q.dequeue(); // 200
// q.dequeue(); // 300
// console.log("Is empty?", q.isEmpty());  // true
// console.log("Peek:", q.peek());         // "nothing to remove"

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class ll{
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

//     //append
//     enqueue(value){
//         const node = new Node(value)

//         if(this.isEmpty()){
//             this.head = node
//         }
//         else{
//             let temp = this.head

//             while(temp.next){
//                 temp = temp.next
//             }

//             temp.next = node
//             node.next = null
//         }

//         this.size++
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return 'nothing to remove'
//         }
//         else{
//             let val = this.head.value
//             this.head = this.head.next
//             this.size--
//             return val
//         }
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'linked list is empty'
//         }

//         return this.head.value
//     }

//     print(){
//         if(this.isEmpty()){
//             return 'no list'
//         }
//         else{
//             let list = ''
//             let temp = this.head

//             while(temp){
//                 list+=temp.value+'->'
//                 temp = temp.next
//             }

//             list+='null'
//             return list
//         }
//     }
// }

// const q = new ll();

// // Test 1: Empty state
// console.log("Is Empty?", q.isEmpty());         // true
// console.log("Size:", q.getSize());             // 0
// console.log("Dequeue:", q.dequeue());          // "nothing to remove"
// console.log("Peek:", q.peek());                // "linked list is empty"
// console.log("Print:", q.print());              // "no list"

// // Test 2: Enqueue elements
// q.enqueue(10);
// q.enqueue(20);
// q.enqueue(30);
// console.log("Is Empty?", q.isEmpty());         // false
// console.log("Size:", q.getSize());             // 3
// console.log("Peek:", q.peek());                // 10
// console.log("Print:", q.print());              // "10->20->30->null"

// // Test 3: Dequeue one element
// console.log("Dequeued:", q.dequeue());         // 10
// console.log("Peek:", q.peek());                // 20
// console.log("Size:", q.getSize());             // 2
// console.log("Print:", q.print());              // "20->30->null"

// // Test 4: Dequeue all
// q.dequeue();                                   // removes 20
// q.dequeue();                                   // removes 30
// console.log("Is Empty?", q.isEmpty());         // true
// console.log("Peek:", q.peek());                // "linked list is empty"
// console.log("Print:", q.print());              // "no list"

// class hashtable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key){
//         let total = 0
//         for(let i=0;i<key.length;i++){
//             total += key.charCodeAt(i)
//         }

//         return total % this.size
//     }

//     set(key,value){
//         let index = this.hash(key)
//         this.table[index] = value
//     }

//     get(key){
//         let index = this.hash(key)
//         return this.table[index]
//     }

//     remove(key){
//         let index = this.hash(key)

//         let val = this.table[index]

//         this.table[index] = undefined

//         return val
//     }

//     print(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }

// const h = new hashtable(10);

// // Test 1: Insert entries
// h.set("name", "Alice");
// h.set("age", 25);
// h.set("city", "New York");

// // Test 2: Retrieve entries
// console.log(h.get("name")); // "Alice"
// console.log(h.get("age"));  // 25
// console.log(h.get("city")); // "New York"

// // Test 3: Remove an entry
// console.log(h.remove("age"));   // 25
// console.log(h.get("age"));      // undefined

// // Test 4: Add a colliding key
// h.set("elbow", "👊");
// h.set("below", "👇");  // Might overwrite "elbow" depending on hash result

// console.log(h.get("elbow")); // Might be 👊 or 👇 depending on collision
// console.log(h.get("below")); // Might be 👊 or 👇 depending on collision

// // Print full table
// h.print();

//chaining

// class hashtable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key){
//         let total = 0

//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }

//         return total % this.size

//     }

//     set(key,value){
//         let index = this.hash(key)

//         let bucket = this.table[index]

//         if(!bucket){
//             this.table[index] = [[key,value]]
//         }else{
//             let sameElement = bucket.find((item)=>item[0]==key)

//             if(sameElement){
//                 sameElement[1] = value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }

//     get(key){
//         let index = this.hash(key)
//         let bucket = this.table[index]

//         if(bucket){
//             let sameElement = bucket.find((item)=>item[0]==key)

//             if(sameElement){
//                 return sameElement[1]
//             }else{
//                 return 'no matching found'
//             }
//         }
//     }

//     remove(key){
//         let index = this.hash(key)
//         let bucket = this.table [index]

//         if(bucket){
//             let index = bucket.findIndex((item)=>item[0]===key)

//             if(index != -1){
//                 return bucket.splice(index,1)
//             }else{
//                 return 'no matching'
//             }
//         }
//     }

//     findDuplicates(){
//         let valMap= {}
//         let duplicates =[]

//         for(let i=0;i<this.table.length;i++){
//             let bucket = this.table[i]
//             if(bucket){
//                 for(let j=0;j<bucket.length;j++){
//                     let [key,value] = bucket[j]

//                     if(valMap[value]){
//                         valMap[value]++
//                     }else{
//                         valMap[value] = 1
//                     }
//                 }
//             }
//         }

//         for(let key in valMap){
//             if(valMap[key] > 1){
//                 duplicates.push(key)
//             }
//         }

//         return duplicates
//     }

//     removeDuplicates(){
//         let valMap = {}

//         for(let i=0;i<this.table.length;i++){
//             let bucket = this.table[i]
//             if(bucket){
//                 const newBucket = []
//                 for(let j=0;j<bucket.length;j++){
//                     let [key,value] = bucket[j]
//                     if(!valMap[value]){
//                         valMap[value] = true
//                         newBucket.push([key,value])
//                     }

//                 }

//                 this.table[i] = newBucket.length > 0 ? newBucket : undefined
//             }
//         }
//     }

//     findDuplicatesFromInput(input){
//         const value = Array.isArray(input) ? input : input.split('')

//         const t = new hashtable(50)

//         for(let i=0;i<value.length;i++){
//             let val = value[i].toString()
//             let count = t.get(val) || 0
//             t.set(val,count+1)
//         }

//         let duplicates = []

//         for(let i=0;i<t.table.length;i++){
//             let bucket = t.table[i]
//             if(bucket){
//                 for(let j=0;j<bucket.length;j++){
//                     let [key,val] = bucket[j]

//                     if(val > 1){
//                         duplicates.push(key)
//                     }
//                 }
//             }
//         }

//         return Array.isArray(input) ? duplicates :duplicates.join('')
//     }

//     removeDuplicatesFromInput(input){
//         const value = Array.isArray(input) ? input : input.split('')

//         const t = new hashtable(50)

//         for(let i=0;i<value.length;i++){
//             let val = value[i].toString()
//             let count = t.get(val) || 0
//             t.set(val,count+1)
//         }

//         let unique=[]

//         for(let i=0;i<t.table.length;i++){
//             let bucket = t.table[i]
//             if(bucket){
//                 for(let j=0;j<bucket.length;j++){
//                     let [key,value] = bucket[j]
//                     if(value == 1){
//                         unique.push(key)
//                     }
//                 }
//             }
//         }


//         return Array.isArray(input) ? unique : unique.join('')
//     }

//     findNthMostOccurency(input,k){
//         let value = Array.isArray(input) ? input : input.split("")

//         let t = new hashtable(50)

//         for(let i=0;i<value.length;i++){
//             let val = value[i].toString()
//             let count = t.get(val) || 0
//             t.set(val,count+1)
//         }

//         let result =[]

//         for(let i=0;i<t.table.length;i++){
//             let bucket = t.table[i]
//             if(bucket){
//                 for(let j=0;j<bucket.length;j++){
//                     let [key,value] = bucket[j]
//                     result.push([key,value])
//                 }
//             }
//         }

//         result.sort((a,b)=>b[1]-a[1])

//         return result[k-1] || null
//     }

//     print(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }


// const ht = new hashtable(10);

// // Core set/get/remove
// ht.set("apple", 1);
// ht.set("banana", 2);
// ht.set("grape", 3);
// ht.set("banana", 5); // overwrite
// console.log(ht.get("banana")); // ➝ 5
// console.log(ht.get("grape"));  // ➝ 3
// ht.remove("grape");
// console.log(ht.get("grape"));  // ➝ "no matching found"

// // Test duplicate handling
// ht.set("x", 10);
// ht.set("y", 20);
// ht.set("z", 10);
// ht.set("w", 30);
// console.log("Duplicates:", ht.findDuplicates()); // ➝ ['10']

// ht.removeDuplicates();
// ht.print(); // ➝ keys with unique values only (10 will only show once)

// // Input-based duplicate finder
// console.log(ht.findDuplicatesFromInput("aabccd")); // ➝ "ac"
// console.log(ht.removeDuplicatesFromInput("aabccd")); // ➝ "bd"

// // Array input test
// console.log(ht.findDuplicatesFromInput(["cat", "dog", "cat", "bird", "dog"])); // ➝ ['cat', 'dog']
// console.log(ht.removeDuplicatesFromInput(["cat", "dog", "cat", "bird", "dog"])); // ➝ ['bird']

// // Find nth most frequent character
// console.log(ht.findNthMostOccurency("aaabbbbcccccc", 1)); // ➝ ['c', 6]
// console.log(ht.findNthMostOccurency("aaabbbbcccccc", 2)); // ➝ ['b', 4]
// console.log(ht.findNthMostOccurency("aaabbbbcccccc", 3)); // ➝ ['a', 3]
// console.log(ht.findNthMostOccurency("aaabbbbcccccc", 4)); // ➝ null

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class ll{
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

//     prepend(value){
//         const node = new Node(value)
//         node.next = this.head
//         this.head = node
//         this.size++
//     }

//     append(value){
//         const node = new Node(value)

//         if(this.isEmpty()){
//             this.head = node
//         }
//         else{
//             let temp = this.head

//             while(temp.next){
//                 temp =temp.next
//             }

//             temp.next = node
//             node.next = null
//         }

//         this.size++
//     }

//     insert(index,value){
//         const node = new Node(value)
//         if(index < 0 || index > this.size){
//             return 'invalid index'
//         }
//         else if(index == 0){
//             this.prepend(value)
//         }
//         else if(index == this.size){
//             this.append(value)
//         }
//         else{

//             let temp = this.head

//             for(let i=0;i<index-1;i++){
//                 temp = temp.next
//             }

//             node.next = temp.next
//             temp.next = node

//             this.size++
//         }
//     }

//     removeFromStart(){
//         if(this.isEmpty()){
//             return 'nothing to remove'
//         }
//         else if(this.size == 1){
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

//     removeFromEnd(){
//         if(this.isEmpty()){
//             return 'nothing to remove'
//         }
//         else if(this.size == 1){
//             const val = this.head.value
//             this.head = null
//             this.size--
//             return val
//         }
//         else{
//             let temp = this.head

//             while(temp.next.next){
//                 temp = temp.next
//             }

//             let val = temp.next.value
            
//             temp.next = null

//             this.size--
            
//             return val
//         }
//     }

//     removeByIndex(index){
//         if(index < 0 || index > this.size){
//             return 'invalid index'
//         }
//         else if(index == 0){
//             const val = this.head.value

//             this.head = this.head.next

//             this.size--

//             return val
//         }
//         else if(index == this.size-1){
//             let temp = this.head

//             while(temp.next.next){
//                 temp = temp.next
//             }

//             let val = temp.next.value

//             temp.next = null

//             this.size--

//             return val
//         }
//         else{
//             let temp = this.head

//             for(let i=0;i<index-1;i++){
//                 temp = temp.next
//             }

//             let value = temp.next.value
//             temp.next = temp.next.next

//             this.size--

//             return value
//         }
//     }

//     removeByValue(value){
//          if(this.isEmpty()){
//             return 'list is empty'
//          }
//          else if(this.head.value == value){
//             const val = this.head.value
//             this.head = this.head.next
//             this.size--
//             return val
//          }
//          else{
//             let temp = this.head

//             while(temp.next && temp.next.value != value){
//                 temp = temp.next
//             }

//             if(temp.next == null){
//                 return 'value not found'
//             }

//             let val = temp.next.value
//             temp.next = temp.next.next
//             this.size--
//             return val
//          }
//     }

//     reverse(){
//         let cur = this.head
//         let prev = null

//         while(cur){
//             let next = cur.next
//             cur.next = prev
//             prev = cur
//             cur = next
//         }

//         this.head = prev
//     }

//     print(){
//         if(this.isEmpty()){
//             return 'list is empty'
//         }
//         else{
//             let list = ''
//             let temp = this.head

//             while(temp){
//                 list +=temp.value + '->'
//                 temp = temp.next
//             }

//             list+='null'

//             return list
//         }
//     }

//     findMidAndRemove(){
//         let mid = Math.floor(this.size/2)
//         return this.removeByIndex(mid)
//     }

//     arrayToLinkedList(arr){

//         for(let i=0;i<arr.length;i++){
//             this.append(arr[i])
//         }
//     }

//     linkedlistToArray(){
//         let arr = []

//         if(this.isEmpty()){
//             return 'empty'
//         }
//         else{
//             let temp = this.head

//             while(temp){
//                 arr.push(temp.value)
//                 temp = temp.next
//             }

//             return arr
//         }
//     }

//     findDuplicates(){
//         let duplicates = []
//         let valMap = {}

//         let temp = this.head
        
//         while(temp){

//             if(valMap[temp.value]){
//                 valMap[temp.value]++
//             }
//             else{
//                 valMap[temp.value] =1
//             }
//             temp = temp.next
//         }

//         for(let key in valMap){
//             if(valMap[key] > 1){
//                 duplicates.push(key)
//             }
//         }

//         return duplicates
//     }

//     findUnique(){
//         let temp = this.head

//         let valMap = {}

//         while(temp){
//             if(valMap[temp.value]){
//                 valMap[temp.value]++
//             }else{
//                 valMap[temp.value] = 1
//             }
//             temp = temp.next
//         }

//         let unique =[]

//         for(let key in valMap){
//             if(valMap[key] == 1){
//                 unique.push(key)
//             }
//         }

//         return unique
//     }

//     checkPalindrome(){
//         let values = []

//         let temp = this.head

//         while(temp){
//             values.push(temp.value)
//             temp = temp.next
//         }

//         let reversed = [...values].reverse()

//         return values.join('') === reversed.join('')
//     }

//     makeCircular(){
//         let temp = this.head

//         while(temp.next && temp.next != this.head){
//             temp = temp.next
//         }

//         temp.next = this.head
//     }

//     checkCircular(){
//         let slow = this.head
//         let fast = this.head

//         while(fast && fast.next){
//             slow = slow.next
//             fast = fast.next.next

//             if(slow == fast){
//                 return true
//             }
//         }

//         return false
//     }

//     removeDuplicates(){
//         let seen = {}
//         let temp = this.head
//         let prev = null

//         while(temp){
//             if(seen[temp.value]){
//                 prev.next = temp.next
//             }
//             else{
//                 seen[temp.value] = true
//                 prev = temp
//             }
//             temp = temp.next
//         }
//     }

//     sorting(){
//         let swapped
//         do{
//             swapped= false
//             let temp = this.head

//             while(temp && temp.next){
//                 if(temp.value > temp.next.value){
//                     [temp.value,temp.next.value] = [temp.next.value,temp.value]
//                     swapped = true
//                 }
//                 temp = temp.next
//             }

//         }while(swapped)
//     }
// }

// const list = new ll();

// list.append(10);
// list.append(20);
// list.append(30);
// console.log(list.print()); // 10->20->30->null

// list.prepend(5);
// console.log(list.print()); // 5->10->20->30->null

// list.insert(0, 1);     // insert at start
// list.insert(3, 15);    // insert in middle
// list.insert(list.getSize(), 40);  // insert at end
// console.log(list.print()); // 1->5->10->15->20->30->40->null

// console.log(list.insert(-1, 999)); // invalid index
// console.log(list.insert(100, 999)); // invalid index

// console.log(list.removeFromStart()); // 1
// console.log(list.print()); // 5->10->15->20->30->40->null

// console.log(list.removeFromEnd()); // 40
// console.log(list.print()); // 5->10->15->20->30->null

// console.log(list.removeByIndex(0)); // 5
// console.log(list.print()); // 10->15->20->30->null

// console.log(list.removeByIndex(2)); // 20
// console.log(list.print()); // 10->15->30->null

// console.log(list.removeByIndex(list.getSize() - 1)); // 30
// console.log(list.print()); // 10->15->null

// console.log(list.removeByIndex(-1)); // invalid index
// console.log(list.removeByIndex(100)); // invalid index

// console.log(list.removeByValue(10)); // 10
// console.log(list.print()); // 15->null

// console.log(list.removeByValue(999)); // value not found
// console.log(list.removeByValue(15)); // 15
// console.log(list.print()); // list is empty

// list.append(1);
// list.append(2);
// list.append(3);
// list.append(4);
// console.log(list.print()); // 1->2->3->4->null

// list.reverse();
// console.log(list.print()); // 4->3->2->1->null

// console.log(list.isEmpty()); // false
// console.log(list.getSize()); // 4

// // Remove all to empty list
// list.removeFromStart();
// list.removeFromStart();
// list.removeFromStart();
// list.removeFromStart();
// console.log(list.print()); // list is empty
// console.log(list.isEmpty()); // true
// console.log(list.getSize()); // 0

// // removeFromStart on empty list
// console.log(list.removeFromStart()); // nothing to remove

// // removeFromEnd on empty list
// console.log(list.removeFromEnd()); // nothing to remove

// // removeByValue on empty list
// console.log(list.removeByValue(10)); // list is empty

// const list = new ll();
// list.append(10);
// list.append(20);
// list.append(30);
// list.append(40);
// list.append(50);
// console.log(list.print()); // 10->20->30->40->50->null

// console.log(list.findMidAndRemove()); // 30
// console.log(list.print()); // 10->20->40->50->null

// const list = new ll();
// list.arrayToLinkedList([1, 2, 3, 4, 5]);
// console.log(list.print()); // 1->2->3->4->5->null

// const list = new ll();
// list.arrayToLinkedList([10, 20, 30]);
// console.log(list.linkedlistToArray()); // [10, 20, 30]

// const emptyList = new ll();
// console.log(emptyList.linkedlistToArray()); // 'empty'
// const list = new ll();
// list.arrayToLinkedList([1, 2, 3, 2, 4, 5, 3, 3]);
// console.log(list.findDuplicates()); // [2, 3]

// const list = new ll();
// list.arrayToLinkedList([1, 2, 3, 2, 4, 5, 3, 3]);
// console.log(list.findUnique()); // [1, 4, 5]

// const list1 = new ll();
// list1.arrayToLinkedList([1, 2, 3, 2, 1]);
// console.log(list1.checkPalindrome()); // true

// const list2 = new ll();
// list2.arrayToLinkedList([1, 2, 3, 4, 5]);
// console.log(list2.checkPalindrome()); // false

// const list3 = new ll();
// list3.arrayToLinkedList([]);
// console.log(list3.checkPalindrome()); // true (empty list is technically a palindrome)

// const list4 = new ll();
// list4.arrayToLinkedList([1]);
// console.log(list4.checkPalindrome()); // true

// const list = new ll();
// list.append(10);
// list.append(20);
// list.append(30);

// console.log(list.checkCircular()); // false

// list.makeCircular();
// console.log(list.checkCircular()); // true

// const list = new ll();
// list.append(10);
// list.append(20);
// list.append(10);
// list.append(30);
// list.append(20);
// list.append(40);

// console.log("Before removing duplicates:");
// console.log(list.print());  // 10->20->10->30->20->40->null

// list.removeDuplicates();

// console.log("After removing duplicates:");
// console.log(list.print());  // 10->20->30->40->null

// let list1 = new ll();
// [4, 2, 5, 1, 3].forEach(num => list1.append(num));

// console.log("Before sort:", list1.print()); 
// list1.sorting();
// console.log("After sort:", list1.print());  
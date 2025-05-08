// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class tree{
//     constructor(){
//         this.root = null
        
//     }

//     isEmpty(){
//         return this.root == null
//     }

//     insert(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.root = node
//         }
//         else{
//             this.insertNode(this.root,node)
//         }
//     }

//     insertNode(root,node){
//         if(node.value < root.value){
//             if(root.left == null){
//                 root.left = node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right == null){
//                 root.right = node
//             }
//             else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }

//     search(root,value){
//         if(!root){
//             return null
//         }
//         else if(root.value == value){
//             return true
//         }
//         else if(value < root.value){
//             return this.search(root.left,value)
//         }
//         else{
//             return this.search(root.right,value)
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
//             root =root.right
//         }

//         return root.value
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

//     levelOrder(root){
//         let queue = []
//         queue.push(root)

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
//         else if(value < root.value){
//             root.left = this.deleteNode(root.left,value)
//         }
//         else if(value > root.value){
//             root.right = this.deleteNode(root.right,value)
//         }
//         else{
//             if(!root.right && !root.left){
//                 return null
//             }

//             if(!root.right){
//                 return root.left
//             }

//             if(!root.left){
//                 return root.right
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
//             if(num % i == 0){
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

//     isBst(root,min = -Infinity ,max = Infinity ){
//         if(!root){
//             return true
//         }

//         if(root.value <= min || root.value >= max){
//             return false
//         }

//         return this.isBst(root.left,min,root.value) && this.isBst(root.right,root.value,max)
//     }

//     isIdentical(tree1,tree2){
//         if(!tree1 && !tree2){
//             return true
//         }

//         if(!tree1 || !tree2){
//             return false
//         }

//         return (tree1.value == tree2.value) && this.isIdentical(tree1.left,tree2.left) && this.isIdentical(tree1.right,tree2.right)
//     }

//     inOrderTraversal(root,result = []){
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

//         return result[result.length - k] || null
//     }

//     findSuccessor(root,target){
//         let result = this.inOrderTraversal(root)
//         let successor = null
//         for(let i=0;i<result.length;i++){
//             if(result[i] == target){
//                 if(i+1 < result.length){
//                     successor = result[i+1]
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
//                 }
//             }
//         }

//         return predecessor
//     }

//     findClosest(root,target){
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
//             inOrder(root.left)

//             if(root.left && root.left.value == target){
//                 parent = root.value
//             }

//             if(root.right && root.right.value == target){
//                 parent = root.value
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
//                 leftChild:root.left ? root.left.value : null,
//                 rightChild:root.right ? root.right.value : null
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

//     findSiblings(root,target){
//         if(!root){
//             return null
//         }

//         let sibling = null

//         function inOrder(root){
//             if(root){
//                 inOrder(root.left)
    
//                 if(root.left && root.left.value == target && root.right){
//                     sibling = root.right.value
//                 }
    
//                 if(root.right && root.right.value == target && root.left){
//                     sibling = root.left.value
//                 }
    
//                 inOrder(root.right)
//             }
//         }

//         inOrder(root)

//         return sibling
//     }

//     findLeafNode(root,result = []){
//         if(root){
//             if(!root.left && !root.right){
//                 result.push(root.value)
//             }

//             this.findLeafNode(root.left,result)
//             this.findLeafNode(root.right,result)
//         }
//         return result
//     }

//     findAncestor(root,target,result = []){
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
//         else if(root.value === target){
//             return this.collectDescendant(root)
//         }
//         else if(target < root.value){
//             return this.findDescendant(root.left,target)
//         }
//         else{
//             return this.findDescendant(root.right,target)
//         }
//     }

//     collectDescendant(root,result = []){
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

//         if(root.value == target){
//             let degree = 0

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
//         let LCA = this.findLCA(this.root,n1,n2)

//         if(!LCA){
//             return []
//         }

//         let path1 = this.findPath(LCA,n1)
//         let path2 = this.findPath(LCA,n2)

//         return [...path1.reverse(),...path2.slice(1)]
//     }

//     findDistanceBetweenTwoNodes(n1,n2){
//         let LCA = this.findLCA(this.root,n1,n2)

//         if(!LCA){
//             return []
//         }

//         let distance1 = this.findDistance(LCA,n1)
//         let distance2 = this.findDistance(LCA,n2)

//         return distance1+distance2
//     }

//     countNoOfNodes(root){
//         let queue = []
//         queue.push(root)
    
//         let count = 0
    
//         while(queue.length){
//             let cur = queue.shift()
//             count++
    
//             if(cur.left){
//                 queue.push(cur.left)
//             }
    
//             if(cur.right){
//                 queue.push(cur.right)
//             }
//         }
//         return count
//     }

//     countOneChildNode(root){
//         if(!root){
//             return null
//         }

//         let count = 0
//         let node = []

//         function preOrder(root){
//             if(root){
//                 if((root.left && !root.right) || (root.right && !root.left)){
//                     count++
//                     node.push(root.value)
//                 }
    
//                 preOrder(root.left)
//                 preOrder(root.right)
//             }
//         }

//       preOrder(root)

//       return {count,node}
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

//         let rightchild = 0

//         function preOrder(root){
//             if(root){
//                 if(root.right && !root.left){
//                     rightchild++
//                 }

//                 preOrder(root.left)
//                 preOrder(root.right)
//             }
//         }

//         preOrder(root)

//         return rightchild
//     }
// }





// const t = new tree();

// // Insert nodes
// t.insert(20)
// t.insert(10)
// t.insert(30)
// t.insert(5)
// t.insert(15)
// t.insert(25)
// t.insert(35)

// console.log("InOrder Traversal:");
// t.inOrder(t.root)  // Should be: 5 10 15 20 25 30 35

// console.log("Search 15:", t.search(t.root, 15))  // true
// console.log("Search 100:", t.search(t.root, 100)) // false

// console.log("Min:", t.min(t.root))   // 5
// console.log("Max:", t.max(t.root))   // 35

// console.log("Kth Smallest (3rd):", t.findKthSmallest(t.root, 3))  // 15
// console.log("Kth Largest (2nd):", t.findKthLargest(t.root, 2))   // 30

// console.log("Successor of 15:", t.findSuccessor(t.root, 15))     // 20
// console.log("Predecessor of 15:", t.findPredecessor(t.root, 15)) // 10

// console.log("Closest to 18:", t.findClosest(t.root, 18))  // 20

// console.log("Leaf Nodes:", t.findLeafNode(t.root))  // [5, 15, 25, 35]

// console.log("Ancestors of 15:", t.findAncestor(t.root, 15))  // [20, 10, 15]

// console.log("Descendants of 10:", t.findDescendant(t.root, 10)) // [10, 5, 15]

// console.log("Degree of 10:", t.findDegree(t.root, 10)) // 2
// console.log("Depth of 5:", t.findDepth(t.root, 5)) // 2
// console.log("Distance of 5 from root:", t.findDistance(t.root, 5)) // 2

// console.log("LCA of 5 and 15:", t.findLCA(t.root, 5, 15).value) // 10

// console.log("Path to 35:", t.findPath(t.root, 35)) // [20, 30, 35]

// console.log("Path between 5 and 25:", t.findPathBetweenTwoNodes(5, 25)) // [5, 10, 20, 25]

// console.log("Distance between 5 and 25:", t.findDistanceBetweenTwoNodes(5, 25)) // 4

// console.log("Is BST:", t.isBst(t.root)) // true

// console.log("Prime values in BST:", t.findPrime(t.root)) // e.g., [5]

// console.log("Children of 10:", t.findChildren(t.root, 10)) // {leftChild: 5, rightChild: 15}

// console.log("Sibling of 15:", t.findSiblings(t.root, 15)) // 5


// const root = {
//     value: 10,
//     left: {
//         value: 5,
//         left: null,
//         right: {
//             value: 7,
//             left: null,
//             right: null
//         }
//     },
//     right: {
//         value: 15,
//         left: {
//             value: 12,
//             left: null,
//             right: {
//                 value: 13,
//                 left: null,
//                 right: null
//             }
//         },
//         right: null
//     }
// };

// console.log("Total nodes:", t.countNoOfNodes(root));        // 6
// console.log("One-child nodes:", t.countOneChildNode(root)); // { count: 3, node: [5, 15, 12] }
// console.log("Only left child:", t.countLeftChild(root));    // 2 (nodes 15 and 12)
// console.log("Only right child:", t.countRightChild(root));  // 1 (node 5)


// class maxHeap{
//     constructor(){
//         this.heap = []
//     }

//     isEmpty(){
//         return this.heap.length === 0
//     }

//     getSize(){
//         return this.heap.length
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

//     peek(){
//         if(this.isEmpty()){
//             return 'nothing'
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
//             return 'nothing to remove'
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
//             }else{
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

//         let sortedArr = []

//         while(h.heap.length){
//             sortedArr.push(h.remove())
//         }

//         return sortedArr
//     }

//     findKthSmallest(arr,k){
//         let h = new maxHeap()

//         for(let i=0;i<arr.length;i++){
//             h.add(arr[i])
//             if(h.heap.length > k){
//                 h.remove()
//             }
//         }

//         return h.peek()
//     }
// }

// const heap = new maxHeap();

// // Insert values
// heap.add(10);
// heap.add(4);
// heap.add(15);
// heap.add(20);
// heap.add(0);
// heap.add(8);
// heap.add(30);

// console.log("Heap after insertions:", heap.heap); // Should maintain max-heap property

// // Peek (max value)
// console.log("Max value (peek):", heap.peek()); // ➤ 30

// // Remove max
// console.log("Removed max:", heap.remove()); // ➤ 30
// console.log("Heap after removal:", heap.heap); // Should still be a valid max-heap

// // Heap Sort
// const arr = [3, 10, 5, 6, 2];
// const sorted = heap.heapSort(arr);
// console.log("Heap Sort Descending:", sorted); // ➤ [10, 6, 5, 3, 2]

// // Kth smallest
// const input = [7, 10, 4, 3, 20, 15];
// const k = 3;
// console.log(`The ${k}rd smallest element is:`, heap.findKthSmallest(input, k)); // ➤ 7

// class minHeap{
//     constructor(){
//         this.heap = []
//     }

//     isEmpty(){
//         return this.heap.length  == 0
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

//     peek(){
//         if(this.isEmpty()){
//             return 'nothing'
//         }

//         return this.heap[0]
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
//             return 'nothing'
//         }

//         let val = this.heap[0]

//         this.heap[0] = this.heap[this.heap.length-1]

//         this.heap.pop()

//         this.heapifyDown()

//         return val
//     }

//     heapifyDown(){
//         let index = 0

//         while(this.hasLeftChild(index)){
//             let smallest = this.getLeftChildIndex(index)

//             if(this.hasRightChild(index) && this.getRightChild(index) < this.getLeftChild(index)){
//                 smallest = this.getRightChildIndex(index)
//             }

//             if(this.heap[index] <= this.heap[smallest]){
//                 break
//             }else{
//                 this.swap(index,smallest)
//             }

//             index = smallest
//         }
//     }

//     heapSort(arr){
//         const h = new minHeap()

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
// const heap = new minHeap();

// heap.add(20);
// heap.add(5);
// heap.add(15);
// heap.add(10);
// heap.add(25);
// heap.add(2);
// heap.add(8);

// console.log("Min Heap Array:", heap.heap); // Should be min-heap ordered

// // Peek
// console.log("Peek (min):", heap.peek()); // ➤ 2

// // Remove min
// console.log("Removed min:", heap.remove()); // ➤ 2
// console.log("Heap after remove:", heap.heap); // Still valid min-heap

// // Heap sort (ascending)
// const arr = [9, 4, 7, 1, 5];
// console.log("Heap Sort:", heap.heapSort(arr)); // ➤ [1, 4, 5, 7, 9]

// // Find Kth Largest using minHeap of size k
// const nums = [3, 2, 1, 5, 6, 4];
// const k = 2;
// console.log(`${k}th largest element:`, heap.findKthLargest(nums, k)); // ➤ 5

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

//     for(let i=Math.floor((n/2)-1);i>=0;i--){
//         heapify(arr,n,i)
//     }

//     for(let i=n-1;i>=0;i--){
//         [arr[0],arr[i]] = [arr[i],arr[0]]
//         heapify(arr,i,0)
//     }

//     return arr
// }

// console.log(heapSort([4, 10, 3, 5, 1]));         // [1, 3, 4, 5, 10]
// console.log(heapSort([12, 11, 13, 5, 6, 7]));    // [5, 6, 7, 11, 12, 13]
// console.log(heapSort([1]));                     // [1]
// console.log(heapSort([]));                      // []
// console.log(heapSort([9, 8, 7, 6, 5, 4, 3]));    // [3, 4, 5, 6, 7, 8, 9]
// console.log(heapSort([5, 5, 5, 5]));             // [5, 5, 5, 5]


// function kthFrequentElement(arr,k){
//     if(arr.length < k){
//         return null
//     }

//     let valMap = {}

//     for(let i=0;i<arr.length;i++){
//         if(valMap[arr[i]]){
//             valMap[arr[i]]++
//         }else{
//             valMap[arr[i]] = 1
//         }
//     }

    

//     let result = Object.entries(valMap).sort((a,b)=>b[1]-a[1])
    

//     return Number(result[k-1][0])
// }


// console.log(kthFrequentElement([1,1,2,2,3,3,3], 1)); // 3 (most frequent)
// console.log(kthFrequentElement([1,1,2,2,3,3,3], 2)); // 1 or 2 (tie for 2nd most frequent)
// console.log(kthFrequentElement([5,5,4,6,6,6,7], 2)); // 5 (1st = 6, 2nd = 5)
// console.log(kthFrequentElement([10,10,10,20], 1));   // 10
// console.log(kthFrequentElement([1,2,3], 4));         // null (k too large)
// console.log(kthFrequentElement([], 1));              // null (empty array)


// class Node{
//     constructor(){
//         this.children = {}
//         this.isEndOfWord = false
//     }
// }

// class Trie{
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
//                 return 'no match'
//             }

//             node = node.children[char]
//         }

//         return this.collectWord(node,word)
//     }

//     collectWord(node,word,list = []){
//         if(node.isEndOfWord){
//             list.push(word)
//         }

//         for(let char in node.children){
//             this.collectWord(node.children[char],word+char,list)
//         }

//         return list
//     }

//     print(){
//         return this.collectWord(this.root,'')
//     }

//     delete(word){
//         let node = this.root
//         let path =[]

//         for(let i=0;i<word.length;i++){
//             let char = word[i]
//             if(!node.children[char]){
//                 return 'no matching'
//             }
//             path.push([node,char])
//             node = node.children[char]
//         }

//         if(!node.isEndOfWord){
//             return 'the word is not end'
//         }

//         node.isEndOfWord = false

//         for(let i=word.length-1;i>=0;i--){
//             let [parentNode,char] = path[i]

//             let childNode = parentNode.children[char]

//             if(Object.keys(childNode.children).length > 0 || childNode.isEndOfWord){
//                 break
//             }

//             delete parentNode.children[char]
//         }

//         return 'word is deleted'
//     }
// }

// let trie = new Trie();

// trie.insert("hello");
// trie.insert("hell");
// trie.insert("heaven");
// trie.insert("heavy");

// console.log(trie.search("hell"));        // true
// console.log(trie.search("hello"));       // true
// console.log(trie.search("heaven"));      // true
// console.log(trie.search("heal"));        // false

// console.log(trie.startsWith("he"));      // true
// console.log(trie.startsWith("hea"));     // true
// console.log(trie.startsWith("hex"));     // false

// console.log(trie.autoComplete("he"));    // [ 'hell', 'hello', 'heaven', 'heavy' ]
// console.log(trie.autoComplete("hea"));   // [ 'heaven', 'heavy' ]
// console.log(trie.autoComplete("ho"));    // 'no match'

// console.log(trie.delete("heaven"));      // word is deleted
// console.log(trie.search("heaven"));      // false
// console.log(trie.autoComplete("hea"));   // [ 'heavy' ]

// class Node{
//     constructor() {
//         this.children ={}
//         this.isEndOfWord = false
//     }
// }

// class suffixTrie{
//     constructor(word) {
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

// let st = new suffixTrie("banana");

// console.log(st.search("banana"));  // true
// console.log(st.search("anana"));   // true
// console.log(st.search("nana"));    // true
// console.log(st.search("ana"));     // true
// console.log(st.search("na"));      // true
// console.log(st.search("a"));       // true

// console.log(st.search("ban"));     // false
// console.log(st.search("bana"));    // false
// console.log(st.search("nanaa"));   // false


// class Node{
//     constructor(){
//         this.children = {}
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
//         let queue = []
//         let node = this.root

//         queue.push(node)

//         let count =0

//         while(queue.length){
//             let cur = queue.shift()

//             if(cur.isEndOfWord){
//                 count++
//             }

//             for(let char in cur.children){
//                 queue.push(cur.children[char])
//             }
//         }

//         return count
//     }

//     countPrefix(prefix){
//         let node = this.root

//         for(let i=0;i<prefix.length;i++){
//             let char = prefix[i]
//             if(!node.children[char]){
//                 return 0
//             }
//             node = node.children[char]
//         }

//         let queue = []

//         queue.push(node)

//         let prefixCount = 0

//         while(queue.length){
//             let cur = queue.shift()

//             if(cur.isEndOfWord){
//                 prefixCount++
//             }

//             for(let char in cur.children){
//                 queue.push(cur.children[char])
//             }
//         }

//         return prefixCount
//     }

//     longestWord(word){
//         let node = this.root

//         let longestWord = ''

//         for(let i=0;i<word.length;i++){
//             let char = word[i]
//             if(!node.children[char]){
//                 break
//             }

//             longestWord+=char
//             node = node.children[char]
//         }

//         return longestWord
//     }
// }

// let t = new trie();

// t.insert("apple");
// t.insert("app");
// t.insert("ape");
// t.insert("bat");
// t.insert("ball");
// t.insert("batman");
// t.insert("batwoman");
// t.insert("bad");

// console.log(t.countWord());        // 8
// console.log(t.countPrefix("app")); // 2 => "apple", "app"
// console.log(t.countPrefix("ba"));  // 4 => "bat", "ball", "batman", "batwoman"
// console.log(t.countPrefix("bat")); // 3 => "bat", "batman", "batwoman"
// console.log(t.countPrefix("xyz")); // 0

// console.log(t.longestWord("batmobile")); // "bat"
// console.log(t.longestWord("application")); // "app"
// console.log(t.longestWord("badminton")); // "bad"
// console.log(t.longestWord("zebra")); // ""


// class graph{
//     constructor(){
//         this.adjancencyList = {}
//     }

//     addVertex(vertex){
//         if(!this.adjancencyList[vertex]){
//             this.adjancencyList[vertex] = new Set()
//         }
//     }

//     addEdge(vertex1,vertex2){
//         if(!this.adjancencyList[vertex1]){
//             this.addVertex(vertex1)
//         }

//         if(!this.adjancencyList[vertex2]){
//             this.addVertex(vertex2)
//         }

//         this.adjancencyList[vertex1].add(vertex2)
//         this.adjancencyList[vertex2].add(vertex1)
//     }

//     hasEdge(vertex1,vertex2){
//         if(!this.adjancencyList[vertex1] || !this.adjancencyList[vertex2]){
//             return 'no list'
//         }

//         return this.adjancencyList[vertex1].has(vertex2) && this.adjancencyList[vertex2].has(vertex1)
//     }

//     removeEdge(vertex1,vertex2){
//         if(!this.adjancencyList[vertex1] || !this.adjancencyList[vertex2]){
//             return "removed"
//         }

//         return this.adjancencyList[vertex1].delete(vertex2) && this.adjancencyList[vertex2].delete(vertex1)
//     }

//     print(){
//         for(let adjancencyVertex in this.adjancencyList){
//             console.log(`${adjancencyVertex} => ${[...this.adjancencyList[adjancencyVertex]]}`)
//         }
//     }

//     removeVertex(vertex){
//         if(!this.adjancencyList[vertex]){
//             return 'no vertex'
//         }

//         for(let adjancy of this.adjancencyList[vertex]){
//             this.removeEdge(adjancy,vertex)
//         }

//         return delete this.adjancencyList[vertex]
//     }

//     bfs(start){
//         let visitedNode = new Set()

//         let queue =[]

//         queue.push(start)

//         visitedNode.add(start)

//         while(queue.length){
//             let vertex = queue.shift()
//             console.log(vertex)

//             this.adjancencyList[vertex].forEach((neighbor)=>{
//                 if(!visitedNode.has(neighbor)){
//                     visitedNode.add(neighbor)
//                     queue.push(neighbor)
//                 }
//             })
//         }
//     }

//     dfs(start,visitedNode = new Set()){

//         visitedNode.add(start)

//         console.log(start)

//         this.adjancencyList[start].forEach((neighbor)=>{
//             if(!visitedNode.has(neighbor)){
//                 this.dfs(neighbor,visitedNode)
//             }
//         })
//     }

//     bfsCycleDetection(start){
//         let visitedNode = new Set()

//         visitedNode.add(start)

//         let queue =[]

//         queue.push({vertex:start,parent:null})

//         while(queue.length){
//             let {vertex,parent} = queue.shift()

//             for(let neighbor of this.adjancencyList[vertex]){
//                 if(!visitedNode.has(neighbor)){
//                     visitedNode.add(neighbor)
//                     queue.push({vertex:neighbor,parent:vertex})
//                 }
//                 else if(neighbor != parent){
//                     console.log("found cycle")
//                     return
//                 }
//             }
//         }

//         console.log("not found cycle")
//     }

//     DFSCycleDetection(start,visitedNode = new Set(),parent = null){
//         visitedNode.add(start)

//      for(let neighbor of this.adjancencyList[start]){   
//             if(!visitedNode.has(neighbor)){
//                 if(this.DFSCycleDetection(neighbor,visitedNode,start)){
//                     return true
//                 }
//             }
//             else if(neighbor != parent){
//                 return true
//             }
//     }

//         return false
//     }
// }

// const g = new graph();

// g.addEdge('A', 'B');
// g.addEdge('A', 'C');
// g.addEdge('B', 'D');
// g.addEdge('D', 'E');
// g.addEdge('E', 'F');
// g.addEdge('F', 'B'); // Cycle here: B-D-E-F-B

// g.print();
// /*
// A => [ 'B', 'C' ]
// B => [ 'A', 'D', 'F' ]
// C => [ 'A' ]
// D => [ 'B', 'E' ]
// E => [ 'D', 'F' ]
// F => [ 'E', 'B' ]
// */

// console.log(g.hasEdge('A', 'C')); // true
// console.log(g.hasEdge('A', 'F')); // false

// g.removeEdge('A', 'C');
// console.log(g.hasEdge('A', 'C')); // false

// console.log("BFS from A:");
// g.bfs('A'); // A B D F E C

// console.log("DFS from A:");
// g.dfs('A'); // A B D E F

// console.log("BFS Cycle Detection from A:");
// g.bfsCycleDetection('A'); // found cycle

// console.log("DFS Cycle Detection from A:");
// console.log(g.DFSCycleDetection('A')); // true

// g.removeVertex('C');
// g.print(); // C should be gone

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

//         let j =i - 1

//         while(j >= 0 && arr[j] > cur){
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

//     let mid = Math.floor(arr.length/2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)

//     return merge(mergeSort(left),mergeSort(right))
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

// const testArrays = [
//     [],
//     [1],
//     [5, 4, 3, 2, 1],
//     [1, 2, 3, 4, 5],
//     [3, 1, 4, 1, 5, 9, 2],
//     [5, 3, 8, 4, 2],
// ];

// const sortingAlgos = {
//     bubbleSort,
//     insertionSort,
//     selectionSort,
//     quickSort,
//     mergeSort
// };

// for (const [name, sortFunc] of Object.entries(sortingAlgos)) {
//     console.log(`--- ${name} ---`);
//     for (const arr of testArrays) {
//         const result = sortFunc([...arr]); // copy to avoid in-place mutation
//         console.log(`Input: [${arr}] => Output: [${result}]`);
//     }
// }

// class stack{
//     constructor(){
//         this.item= []
//     }

//     isEmpty(){
//         return this.item.length === 0
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

//     reverseStr(str){
//         let s = new stack()

//         for(let i=0;i<str.length;i++){
//             s.push(str[i])
//         }

//         let reversedStr =''

//         while(s.item.length){
//             reversedStr+=s.pop()
//         }

//         return reversedStr
//     }

//     reverseArr(arr){
//         let s = new stack()

//         for(let i=0;i<arr.length;i++){
//             s.push(arr[i])
//         }

//         let reversedArr =[]

//         while(s.item.length){
//             reversedArr.push(s.pop())
//         }

//         return reversedArr
//     }
// }
// const s = new stack()

// console.log("Is empty:", s.isEmpty()) // true

// s.push(10)
// s.push(20)
// s.push(30)

// console.log("Peek:", s.peek()) // 30
// console.log("Size:", s.getSize()) // 3
// console.log("Pop:", s.pop()) // 30
// console.log("Pop:", s.pop()) // 20
// console.log("Pop:", s.pop()) // 10
// console.log("Pop on empty:", s.pop()) // 'empty'
// console.log("Is empty now:", s.isEmpty()) // true

// // Test reverseStr
// console.log("Reverse 'hello':", s.reverseStr("hello")) // "olleh"

// // Test reverseArr
// console.log("Reverse [1, 2, 3]:", s.reverseArr([1, 2, 3])) // [3, 2, 1]


// class stack{
//     constructor(){
//         this.item = {}
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size  === 0
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

//         let val = this.item[this.size - 1]
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
    
// }

// const s = new stack()

// console.log("Is empty:", s.isEmpty())           // true
// console.log("Size:", s.getSize())               // 0

// s.push(100)
// s.push(200)
// s.push(300)

// console.log("Size after 3 pushes:", s.getSize()) // 3
// console.log("Peek:", s.peek())                   // 300
// console.log("Pop:", s.pop())                     // 300
// console.log("Peek after pop:", s.peek())         // 200
// console.log("Pop:", s.pop())                     // 200
// console.log("Pop:", s.pop())                     // 100
// console.log("Pop on empty:", s.pop())            // 'empty'
// console.log("Is empty now:", s.isEmpty())        // true

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
//         return this.head == null
//     }

//     getSize(){
//         return this.size 
//     }

//     push(value){
//         let node = new Node(value)

//         node.next = this.head

//         this.head = node

//         this.size ++
//     }

//     pop(){

//         if(this.isEmpty()){
//             return 'empty'
//         }

//         let val = this.head.value

//         this.head = this.head.next

//         this.size--

//         return val
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'empty'
//         }

//         return this.head.value
//     }

//     print(){
//         if(this.isEmpty()){
//             return 'empty'
//         }else{
//             let list = ''

//             let temp = this.head


//             while(temp){
//                 list += temp.value + '->'
//                 temp = temp.next
//             }

//             list+='null'

//             return list
//         }
//     }
// }

// const s = new stack()

// console.log("Is empty?", s.isEmpty())       // true
// console.log("Size:", s.getSize())           // 0

// s.push(10)
// s.push(20)
// s.push(30)

// console.log("Stack:", s.print())            // 30 -> 20 -> 10 -> null
// console.log("Peek:", s.peek())              // 30
// console.log("Pop:", s.pop())                // 30
// console.log("Peek after pop:", s.peek())    // 20
// console.log("Size:", s.getSize())           // 2
// console.log("Pop:", s.pop())                // 20
// console.log("Pop:", s.pop())                // 10
// console.log("Pop on empty:", s.pop())       // 'empty'
// console.log("Stack:", s.print())            // 'empty'

// class queue{
//     constructor(){
//         this.item = []
//     }

//     isEmpty(){
//         return this.item.length == 0
//     }

//     getSize(){
//         return this.item.length
//     }

//     enqueue(value){
//         this.item.push(value)
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return 'nothing to remove'
//         }

//         return this.item.shift()
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'empty'
//         }

//         return this.item[0]
//     }

//     print(){
//         console.log(this.item)
//     }
// }

// const q = new queue()

// console.log(q.isEmpty())         // true
// console.log(q.getSize())         // 0

// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)

// q.print()                        // [10, 20, 30]
// console.log(q.peek())           // 10

// console.log(q.dequeue())        // 10
// console.log(q.dequeue())        // 20

// q.print()                        // [30]
// console.log(q.getSize())         // 1
// console.log(q.dequeue())        // 30
// console.log(q.dequeue())        // 'nothing to remove'
// console.log(q.peek())           // 'empty'


// class queue{
//     constructor() {
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
//             return 'isEmpty'
//         }

//         let val  = this.item[this.head]

//         delete this.item[this.head]
//         this.head++

//         return val
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'empty'
//         }

//         return this.item[this.front]
//     }

//     print(){
//         console.log(this.item)
//     }
// }

// const q = new queue();

// console.log(q.isEmpty());    // true
// console.log(q.getSize());    // 0

// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);

// console.log(q.peek());       // 1
// console.log(q.dequeue());    // 1
// console.log(q.peek());       // 2
// console.log(q.getSize());    // 2

// q.enqueue(4);
// q.print();                   // {1: 2, 2: 3, 3: 4}

// console.log(q.dequeue());    // 2
// console.log(q.dequeue());    // 3
// console.log(q.dequeue());    // 4
// console.log(q.dequeue());    // isEmpty
// console.log(q.peek());       // empty

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class qll{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size == 0
//     }

//     getSize(){
//         return this.size
//     }

//     enqueue(value){
//         const node = new Node(value)

//         if(this.isEmpty()){
//             this.head = node
//             this.size++
//         }
//         else{
//             let temp = this.head

//             while(temp.next){
//                 temp= temp.next
//             }

//             temp.next = node
//             node.next = null

//             this.size++
//         }
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return 'empty'
//         }else{
//             let val = this.head.value

//             this.head = this.head.next

//             this.size--

//             return val
//         }
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'empty'
//         }

//         return this.head.value
//     }
// }

// const queue = new qll();

// console.log(queue.isEmpty());   // true
// console.log(queue.getSize());   // 0

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);

// console.log(queue.peek());      // 10
// console.log(queue.getSize());   // 3
// console.log(queue.isEmpty());   // false

// console.log(queue.dequeue());   // 10
// console.log(queue.peek());      // 20
// console.log(queue.getSize());   // 2

// console.log(queue.dequeue());   // 20
// console.log(queue.dequeue());   // 30
// console.log(queue.dequeue());   // "empty"
// console.log(queue.peek());      // "empty"


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
//         this.table[index] = value
//     }

//     get(key){
//         let index = this.hash(key)

//         return this.table[index] || null
//     }

//     remove(key){
//         let index = this.hash(key)

//         this.table[index] = undefined
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

// ht.set("name", "Alice");
// ht.set("age", 25);
// ht.set("city", "Delhi");

// // Test retrieval
// console.log(ht.get("name")); // Alice
// console.log(ht.get("age"));  // 25
// console.log(ht.get("city")); // Delhi
// console.log(ht.get("country")); // null (not found)

// // Test overwrite
// ht.set("age", 30);
// console.log(ht.get("age"));  // 30

// // Test removal
// ht.remove("name");
// console.log(ht.get("name")); // null

// // Test print
// ht.print();


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
//                 return null
//             }
//         }
//         return null
//     }

//     remove(key){
//         let index = this.hash(key)

//         let bucket = this.table[index]

//         if(bucket){
//             let sameElementIndex = bucket.findIndex((item)=>item[0]==key)

//             if(sameElementIndex != -1){
//                 return bucket.splice(sameElementIndex,1)
//             }else{
//                 return 'invalid key'
//             }
//         }
//     }

//     print(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }

//     findDuplicates(){
//         let valMap = {}

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

//         let duplicates = []

//         for(let key in valMap){
//             if(valMap[key] > 1){
//                 duplicates.push(key)
//             }
//         }

//         return duplicates
//     }

//     removeDuplicates(){
//         let seen = {}

//         for(let i=0;i<this.table.length;i++){
//             let bucket = this.table[i]

//             if(bucket){
//                 const newBucket = []
//                 for(let j=0;j<bucket.length;j++){
//                     const [key,value] = bucket[j]
//                      if(!seen[value]){
//                         seen[value] = true
//                         newBucket.push([key,value])
//                      }
//                 }

//                 this.table[i] = newBucket.length > 0 ? newBucket : undefined
//             }
//         }
//     }

//     findDuplicatesFromInput(input){
//         let value = Array.isArray(input) ? input : input.split('')

//         let temp = new hashtable(50)

//         for(let i=0;i<value.length;i++){
//             let val = value[i].toString()
//             let count = temp.get(val) || 0
//             temp.set(val,count+1)
//         }

//         let duplicates = []

//         for(let i=0;i<temp.table.length;i++){
//             let bucket = temp.table[i]
//             if(bucket){
//                 for(let j=0;j<bucket.length;j++){
//                     let [key,value] = bucket[j]

//                     if(value > 1){
//                         duplicates.push(key)
//                     }
//                 }
//             }
//         }

//         return Array.isArray(input) ? duplicates : duplicates.join('')
//     }

//     removeDuplicatesFromInput(input){
//         const value = Array.isArray(input) ? input : input.split('')

//         let temp = new hashtable(50)

//         for(let i=0;i<value.length;i++){
//             let val = value[i].toString()
//             let count = temp.get(val) || 0
//             temp.set(val,count+1)
//         }

//         let unique = []

//         for(let i=0;i<temp.table.length;i++){
//             let bucket = temp.table[i]
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

//     nthMostFrequent(arr,k){
//         if(arr.length < k){
//             return 'invalid k'
//         }

//         let value = Array.isArray(arr) ? arr : arr.split('')

//         let temp = new hashtable(50)

//         for(let i=0;i<value.length;i++){
//             let val = value[i].toString()
//             let count = temp.get(val) || 0
//             temp.set(val,count+1)
//         }

//         let result = []

//         for(let i=0;i<temp.table.length;i++){
//             let bucket = temp.table[i]
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
// }


// let ht = new hashtable(10);

// // Test set and get
// ht.set('a', 1);
// ht.set('b', 2);
// ht.set('c', 3);
// console.log(ht.get('a')); // 1
// console.log(ht.get('b')); // 2
// console.log(ht.get('z')); // null

// // Test update value
// ht.set('a', 100);
// console.log(ht.get('a')); // 100

// // Test remove
// console.log(ht.remove('a')); // [['a', 100]]
// console.log(ht.get('a')); // null
// console.log(ht.remove('z')); // 'invalid key'

// // Insert duplicates
// ht.set('x', 10);
// ht.set('y', 10);
// ht.set('z', 20);
// ht.set('m', 20);

// // Test findDuplicates
// console.log(ht.findDuplicates()); // ['10','20']

// // Test removeDuplicates
// ht.removeDuplicates();
// ht.print(); // Only one of each value remains

// // Test findDuplicatesFromInput
// console.log(ht.findDuplicatesFromInput('programming')); // 'rmg'
// console.log(ht.findDuplicatesFromInput([1,2,2,3,4,4,5])); // ['2','4']

// // Test removeDuplicatesFromInput
// console.log(ht.removeDuplicatesFromInput('programming')); // 'poain'
// console.log(ht.removeDuplicatesFromInput([1,2,2,3,4,4,5])); // ['1','3','5']

// // Test nthMostFrequent
// console.log(ht.nthMostFrequent('aabbcccddddeeeee', 1)); // ['e',5]
// console.log(ht.nthMostFrequent('aabbcccddddeeeee', 3)); // ['c',3]
// console.log(ht.nthMostFrequent([1,2,2,3,3,3,4,4,4,4], 2)); // ['3',3]
// console.log(ht.nthMostFrequent([1,2,3], 5)); // 'invalid k'

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedlist{
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size == 0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.size++
        }else{
            node.next = this.head

            this.head = node

            this.size++
        }
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }
        else{
            let temp = this.head

            while(temp.next){
                temp = temp.next
            }

            temp.next = node   
        }
        this.size++
    }

    insert(index,value){
        const node = new Node(value)
        if(index < 0 || index > this.size){
            return 'invalid index'
        }
        else if(index == 0){
            this.prepend(value)
        }
        else if(index == this.size){
            this.append(value)
        }
        else{
            let temp = this.head

            for(let i=0;i<index - 1;i++){
                temp = temp.next
            }

            node.next = temp.next
            temp.next = node
            this.size++
        }
    }

    removeFromStart(){
        if(this.isEmpty()){
            return 'empty'
        }else{
            let val = this.head.value

            this.head = this.head.next

            this.size --

            return val
        }
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return 'empty'
        }
        else if(this.size == 1){
            let val = this.head.value
            this.head = null
            this.size--
            return val
        }
        else{
            let temp = this.head

            while(temp.next.next){
                temp = temp.next
            }

            let val = temp.next.value
            temp.next = null
            this.size--
            return val
        }
    }

    removeByIndex(index){
        if(index < 0 || index > this.size){
            return ' invalid index'
        }
        else if(index == 0){
            let val = this.head.value
            this.head = this.head.next
            this.size--
            return val
        }
        else if(index == this.size-1){
            let temp = this.head

            while(temp.next.next){
                temp = temp.next
            }

            let val = temp.next.value
            temp.next = null
            this.size--
            return val
        }
        else{
            let temp = this.head
            for(let i=0;i<index-1;i++){
                temp = temp.next
            }
            let val = temp.next.value
            temp.next = temp.next.next

            this.size--

            return val
        }
    }

    removeByVal(value){
        if(this.isEmpty()){
            return 'empty'
        }
        else if(this.head.value == value){
            let val = this.head.value
            this.head = this.head.next
            this.size--
            return val
        }
        else{
            let temp = this.head

            while(temp.next && temp.next.value != value){
                temp = temp.next
            }

            if(temp.next == null){
                return 'no value found'
            }

            let val = temp.next.value

            temp.next = temp.next.next

            this.size--

            return val
        }
    }

    reverse(){
        let prev = null
        let cur = this.head

        while(cur){
            let next = cur.next
            cur.next = prev
            prev = cur
            cur = next
        }

        this.head = prev
    }

    print(){
        if(this.isEmpty()){
            return 'empty'
        }else{
            let list = ''

            let temp = this.head

            while(temp){
                list+=temp.value+'->'
                temp = temp.next
            }

            list+='null'
            return list
        }
    }

    arrayToLinkedList(arr){
        for(let i=0;i<arr.length;i++){
            this.append(arr[i])
        }
    }

    linkedlistToArr(){
        let arr= []

        let temp = this.head

        while(temp){
            arr.push(temp.value)
            temp = temp.next
        }

        return arr
    }

    checkPalindrome(){
        let arr = []

        let temp = this.head

        while(temp){
            arr.push(temp.value)
            temp = temp.next
        }

        let given = arr.reverse()

        return arr.join('') === given.join('')
    }

    makeCircular(){
        let temp = this.head

        while(temp.next && temp.next != this.head){
            temp = temp.next
        }

        temp.next = this.head
    }

    checkCircular(){
        let slow = this.head

        let fast = this.head

        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next

            if(slow == fast){
                return 'cycle found'
            }
        }

        return 'not cycle'
    }

    removeDuplicates(){
        let prev = null
        let temp = this.head

        let seen ={}

        while(temp){
            if(seen[temp.value]){
                prev.next = temp.next
            }else{
                seen[temp.value] = true
                prev = temp
            }

            temp = temp.next
        }
    }

    sorting(){
        let swapped 

        do{
            swapped = false
            let temp = this.head

            while(temp && temp.next){
                if(temp.value > temp.next.value){
                    [temp.value,temp.next.value] = [temp.next.value,temp.value]
                    swapped = true
                }
                temp = temp.next
            }
        }while(swapped)
    }

    findDuplicates(){
        let temp = this.head
        let valMap = {}

        while(temp){
            if(valMap[temp.value]){
                valMap[temp.value]++
            }else{
                valMap[temp.value] = 1
            }

            temp = temp.next
        }

        let duplicates =[]

        for(let key in valMap){
            if(valMap[key] > 1){
                duplicates.push(key)
            }
        }

        return duplicates
    }

    findMidAndRemove(){
        let mid = Math.floor(this.size/2)
        return this.removeByIndex(mid)
    }
}

const ll = new linkedlist();

ll.append(1);
ll.append(2);
ll.append(3);
ll.append(2);
ll.append(4);
ll.append(3);
console.log("List:", ll.print()); // 1->2->3->2->4->3->null

console.log("Size:", ll.getSize()); // 6

console.log("Find Duplicates:", ll.findDuplicates()); // ['2', '3']

ll.removeDuplicates();
console.log("After Removing Duplicates:", ll.print()); // 1->2->3->4->null

ll.reverse();
console.log("After Reverse:", ll.print()); // 4->3->2->1->null

console.log("Is Palindrome:", ll.checkPalindrome()); // false

ll.makeCircular();
console.log("Cycle check:", ll.checkCircular()); // "cycle found"

const ll2 = new linkedlist();
ll2.arrayToLinkedList([1, 2, 3, 2, 1]);
console.log("Check palindrome:", ll2.checkPalindrome()); // true

ll2.sorting();
console.log("Sorted List:", ll2.print()); // 1->1->2->2->3->null

console.log("Mid Removed:", ll2.findMidAndRemove()); // Should remove middle element (2)
console.log("After Mid Removed:", ll2.print());

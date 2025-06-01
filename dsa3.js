// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class Bst{
//     constructor(){
//         this.root = null
//     }

//     isEmpty(){
//         return this.root === null
//     }

//     insert(value){
//         let node = new Node(value)

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
//             }else{
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
//             return false
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
//         let queue = []
//         queue.push(this.root)

//         while(queue.length){
//             let root = queue.shift()

//             console.log(root.value)

//             if(root.left){
//                 queue.push(root.left)
//             }

//             if(root.right){
//                 queue.push(root.right)
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

//     isPrime(value){
//         if(value < 2){
//             return false
//         }

//         for(let i=2;i<=Math.sqrt(value);i++){
//             if(value % i == 0){
//                 return false
//             }
//         }

//         return true
//     }

//     findPrimes(root,list=[]){
//         if(root){
//             this.findPrimes(root.left,list)
//             if(this.isPrime(root.value)){
//                 list.push(root.value)
//             }
//             this.findPrimes(root.right,list)
//         }

//         return list
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

//     isIdentical(tree1,tree2){
//         if(!tree1 && !tree2){
//             return true
//         }

//         if(!tree1 || !tree2){
//             return false
//         }

//         return tree1.value == tree2.value && this.isIdentical(tree1.left,tree2.left) && this.isIdentical(tree1.right,tree2.right)
//     }

//     inOrderTraversal(root,list=[]){
//         if(root){
//             this.inOrderTraversal(root.left,list)
//             list.push(root.value)
//             this.inOrderTraversal(root.right,list)
//         }
//         return list
//     }

//     findKthSmallest(root,k){
//         let result = this.inOrderTraversal(root)
//         return result[k-1] || null
//     }

//     findKthLargest(root,k){
//         let result = this.inOrderTraversal(root)
//         return result[result.length-k] || null
//     }

//     closestValue(root,k){
//         let result = this.inOrderTraversal(root)
//         let closest = result[0]
//         for(let i=0;i<result.length;i++){
//             if(Math.abs(result[i] - k) < Math.abs(closest - k)){
//                 closest = result[i]
//             }
//         }
//         return closest
//     }

//     successor(root,k){
//         let result = this.inOrderTraversal(root)

//         let successor = null

//         for(let i=0;i<result.length;i++){
//             if(result[i] == k){
//                 if(i+1 < result.length){
//                     successor = result[i+1]
//                 }
//             }
//         }

//         return successor
//     }

//     predecessor(root,k){
//         let result = this.inOrderTraversal(root)
//         let predecessor = null

//         for(let i=0;i<result.length;i++){
//             if(result[i] == k){
//                 if(i-1 >= 0){
//                     predecessor = result[i-1]
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

//         unique.forEach((val)=>{
//             this.insert(val)
//         })
//     }

//     findParent(root,value){
//         if(!root){
//             return null
//         }

//         let parent = null

//         function inOrder(root){
//             if(root){
//                 inOrder(root.left)

//                 if(root.left && root.left.value == value){
//                     parent = root.value
//                 }

//                 if(root.right && root.right.value == value){
//                     parent = root.value
//                 }

//                 inOrder(root.right)
//             }
//         }

//         inOrder(root)

//         return parent
//     }

//     findChildren(root,value){
//         if(!root){
//             return null
//         }
//         else if(root.value == value){
//             const children = {
//                 leftChildren : root.left ? root.left.value : null,
//                 rightChildren: root.right ? root.right.value : null
//             }

//             return children
//         }
//         else if(value < root.value){
//             return this.findChildren(root.left,value)
//         }
//         else{
//             return this.findChildren(root.right,value)
//         }
//     }

//     findSiblings(root,value){
//         if(!root){
//             return null
//         }
//         let sibling = null
//         function inOrder(root){
//             if(root){
//                 inOrder(root.left)

//                 if(root.left && root.left.value == value){
//                     sibling = root.right.value
//                 }

//                 if(root.right && root.right.value == value){
//                     sibling = root.left.value
//                 }

//                 inOrder(root.right)
//             }
//         }

//         inOrder(root)

//         return sibling
//     }

//     findLeafNode(root,list=[]){
//         if(root){
//             if(!root.left && !root.right){
//                 list.push(root.value)
//             }
//             this.findLeafNode(root.left,list)
//             this.findLeafNode(root.right,list)
//         }
//         return list
//     }

//     findAncestor(root,value,anscestor = []){
//         if(!root){
//             return null
//         }
//         anscestor.push(root.value)
//         if(root.value == value){
//             return anscestor
//         }
//         else if(value < root.value){
//             return this.findAncestor(root.left,value,anscestor)
//         }
//         else{
//             return this.findAncestor(root.right,value,anscestor)
//         }
//     }

//     findDescendants(root,value){
//         if(!root){
//             return null
//         }
//         else if(root.value == value){
//             return this.collectDescendant(root)
//         }
//         else if(value < root.value){
//             return this.findDescendants(root.left,value)
//         }
//         else{
//             return this.findDescendants(root.right,value)
//         }
//     }

//     collectDescendant(root,list=[]){
//         if(root){
//             list.push(root.value)
//             this.collectDescendant(root.left,list)
//             this.collectDescendant(root.right,list)
//         }
//         return list
//     }

//     findHeight(){
//         let queue = []
//         queue.push(this.root)
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

//     findDegree(root,k){
//         if(!root){
//             return null
//         }
//         else if(root.value == k){
//             let degree = 0

//             if(root.left){
//                 degree++
//             }

//             if(root.right){
//                 degree++
//             }

//             return degree
//         }
//         else if(k < root.value){
//             return this.findDegree(root.left,k)
//         }
//         else{
//             return this.findDegree(root.right,k)
//         }
//     }

//     findDepth(root,k){
//         if(!root){
//             return null
//         }


//         let depth = 0

//         while(root){
//             if(k < root.value){
//                 root = root.left
//                 depth++
//             }
//             else if(k > root.value){
//                 root = root.right
//                 depth++
//             }
//             else{
//                 return depth
//             }
//         }
//     }

//     findDistance(root,k){
//         if(!root){
//             return null
//         }

//         let distance = 0

//         while(root){
//             if(k < root.value){
//                 root = root.left
//                 distance++
//             }
//             else if(k > root.value){
//                 root = root.right
//                 distance++
//             }
//             else{
//                 return distance
//             }
//         }
//     }

//     findpath(root,k){
//         if(!root){
//             return null
//         }
//         let path = []
//         while(root){
//             path.push(root.value)

//             if(k < root.value){
//                 root = root.left
//             }
//             else if(k > root.value){
//                 root = root.right
//             }
//             else{
//                 return path
//             }
//         }
//     }

//     findLCA(n1,n2){
//         let root = this.root

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

//     findPathBetweenTwoNodes(n1,n2){
//         let LCA = this.findLCA(n1,n2)
//         if(!LCA){
//             return []
//         }

//         let path1 = this.findpath(LCA,n1)
//         let path2 = this.findpath(LCA,n2)
//         return [...path1.reverse(),...path2.slice(1)]
//     }

//     findDistanceBetweenTwoNodes(n1,n2){
//         let LCA = this.findLCA(n1,n2)

//         if(!LCA){
//             return 0
//         }

//         let distance1 = this.findDistance(LCA,n1)
//         let distance2 = this.findDistance(LCA,n2)

//         return distance1 + distance2
//     }

//     oneChildNode(root){
//         if(!root){
//             return null
//         }
//         let count = 0
//         let nodes = []
//         function preOrder(root){
//             if(root){

//                 if((root.left && !root.right) ||(!root.left && root.right)){
//                     count++
//                     nodes.push(root.value)
//                 }
//                 preOrder(root.left)

//                 preOrder(root.right)
//             }
//         }

//         preOrder(root)

//         return {count,nodes}
//     }

//     noOfNodes(root){
//         if(!root){
//             return null
//         }

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

//     leftNodeOnly(root){
//         if(!root){
//             return null
//         }

//         let count = 0

//         function preOrder(root){
//             if(root){
//                 if(root.left && !root.right){
//                     count++
//                 }
//                 preOrder(root.left)
//                 preOrder(root.right)
//             }
//             return count
//         }

//         preOrder(root)

//         return count
//     }

//     rightNodeOnly(root){
//         if(!root){
//             return null
//         }
//         let count = 0
//         function preOrder(root){
//             if(root){
//                 if(!root.left && root.right){
//                     count++
//                 }
//                 preOrder(root.left)
//                 preOrder(root.right)
//             }
//         }

//         preOrder(root)

//         return count
//     }
// }

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

// function testTree() {
//     const tree = new Bst();

//     [20, 10, 30, 5, 15, 25, 35, 3, 7, 13, 17].forEach(n => tree.insert(n));

//     console.log("Parent of 15:", tree.findParent(tree.root, 15)); // 10
//     console.log("Children of 10:", tree.findChildren(tree.root, 10)); // { leftChildren: 5, rightChildren: 15 }
//     console.log("Siblings of 5:", tree.findSiblings(tree.root, 5)); // 15

//     console.log("Leaf Nodes:", tree.findLeafNode(tree.root)); // [3, 7, 13, 17, 25, 35]
//     console.log("Ancestors of 13:", tree.findAncestor(tree.root, 13)); // [20, 10, 15]
//     console.log("Descendants of 10:", tree.findDescendants(tree.root, 10)); // [10, 5, 3, 7, 15, 13, 17]

//     console.log("Tree Height:", tree.findHeight()); // 4
//     console.log("Degree of 10:", tree.findDegree(tree.root, 10)); // 2
//     console.log("Depth of 17:", tree.findDepth(tree.root, 17)); // 3
//     console.log("Distance from root to 17:", tree.findDistance(tree.root, 17)); // 3

//     console.log("Path to 17:", tree.findpath(tree.root, 17)); // [20, 10, 15, 17]
//     console.log("LCA of 3 and 7:", tree.findLCA(3, 7).value); // 5
//     console.log("Path between 3 and 17:", tree.findPathBetweenTwoNodes(3, 17)); // [3, 5, 10, 15, 17]
//     console.log("Distance between 3 and 17:", tree.findDistanceBetweenTwoNodes(3, 17)); // 4

//     const { count, nodes } = tree.oneChildNode(tree.root);
//     console.log("One-child nodes count:", count); // 0 or more depending on structure
//     console.log("One-child nodes:", nodes);

//     console.log("Total nodes:", tree.noOfNodes(tree.root)); // 11
//     console.log("Left-only nodes count:", tree.leftNodeOnly(tree.root)); // count of nodes with only left child
//     console.log("Right-only nodes count:", tree.rightNodeOnly(tree.root)); // count of nodes with only right child
// }

// testTree()

// function bubbleSort(arr){
//     let swapped
//     do{
//         swapped = false
//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i] > arr[i+1]){
//                 let temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1]= temp
//                 swapped = true
//             }
//         }
//     }while(swapped)
//         return arr
// }

// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let cur = arr[i]
//         let j = i-1
//         while(j>= 0 && arr[j] > cur){
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
//         let temp = arr[i]
//         arr[i] = arr[minElement]
//         arr[minElement] = temp
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
//   { input: [5, 2, 9, 1, 5, 6], expected: [1, 2, 5, 5, 6, 9] },
//   { input: [], expected: [] },
//   { input: [1], expected: [1] },
//   { input: [3, -2, -1, 0], expected: [-2, -1, 0, 3] },
//   { input: [5, 5, 5, 5], expected: [5, 5, 5, 5] },
//   { input: [9, 7, 5, 3, 1], expected: [1, 3, 5, 7, 9] },
// ];

// const sortingFunctions = {
//   bubbleSort,
//   insertionSort,
//   selectionSort,
//   quickSort,
//   mergeSort
// };

// for (const [name, sortFn] of Object.entries(sortingFunctions)) {
//   console.log(`\nTesting: ${name}`);
//   for (const { input, expected } of testCases) {
//     const inputCopy = [...input];
//     const output = sortFn([...input]);
//     const result = JSON.stringify(output) === JSON.stringify(expected) ? "✅ PASS" : `❌ FAIL (got ${output})`;
//     console.log(`  Input: ${JSON.stringify(inputCopy)} → ${result}`);
//   }
// }

// class Stack{
//     constructor(){
//         this.item = []
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
//             return 'stack is empty'
//         }

//         return this.item.pop()
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'stack is empty'
//         }

//         return this.item[this.item.length-1]
//     }

//     print(){
//         console.log(this.item)
//     }
// }


// const stack = new Stack();

// console.log("Is empty?", stack.isEmpty());              // true
// console.log("Peek:", stack.peek());                     // 'stack is empty'
// console.log("Pop:", stack.pop());                       // 'stack is empty'
// console.log("Size:", stack.getSize());                  // 0

// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.print();                                          // [10, 20, 30]

// console.log("Is empty?", stack.isEmpty());              // false
// console.log("Size:", stack.getSize());                  // 3
// console.log("Peek:", stack.peek());                     // 30

// console.log("Pop:", stack.pop());                       // 30
// console.log("Peek after pop:", stack.peek());           // 20
// console.log("Size after pop:", stack.getSize());        // 2
// stack.print();                                          // [10, 20]

// class Stack{
//     constructor(){
//         this.item = {}
//         this.size = 0
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
//             return 'stack is empty'
//         }

//         let val = this.item[this.size-1]
//         delete this.item[this.size-1]
//         this.size--
//         return val
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'stack is empty'
//         }

//         return this.item[this.size-1]
//     }
// }

// const stack = new Stack();

// console.log("✅ Is empty?", stack.isEmpty());            // true
// console.log("✅ Size:", stack.getSize());               // 0
// console.log("✅ Peek:", stack.peek());                  // 'stack is empty'
// console.log("✅ Pop:", stack.pop());                    // 'stack is empty'

// stack.push(5);
// stack.push(10);
// stack.push(15);

// console.log("✅ Is empty after pushes?", stack.isEmpty()); // false
// console.log("✅ Size:", stack.getSize());                  // 3
// console.log("✅ Peek:", stack.peek());                     // 15

// console.log("✅ Pop:", stack.pop());                       // 15
// console.log("✅ Peek after pop:", stack.peek());           // 10
// console.log("✅ Size after pop:", stack.getSize());        // 2

// stack.push(20);
// console.log("✅ Peek after pushing 20:", stack.peek());    // 20
// console.log("✅ Pop:", stack.pop());                       // 20
// console.log("✅ Pop:", stack.pop());                       // 10
// console.log("✅ Pop:", stack.pop());                       // 5
// console.log("✅ Pop on empty:", stack.pop());              // 'stack is empty'

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class Stack{
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

//     push(value){
//         const node = new Node(value)

//         node.next = this.head
//         this.head = node
//         this.size++ 
//     }

//     pop(){
//         if(this.isEmpty()){
//             return 'stack is empty'
//         }

//         let val = this.head.value
//         this.head = this.head.next
//         this.size--
//         return val
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

//         let list = ''
//         let temp = this.head

//         while(temp){
//             list += temp.value + '->'
//             temp = temp.next
//         }

//         list += 'null'

//         console.log(list)
//     }
// }

// const stack = new Stack();

// console.log(stack.isEmpty());             // true
// console.log(stack.getSize());             // 0
// console.log(stack.peek());                // 'stack is empty'
// console.log(stack.pop());                 // 'stack is empty'

// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.print();                            // 30 -> 20 -> 10 -> null

// console.log(stack.peek());                // 30
// console.log(stack.pop());                 // 30
// console.log(stack.peek());                // 20
// console.log(stack.getSize());             // 2
// stack.print();                            // 20 -> 10 -> null

// console.log(stack.pop());                              // 20
// console.log(stack.pop());                              // 10
// console.log(stack.pop());                 // 'stack is empty'
// stack.print();                            // 'stack is empty'

// class Queue{
//     constructor() {
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

//     print(){
//         console.log(this.item)
//     }
// }

// const queue = new Queue();

// console.log(queue.isEmpty());     // true
// console.log(queue.getSize());     // 0
// console.log(queue.peek());        // 'empty'
// console.log(queue.dequeue());     // 'empty'

// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);

// queue.print();                    // [1, 2, 3]

// console.log(queue.peek());        // 1
// console.log(queue.dequeue());     // 1
// console.log(queue.peek());        // 2
// console.log(queue.getSize());     // 2
// console.log(queue.isEmpty());     // false

// queue.dequeue();                  // 2
// queue.dequeue();                  // 3
// console.log(queue.dequeue());     // 'empty'
// queue.print();                    // []

// class Queue{
//     constructor(){
//         this.item = {}
//         this.head = 0
//         this.tail = 0
//     }

//     isEmpty(){
//         return this.tail - this.head == 0
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
//             return 'empty'
//         }

//         let val = this.item[this.head]
//         delete this.item[this.head] 
//         this.head++
//         return val
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'empty'
//         }

//         return this.item[this.head]
//     }

//     print(){
//         console.log(this.item)
//     }
// }

// const queue = new Queue();

// console.log(queue.isEmpty());      // true
// console.log(queue.getSize());      // 0
// console.log(queue.peek());         // 'empty'
// console.log(queue.dequeue());      // 'empty'

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);

// queue.print();                     // { '0': 10, '1': 20, '2': 30 }

// console.log(queue.peek());         // 10
// console.log(queue.dequeue());      // 10
// console.log(queue.peek());         // 20
// console.log(queue.getSize());      // 2
// console.log(queue.isEmpty());      // false

// queue.enqueue(40);
// queue.print();                     // { '1': 20, '2': 30, '3': 40 }

// console.log(queue.dequeue());      // 20
// console.log(queue.dequeue());      // 30
// console.log(queue.dequeue());      // 40
// console.log(queue.dequeue());      // 'empty'

// queue.print();                     // {}

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class Queue{
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
//         }
//         else{
//             let temp = this.head

//             while(temp.next){
//                 temp = temp.next
//             }

//             temp.next = node
//         }

//         this.size++
//     }

//     dequeue(){
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
//             return 'it is emtpy'
//         }

//         let temp = this.head

//         let list = ''

//         while(temp){
//             list += temp.value + '->'
//             temp = temp.next
//         }

//         list += 'null'

//         console.log(list)
//     }
// }

// const queue = new Queue();

// console.log(queue.isEmpty());      // true
// console.log(queue.getSize());      // 0
// console.log(queue.peek());         // 'empty'
// console.log(queue.dequeue());      // 'empty'

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);

// queue.print();                     // 10 -> 20 -> 30 -> null

// console.log(queue.peek());         // 10
// console.log(queue.dequeue());      // 10
// console.log(queue.peek());         // 20
// console.log(queue.getSize());      // 2

// queue.enqueue(40);
// queue.print();                     // 20 -> 30 -> 40 -> null

// queue.dequeue();                   // 20
// queue.dequeue();                   // 30
// queue.dequeue();                   // 40
// console.log(queue.dequeue());      // 'empty'
// queue.print();                     // 'it is empty'

// class Hashtable{
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

// const table = new Hashtable(10);

// // ✅ Basic inserts
// table.set("name", "Alice");
// table.set("age", 25);
// table.set("city", "Paris");

// console.log(table.get("name"));   // Alice
// console.log(table.get("age"));    // 25
// console.log(table.get("city"));   // Paris

// // ✅ Remove a key
// table.remove("age");
// console.log(table.get("age"));    // undefined

// // ✅ Print the table
// table.print();
// // Example Output (indexes will vary):
// // 3 'Alice'
// // 7 'Paris'

// // ⚠️ Collision test (if they hash to same index)
// table.set("abc", "first");
// table.set("acb", "second");
// console.log(table.get("abc"));    // Might print 'second' due to collision (bad)

// class Hashtable{
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

//         let bucket = this.table[index]

//         if(!bucket){
//             this.table[index] = [[key,value]]
//         }
//         else{
//             let sameIndex = bucket.find((item)=>item[0]==key)

//             if(sameIndex){
//                 sameIndex[1] = value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }

//     get(key){
//         let index = this.hash(key)
//         let bucket = this.table[index]

//         if(bucket){
//             let sameIndex = bucket.find((item)=>item[0]==key)

//             if(sameIndex){
//                 return sameIndex[1]
//             }
//         }

//         return 'no match'
//     }

//     remove(key){
//         let index = this.hash(key)
//         let bucket = this.table[index]
//         if(bucket){
//             let sameIndex = bucket.findIndex((item)=>item[0]==key)

//             if(sameIndex != -1){
//                return bucket.splice(sameIndex,1)
//             }
//         }

//         return null
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

//         let duplicates  = []

//         for(let val in valMap){
//             if(valMap[val] > 1){
//                 duplicates.push(val)
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
//                     let [key,value] = bucket[j]
    
//                     if(!seen[value]){
//                         seen[value] = true
//                         newBucket.push([key,value])
//                     }
//                 }
//                 this.table[i] = newBucket.length > 0 ? newBucket : undefined
//             }
//         }
//     }

//     findDuplicatesFromInput(val){
//         let input = Array.isArray(val) ? val : val.split('')

//         const table = new Hashtable(50)

//         for(let i=0;i<input.length;i++){
//             let value = input[i].toString()
//             let count = table.get(value) || 0
//             table.set(value,count+1)
//         }

//         let duplicates = []

//         for(let i=0;i<table.table.length;i++){
//             let bucket = table.table[i]
//             if(bucket){
//                 for(let j=0;j<bucket.length;j++){
//                     let [key,value] = bucket[j]

//                     if(value > 1){
//                         duplicates.push(key)
//                     }
//                 }
//             }
//         }

//         return Array.isArray(val) ? duplicates : duplicates.join('')
//     }

//     removeDuplicatesFromInput(val){
//         const input = Array.isArray(val) ? val : val.split('')

//         const table = new Hashtable(50)

//         for(let i=0;i<input.length;i++){
//             let value = input[i].toString()
//             let count = table.get(value) || 0
//             table.set(value,count+1) 
//         }

//         let unique = []

//         for(let i=0;i<table.table.length;i++){
//             let bucket = table.table[i]
//             if(bucket){
//                 for(let j=0;j<bucket.length;j++){
//                     let [key,value] = bucket[j]

//                     if(value == 1){
//                         unique.push(key)
//                     }
//                 }
//             }
//         }

//         return Array.isArray(val) ? unique : unique.join('')
//     }

//     oneTime(val){
//         const input = Array.isArray(val) ? val : val.split('')

//         const table = new Hashtable(50)

//         for(let i=0;i<input.length;i++){
//             let value = input[i].toString()
//             let count = table.get(value) || 0
//             table.set(value,count+1)
//         }

//         let removedDuplicates = []
//         let seen = {}

//         for(let i=0;i<table.table.length;i++){
//             let bucket = table.table[i]
//             if(bucket){
//                 for(let j=0;j<bucket.length;j++){
//                     let [key,value] = bucket[j]
//                     if(!seen[key]){
//                         seen[key] = true
//                         removedDuplicates.push(key)
//                     }
//                 }
//             }
//         }

//         return removedDuplicates
//     }

//     nthMostFrequentElement(arr,k){
//         let input = Array.isArray(arr) ? arr : arr.split('')

//         const table = new Hashtable(50)

//         for(let i=0;i<input.length;i++){
//             let val = input[i].toString()
//             let count = table.get(val) || 0
//             table.set(val,count+1) 
//         }

//         let result = []

//         for(let i=0;i<table.table.length;i++){
//             let bucket = table.table[i]
//             if(bucket){
//                 for(let j=0;j<bucket.length;j++){
//                     let [key,value] = bucket[j]
//                     result.push([key,value])
//                 }
//             }
//         }

//         result.sort((a,b)=> b[1]-a[1])

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

// const ht = new Hashtable(10);

// // ========== Basic set/get ==========
// ht.set("name", "Bob");
// ht.set("age", 30);
// ht.set("city", "Paris");

// console.assert(ht.get("name") === "Bob", "❌ get(name)");
// console.assert(ht.get("age") === 30, "❌ get(age)");
// console.assert(ht.get("city") === "Paris", "❌ get(city)");
// console.assert(ht.get("unknown") === "no match", "❌ get(unknown)");

// // ========== Update existing key ==========
// ht.set("name", "Alice");
// console.assert(ht.get("name") === "Alice", "❌ update existing key");

// // ========== Remove ==========
// ht.remove("age");
// console.assert(ht.get("age") === "no match", "❌ remove(age)");

// // ========== findDuplicates ==========
// ht.set("a", "x");
// ht.set("b", "x"); // Duplicate value "x"
// ht.set("c", "y");
// console.assert(JSON.stringify(ht.findDuplicates()) === JSON.stringify(["x"]), "❌ findDuplicates");

// // ========== removeDuplicates ==========
// ht.removeDuplicates();
// const remainingValues = [];
// for (let i = 0; i < ht.table.length; i++) {
//     let bucket = ht.table[i];
//     if (bucket) {
//         for (let j = 0; j < bucket.length; j++) {
//             remainingValues.push(bucket[j][1]);
//         }
//     }
// }
// console.assert(!remainingValues.includes("x"), "❌ removeDuplicates (x still exists)");

// // ========== findDuplicatesFromInput ==========
// const strInput = "programming"; // g, r, m are duplicates
// const arrInput = ["a", "b", "c", "a", "d", "b"];

// const expectedStrDup = "rgm";
// const expectedArrDup = ["a", "b"];

// console.assert(ht.findDuplicatesFromInput(strInput) === expectedStrDup, "❌ findDuplicatesFromInput(string)");
// console.assert(JSON.stringify(ht.findDuplicatesFromInput(arrInput)) === JSON.stringify(expectedArrDup), "❌ findDuplicatesFromInput(array)");

// // ========== removeDuplicatesFromInput ==========
// const expectedUniqueStr = "poain"; // p,o,a,i,n appear once in "programming"
// const expectedUniqueArr = ["c", "d"]; // only unique in array

// console.assert(ht.removeDuplicatesFromInput(strInput) === expectedUniqueStr, "❌ removeDuplicatesFromInput(string)");
// console.assert(JSON.stringify(ht.removeDuplicatesFromInput(arrInput)) === JSON.stringify(expectedUniqueArr), "❌ removeDuplicatesFromInput(array)");

// // ========== oneTime ==========
// const oneTimeInput = "aabbcde";
// const oneTimeExpected = ["a", "b", "c", "d", "e"]; // just once-per-entry
// console.assert(JSON.stringify(ht.oneTime(oneTimeInput)) === JSON.stringify(oneTimeExpected), "❌ oneTime");

// // ========== nthMostFrequentElement ==========
// const freqInput = "aaabbcccddee"; // a:3, c:3, b:2, d:2, e:2
// const k = 2;
// const nthResult = ht.nthMostFrequentElement(freqInput, k);

// const expectedOptions = [["a", 3], ["c", 3], ["b", 2], ["d", 2], ["e", 2]];
// const valid = expectedOptions.some(([char, freq]) => nthResult[0] === char && nthResult[1] === freq);
// console.assert(valid, "❌ nthMostFrequentElement");

// // ========== Print ==========
// // Uncomment to visualize the hash table
// // ht.print();

// console.log("✅ All tests passed!");


// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList{
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

//     prepend(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }
//         else{
//             node.next = this.head
//             this.head = node
//         }

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
//                 temp = temp.next
//             }
            
//             temp.next = node
//         }
//         this.size++
//     }

//     insert(index,value){
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

//             const node = new Node(value)

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
//         else{
//             let val = this.head.value
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
//             let val = this.head.value
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
//         if(index < 0 || index >= this.size){
//             return 'invalid index'
//         }
//         else if(index == 0){
//             let val = this.head.value
//             this.head = this.head.next
//             this.size--
//             return val
//         }
//         else{
//             let temp = this.head

//             for(let i=0;i<index-1;i++){
//                 temp = temp.next
//             }
//             let val = temp.next.value
//             temp.next = temp.next.next
//             this.size--
//             return val
//         }
//     }

//     removeByValue(value){
//         if(this.isEmpty()){
//             return 'list is empty'
//         }
//         else if(value == this.head.value){
//             let val = this.head.value
//             this.head = this.head.next
//             this.size--
//             return val
//         }
//         else{
//             let temp = this.head

//             while(temp.next && temp.next.value!= value){
//                 temp = temp.next
//             }

//             if(temp.next == null){
//                 return 'no matching found'
//             }else{
//                 let val = temp.next.value
//                 temp.next = temp.next.next
//                 this.size--
//                 return val
//             }
//         }
//     }


//     print(){
//         if(this.isEmpty()){
//             return 'list is empty'
//         }else{
//             let list = ''

//             let temp = this.head

//             while(temp){
//                 list += temp.value + '->'
//                 temp = temp.next
//             }

//             list += 'null'
//             console.log(list)
//         }
//     }

//     search(value){
//         if(this.isEmpty()){
//             return 'list is empty'
//         }
//         else{
//             let temp = this.head

//             while(temp){
//                 if(temp.value == value){
//                     return true
//                 }
//                 temp = temp.next
//             }

//             return false
//         }
//     }

//     findMidAndRemove(){
//         let index = Math.floor(this.size/2)
//         return this.removeByIndex(index)
//     }

//     makeCircular(){
//         let temp = this.head

//         while(temp.next){
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

//     reverse(){
//         let prev = null
//         let cur = this.head

//         while(cur){
//             let next = cur.next
//             cur.next = prev
//             prev = cur
//             cur = next
//         }

//         this.head = prev
//     }
// }

// const list = new LinkedList();
// list.append(10);
// list.append(20);
// list.append(30);
// list.append(40);
// list.append(50);
// list.print(); // 10->20->30->40->50->null

// // Test findMidAndRemove
// console.log(list.findMidAndRemove()); // should remove 30
// list.print(); // 10->20->40->50->null

// // Test makeCircular and checkCircular
// list.makeCircular();
// console.log(list.checkCircular()); // true

// // Test reverse
// list.reverse(); // Should warn or skip if circular

// console.log(list.print())
// const list = new LinkedList();

// // Test 1: isEmpty on empty list
// console.log(list.isEmpty()); // true
// console.log(list.getSize()); // 0

// // Test 2: prepend and print
// list.prepend(10);
// list.prepend(20);
// list.print(); // 20->10->null

// // Test 3: append and print
// list.append(30);
// list.print(); // 20->10->30->null

// // Test 4: insert at different positions
// list.insert(0, 5);    // beginning
// list.insert(2, 15);   // middle
// list.insert(5, 35);   // end
// list.print(); // 5->20->15->10->30->35->null

// // Test 5: removeFromStart
// console.log(list.removeFromStart()); // 5
// list.print();

// // Test 6: removeFromEnd
// console.log(list.removeFromEnd()); // 35
// list.print();

// // Test 7: removeByIndex
// console.log(list.removeByIndex(1)); // 15
// list.print(); // Remaining list

// // Test 8: removeByValue
// console.log(list.removeByValue(30)); // 30
// list.print();

// // Test 9: search
// console.log(list.search(10)); // true
// console.log(list.search(100)); // false

// // Test 10: invalid inserts
// console.log(list.insert(-1, 99)); // 'invalid index'
// console.log(list.insert(100, 99)); // 'invalid index'

// // Test 11: invalid removals
// console.log(list.removeByIndex(100)); // 'invalid index'
// console.log(list.removeByValue(999)); // 'no matching found'

// // Test 12: remove everything
// while (!list.isEmpty()) {
//     console.log('Removed:', list.removeFromStart());
// }
// console.log(list.removeFromEnd()); // 'nothing to remove'
// console.log(list.search(10)); // 'list is empty'



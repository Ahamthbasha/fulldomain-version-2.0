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

//         if(value < root.value){
//             root.left = this.deleteNode(root.left,value)
//         }
//         else if(value > root.value){
//             root.right = this.deleteNode(root.right,value)
//         }
//         else{
//             if(!root.right && !root.left){
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
// }

// const tree = new bst();

// tree.insert(10);
// tree.insert(5);
// tree.insert(15);
// tree.insert(3);
// tree.insert(7);
// tree.insert(12);
// tree.insert(17);

// console.log("InOrder (Should be sorted):");
// tree.inOrder(tree.root); // 3 5 7 10 12 15 17

// console.log("PreOrder:");
// tree.preOrder(tree.root); // 10 5 3 7 15 12 17

// console.log("PostOrder:");
// tree.postOrder(tree.root); // 3 7 5 12 17 15 10

// console.log("LevelOrder:");
// tree.levelOrder(tree.root); // 10 5 15 3 7 12 17

// console.log("Min:", tree.min(tree.root)); // 3
// console.log("Max:", tree.max(tree.root)); // 17

// console.log("Search 7:", tree.search(tree.root, 7)); // true
// console.log("Search 20:", tree.search(tree.root, 20)); // false

// console.log("Delete 5 (Node with two children):");
// tree.delete(5);
// tree.inOrder(tree.root); // Should not include 5

// console.log("Delete 15 (Node with two children):");
// tree.delete(15);
// tree.inOrder(tree.root); // Should not include 15

// console.log("Delete 3 (Leaf node):");
// tree.delete(3);
// tree.inOrder(tree.root); // Should not include 3

// console.log("Delete 10 (Root node):");
// tree.delete(10);
// tree.inOrder(tree.root); // Should not include 10

// console.log("Final Tree (InOrder):");
// tree.inOrder(tree.root); // Remaining nodes


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
//             return 'invalid vertex'
//         }

//         return this.adjancencyList[vertex1].has(vertex2) && this.adjancencyList[vertex2].has(vertex1)
//     }

//     print(){
//         for(let vertex in this.adjancencyList){
//             console.log(`${vertex} => ${[...this.adjancencyList[vertex]]}`)
//         }
//     }

//     removeEdge(vertex1,vertex2){
//         if(!this.adjancencyList[vertex1] || !this.adjancencyList[vertex2]){
//             return "invalid vertex"
//         }

//         this.adjancencyList[vertex1].delete(vertex2)
//         this.adjancencyList[vertex2].delete(vertex1)
//     }

//     removeVertex(vertex){
//         if(!this.adjancencyList[vertex]){
//             return 'invalid vertex'
//         }

//         for(let adjancyVertex of this.adjancencyList[vertex]){
//             this.removeEdge(vertex,adjancyVertex)
//         }

//         delete this.adjancencyList[vertex]

//         return 'deleted'
//     }

//     bfs(start){
//         let queue = []

//         queue.push(start)

//         let visitedNode = new Set()

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
//         let queue = []

//         queue.push({vertex:start,parent:null})

//         let visitedNode = new Set()
//         visitedNode.add(start)

//         while(queue.length){
//             let {vertex,parent} = queue.shift()

//             for(let neighbor of this.adjancencyList[vertex]){
//                 if(!visitedNode.has(neighbor)){
//                     visitedNode.add(neighbor)
//                     queue.push({vertex:neighbor,parent:vertex})
//                 }else if(neighbor != parent){
//                     return 'cycle detected'
//                 }
//             }
//         }
//         return 'no cycle detected'
//     }

//     dfsCycleDetection(start,visitedNode=new Set(),parent = null){
//         visitedNode.add(start)

//         for(let neighbor of this.adjancencyList[start]){
//             if(!visitedNode.has(neighbor)){
//                 if(this.dfsCycleDetection(neighbor,visitedNode,start)){
//                     return true
//                 }
//             }else if(neighbor != parent){
//                 return true
//             }
//         }

//         return false
//     }
// }

// const g = new graph();

// g.addEdge('A', 'B');
// g.addEdge('A', 'C');
// g.addEdge('B', 'D');
// g.addEdge('D', 'E');
// g.addEdge('E', 'B'); // Creates a cycle

// console.log("Graph:");
// g.print();

// console.log("\nHas Edge A-B:", g.hasEdge('A', 'B')); // true
// console.log("Has Edge A-D:", g.hasEdge('A', 'D')); // false
// console.log("Has Edge X-Y:", g.hasEdge('X', 'Y')); // invalid vertex

// console.log("\nBFS from A:");
// g.bfs('A');

// console.log("\nDFS from A:");
// g.dfs('A');

// console.log("\nCycle Detection (BFS):", g.bfsCycleDetection('A')); // cycle detected
// console.log("Cycle Detection (DFS):", g.dfsCycleDetection('A') ? "cycle detected" : "no cycle");

// console.log("\nRemove Edge D-E:");
// g.removeEdge('D', 'E');
// g.print();

// console.log("\nRemove Vertex B:");
// console.log(g.removeVertex('B'));
// g.print();

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

//         return this.collectWord(node,word)
//     }

//     collectWord(node,word,list=[]){
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
//             return 'this is not end of word'
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

//         return 'word deleted'
//     }

//     countWords(){
//         let node = this.root

//         let queue = []

//         queue.push(node)

//         let count = 0

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

//     longestPrefix(word){
//         let node = this.root

//         let longestPrefix = ''

//         for(let i=0;i<word.length;i++){
//             let char = word[i]

//             if(!node.children[char]){
//                  break
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
//                 return 'no match'
//             }
//             node = node.children[char]
//         }

//         let queue = []

//         queue.push(node)

//         let countPrefix =0

//         while(queue.length){
//             let cur = queue.shift()

//             if(cur.isEndOfWord){
//                 countPrefix++
//             }

//             for(let char in cur.children){
//                 queue.push(cur.children[char])
//             }
//         }

//         return countPrefix
//     }
// }

// const t = new trie();

// // Insert words
// t.insert("apple");
// t.insert("app");
// t.insert("apricot");
// t.insert("bat");
// t.insert("batch");
// t.insert("batman");
// t.insert("banana");

// // Test search
// console.log(t.search("apple"));     // true
// console.log(t.search("app"));       // true
// console.log(t.search("appl"));      // false

// // Test startsWith
// console.log(t.startsWith("ap"));    // true
// console.log(t.startsWith("bat"));   // true
// console.log(t.startsWith("cat"));   // false

// // Test autoComplete
// console.log(t.autoComplete("app"));     // ["app", "apple"]
// console.log(t.autoComplete("bat"));     // ["bat", "batch", "batman"]
// console.log(t.autoComplete("ba"));      // ["bat", "batch", "batman", "banana"]

// // Test print all words
// console.log(t.print());  // ['apple', 'app', 'apricot', 'bat', 'batch', 'batman', 'banana']

// // Test delete
// console.log(t.delete("bat"));      // word deleted
// console.log(t.search("bat"));      // false
// console.log(t.search("batman"));   // true (still exists)

// // Test countWords
// console.log(t.countWords());       // 6 (after deleting "bat")

// // Test longestPrefix
// console.log(t.longestPrefix("batmobile")); // "bat"
// console.log(t.longestPrefix("applesauce")); // "apple"
// console.log(t.longestPrefix("xyz"));       // ""

// // Test countPrefix
// console.log(t.countPrefix("app")); // 2 ("app", "apple")
// console.log(t.countPrefix("bat")); // 2 ("batch", "batman")
// console.log(t.countPrefix("z"));   // "no match"


// class maxHeap{
//     constructor(){
//         this.heap = []
//     }

//     isEmpty(){
//         return this.heap.length == 0
//     }

//     getSize(){
//         return this.heap.length
//     }

//     getParentIndex(index){
//         return Math.floor((index-1)/2)
//     }

//     getLeftIndex(index){
//         return 2 * index + 1
//     }

//     getRightIndex(index){
//         return 2 * index + 2
//     }

//     getParent(index){
//         return this.heap[this.getParentIndex(index)]
//     }

//     getLeftChild(index){
//         return this.heap[this.getLeftIndex(index)]
//     }

//     getRightChild(index){
//         return this.heap[this.getRightIndex(index)]
//     }

//     hasParent(index){
//         return this.getParentIndex(index) >= 0
//     }

//     hasLeftChild(index){
//         return this.getLeftIndex(index) < this.heap.length
//     }

//     hasRightChild(index){
//         return this.getRightIndex(index) < this.heap.length
//     }

//     swap(index1,index2){
//         let temp = this.heap[index1]
//         this.heap[index1] = this.heap[index2]
//         this.heap[index2] = temp
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'empty'
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
//             largest = this.getLeftIndex(index)

//             if(this.hasRightChild(index) && this.getRightChild(index) > this.getLeftChild(index)){
//                 largest = this.getRightIndex(index)
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

// let heap = new maxHeap();
// heap.add(10);
// heap.add(20);
// heap.add(5);
// console.log(heap.peek()); // Expected: 20


// heap.add(5);
// heap.add(30);
// heap.add(20);
// heap.add(10);
// console.log(heap.remove()); // Expected: 30
// console.log(heap.peek());   // Expected: 20

// heap = new maxHeap();
// console.log(heap.heapSort([3, 1, 4, 2, 5])); 
// // Expected: [5, 4, 3, 2, 1] (descending order)

// heap = new maxHeap();
// console.log(heap.findKthSmallest([7, 10, 4, 3, 20, 15], 3)); 
// // Expected: 7 (3rd smallest is 7)

// heap = new maxHeap();
// console.log(heap.peek()); 
// // Expected: "empty"

// heap = new maxHeap();
// console.log(heap.remove()); 
// // Expected: "nothing to remove"


// class minHeap{
//     constructor(){
//         this.heap = []
//     }

//     isEmpty(){
//         return this.heap.length == 0
//     }

//     getSize(){
//         return this.heap.length
//     }

//     getParentIndex(index){
//         return Math.floor((index-1)/2)
//     }

//     getLeftIndex(index){
//         return 2 * index + 1
//     }

//     getRightIndex(index){
//         return 2 * index + 2
//     }

//     getParent(index){
//         return this.heap[this.getParentIndex(index)]
//     }

//     getLeft(index){
//         return this.heap[this.getLeftIndex(index)]
//     }

//     getRight(index){
//         return this.heap[this.getRightIndex(index)]
//     }

//     hasParent(index){
//         return this.getParentIndex(index) >= 0
//     }

//     hasLeft(index){
//         return this.getLeftIndex(index) < this.heap.length
//     }

//     hasRight(index){
//         return this.getRightIndex(index) < this.heap.length
//     }

//     swap(index1,index2){
//         let temp = this.heap[index1]
//         this.heap[index1] = this.heap[index2]
//         this.heap[index2] = temp
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'empty'
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

//         let smallest
        
//         while(this.hasLeft(index)){
//             smallest = this.getLeftIndex(index)

//             if(this.hasRight(index) && this.getRight(index) < this.getLeft(index)){
//                 smallest = this.getRightIndex(index)
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
//             return 'invalid k'
//         }

//         const h = new minHeap()

//         for(let i=0;i<arr.length;i++){
//             h.add(arr[i])
//             if(h.heap.length > k){
//                 h.remove()
//             }
//         }

//         return h.peek()
//     }
// }

// let heap = new minHeap();
// heap.add(20);
// heap.add(10);
// heap.add(30);
// console.log(heap.peek()); // Expected: 10


// heap = new minHeap();
// heap.add(5);
// heap.add(2);
// heap.add(8);
// console.log(heap.remove()); // Expected: 2
// console.log(heap.peek());   // Expected: 5


// heap = new minHeap();
// console.log(heap.heapSort([7, 1, 3, 5, 9])); 
// // Expected: [1, 3, 5, 7, 9]

// heap = new minHeap();
// console.log(heap.findKthLargest([3, 2, 1, 5, 6, 4], 2)); 
// // Expected: 5 (2nd largest is 5)

// heap = new minHeap();
// console.log(heap.peek()); // Expected: "empty"
// console.log(heap.remove()); // Expected: "nothing to remove"

// heap = new minHeap();
// console.log(heap.findKthLargest([4, 2], 5)); 
// // Expected: "invalid k"

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

//     search(root,target){
//         if(!root){
//             return false
//         }
//         else if(root.value == target){
//             return true
//         }
//         else if(target < root.value){
//             return this.search(root.left,target)
//         }
//         else{
//             return this.search(root.right,target)
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

//     min(root){
//         if(!root){
//             return null
//         }

//         while(root.left){
//             root = root.left
//         }

//         return root
//     }

//     max(root){
//         if(!root){
//             return null
//         }

//         while(root.right){
//             root = root.right
//         }

//         return root
//     }

//     delete(root,value){
//         this.root = this.deleteNode(root,value)
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

//             root.value = this.min(root.right).value
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

//     findPrime(root,result = []){
//         if(root){
//             this.findPrime(root.left,result)
//             if(this.isPrime(root.value)){
//                 result.push(root.value)
//             }
//             this.findPrime(root.right,result)
//         }
//         return result
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

//     inOrderTraversal(root,result=[]){
//         if(root){
//             this.inOrderTraversal(root.left,result)
//             result.push(root.value)
//             this.inOrderTraversal(root.right,result)
//         }
//         return result
//     }

//     kthLargest(root,k){
//         let result = this.inOrderTraversal(root)

//         return result[result.length - k] || null
//     }

//     kthSmallest(root,k){
//         let result = this.inOrderTraversal(root)

//         return result[k-1] || null
//     }

//     findClosest(root,k){
//         let result = this.inOrderTraversal(root)

//         let closest = null

//         for(let i=0;i<result.length;i++){
//             if(result[i] >= k){
//                 closest=result[i]
//                 break
//             }
//         }
//         return closest
//     }

//     findSuccessor(root,k){
//         let result = this.inOrderTraversal(root)

//         let successor = null

//         for(let i=0;i<result.length;i++){
//             if(result[i] == k){
//                 if(i+1 < result.length){
//                     successor = result[i+1]
//                     break
//                 }
//             }
//         }

//         return successor
//     }

//     findPredecessor(root,k){
//         let result = this.inOrderTraversal(root)
//         let predecessor = null
//         for(let i=0;i<result.length;i++){
//             if(result[i] == k){
//                 if(i-1 >= 0){
//                     predecessor = result[i-1]
//                     break
//                 }
//             }
//         }

//         return predecessor
//     }

//     findHeight(root){
//         let queue = []
//         queue.push(root)

//         let height = 0

//         while(queue.length){
//             let nodeCount = queue.length
//             height++

//             while(nodeCount > 0){
//                 let cur = queue.shift()

//                 if(cur){
//                     if(cur.left){
//                         queue.push(cur.left)
//                     }

//                     if(cur.right){
//                         queue.push(cur.right)
//                     }
//                 }

//                 nodeCount--
//             }
//         }
//         return height
//     }

//     findParent(root,target){
//         if(!root){
//             return root
//         }

//         let parent

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
//         else if(root.value == target){
//             const children = {
//                 leftChildren : root.left ? root.left.value : null,
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

//     findSibling(root,target){
//         if(!root){
//             return null
//         }
//         let sibling 

//         function inOrder(root){
//             if(root){
//                 inOrder(root.left)

//                 if(root.left && root.left.value == target){
//                     sibling = root.right ? root.right.value : null
//                     return 
//                 }

//                 if(root.right && root.right.value == target){
//                     sibling = root.left ? root.left.value : null
//                     return
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

//     findAncestor(root,target,result=[]){
//         if(!root){
//             return null
//         }

//         result.push(root.value)
//         if(root.value == target){
//             return result
//         }
//         else if(target<root.value){
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

//     findDegree(root,k){
//         if(!root){
//             return null
//         }

//         let depth =0

//         if(root.value == k){
//             if(root.left){
//                 depth++
//             }

//             if(root.right){
//                 depth++
//             }

//             return depth
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
//             return root
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

//     path(root,k){
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

//     findLca(root,n1,n2){
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

//     findPathBetweenTwoNodes(n1,n2){
//         let lca = this.findLca(this.root,n1,n2)

//         if(!lca){
//             return []
//         }

//         let path1 = this.path(lca,n1)
//         let path2 = this.path(lca,n2)

//         return [...path1.reverse(),...path2.slice(1)]
//     }

//     findDistanceBetweenTwoNodes(n1,n2){
//         let lca = this.findLca(this.root,n1,n2)

//         if(!lca){
//             return 0
//         }

//         let distance1 = this.findDistance(lca,n1)
//         let distance2 = this.findDistance(lca,n2)

//         return distance1 + distance2
//     }
// }


// const bst = new tree();

// bst.insert(50);
// bst.insert(30);
// bst.insert(70);
// bst.insert(20);
// bst.insert(40);
// bst.insert(60);
// bst.insert(80);

// console.log("Inorder (Should be sorted):");
// bst.inOrder(bst.root);  // 20 30 40 50 60 70 80

// console.log("\nSearch 40:", bst.search(bst.root, 40)); // true
// console.log("Search 100:", bst.search(bst.root, 100)); // false

// console.log("\nMin:", bst.min(bst.root).value); // 20
// console.log("Max:", bst.max(bst.root).value); // 80

// console.log("\nKth Smallest (3rd):", bst.kthSmallest(bst.root, 3)); // 40
// console.log("Kth Largest (2nd):", bst.kthLargest(bst.root, 2)); // 70

// console.log("\nIs BST:", bst.isBst(bst.root)); // true

// console.log("\nFind Primes:", bst.findPrime(bst.root)); // e.g., [ 2, 3, 5, 7 ] based on input

// console.log("\nClosest to 58:", bst.findClosest(bst.root, 58)); // Should be 60

// console.log("\nSuccessor of 60:", bst.findSuccessor(bst.root, 60)); // 70
// console.log("Predecessor of 60:", bst.findPredecessor(bst.root, 60)); // 50

// console.log("\nHeight of Tree:", bst.findHeight(bst.root)); // 3

// console.log("\nParent of 60:", bst.findParent(bst.root, 60)); // 70
// console.log("Children of 70:", bst.findChildren(bst.root, 70)); // { leftChildren: 60, rightChildren: 80 }
// console.log("Sibling of 60:", bst.findSibling(bst.root, 60)); // 80

// console.log("\nLeaf Nodes:", bst.findLeafNode(bst.root)); // e.g., [20, 40, 60, 80]
// console.log("Ancestors of 40:", bst.findAncestor(bst.root, 40)); // [50, 30, 40]
// console.log("Descendants of 30:", bst.findDescendant(bst.root, 30)); // [30, 20, 40]

// console.log("\nDelete 70:");
// bst.delete(bst.root, 70);
// bst.inOrder(bst.root); // 20 30 40 50 60 80


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
//         return this.table[index] || null
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


// // const ht = new hashtable(10);
// // ht.set("apple", 100);
// // console.log(ht.get("apple")); // Expected: 100

// // const ht = new hashtable(10);
// // ht.set("banana", 200);
// // ht.set("banana", 300);
// // console.log(ht.get("banana")); // Expected: 300


// // const ht = new hashtable(10);
// // ht.set("cherry", 150);
// // console.log(ht.remove("cherry")); // Expected: 150
// // console.log(ht.get("cherry"));    // Expected: null

// // const ht = new hashtable(10);
// // console.log(ht.get("notHere")); // Expected: null

// // const ht = new hashtable(5); // Small size to force collision
// // ht.set("ab", 1);  // 'a' + 'b' = 97 + 98 = 195 => 195 % 5 = 0
// // ht.set("ba", 2);  // 'b' + 'a' = 98 + 97 = 195 => 195 % 5 = 0 (same index)

// // console.log(ht.get("ab")); // ❌ Expected: 1 (but will be overwritten)
// // console.log(ht.get("ba")); // ✅ Expected: 2

// const ht = new hashtable(10);
// ht.set("dog", "bark");
// ht.set("cat", "meow");
// ht.print(); 
// Expected output (indexes may vary):
// 2 bark
// 3 meow

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

//         let bucket = this.table[index]

//         if(!bucket){
//             this.table[index] = [[key,value]]
//         }else{
//             let sameElement = bucket.find((index)=>index[0] == key)

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
//             let sameElement = bucket.find((index)=>index[0] == key)

//             if(sameElement){
//                 return sameElement[1]
//             }
//         }
//         return 'not found'
//     }

//     remove(key){
//         let index = this.hash(key)

//         let bucket = this.table[index]

//         if(bucket){
//             let elementIndex = bucket.findIndex((item)=>item[0]==key)

//             if(elementIndex != -1){
//                 bucket.splice(elementIndex,1)
//             }
//         }
//         return 'no key mathing with this'
//     }

//     print(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }

//     findDuplicates(){
//         let duplicates = []
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

//         for(let key in valMap){
//             if(valMap[key] > 1){
//                 duplicates.push(key)
//             }
//         }

//         return duplicates
//     }

//     removeDuplicates(){
//         let seenMap = {}

//         for(let i=0;i<this.table.length;i++){
//             let bucket = this.table[i]
//             if(bucket){
//                 const newBucket = []
//                 for(let j=0;j<bucket.length;j++){
//                     let [key,value] = bucket[j]
//                     if(!seenMap[value]){
//                         seenMap[value] = true
//                         newBucket.push([key,value])
//                     }
//                 }
//                 this.table[i] = newBucket.length > 0 ? newBucket : undefined
//             }
//         }
//     }

//     findDuplicatesFromInput(input){
//         let value = Array.isArray(input) ? input : input.split('')

//         let table = new hashtable(50)
//         for(let i=0;i<value.length;i++){
//             let val = value[i].toString()
//             let count = table.get(val) || 0
//             table.set(val,count+1)
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

//         return Array.isArray(input) ? duplicates : duplicates.join('')
//     }

//     removeDuplicatesFromInput(input){
//         let val = Array.isArray(input) ? input : input.split('')

//         let table = new hashtable(50)

//         for(let i=0;i<val.length;i++){
//             let value = val[i].toString()
//             let count = table.get(value) || 0
//             table.set(value,count+1)
//         }

//         let unique = []
//         let seenMap = {}

//         for(let i=0;i<table.table.length;i++){
//             let bucket = table.table[i]
//             if(bucket){
//                 for(let j=0;j<bucket.length;j++){
//                     if(!seenMap[bucket[j][0]]){
//                         seenMap[bucket[j][0]] = true
//                         unique.push(bucket[j][0])
//                     }
//                 }
//             }
//         }

//         return Array.isArray(input) ? unique : unique.join('')
//     }

//     nthMostFrequency(input,k){
//         let value = Array.isArray(input) ? input : input.split('')

//         let table = new hashtable(50)

//         for(let i=0;i<value.length;i++){
//             let val = value[i].toString()
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

//         result.sort((a,b)=>b[1]-a[1])

//         return result[k-1] || null
//     }
// }

// // const ht = new hashtable(10);
// // ht.set("apple", 100);
// // console.log(ht.get("apple")); // Expected: 100

// // const ht = new hashtable(5);
// // ht.set("ab", 1); // 'a' + 'b' = 195 => 195 % 5 = 0
// // ht.set("ba", 2); // 'b' + 'a' = 195 => 195 % 5 = 0 (collision)

// // console.log(ht.get("ab")); // Expected: 1
// // console.log(ht.get("ba")); // Expected: 2

// // const ht = new hashtable(10);
// // ht.set("banana", 300);
// // ht.set("banana", 400);
// // console.log(ht.get("banana")); // Expected: 400

// // const ht = new hashtable(10);
// // console.log(ht.get("notHere")); // Expected: 'not found'

// // const ht = new hashtable(10);
// // ht.set("cherry", 150);
// // console.log(ht.get("cherry")); // Expected: 150
// // ht.remove("cherry");
// // console.log(ht.get("cherry")); // Expected: 'not found'

// // const ht = new hashtable(10);
// // console.log(ht.remove("nope")); // Expected: 'no key mathing with this'

// // const ht = new hashtable(10);
// // ht.set("dog", "bark");
// // ht.set("god", "divine"); // Possible collision with "dog" (depending on hash)
// // ht.print(); 
// // // Expected: Indexed output showing key-value pairs (array of [key, value])

// // let ht = new hashtable(10);
// // ht.set("a", 1);
// // ht.set("b", 2);
// // ht.set("c", 1); // Duplicate value
// // console.log(ht.get("a")); // 1
// // console.log(ht.get("z")); // 'not found'
// // ht.remove("a");
// // console.log(ht.get("a")); // 'not found'
// // ht.print();

// // let ht = new hashtable(10);
// // ht.set("a", 1);
// // ht.set("b", 2);
// // ht.set("c", 1);
// // ht.set("d", 2);
// // console.log(ht.findDuplicates()); // ['1', '2']

// // let ht = new hashtable(10);
// // ht.set("a", 1);
// // ht.set("b", 2);
// // ht.set("c", 1);
// // ht.set("d", 2);
// // ht.removeDuplicates();
// // ht.print();
// // // Should print only two entries, one for 1 and one for 2

// let ht = new hashtable(10)

// console.log(ht.findDuplicatesFromInput("aabccdee"))      // Output: 'ace' or similar
// console.log(ht.findDuplicatesFromInput([1, 2, 3, 2, 3]))

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
//     for(let i=1;i<arr.length;i++){
//         let cur = arr[i]
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
//         let min = i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[min] > arr[j]){
//                 min = j
//             }
//         }

//         let temp = arr[min]
//         arr[min] = arr[i]
//         arr[i]= temp
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
//     [],
//     [5],
//     [5, 3],
//     [5, 1, 4, 2, 8],
//     [3, 3, 3],
//     [9, 7, 5, 3, 1],
//     [1, 2, 3, 4, 5],
//     [100, -50, 20, 0, -1],
// ];

// function testSort(sortFn, name) {
//     console.log(`\nTesting ${name}:`);
//     for (let test of testCases) {
//         const input = [...test];  // clone to prevent in-place effects
//         const output = sortFn([...input]);  // clone again for safety
//         const expected = [...input].sort((a, b) => a - b);
//         const pass = JSON.stringify(output) === JSON.stringify(expected);
//         console.log(`Input: ${input} ➜ Output: ${output} ➜ ${pass ? '✅ PASS' : '❌ FAIL'}`);
//     }
// }

// testSort(bubbleSort, 'Bubble Sort');
// testSort(insertionSort, 'Insertion Sort');
// testSort(selectionSort, 'Selection Sort');
// testSort(quickSort, 'Quick Sort');
// testSort(mergeSort, 'Merge Sort');


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
//             return 'nothing to remove'
//         }

//         let val = this.item[this.item.length-1]
//         this.item.pop()
//         return val
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'stack is empty'
//         }
//         return this.item[this.item.length-1]
//     }
// }

// const s = new stack();

// // Test 1: Stack should be empty initially
// console.log(s.isEmpty()); // true
// console.log(s.getSize()); // 0
// console.log(s.peek());    // "stack is empty"
// console.log(s.pop());     // "nothing to remove"

// // Test 2: Push elements
// s.push(10);
// s.push(20);
// s.push(30);

// console.log(s.isEmpty()); // false
// console.log(s.getSize()); // 3
// console.log(s.peek());    // 30

// // Test 3: Pop top element
// console.log(s.pop());     // 30
// console.log(s.getSize()); // 2
// console.log(s.peek());    // 20

// // Test 4: Pop remaining elements
// console.log(s.pop());     // 20
// console.log(s.pop());     // 10

// // Test 5: Try popping from empty stack again
// console.log(s.pop());     // "nothing to remove"
// console.log(s.peek());    // "stack is empty"
// console.log(s.isEmpty()); // true

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
//             return 'nothing to remove'
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

// // Test 1: Initial state
// console.log(s.isEmpty()); // true
// console.log(s.getSize()); // 0
// console.log(s.peek());    // "empty"
// console.log(s.pop());     // "nothing to remove"
// s.print();                // {}

// // Test 2: Push elements
// s.push("A");
// s.push("B");
// s.push("C");

// console.log(s.isEmpty()); // false
// console.log(s.getSize()); // 3
// console.log(s.peek());    // "C"
// s.print();                // { '0': 'A', '1': 'B', '2': 'C' }

// // Test 3: Pop an element
// console.log(s.pop());     // "C"
// console.log(s.getSize()); // 2
// console.log(s.peek());    // "B"
// s.print();                // { '0': 'A', '1': 'B' }

// // Test 4: Clear the stack
// console.log(s.pop());     // "B"
// console.log(s.pop());     // "A"
// console.log(s.pop());     // "nothing to remove"
// console.log(s.peek());    // "empty"
// console.log(s.isEmpty()); // true
// s.print();                // {}

// class Node{
//     constructor(value) {
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
//         return this.size == 0
//     }

//     getSize(){
//         return this.size
//     }

//     push(value){
//         let node = new Node(value)

//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     pop(){
//         if(this.isEmpty()){
//             return 'nothing to remove'
//         }else{
//             let val = this.head.value
//             this.head = this.head.next
//             this.size--
//             return val
//         }
//     }

//     peek(){
//         if(this.isEmpty()){
//             return "empty"
//         }
//         else{
//             return this.head.value
//         }
//     }

//     print(){
//         if(this.isEmpty()){
//             return "empty"
//         }else{
//             let list = ''

//             let temp = this.head

//             while(temp){
//                 list += temp.value+'->'
//                 temp = temp.next
//             }

//             list+='null'

//             return list
//         }
//     }
// }

// const s = new stack();

// // Test 1: Initial state
// console.log(s.isEmpty());   // true
// console.log(s.getSize());   // 0
// console.log(s.peek());      // "empty"
// console.log(s.pop());       // "nothing to remove"
// console.log(s.print());     // "empty"

// // Test 2: Push elements
// s.push(10);
// s.push(20);
// s.push(30);

// console.log(s.isEmpty());   // false
// console.log(s.getSize());   // 3
// console.log(s.peek());      // 30
// console.log(s.print());     // "30->20->10->null"

// // Test 3: Pop one
// console.log(s.pop());       // 30
// console.log(s.getSize());   // 2
// console.log(s.peek());      // 20
// console.log(s.print());     // "20->10->null"

// // Test 4: Pop all
// console.log(s.pop());       // 20
// console.log(s.pop());       // 10
// console.log(s.pop());       // "nothing to remove"
// console.log(s.peek());      // "empty"
// console.log(s.print());     // "empty"

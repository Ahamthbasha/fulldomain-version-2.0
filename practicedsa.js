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
//         if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]){
//             return 'vertex1 or vertex2 is not found'
//         }

//         return this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
//     }

//     print(){
//         for(let vertex in this.adjacencyList){
//             console.log(`${vertex} => ${[...this.adjacencyList[vertex]]}`)
//         }
//     }

//     removeEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]){
//             return 'invalid vertex'
//         }

//         this.adjacencyList[vertex1].delete(vertex2)
//         this.adjacencyList[vertex2].delete(vertex1)
//     }

//     removeVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             return 'invalid vertex'
//         }

//         for(let adjancyVertex of this.adjacencyList[vertex]){
//             this.removeEdge(vertex,adjancyVertex)
//         }

//         delete this.adjacencyList[vertex]
//     }

//     bfs(start){
//         let visitedNode = new Set()
//         visitedNode.add(start)
//         let queue = []
//         queue.push(start)

//         while(queue.length){
//             let vertex = queue.shift()
//             console.log(vertex)
//             for(let neighbor of this.adjacencyList[vertex]){
//                 if(!visitedNode.has(neighbor)){
//                     visitedNode.add(neighbor)
//                     queue.push(neighbor)
//                 }
//             }
//         }
//     }

//     dfs(start,visitedNode=new Set()){
//         visitedNode.add(start)
//         console.log(start)

//         for(let neighbor of this.adjacencyList[start]){
//             if(!visitedNode.has(neighbor)){
//                 this.dfs(neighbor,visitedNode)
//             }
//         }
//     }

//     bfsCycleDetection(start){
//         let visitedNode = new Set()
//         visitedNode.add(start)

//         let queue =[]
//         queue.push({vertex:start,parent:null})

//         while(queue.length){
//             let {vertex,parent} = queue.shift()

//             for(let neighbor of this.adjacencyList[vertex]){
//                 if(!visitedNode.has(neighbor)){
//                     visitedNode.add(neighbor)
//                     queue.push({vertex:neighbor,parent:vertex})
//                 }
//                 else if(neighbor != parent){
//                     return 'cycle detected in bfs'
//                 }
//             }
//         }
//         return 'cycle not detected in bfs'
//     }

//     dfsCycleDetection(start,visitedNode=new Set(),parent=null){
//         visitedNode.add(start)

//         for(let neighbor of this.adjacencyList[start]){
//             if(!visitedNode.has(neighbor)){
//                 if(this.dfsCycleDetection(neighbor,visitedNode,start)){
//                     return true
//                 }
//             }
//             else if(neighbor != parent){
//                 return true
//             }
//         }
//         return false
//     }
// }

// const g = new graph()

// // Add vertices and edges
// g.addVertex("A")
// g.addVertex("B")
// g.addVertex("C")
// g.addEdge("A", "B")
// g.addEdge("A", "C")
// g.addEdge("B", "C")  // Creates a cycle A-B-C-A

// // Print the graph
// g.print()

// // Test hasEdge
// console.log(g.hasEdge("A", "B")) // true
// console.log(g.hasEdge("A", "D")) // vertex1 or vertex2 is not found

// // Test BFS and DFS traversal
// console.log("BFS:")
// g.bfs("A") // A, B, C

// console.log("DFS:")
// g.dfs("A") // A, B, C or A, C, B depending on implementation

// // Test cycle detection
// console.log("Cycle detection BFS:", g.bfsCycleDetection("A")) // cycle detected in bfs
// console.log("Cycle detection DFS:", g.dfsCycleDetection("A")) // true

// // Test removeEdge
// g.removeEdge("A", "B")
// console.log(g.hasEdge("A", "B")) // false

// // Test removeVertex
// g.removeVertex("C")
// g.print() // Should show only A and B now

// // Test graph with no cycle
// const g2 = new graph()
// g2.addEdge("X", "Y")
// g2.addEdge("Y", "Z")
// console.log("Cycle detection:", g2.dfsCycleDetection("X")) // false
// console.log("Cycle detection:", g2.bfsCycleDetection("X")) // cycle not detected in bfs


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

//     startsWith(word){
//         let node = this.root

//         for(let i=0;i<word.length;i++){
//             let char = word[i]
//             if(!node.children[char]){
//                 return 'no matching'
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
//                 return 'invalid word'
//             }
//             path.push([node,char])
//             node = node.children[char]
//         }

//         if(!node.isEndOfWord){
//             return 'word is not ending'
//         }

//         node.isEndOfWord = false

//         for(let i=word.length-1;i>=0;i--){
//             let [parentNode,char] = path[i]
//             let childNode = parentNode.children[char]
//             if(Object.keys(childNode.children).length > 0|| childNode.isEndOfWord){
//                 break
//             }

//             delete parentNode.children[char]
//         }
//         return 'word is deleted'
//     }
// }

// const t = new trie()

// // Insert words
// t.insert('cat')
// t.insert('can')
// t.insert('cap')
// t.insert('dog')
// t.insert('dove')

// // Search tests
// console.log(t.search('cat'))   // true
// console.log(t.search('ca'))    // false
// console.log(t.search('cap'))   // true
// console.log(t.search('dove'))  // true
// console.log(t.search('do'))    // false

// // startsWith tests
// console.log(t.startsWith('ca'))   // true
// console.log(t.startsWith('do'))   // true
// console.log(t.startsWith('z'))    // false

// // autoComplete tests
// console.log(t.autoComplete('ca'))  // ['cat', 'can', 'cap']
// console.log(t.autoComplete('do'))  // ['dog', 'dove']
// console.log(t.autoComplete('z'))   // []

// // print all
// console.log(t.print())  // ['cat', 'can', 'cap', 'dog', 'dove']

// // delete tests
// console.log(t.delete('cap'))     // 'word is deleted'
// console.log(t.search('cap'))     // false
// console.log(t.autoComplete('ca')) // ['cat', 'can']
// console.log(t.delete('cap'))     // 'invalid word'
// console.log(t.delete('ca'))      // 'word is not ending'

// class Node{
//     constructor(){
//         this.children = {}
//         this.isEndOfWord = false
//     }
// }

// class suffixTrie{
//     constructor(word){
//         this.root = new Node()
//         this.buildSuffix(word)
//     }

//     buildSuffix(word){
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
//         let  node = this.root

//         for(let i=0;i<word.length;i++){
//             let char = word[i]
//             if(!node.children[char]){
//                 return 'no match'
//             }
//             node = node.children[char]
//         }
//         return true
//     }
// }

// // Create suffix trie
// const sTrie = new suffixTrie('banana')

// // Valid suffixes and substrings
// console.log(sTrie.search('banana')) // true
// console.log(sTrie.search('anana'))  // true
// console.log(sTrie.search('nana'))   // true
// console.log(sTrie.search('ana'))    // true
// console.log(sTrie.search('na'))     // true
// console.log(sTrie.search('a'))      // true

// // Valid substrings (not just suffixes, but part of suffixes)
// console.log(sTrie.search('nan'))    // true
// console.log(sTrie.search('ban'))    // true
// console.log(sTrie.search('bana'))   // true

// // Invalid substrings
// console.log(sTrie.search('nab'))    // false
// console.log(sTrie.search('ananas')) // false
// console.log(sTrie.search('apple'))  // false
// console.log(sTrie.search('nnaa'))   // false

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

//     countWord(){
//         let queue = []
//         queue.push(this.root)
//         let count = 0

//         while(queue.length){
//             let node = queue.shift()

//             if(node.isEndOfWord){
//                 count++
//             }

//             for(let char in node.children){
//                 queue.push(node.children[char])
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
//                 break
//             }
//             longestPrefix+=char
//             node = node.children[char]
//         }

//         return longestPrefix
//     }

//     countPrefix(prefix){
//         let node = this.root

//         for(let i=0;i<prefix.length;i++){
//             let char = prefix[i]

//             if(!node.children[char]){
//                 return 'invalid prefix'
//             }

//             node = node.children[char]
//         }

//         let queue =[]

//         queue.push(node)
//         let countPrefix = 0
//         while(queue.length){
//             let child = queue.shift()

//             if(child.isEndOfWord){
//                 countPrefix++
//             }

//             for(let char in child.children){
//                 queue.push(child.children[char])
//             }
//         }

//         return countPrefix
//     }
// }

// const trie = new Trie()

// // Insert words
// trie.insert("apple")
// trie.insert("app")
// trie.insert("ape")
// trie.insert("bat")
// trie.insert("bath")
// trie.insert("banana")

// // Test: countWord
// console.log(trie.countWord()) // Expected: 6

// // Test: longestPrefix
// console.log(trie.longestPrefix("applet")) // Expected: "apple"
// console.log(trie.longestPrefix("application")) // Expected: "app"
// console.log(trie.longestPrefix("batman")) // Expected: "bat"
// console.log(trie.longestPrefix("cat")) // Expected: ""

// // Test: countPrefix
// console.log(trie.countPrefix("app")) // Expected: 2 ("app", "apple")
// console.log(trie.countPrefix("ba"))  // Expected: 3 ("bat", "bath", "banana")
// console.log(trie.countPrefix("ban")) // Expected: 1 ("banana")
// console.log(trie.countPrefix("z"))   // Expected: 'invalid prefix'

// class MaxHeap{
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

//     getparent(index){
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
//         return this.heap.length == 0
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

//         while(this.hasParent(index) && this.getparent(index) < this.heap[index]){
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

        
//         while(this.hasLeftChild(index)){
//             let largest = this.getLeftChildIndex(index)
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
//         let heap = new MaxHeap()

//         for(let i=0;i<arr.length;i++){
//             heap.add(arr[i])
//         }

//         let sortedArr = []

//         while(heap.heap.length){
//             sortedArr.push(heap.remove())
//         }


//         return sortedArr
//     }

//     findKthSmallest(arr,k){
//         let heap = new MaxHeap()

//         for(let i=0;i<arr.length;i++){
//             heap.add(arr[i])
//             if(heap.heap.length > k){
//                 heap.remove()
//             }
//         }

//         return heap.peek()
//     }
// }

// function runTests() {
//     let heap = new MaxHeap();

//     // Test add and peek
//     heap.add(10);
//     heap.add(15);
//     heap.add(20);
//     heap.add(17);
//     heap.add(25);

//     console.log(heap.peek()); // 25

//     // Test remove
//     console.log(heap.remove()); // 25
//     console.log(heap.peek());   // 20

//     // Test heap sort
//     const arr = [3, 1, 5, 2, 4];
//     console.log(heap.heapSort(arr)); // [5, 4, 3, 2, 1] - descending

//     // Test heap sort with ascending output
//     const sortedDesc = heap.heapSort(arr);
//     const sortedAsc = [...sortedDesc].reverse();
//     console.log(sortedAsc); // [1, 2, 3, 4, 5]

//     // Test kth smallest
//     const nums = [7, 10, 4, 3, 20, 15];
//     const k = 3;
//     console.log(heap.findKthSmallest(nums, k)); // 7 (the 3rd smallest)
// }

// runTests();

// class MinHeap{
//     constructor(){
//         this.heap = []
//     }

//     isEmpty(){
//         return this.heap.length == 0
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
//             return 'nothing to remove'
//         }

//         let val = this.heap[0]

//         this.heap[0] = this.heap[this.heap.length - 1]

//         this.heap.pop()

//         this.heapifyDown()

//         return val
//     }

//     heapifyDown(){
//         let index = 0
//         let smallest
//         while(this.hasLeftChild(index)){
//             smallest=this.getLeftChildIndex(index)

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
//         let minHeap = new MinHeap()

//         for(let i=0;i<arr.length;i++){
//             minHeap.add(arr[i])
//         }

//         let sortedArr = []

//         while(minHeap.heap.length){
//             sortedArr.push(minHeap.remove())
//         }

//         return sortedArr
//     }

//     findKthLargest(arr,k){
//         let minHeap = new MinHeap()

//         for(let i=0;i<arr.length;i++){
//             minHeap.add(arr[i])
//             if(minHeap.heap.length > k){
//                 minHeap.remove()
//             }
//         }

//         return minHeap.peek()
//     }
// }

// function testMinHeap() {
//     let heap = new MinHeap();

//     // Test 1: Add elements
//     heap.add(10);
//     heap.add(4);
//     heap.add(15);
//     heap.add(1);
//     console.log(heap.peek()); // should be 1

//     // Test 2: Remove elements
//     console.log(heap.remove()); // should be 1
//     console.log(heap.peek());   // should be 4

//     // Test 3: Heap sort
//     let arr = [5, 3, 8, 1, 2];
//     console.log(heap.heapSort(arr)); // should be [1, 2, 3, 5, 8]

//     // Test 4: Find Kth largest
//     let nums = [7, 10, 4, 3, 20, 15];
//     let k = 3;
//     console.log(heap.findKthLargest(nums, k)); // should be 15 (3rd largest)

//     // Edge case: Peek from empty heap
//     let emptyHeap = new MinHeap();
//     console.log(emptyHeap.peek()); // 'heap is empty'

//     // Edge case: Remove from empty heap
//     console.log(emptyHeap.remove()); // 'nothing to remove'
// }

// testMinHeap();

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
// }

// const arr = [10, 20, 15, 30, 5];
// console.log("Original Array:", arr);
// heapSort(arr);
// console.log("Sorted Array:", arr);

//graph

// class graph{
//     constructor(){
//         this.adjacencyList ={}
//     }


//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = new Set()
//         }
//     }

//     addEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]){
//             return 'vertex1 or vertex2 is not found'
//         }

//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex1)
//     }

//     hasEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]){
//             return 'vertex1 or vertex2 is missing'
//         }

//         return this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
//     }

//     removeEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]){
//             return 'vertex1 or vertex2 is missing'
//         }

//         this.adjacencyList[vertex1].delete(vertex2)
//         this.adjacencyList[vertex2].delete(vertex1)
//     }

//     removeVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             return 'vertex is not found'
//         }

//         for(let adjacentVertex of this.adjacencyList[vertex]){
//             this.removeEdge(vertex,adjacentVertex)
//         }

//         delete this.adjacencyList[vertex]
//     }

//     print(){
//         for(let vertex in this.adjacencyList){
//             console.log(`${vertex} => ${[...this.adjacencyList[vertex]]}`)
//         }
//     }

//     bfsTraversal(start){
//         let visitedNode = new Set()
//         visitedNode.add(start)

//         let queue = []
//         queue.push(start)

//         while(queue.length){
//             let vertex = queue.shift()
//             console.log(vertex)
//             for(let neighbor of this.adjacencyList[vertex]){
//                 if(!visitedNode.has(neighbor)){
//                     visitedNode.add(neighbor)
//                     queue.push(neighbor)
//                 }
//             }
//         }
//     }

//     dfsTraversal(start,visitedNode=new Set()){
//         visitedNode.add(start)
//         console.log(start)

//         for(let neighbor of this.adjacencyList[start]){
//             if(!visitedNode.has(neighbor)){
//                 this.dfs(neighbor,visitedNode)
//             }
//         }
//     }

//     bfs(start){
//         let queue = []
//         queue.push({vertex:start,parent:null})

//         let visitedNode = new Set()
//         visitedNode.add(start)

//         while(queue.length){
//             let {vertex,parent} = queue.shift()

//             for(let neighbor of this.adjacencyList[vertex]){
//                 if(!visitedNode.has(neighbor)){
//                     visitedNode.add(neighbor)
//                     queue.push({vertex:neighbor,parent:vertex})
//                 }
//                 else if(neighbor != parent){
//                     return 'cycle detected'
//                 }
//             }
//         }
//         return 'cycle not found'
//     }

//     dfs(start,visitedNode=new Set(),parent=null){
//         visitedNode.add(start)

//         for(let neighbor of this.adjacencyList[start]){
//             if(!visitedNode.has(neighbor)){
//                 if(this.dfs(neighbor,visitedNode,start)){
//                     return true
//                 }
//             }
//             else if(neighbor != parent){
//                 return true
//             }
//         }

//         return false
//     }
// }

// let g = new graph();

// // Add vertices
// g.addVertex('A');
// g.addVertex('B');
// g.addVertex('C');
// g.addVertex('D');
// g.addVertex('E');

// console.log(g.adjacencyList); // { A: Set(0), B: Set(0), ... }

// // Add edges
// g.addEdge('A', 'B');
// g.addEdge('A', 'C');
// g.addEdge('B', 'D');
// g.addEdge('D', 'E');

// // Check if edge exists
// console.log(g.hasEdge('A', 'B')); // true
// console.log(g.hasEdge('A', 'D')); // false

// // Print graph
// g.print();
// // Example output:
// // A => B,C
// // B => A,D
// // C => A
// // D => B,E
// // E => D

// // BFS Traversal
// console.log("BFS Traversal from A:");
// g.bfsTraversal('A');

// // DFS Traversal
// console.log("DFS Traversal from A:");
// g.dfsTraversal('A');

// // Cycle detection using BFS
// let g2 = new graph();
// g2.addVertex('1');
// g2.addVertex('2');
// g2.addVertex('3');
// g2.addVertex('4');

// g2.addEdge('1', '2');
// g2.addEdge('2', '3');
// g2.addEdge('3', '4');
// g2.addEdge('4', '1'); // introduces cycle

// console.log("Cycle detection (BFS):", g2.bfs('1')); // cycle detected
// console.log("Cycle detection (DFS):", g2.dfs('1') ? "cycle detected" : "cycle not found");

// // Remove edge
// g.removeEdge('A', 'B');
// console.log(g.hasEdge('A', 'B')); // false

// // Remove vertex
// g.removeVertex('C');
// console.log(g.adjacencyList['C']); // undefined

//trie

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

//     autoComplete(prefix){
//         let node = this.root

//         for(let i=0;i<prefix.length;i++){
//             let char = prefix[i]

//             if(!node.children[char]){
//                 return 'word is not found'
//             }

//             node = node.children[char]
//         }

//         return this.collectWords(node,prefix)
//     }

//     collectWords(root,word,list=[]){
//         if(root.isEndOfWord){
//             list.push(word)
//         }

//         for(let char in root.children){
//             this.collectWords(root.children[char],word+char,list)
//         }

//         return list
//     }

//     printWords(word){
//         return this.collectWords(this.root,'')
//     }

//     deleteWord(word){
//         let node = this.root
//         let path = []

//         for(let i=0;i<word.length;i++){
//             let char = word[i]

//             if(!node.children[char]){
//                 return 'no word found'
//             }
//             path.push([node,char])
//             node = node.children[char]
//         }

//         if(!node.isEndOfWord){
//             return 'word is end'
//         }

//         node.isEndOfWord = false

//         for(let i=word.length-1;i>=0;i--){
//             let [parentNode,char] = path[i]
//             let childNode = parentNode.children[char]

//             if(Object.keys(childNode.children).length > 0 || !childNode.isEndOfWord){
//                 break
//             }

//             delete parentNode.children[char]
//         }

//         return 'word is deleted'
//     }
// }

// const trie = new Trie()

// // Insert
// trie.insert("apple")
// trie.insert("app")
// trie.insert("application")
// trie.insert("apt")
// trie.insert("bat")
// trie.insert("batch")
// trie.insert("baton")

// console.log(trie.search("apple")) // true
// console.log(trie.search("app")) // true
// console.log(trie.search("appl")) // false
// console.log(trie.search("bat")) // true
// console.log(trie.search("bath")) // false

// console.log(trie.startsWith("app")) // true
// console.log(trie.startsWith("bat")) // true
// console.log(trie.startsWith("ba")) // true
// console.log(trie.startsWith("bad")) // false

// console.log(trie.autoComplete("app")) // [ 'apple', 'app', 'application' ]
// console.log(trie.autoComplete("bat")) // [ 'bat', 'batch', 'baton' ]
// console.log(trie.autoComplete("cat")) // 'word is not found'

// console.log(trie.printWords()) 
// // [ 'apple', 'app', 'application', 'apt', 'bat', 'batch', 'baton' ]

// // Deletion Tests
// console.log(trie.deleteWord("application")) // 'word is deleted'
// console.log(trie.search("application")) // false
// console.log(trie.search("app")) // true
// console.log(trie.deleteWord("apple")) // 'word is deleted'
// console.log(trie.search("apple")) // false
// console.log(trie.search("app")) // true (should still exist)

// console.log(trie.deleteWord("nonexistent")) // 'no word found'
// console.log(trie.deleteWord("appl")) // 'word does not exist'


// class Node{
//     constructor(){
//         this.children = {}
//         this.isEndOfWord = false
//     }
// }

// class SuffixTrie{
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

// const trie = new SuffixTrie("banana")

// console.log(trie.search("banana")) // true (entire string)
// console.log(trie.search("anana"))  // true (suffix)
// console.log(trie.search("nana"))   // true
// console.log(trie.search("ana"))    // true
// console.log(trie.search("na"))     // true
// console.log(trie.search("a"))      // true

// console.log(trie.search("bananas")) // false
// console.log(trie.search("nab"))     // false
// console.log(trie.search("bana"))    // true
// console.log(trie.search("nan"))     // true
// console.log(trie.search("baa"))     // false
// console.log(trie.search(""))        // true (empty string is technically a substring of all strings)

//trie operations

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

//     countWord(){
//         let queue = []
//         queue.push(this.root)
//         let noOfWords = 0
//         while(queue.length){
//             let node = queue.shift()

//             if(node.isEndOfWord){
//                 noOfWords++
//             }

//             for(let char in node.children){
//                 queue.push(node.children[char])
//             }
//         }

//         return noOfWords
//     }

//     longestWord(word){
//         let longestWord = ''
//         let node = this.root
//         for(let i=0;i<word.length;i++){
//             let char = word[i]

//             if(!node.children[char]){
//                 break
//             }

//             longestWord += char
//             node = node.children[char]
//         }

//         return longestWord
//     }

//     prefixWordCount(word){
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
//         let prefixCount = 0

//         while(queue.length){
//             let word = queue.shift()

//             if(word.isEndOfWord){
//                 prefixCount++
//             }

//             for(let char in word.children){
//                 queue.push(word.children[char])
//             }
//         }

//         return prefixCount
//     }
// }

// const trie = new Trie()

// // Insert test words
// trie.insert("apple")
// trie.insert("app")
// trie.insert("application")
// trie.insert("bat")
// trie.insert("batch")
// trie.insert("baton")
// trie.insert("batmobile")

// console.log("✅ Count of complete words:", trie.countWord()) 
// // Output: 7

// console.log("✅ Longest word in Trie matching 'applicationist':", trie.longestWord("applicationist"))
// // Output: "application"

// console.log("✅ Longest word in Trie matching 'apps':", trie.longestWord("apps"))
// // Output: "app"

// console.log("✅ Prefix count for 'bat':", trie.prefixWordCount("bat"))
// // Output: 4 -> (bat, batch, baton, batmobile)

// console.log("✅ Prefix count for 'app':", trie.prefixWordCount("app"))
// // Output: 3 -> (app, apple, application)

// console.log("✅ Prefix count for 'cat':", trie.prefixWordCount("cat"))
// // Output: 'no match'

// const edgeTrie = new Trie()
// console.log(edgeTrie.countWord()) // 0 (empty Trie)

// edgeTrie.insert("")
// console.log(edgeTrie.countWord()) // 1 (empty string is a valid word)

// console.log(edgeTrie.prefixWordCount("")) // 1 (matches the empty string)

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

//     peek(){
//         if(this.isEmpty()){
//             return 'heap is empty'
//         }

//         return this.heap[0]
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

//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp()
//     }

//     heapifyUp(){
//         let index = this.heap.length -1 

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
//             }else{
//                 this.swap(index,largest)
//             }

//             index = largest
//         }
//     }

//     print(){
//         console.log(this.heap)
//     }

//     findKthSmallest(arr,k){
//         if(arr.length < k){
//             return 'invalid k'
//         }

//         let heap = new maxHeap()

//         for(let i=0;i<arr.length;i++){
//             heap.insert(arr[i])
//             if(heap.heap.length > k){
//                 heap.remove()
//             }
//         }

//         return heap.peek()
//     }

//     heapSort(arr){
//         let heap = new maxHeap()

//         for(let i=0;i<arr.length;i++){
//             heap.insert(arr[i])
//         }

//         let sortedArr = []

//         while(heap.heap.length){
//             sortedArr.push(heap.remove())
//         }

//         return sortedArr
//     }
// }

// let heap = new maxHeap();

// console.log("Insert values into heap:");
// [10, 20, 5, 30, 25].forEach(val => heap.insert(val));
// heap.print(); // should print a valid max-heap

// console.log("Peek top:", heap.peek()); // should be the max => 30

// console.log("Remove top:", heap.remove()); // should be 30
// heap.print();

// console.log("Find 3rd smallest in [10, 5, 2, 7, 3, 9]:", heap.findKthSmallest([10, 5, 2, 7, 3, 9], 3)); // 5

// console.log("Heap sort [4, 1, 3, 9, 7]:", heap.heapSort([4, 1, 3, 9, 7])); // [9, 7, 4, 3, 1]


// class minHeap{
//     constructor(){
//         this.heap = []
//     }

//     isEmpty(){
//         return this.heap.length == 0
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'heap is empty'
//         }
//         return this.heap[0]
//     }

//     getParentIndex(index){
//         return Math.floor((index - 1)/2)
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

//     insert(value){
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
//             smallest = this.getLeftChildIndex(index)

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

//     print(){
//         console.log(this.heap)
//     }

//     findKthLargest(arr,k){
//         if(arr.length < k){
//             return 'k is invalid'
//         }

//         let heap = new minHeap()

//         for(let i=0;i<arr.length;i++){
//             heap.insert(arr[i])
//             if(heap.heap.length > k){
//                 heap.remove()
//             }
//         }

//         return heap.peek()
//     }

//     heapSort(arr){
//         let heap = new minHeap()

//         for(let i=0;i<arr.length;i++){
//             heap.insert(arr[i])
//         }

//         let sortedArr = []

//         while(heap.heap.length){
//             sortedArr.push(heap.remove())
//         }

//         return sortedArr
//     }
// }


// let h = new minHeap();

// console.log("== Insert & Peek ==");
// [10, 4, 15, 2, 8].forEach(num => h.insert(num));
// h.print(); // should be a valid min-heap, e.g., [2, 4, 15, 10, 8]
// console.log("Peek:", h.peek()); // should be 2

// console.log("\n== Remove ==");
// console.log("Removed:", h.remove()); // 2
// h.print(); // heap adjusted

// console.log("\n== findKthLargest ==");
// let arr1 = [3, 2, 1, 5, 6, 4];
// console.log("3rd largest:", h.findKthLargest(arr1, 3)); // should return 4

// console.log("\n== heapSort ==");
// let arr2 = [9, 4, 7, 1, -2, 6, 5];
// console.log("Sorted:", h.heapSort(arr2)); // [-2, 1, 4, 5, 6, 7, 9]


// function heapify(arr,n,i){
//     let largest = i
//     let left = 2 * i + 1
//     let right = 2 * i + 2

//     if(largest < n && arr[left] > arr[largest]){
//         largest = left
//     }

//     if(largest < n && arr[right] > arr[largest]){
//         largest = right
//     }

//     if(largest != i){
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
// }

// function testHeapSort() {
//     let arr1 = [4, 10, 3, 5, 1];
//     console.log("Before:", [...arr1]);
//     heapSort(arr1);
//     console.log("After :", arr1); // [1, 3, 4, 5, 10]

//     let arr2 = [12, 11, 13, 5, 6, 7];
//     console.log("Before:", [...arr2]);
//     heapSort(arr2);
//     console.log("After :", arr2); // [5, 6, 7, 11, 12, 13]

//     let arr3 = [];
//     console.log("Before:", [...arr3]);
//     heapSort(arr3);
//     console.log("After :", arr3); // []

//     let arr4 = [1];
//     console.log("Before:", [...arr4]);
//     heapSort(arr4);
//     console.log("After :", arr4); // [1]

//     let arr5 = [9, 9, 9, 9];
//     console.log("Before:", [...arr5]);
//     heapSort(arr5);
//     console.log("After :", arr5); // [9, 9, 9, 9]
// }

// testHeapSort();

// function findKthFrequency(arr,k){
//     let valMap = {}

//     for(let i=0;i<arr.length;i++){
//         if(valMap[arr[i]]){
//             valMap[arr[i]]++
//         }else{
//             valMap[arr[i]] = 1
//         }
//     }

//     let no = []
//     for(let [key,freq] of Object.entries(valMap)){
//         if(freq == k){
//             no.push(Number(key))
//         }
//     }

//     return no
// }

//     console.log(findKthFrequency([4, 4, 4, 4, 2, 2, 3], 4)); // [4]
//     console.log(findKthFrequency([5, 5, 5, 6, 6, 7], 3)); // [5]
//     console.log(findKthFrequency([1, 1, 2, 3, 4, 5], 1)); // [2, 3, 4, 5]
//     console.log(findKthFrequency([10, 10, 20, 20, 20, 30], 2)); // [10]
//     console.log(findKthFrequency([], 1)); // []
//     console.log(findKthFrequency([100], 1)); // [100]
//     console.log(findKthFrequency([1, 2, 3], 4)); // []


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
//     let minElement

//     for(let i=0;i<arr.length-1;i++){
//         minElement = i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[minElement] > arr[j] ){
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
//         }
//         else{
//             rightArr.push(arr[i])
//         }
//     }

//     return[...quickSort(leftArr),pivot,...quickSort(rightArr)]
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
// console.log(mergeSort([5, -1, 0, 3, 8])); // ➤ [-1, 0, 3, 5, 8]
// console.log(mergeSort([10, 9, 8, 7]));    // ➤ [7, 8, 9, 10]
// console.log(mergeSort([100,-100,0,99,-99])); // ➤ [-100, -99, 0, 99, 100]


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
//         let j = i - 1

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
//     let leftArr = arr.slice(0,mid)
//     let rightArr = arr.slice(mid)

//     return  merge(mergeSort(leftArr),mergeSort(rightArr))
// }

// function merge(leftArr,rightArr){
//     let sortedArr = []

//     while(leftArr.length && rightArr.length){
//         if(leftArr[0] < rightArr[0]){
//             sortedArr.push(leftArr.shift())
//         }
//         else{
//             sortedArr.push(rightArr.shift())
//         }
//     }

//     return sortedArr.concat(leftArr,rightArr)
// }

// const testCases = [
//     { input: [5, 2, 9, 1, 5, 6], expected: [1, 2, 5, 5, 6, 9], label: 'Basic Unsorted' },
//     { input: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5], label: 'Already Sorted' },
//     { input: [5, 4, 3, 2, 1], expected: [1, 2, 3, 4, 5], label: 'Reverse Sorted' },
//     { input: [7, 7, 7, 7], expected: [7, 7, 7, 7], label: 'All Equal' },
//     { input: [42], expected: [42], label: 'Single Element' },
//     { input: [], expected: [], label: 'Empty Array' },
//     { input: [3, -1, 0, -5, 8], expected: [-5, -1, 0, 3, 8], label: 'With Negative Numbers' }
// ];

// // Functions to test
// const algorithms = {
//     bubbleSort,
//     insertionSort,
//     selectionSort,
//     quickSort,
//     mergeSort
// };

// // Run Tests
// for (const [name, func] of Object.entries(algorithms)) {
//     console.log(`\nTesting ${name}:`);
//     for (const { input, expected, label } of testCases) {
//         const inputCopy = [...input]; // to prevent mutation
//         const result = func([...inputCopy]); // make sure pure
//         const passed = JSON.stringify(result) === JSON.stringify(expected);
//         console.log(` - ${label}: ${passed ? '✅ Passed' : '❌ Failed'} | Result: ${JSON.stringify(result)}`);
//     }
// }

// // Optional: Large random array test for quickSort
// const largeArr = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
// const sorted = [...largeArr].sort((a, b) => a - b);
// console.log("\nQuickSort large array test:", JSON.stringify(quickSort(largeArr)) === JSON.stringify(sorted) ?  "✅ Passed" : "❌ Failed");


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

//             root.value = this.min(root.right)
//             root.right = this.deleteNode(root.right,root.value)
//         }
//         return root
//     }
// }

// const tree = new bst()

// // Insert values
// tree.insert(50)
// tree.insert(30)
// tree.insert(70)
// tree.insert(20)
// tree.insert(40)
// tree.insert(60)
// tree.insert(80)

// console.log("InOrder Traversal (should be sorted):")
// tree.inOrder(tree.root) // 20, 30, 40, 50, 60, 70, 80

// console.log("PreOrder Traversal:")
// tree.preOrder(tree.root) // 50, 30, 20, 40, 70, 60, 80

// console.log("PostOrder Traversal:")
// tree.postOrder(tree.root) // 20, 40, 30, 60, 80, 70, 50

// console.log("LevelOrder Traversal:")
// tree.levelOrder(tree.root) // 50, 30, 70, 20, 40, 60, 80

// console.log("Search 60:", tree.search(tree.root, 60)) // true
// console.log("Search 25:", tree.search(tree.root, 25)) // false

// console.log("Minimum value:", tree.min(tree.root)) // 20
// console.log("Maximum value:", tree.max(tree.root)) // 80

// console.log("Deleting 20 (leaf node):")
// tree.delete(20)
// tree.inOrder(tree.root) // 30, 40, 50, 60, 70, 80

// console.log("Deleting 30 (node with one child):")
// tree.delete(30)
// tree.inOrder(tree.root) // 40, 50, 60, 70, 80

// console.log("Deleting 50 (node with two children):")
// tree.delete(50)
// tree.inOrder(tree.root) // 40, 60, 70, 80

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

//     isEmtpy(){
//         return this.root == null
//     }

//     insert(value){
//         const node = new Node(value)
//         if(this.isEmtpy()){
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

//     isPrime(no){
//         if(no < 2){
//             return false
//         }

//         for(let i=2;i<=Math.sqrt(no);i++){
//             if(no % i == 0){
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

//         return tree1.value === tree2.value && this.isIdentical(tree1.left,tree2.left) && this.isIdentical(tree1.right,tree2.right)
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

//         if(result.length < k){
//             return 'k is invalid'
//         }

//         return result[k-1]
//     }

//     findKthLargest(root,k){
//         let result = this.inOrderTraversal(root)

//         if(result.length < k){
//             return 'k is invalid'
//         }

//         return result[result.length-k]
//     }

//     findSuccessor(root,k){
//         let result = this.inOrderTraversal(root)

//         let successor = null

//         for(let i=0;i<result.length;i++){
//             if(result[i] == k){
//                 if((i+1) < result.length){
//                     successor = result[i+1]
//                 }
//             }
//         }

//         return successor
//     }

//     findPredecessor(root,k){
//         let result = this.inOrderTraversal(root)

//         let  predecessor = null

//         for(let i=0;i<result.length;i++){
//             if(result[i] == k){
//                 if((i-1) >= 0){
//                     predecessor = result[i-1]
//                 }
//             }
//         }

//         return predecessor
//     }

//     findClosest(root,k){
//         let result = this.inOrderTraversal(root)
//         let closest = null
//         for(let i=0;i<result.length;i++){
//             if(result[i] >= k){
//                 closest = result[i]
//                 break
//             }
//         }

//         return closest
//     }

//     removeDuplicates(){
//         let unique = new Set()

//         function inOrder(root){
//             if(root){
//                 inOrder(root.left)
//                 unique.add(root.value)
//                 inOrder(root.right)
//             }
//         }

//         inOrder(this.root)

//         this.root = null

//         for(let val of unique){
//             this.insert(val)
//         }
//     }

//     findParent(root,target){
//         if(!root){
//             return null
//         }


//         let parent = null

//         function inOrder(root,target){
//             if(root){
//                 inOrder(root.left,target)
    
//                 if(root.left && root.left.value == target){
//                     parent = root.value
//                 }
    
//                 if(root.right && root.right.value == target){
//                     parent = root.value
//                 }
    
//                 inOrder(root.right,target)
//             }
//             }

//         inOrder(root,target)

//         return parent
//     }

//     findChildren(root,target){
//         if(!root){
//             return null
//         }
//         else if(root.value == target){
//             const children ={
//                 leftChildren:root.left?root.left.value:null,
//                 rightChildren:root.right?root.right.value:null
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

//         function inOrder(root,target){
//             if(root){

//                 inOrder(root.left,target)
    
//                 if(root.left && root.left.value == target){
//                     sibling = root.right.value
//                 }
    
//                 if(root.right && root.right.value == target){
//                     sibling = root.left.value
//                 }
    
//                 inOrder(root.right,target)
//             }
//             }

//         inOrder(root,target)

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

//     findAncestor(root,target,result=[]){
//         if(!root){
//             return null
//         }
//         else if(root.value == target){
//             return result
//         }
//         else if(target < root.value){
//             result.push(root.value)
//             return this.findAncestor(root.left,target,result)
//         }
//         else{
//             result.push(root.value)
//             return this.findAncestor(root.right,target,result)
//         }
//     }

//     findDescendant(root,target){
//         if(!root){
//             return null
//         }
//         else if(root.value == target){
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

//     findDegree(root,target){
//         if(!root){
//             return null
//         }
//         else if(target == root.value){
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
//                 depth++
//                 root = root.left
//             }
//             else if(target > root.value){
//                 depth++
//                 root = root.right
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
//                 distance++
//                 root = root.left
//             }
//             else if(target > root.value){
//                 distance++
//                 root = root.right
//             }
//             else{
//                 return distance
//             }
//         }
//     }
// }


// const tree = new Bst();

// // Insert nodes
// [20, 10, 30, 5, 15, 25, 35, 3, 7, 13, 17].forEach(v => tree.insert(v));

// // Traversals
// console.log("InOrder:");
// tree.inOrder(tree.root); // Sorted: 3 5 7 10 13 15 17 20 25 30 35

// console.log("PreOrder:");
// tree.preOrder(tree.root);

// console.log("PostOrder:");
// tree.postOrder(tree.root);

// console.log("LevelOrder:");
// tree.levelOrder(tree.root);

// // Basic Search
// console.log("Search 15:", tree.search(tree.root, 15)); // true
// console.log("Search 99:", tree.search(tree.root, 99)); // false

// // Min/Max
// console.log("Min:", tree.min(tree.root)); // 3
// console.log("Max:", tree.max(tree.root)); // 35

// // Primes
// console.log("Primes in Tree:", tree.findPrimes(tree.root)); // e.g., [3, 5, 7, 13, 17]

// // BST Check
// console.log("Is BST:", tree.isBst(tree.root)); // true

// // Kth Smallest/Largest
// console.log("3rd Smallest:", tree.findKthSmallest(tree.root, 3)); // 7
// console.log("2nd Largest:", tree.findKthLargest(tree.root, 2));   // 30

// // Successor & Predecessor
// console.log("Successor of 15:", tree.findSuccessor(tree.root, 15)); // 17
// console.log("Predecessor of 15:", tree.findPredecessor(tree.root, 15)); // 13

// // Closest ≥ target
// console.log("Closest ≥ 16:", tree.findClosest(tree.root, 16)); // 17

// // Parent, Children, Sibling
// console.log("Parent of 13:", tree.findParent(tree.root, 13)); // 15
// console.log("Children of 10:", tree.findChildren(tree.root, 10)); // { leftChildren: 5, rightChildren: 15 }
// console.log("Sibling of 13:", tree.findSibling(tree.root, 13)); // 17

// // Ancestor & Descendant
// console.log("Ancestors of 17:", tree.findAncestor(tree.root, 17)); // [20, 10, 15]
// console.log("Descendants of 10:", tree.findDescendant(tree.root, 10)); // [10, 5, 3, 7, 15, 13, 17]

// // Leaf Nodes
// console.log("Leaf Nodes:", tree.findLeafNode(tree.root)); // [3, 7, 13, 17, 25, 35]

// // Height of Tree
// console.log("Tree Height:", tree.findHeight()); // 4

// // Degree, Depth, Distance
// console.log("Degree of 10:", tree.findDegree(tree.root, 10)); // 2
// console.log("Depth of 13:", tree.findDepth(tree.root, 13));   // 3
// console.log("Distance of 13 from root:", tree.findDistance(tree.root, 13)); // 3

// // Delete node with two children
// tree.delete(10);
// console.log("InOrder after deleting 10:");
// tree.inOrder(tree.root);

// // Remove Duplicates (no duplicates in this case)
// tree.removeDuplicates();
// console.log("InOrder after removing duplicates:");
// tree.inOrder(tree.root);


// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BST{
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
//         }
//         else{
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
//             this.postOrder(root.right)
//             this.postOrder(root.left)
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
//             root.right = this.deleteNode(root.right,value)
//         }
//         return root
//     }
// }

// const tree = new BST();

// tree.insert(10);
// tree.insert(5);
// tree.insert(15);
// tree.insert(3);
// tree.insert(7);
// tree.insert(12);
// tree.insert(18);

// console.log(tree.isEmpty()); // false
// console.log(tree.search(tree.root, 7));  // true
// console.log(tree.search(tree.root, 13)); // false

// tree.preOrder(tree.root); // Output: 10 5 3 7 15 12 18
// tree.inOrder(tree.root); // Output: 3 5 7 10 12 15 18
// tree.postOrder(tree.root); // Output: 18 12 15 7 3 5 10
// tree.levelOrder(tree.root); // Output: 10 5 15 3 7 12 18

// console.log(tree.min(tree.root)); // Output: 3
// console.log(tree.max(tree.root)); // Output: 18

// tree.delete(3); 
// tree.inOrder(tree.root); // Output: 5 7 10 12 15 18
// const newTree = new BST();
// newTree.delete(5); // Should not throw an error
// console.log(newTree.isEmpty()); // true

//tree complete

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

//     isPrime(no){
//         if(no < 2){
//             return false
//         }

//         for(let i=2;i<=Math.sqrt(no);i++){
//             if(no % i == 0){
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

//     findKthSmallest(arr,k){
//         if(arr.length < k){
//             return 'invalid k'
//         }

//         let result = this.inOrderTraversal(arr)

//         return result[result.length-k] || null
//     }

//     findKthLargest(arr,k){
//         if(arr.length < k){
//             return 'invalid k'
//         }

//         let result = this.inOrderTraversal(arr)
//         return result[result.length-k] || null
//     }

//     closestValue(arr,k){
//         if(arr.length < k){
//             return 'invalid k'
//         }

//         let result = this.inOrderTraversal(arr)

//         let closest = null

//         for(let i=0;i<result.length;i++){
//             if(result[i] >= k){
//                 closest = result[i]
//                 break
//             }
//         }

//         return closest
//     }

//     successor(arr,k){
//         if(arr.length < k){
//             return 'invalid k'
//         }

//         let result = this.inOrderTraversal(arr)
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

//     predecessor(arr,k){
//         if(arr.length < k){
//             return 'invalid k'
//         }

//         let result = this.inOrderTraversal(arr)
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

//         unique.forEach((value)=>{
//             this.insert(value)
//         })
//     }

//     findParent(root,target){
//         if(!root){
//             return null
//         }

//         let parent = null

//         function inOrder(root){
//             if(root){
//                 inOrder(root.left)

//                 if(root.left && root.left.value === target){
//                     parent = root.value
//                 }
                
//                 if(root.right && root.right.value === target){
//                     parent = root.value
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
//                 rightchildren : root.right ? root.right.value : null
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

//                 if(root.left && root.left.value == target){
//                     sibling = root.right.value
//                 }

//                 if(root.right && root.right.value == target){
//                     sibling = root.left.value
//                 }

//                 inOrder(root.right)
//             }
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

//     findAncestor(root,target,result=[]){
//         if(!root){
//             return null
//         }

//         if(root.value == target){
//             return result
//         }
//         else if(target < root.value){
//             result.push(root.value)
//             return this.findAncestor(root.left,target,result)
//         }
//         else{
//             result.push(root.value)
//             return this.findAncestor(root.right,target,result)
//         }
//     }

//     findDescendants(root,target){
//         if(!root){
//             return null
//         }

//         if(root.value == target){
//             return this.collectDescendant(root)
//         }
//         else if(target < root.value){
//             return this.findDescendants(root.left,target)
//         }
//         else{
//             return this.findDescendants(root.right,target)
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

//     findDegree(root,target){
//         if(!root){
//             return null
//         }
//         else if(root.value == target){
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
//         let depth = 0

//         while(root){
//             if(target < root.value){
//                 depth++
//                 root = root.left
//             }
//             else if(target > root.value){
//                 depth++
//                 root = root.right
//             }
//             else{
//                 return depth
//             }
//         }
//     }

//     findDistance(root,target){
//         let distance = 0

//         while(root){
//             if(target < root.value){
//                 distance++
//                 root = root.left
//             }
//             else if(target > root.value){
//                 distance++
//                 root = root.right
//             }
//             else{
//                 return distance
//             }
//         }
//     }

//     path(root,target){
//         let path = []

//         while(root){
//             if(target < root.value){
//                 path.push(root.value)
//                 root = root.left
//             }
//             else if(target > root.value){
//                 path.push(root.value)
//                 root = root.right
//             }
//             else{
//                 return path
//             }
//         }
//     }

//     findLCA(root,n1,n2){
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
//         let LCA = this.findLCA(this.root,n1,n2)

//         if(!LCA){
//             return []
//         }

//         let path1 = this.path(this.root,n1)
//         let path2 = this.path(this.root,n2)

//         return [...path1.reverse(),...path2.slice(1)]
//     }

//     findDistanceBetweenTwoNodes(n1,n2){
//         let LCA = this.findLCA(this.root,n1,n2)

//         if(!LCA){
//             return []
//         }

//         let distance1 = this.findDistance(this.root,n1)
//         let distance2 = this.findDistance(this.root,n2)

//         return distance1+distance2
//     }

//     onlyChildNodes(root,result=[],count={value:0}){
//         if(root){
//             if(!root.left && !root.right){
//                 result.push(root.value)
//                 count.value++
//             }

//             this.onlyChildNodes(root.left,result,count)
//             this.onlyChildNodes(root.right,result,count)
//         }

//         return {result,count}
//     }

//     leftNode(root,result=[],count={value:0}){
//         if(root){
//             if(!root.right && root.left){
//                 result.push(root.value)
//                 count.value++
//             }
//             this.leftNode(root.left,result,count)
//             this.leftNode(root.right,result,count)
//         }
//         return {leftNodeArr:result,count:count}
//     }

//     rightNode(root,result=[],count={value:0}){
//         if(root){
//             if(!root.left && root.right){
//                 result.push(root.value)
//                 count.value++
//             }
//             this.rightNode(root.left,result,count)
//             this.rightNode(root.right,result,count)
//         }

//         return {rightNodeArr:result,count:count}
//     }

//     noOfNodes(root){
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
// }

// const bst = new Bst()

// // Insertion
// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)
// bst.insert(12)
// bst.insert(17)

// console.log("Is BST Empty?", bst.isEmpty()) // false

// // Search
// console.log("Search 7:", bst.search(bst.root, 7)) // true
// console.log("Search 20:", bst.search(bst.root, 20)) // false

// // Traversals
// console.log("InOrder:")
// bst.inOrder(bst.root)

// console.log("PreOrder:")
// bst.preOrder(bst.root)

// console.log("PostOrder:")
// bst.postOrder(bst.root)

// console.log("LevelOrder:")
// bst.levelOrder()

// // Min and Max
// console.log("Min value:", bst.min(bst.root)) // 3
// console.log("Max value:", bst.max(bst.root)) // 17

// // Prime values
// console.log("Prime values:", bst.findPrimes(bst.root)) // [3, 5, 7, 17]

// // Delete node
// bst.delete(15)
// console.log("InOrder after deleting 15:")
// bst.inOrder(bst.root)

// // Ancestor and Descendant
// console.log("Ancestors of 7:", bst.findAncestor(bst.root, 7)) // [10, 5]
// console.log("Descendants of 5:", bst.findDescendants(bst.root, 5)) // [3, 7]

// // Parent, Children, Sibling
// console.log("Parent of 7:", bst.findParent(bst.root, 7)) // 5
// console.log("Children of 5:", bst.findChildren(bst.root, 5)) // { leftChildren: 3, rightchildren: 7 }
// console.log("Sibling of 3:", bst.findSiblings(bst.root, 3)) // 7

// // Leaf nodes
// console.log("Leaf Nodes:", bst.findLeafNode(bst.root)) // [3, 7, 12, 17]

// // Lowest Common Ancestor
// console.log("LCA of 3 and 7:", bst.findLCA(bst.root, 3, 7).value) // 5

// // Path and Distance
// console.log("Path to 7:", bst.path(bst.root, 7)) // [10, 5]
// console.log("Distance to 7:", bst.findDistance(bst.root, 7)) // 2
// console.log("Path between 3 and 7:", bst.findPathBetweenTwoNodes(3, 7)) // [3, 5, 7]
// console.log("Distance between 3 and 7:", bst.findDistanceBetweenTwoNodes(3, 7)) // 2

// // Height, Degree, Node Count
// console.log("Height of tree:", bst.findHeight()) // 3
// console.log("Degree of node 10:", bst.findDegree(bst.root, 10)) // 2
// console.log("Total nodes:", bst.noOfNodes(bst.root)) // 6 (after delete)

// // BST Validation
// console.log("Is valid BST:", bst.isBst(bst.root)) // true

// // Identical trees
// const bst2 = new Bst()
// bst2.insert(10)
// bst2.insert(5)
// bst2.insert(15)
// console.log("Is Identical to bst2?", bst.isIdentical(bst.root, bst2.root)) // false

// // Kth Smallest / Largest
// console.log("3rd Smallest:", bst.findKthSmallest(bst.root, 3)) // 7
// console.log("2nd Largest:", bst.findKthLargest(bst.root, 2)) // 12

// // Closest, Predecessor, Successor
// console.log("Closest >= 11:", bst.closestValue(bst.root, 11)) // 12
// console.log("Successor of 7:", bst.successor(bst.root, 7)) // 10
// console.log("Predecessor of 7:", bst.predecessor(bst.root, 7)) // 5

// // Only-child, left-node-only, right-node-only nodes
// console.log("Only Child Nodes:", bst.onlyChildNodes(bst.root)) // { result: [...], count: n }
// console.log("Left Nodes Only:", bst.leftNode(bst.root)) // { leftNodeArr: [...], count: n }
// console.log("Right Nodes Only:", bst.rightNode(bst.root)) // { rightNodeArr: [...], count: n }

// // Remove Duplicates (insert duplicates first)
// bst.insert(7)
// bst.insert(12)
// bst.removeDuplicates(bst.root)
// console.log("InOrder after removing duplicates:")
// bst.inOrder(bst.root)


// class Hashtable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     isEmpty(){
//         return this.table.every(item => item === undefined)
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
//         if(this.isEmpty()){
//             return 'table is empty'
//         }
//         let index = this.hash(key)
//         return this.table[index] !== undefined ? this.table[index] : 'key is invalid'
//     }

//     remove(key){
//         if(this.isEmpty()){
//             return 'table is empty'
//         }

//         let index = this.hash(key)
//         if(this.table[index] != undefined){
//             this.table[index] = undefined
//         }else{
//             return 'key is invalid'
//         }
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

// // Test 1: Insert and retrieve value
// ht.set("apple", 100);
// console.log(ht.get("apple")); // Expected: 100

// // Test 2: Get with non-existing key
// console.log(ht.get("banana")); // Expected: "key is invalid"

// // Test 3: Remove existing key
// ht.remove("apple");
// console.log(ht.get("apple")); // Expected: "key is invalid"

// // Test 4: Remove non-existing key
// console.log(ht.remove("banana")); // Expected: "key is invalid"

// // Test 5: isEmpty should be true now
// console.log(ht.isEmpty()); // Expected: true

// // Test 6: Add multiple keys
// ht.set("dog", 0);     // test falsy value
// ht.set("cat", false); // test falsy value
// ht.set("mouse", "🐭");
// ht.print();
// // Expected output:
// // (some index) 0
// // (some index) false
// // (some index) 🐭

// // Test 7: Check get for falsy values
// console.log(ht.get("dog"));   // Expected: 0
// console.log(ht.get("cat"));   // Expected: false
// console.log(ht.get("mouse")); // Expected: "🐭"


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

//         if(this.table[index] != undefined){
//             this.table[index] = undefined
//             return 'key removed'
//         }else{
//             return 'key is invalid'
//         }
//     }

//     print(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i] != undefined){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }

// let ht = new Hashtable(10)

// // Test 1: Basic set and get
// ht.set("name", "Alice")
// console.log(ht.get("name")) // Alice

// // Test 2: Update existing key
// ht.set("name", "Bob")
// console.log(ht.get("name")) // Bob

// // Test 3: Collision check
// ht.set("mane", "Charlie") // "name" and "mane" likely collide in small table
// console.log(ht.get("mane")) // Charlie
// console.log(ht.get("name")) // Bob (should still exist if collision handled)

// // Test 4: Remove key
// console.log(ht.remove("name")) // "key removed"
// console.log(ht.get("name")) // undefined

// // Test 5: Remove invalid key
// console.log(ht.remove("nonexistent")) // "key is invalid"

// // Test 6: Print contents
// ht.print()


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
//         if(this.table[index] != undefined){
//             return this.table[index]
//         }
//         else{
//             return 'invalid key'
//         }
//     }
    
//     remove(key){
//         let index = this.hash(key)
        
//         if(this.table[index] != undefined){
//             this.table[index] = undefined
//             return 'key is removed'
//         }else{
//             return 'invalid key'
//         }
//     }

//     print(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i] != undefined){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }

// let ht = new Hashtable(10)

// ht.set("name", "Alice")
// ht.set("age", 30)
// ht.set("city", "Paris")
// console.log(ht.get("name"))       // Alice
// console.log(ht.get("age"))        // 30
// console.log(ht.get("city"))       // Paris
// console.log(ht.get("country"))    // invalid key

// console.log(ht.remove("age"))     // key is removed
// console.log(ht.get("age"))        // invalid key

// ht.print()                        // Prints remaining keys

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
//         let j = i - 1

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
//     let leftArr =  arr.slice(0,mid)
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


// let arr1 = [5, 2, 9, 1, 5, 6]
// let arr2 = [3, 0, -2, 8, 7]
// let sorted = [1, 2, 3, 4, 5]

// console.log(bubbleSort([...arr1]))     // [1, 2, 5, 5, 6, 9]
// console.log(insertionSort([...arr1]))  // [1, 2, 5, 5, 6, 9]
// console.log(selectionSort([...arr1]))  // [1, 2, 5, 5, 6, 9]
// console.log(quickSort([...arr2]))      // [-2, 0, 3, 7, 8]
// console.log(mergeSort([...sorted]))    // [1, 2, 3, 4, 5] (already sorted)


class Queue{
    constructor(){
        this.list = []
    }


    isEmpty(){
        return this.list.length == 0
    }

    push(value){
        this.list.push(value)
    }

    shift(){
        if(this.isEmpty()){
            return 'list is empty'
        }
        return this.list.shift()
    }

    peek(){
        if(this.isEmpty()){
            return 'list is empty'
        }
        return this.list[0]
    }

    print(){
        console.log(this.list)
    }
}

// Instantiate the Queue
let q = new Queue();

// Test 1: Check if queue is initially empty
console.log("Test 1 - isEmpty:", q.isEmpty()); // Expected: true

// Test 2: Peek on empty queue
console.log("Test 2 - peek on empty:", q.peek()); // Expected: 'list is empty'

// Test 3: Shift on empty queue
console.log("Test 3 - shift on empty:", q.shift()); // Expected: 'list is empty'

// Test 4: Push elements into the queue
q.push(10);
q.push(20);
q.push(30);
console.log("Test 4 - print after 3 pushes:");
q.print(); // Expected: [10, 20, 30]

// Test 5: Peek after pushes
console.log("Test 5 - peek:", q.peek()); // Expected: 10

// Test 6: Shift elements
console.log("Test 6 - shift:", q.shift()); // Expected: 10
console.log("Test 7 - shift:", q.shift()); // Expected: 20
console.log("Test 8 - peek after shifts:", q.peek()); // Expected: 30

// Test 9: Check isEmpty after some shifts
console.log("Test 9 - isEmpty:", q.isEmpty()); // Expected: false

// Test 10: Shift remaining and check empty
console.log("Test 10 - shift:", q.shift()); // Expected: 30
console.log("Test 11 - isEmpty:", q.isEmpty()); // Expected: true

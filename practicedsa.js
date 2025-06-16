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


function bubbleSort(arr){
    let swapped 

    do{
        swapped = false
        for(let i=0;i<arr.length-1;i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1]= temp
                swapped = true
            }
        }
    }while(swapped)
        return arr
}

function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let cur = arr[i]
        let j = i - 1

        while(j>= 0 && arr[j] > cur){
            arr[j+1] = arr[j]
            j--
        }

        arr[j+1] = cur
    }
    
    return arr
}

function selectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let minElement = i
        for(let j=i+1;j<arr.length;j++){
            if(arr[minElement] > arr[j]){
                minElement = j
            }
        }

        let temp = arr[minElement]
        arr[minElement] = arr[i]
        arr[i] = temp
    }

    return arr
}

function quickSort(arr){
    if(arr.length < 2){
        return arr
    }

    let pivot = arr[arr.length-1]
    let leftArr = []
    let rightArr = []

    for(let i=0;i<arr.length-1;i++){
        if(arr[i] < pivot){
            leftArr.push(arr[i])
        }else{
            rightArr.push(arr[i])
        }
    }

    return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
}

function mergeSort(arr){
    if(arr.length < 2){
        return arr
    }

    let mid = Math.floor(arr.length/2)
    let leftArr = arr.slice(0,mid)
    let rightArr = arr.slice(mid)

    return  merge(mergeSort(leftArr),mergeSort(rightArr))
}

function merge(leftArr,rightArr){
    let sortedArr = []

    while(leftArr.length && rightArr.length){
        if(leftArr[0] < rightArr[0]){
            sortedArr.push(leftArr.shift())
        }
        else{
            sortedArr.push(rightArr.shift())
        }
    }

    return sortedArr.concat(leftArr,rightArr)
}

const testCases = [
    { input: [5, 2, 9, 1, 5, 6], expected: [1, 2, 5, 5, 6, 9], label: 'Basic Unsorted' },
    { input: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5], label: 'Already Sorted' },
    { input: [5, 4, 3, 2, 1], expected: [1, 2, 3, 4, 5], label: 'Reverse Sorted' },
    { input: [7, 7, 7, 7], expected: [7, 7, 7, 7], label: 'All Equal' },
    { input: [42], expected: [42], label: 'Single Element' },
    { input: [], expected: [], label: 'Empty Array' },
    { input: [3, -1, 0, -5, 8], expected: [-5, -1, 0, 3, 8], label: 'With Negative Numbers' }
];

// Functions to test
const algorithms = {
    bubbleSort,
    insertionSort,
    selectionSort,
    quickSort,
    mergeSort
};

// Run Tests
for (const [name, func] of Object.entries(algorithms)) {
    console.log(`\nTesting ${name}:`);
    for (const { input, expected, label } of testCases) {
        const inputCopy = [...input]; // to prevent mutation
        const result = func([...inputCopy]); // make sure pure
        const passed = JSON.stringify(result) === JSON.stringify(expected);
        console.log(` - ${label}: ${passed ? '✅ Passed' : '❌ Failed'} | Result: ${JSON.stringify(result)}`);
    }
}

// Optional: Large random array test for quickSort
const largeArr = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
const sorted = [...largeArr].sort((a, b) => a - b);
console.log("\nQuickSort large array test:", JSON.stringify(quickSort(largeArr)) === JSON.stringify(sorted) ?  "✅ Passed" : "❌ Failed");
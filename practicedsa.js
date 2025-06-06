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

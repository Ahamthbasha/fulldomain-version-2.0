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
//         if(!this.adjancyList[vertex1] || !this.adjancyList[vertex2]){
//             return null
//         }

//         return this.adjancyList[vertex1].has(vertex2) && this.adjancyList[vertex2].has(vertex1)
//     }

//     removeEdge(vertex1,vertex2){
//         if(!this.adjancyList[vertex1] || !this.adjancyList[vertex2]){
//             return null
//         }

//         this.adjancyList[vertex1].delete(vertex2)
//         this.adjancyList[vertex2].delete(vertex1)
//     }

//     display(){
//         for(let vertex in this.adjancyList){
//             console.log(`${vertex} => ${[...this.adjancyList[vertex]]}`)
//         }
//     }

//     removeVertex(vertex){
//         if(!this.adjancyList[vertex]){
//             return null
//         }

//         for(let neighbour of this.adjancyList[vertex]){
//             this.removeEdge(vertex,neighbour)
//         }

//         delete this.adjancyList[vertex]
//     }

//     bfs(start){
//         let visitedNode=new Set()
//         visitedNode.add(start)
//         let queue = []
//         queue.push(start)

//         while(queue.length){
//             let node = queue.shift()
//             console.log(node)
//             this.adjancyList[node].forEach((neighbour)=>{
//                 if(!visitedNode.has(neighbour)){
//                     visitedNode.add(neighbour)
//                     queue.push(neighbour)
//                 }
//             })
//         }
//     }

//     dfs(start,visitedNode = new Set()){
//         visitedNode.add(start)
//         console.log(start)

//         this.adjancyList[start].forEach((neighbour)=>{
//             if(!visitedNode.has(neighbour)){
//                 visitedNode.add(neighbour)
//                 this.dfs(neighbour,visitedNode)
//             }
//         })
//     }

//     bfsCycleDetection(start){
//         let visitedNode=new Set()
//         visitedNode.add(start)
//         let queue=[]
//         queue.push({vertex:start,parent:null})

//         while(queue.length){
//             let {vertex,parent} = queue.shift()

//             for(let neighbour of this.adjancyList[vertex]){
//                 if(!visitedNode.has(neighbour)){
//                     visitedNode.add(neighbour)
//                     queue.push({vertex:neighbour,parent:vertex})
//                 }
//                 else if(neighbour != parent){
//                     console.log("cycle detected")
//                     return
//                 }
//             }

//         }

//         console.log("cycle is not detected")
//     }

//     dfsCycleDetection(start,visitedNode = new Set(),parent=null){
//         visitedNode.add(start)

//         for(let neighbour of this.adjancyList[start]){
//             if(!visitedNode.has(neighbour)){
//                 this.dfsCycleDetection(neighbour,visitedNode,start)
//                 return true
//             }
//             else if(neighbour != parent){
//                 console.log("cycle detected")
//                 return true
//             }
//         }

//         console.log("not cycle found")
//     }
// }


// const g = new graph()

// g.addVertex('A')
// g.addVertex('B')
// g.addVertex('C')
// // g.addVertex('D')

// g.addEdge('A', 'B')
// g.addEdge('B', 'C')
// g.addEdge('C', 'A')
// // g.addEdge('C', 'D')

// console.log("Graph Display:")
// g.display()

// // console.log("\nHas edge A-B?", g.hasEdge('A', 'B')) // true
// // console.log("Has edge A-D?", g.hasEdge('A', 'D')) // false

// console.log("\nBFS from A:")
// g.bfs('A') // Expected: A, B, C, D

// console.log("\nDFS from A:")
// g.dfs('A') // Expected: A, B, D, C or A, C, D, B (depending on Set iteration)

// console.log(g.bfsCycleDetection('A'))
// console.log(g.dfsCycleDetection('A'))

//maxHeap

// class maxHeap{
//     constructor() {
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
//             return 'empty'
//         }

//         return this.heap[0]
//     }

//     swap(vertex1,vertex2){
//         let temp=this.heap[vertex1]
//         this.heap[vertex1] = this.heap[vertex2]
//         this.heap[vertex2] = temp
//     }

//     add(value){
//         this.heap.push(value)
//         this.heapifyUp()
//     }

//     heapifyUp(){
//         let index = this.heap.length-1

//         while(this.hasParent(index) && this.getParent(index) < this.heap[index]){
//             this.swap(this.getParentIndex(index),index)
//             index=this.getParentIndex(index)
//         }
//     }

//     remove(){
//         if(this.isEmpty()){
//             return 'empty'
//         }

//         let val = this.heap[0]

//         this.heap[0] = this.heap[this.heap.length-1]

//         this.heap.pop()

//         this.heapifyDown()

//         return val
//     }

//     heapifyDown(){
//         let index =0

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
//         const h = new maxHeap()

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
//             return
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

// const h = new maxHeap()

// console.log("\nAdd elements:")
// h.add(10)
// h.add(5)
// h.add(30)
// h.add(20)
// h.add(40)
// console.log("Heap after insertions:", h.heap) // [40, 20, 30, 5, 10]

// console.log("\nPeek top:", h.peek()) // 40

// console.log("\nRemove max:")
// console.log(h.remove()) // 40
// console.log("Heap after removal:", h.heap) // Should be max-heap order

// console.log("\nRemove all:")
// while (!h.isEmpty()) {
//     console.log(h.remove())
// }

// console.log("\nHeap Sort:")
// const sorted = h.heapSort([3, 1, 4, 1, 5, 9, 2])
// console.log("Sorted Descending:", sorted) // [9, 5, 4, 3, 2, 1, 1]

// console.log("\nFind 3rd Smallest in [7, 10, 4, 3, 20, 15]:")
// console.log(h.findKthSmallest([7, 10, 4, 3, 20, 15], 3)) // Expected: 7

// console.log("\nFind 1st Smallest:")
// console.log(h.findKthSmallest([5, 2, 1, 3], 1)) // Expected: 1

// console.log("\nFind 4th Smallest:")
// console.log(h.findKthSmallest([5, 2, 1, 3], 4)) // Expected: 5

// console.log("\nFind kth smallest with k > length:")
// console.log(h.findKthSmallest([1, 2], 3)) // Expected: undefined

// class minHeap{
//     constructor(){
//         this.heap=[]
//     }

//     getParentIndex(index){
//         return Math.floor((index-1)/2)
//     }

//     getLeftChildIndex(index){
//         return 2 * index +1
//     }
    
//     getRightChildIndex(index){
//         return 2 * index +2
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
//             return null
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
//                 smallest=this.getRightChildIndex(index)
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

// const h = new minHeap();

// // Add elements
// h.add(5);
// h.add(3);
// h.add(17);
// h.add(10);
// h.add(84);
// h.add(19);
// h.add(6);
// h.add(22);
// h.add(9);

// console.log("Heap after inserts:", h.heap); // Should be min-heapified

// console.log("Peek (min):", h.peek()); // 3

// console.log("Remove (min):", h.remove()); // 3
// console.log("Heap after remove:", h.heap); // Should maintain heap property

// // Test heapSort
// let arr = [7, 2, 9, 1, 5];
// let sorted = h.heapSort(arr);
// console.log("Sorted array using minHeap:", sorted); // [1, 2, 5, 7, 9]

// // Test findKthLargest
// let arr2 = [20, 10, 60, 30, 50, 40];
// let kth = h.findKthLargest(arr2, 3);
// console.log("3rd largest in [20,10,60,30,50,40]:", kth); // 40

// function nthMostOccured(arr,k){
//     let valMap = {}

//     for(let i=0;i<arr.length;i++){
//         let val=arr[i]
//         if(valMap[val]){
//             valMap[val]++
//         }else{
//             valMap[val] = 1
//         }
//     }

//     for(let key in valMap){
//         if(valMap[key] == k){
//             return key
//         }
//     }
// }

// console.log(nthMostOccured([1, 2, 2, 3, 3, 3, 4], 2)) // ➞ 2 (2 appears exactly 2 times)

// console.log(nthMostOccured(['a', 'b', 'a', 'c', 'b', 'a'], 2)) // ➞ 'b' (b appears exactly 2 times)

// console.log(nthMostOccured([7, 7, 7, 8, 8, 9], 3)) // ➞ 7 (7 appears exactly 3 times)

// console.log(nthMostOccured([1, 1, 2, 2, 3, 3], 1)) // ➞ undefined (no element occurs exactly once)

// console.log(nthMostOccured([10, 20, 10, 30, 20, 10, 30, 30], 3)) // ➞ 10 or 30 (both appear 3 times — any one valid)

// console.log(nthMostOccured([], 1)) // ➞ undefined (empty array)


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
//         heapify(arr,i,largest)
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

// console.log(heapSort([4, 10, 3, 5, 1]))

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
//         let node =this.root

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

//         return this.collectWord(node,word,list)
//     }

//     collectWord(node,word,list){
//         if(node.isEndOfWord){
//             list.push(word)
//         }

//         for(let char in node.children){
//             this.collectWord(node.children[char],word+char,list)
//         }

//         return list
//     }

//     display(){
//         return this.collectWord(this.root,'',[])
//     }

//     delete(word){
//         let node =this.root
//         let path = []

//         for(let i=0;i<word.length;i++){
//             let char = word[i]
//             if(!node.children[char]){
//                 return 'no word'
//             }
//             path.push([node,char])
//             node = node.children[char]
//         }

//         if(!node.isEndOfWord){
//             return 'word has no end'
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

//         return 'word deleted'
//     }
// }

// const t = new trie();

// t.insert("cat");
// t.insert("car");
// t.insert("cart");
// t.insert("care");
// t.insert("dog");
// t.insert("doll");
// t.insert("dorm");

// console.log(t.search("cat"));       // true
// console.log(t.search("cab"));       // false
// console.log(t.startsWith("ca"));    // true
// console.log(t.startsWith("do"));    // true
// console.log(t.startsWith("zoo"));   // false

// console.log(t.autoComplete("ca"));  // ['cat', 'car', 'cart', 'care']
// console.log(t.display());           // All inserted words

// console.log(t.delete("cart"));      // 'word deleted'
// console.log(t.search("cart"));      // false
// console.log(t.autoComplete("car")); // ['car', 'care']
// console.log(t.delete("cart"));      // 'no word'


// class Node{
//     constructor(){
//         this.children = {}
//         this.isEndOfWord = false
//     }
// }

// class suffixTrie{
//     constructor(word){
//         this.root = new Node()
//         this.builSuffixTrie(word)
//     }

//     builSuffixTrie(word){
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

// const st = new suffixTrie("banana");

// console.log(st.search("ana"));   // true ✅
// console.log(st.search("nana"));  // true ✅
// console.log(st.search("ban"));   // true ✅
// console.log(st.search("na"));    // true ✅
// console.log(st.search("apple")); // false ❌
// console.log(st.search("nanaa")); // false ❌


//count word,longestPrefix,countPrefix

class Node{
    constructor() {
        this.children = {}
        this.isEndOfWord = false
    }
}

class trie{
    constructor(){
        this.root= new Node()
    }

    insert(word){
        let node = this.root

        for(let i=0;i<word.length;i++){
            let char = word[i]

            if(!node.children[char]){
                node.children[char] = new Node()
            }

            node = node.children[char]
        }

        node.isEndOfWord = true
    }

    countWord(){
        let node =this.root

        let queue = []

        queue.push(node)

        let c = 0

        while(queue.length){
            let val = queue.shift()

            if(val.isEndOfWord){
                c++
            }

            for(let char in val.children){
                queue.push(val.children[char])
            }
        }

        return c
    }

    longestPrefix(word){
        let node = this.root
        let currentPrefix = ''

        for(let i=0;i<word.length;i++){
            let char= word[i]
            if(!node.children[char]){
                break
            }
            currentPrefix+=char
            node =node.children[char]
        }

       

        return currentPrefix
    }

    countPrefix(word){
        let node =this.root
        let c=0

        for(let i=0;i<word.length;i++){
            let char = word[i]
            if(!node.children[char]){
                return 0
            }
            node = node.children[char]
        }

        let queue =[]
        queue.push(node)

        while(queue.length){
            let val = queue.shift()

            if(val.isEndOfWord){
                c++
            }

            for(let char in val.children){
                queue.push(val.children[char])
            }
        }


        return c
    }
}

const t = new trie();

// Insert some words
t.insert("cat");
t.insert("car");
t.insert("cart");
t.insert("care");
t.insert("dog");
t.insert("doll");
t.insert("dorm");

// Test case for countWord
console.log("Total words in trie:", t.countWord()); // Expected: 7

// Test case for longestPrefix
console.log("Longest prefix in trie for 'careful':", t.longestPrefix("careful")); // Expected: "care"
console.log("Longest prefix in trie for 'carry':", t.longestPrefix("carry"));     // Expected: "car"
console.log("Longest prefix in trie for 'dodge':", t.longestPrefix("dodge"));     // Expected: "do"
console.log("Longest prefix in trie for 'zebra':", t.longestPrefix("zebra"));     // Expected: ""

// Test case for countPrefix
console.log("Number of words with prefix 'car':", t.countPrefix("car")); // Expected: 3 (car, cart, care)
console.log("Number of words with prefix 'do':", t.countPrefix("do"));   // Expected: 3 (dog, doll, dorm)
console.log("Number of words with prefix 'ca':", t.countPrefix("ca"));   // Expected: 4 (cat, car, cart, care)
console.log("Number of words with prefix 'z':", t.countPrefix("z"));     // Expected: 0

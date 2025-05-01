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

// class Node{
//     constructor() {
//         this.children = {}
//         this.isEndOfWord = false
//     }
// }

// class trie{
//     constructor(){
//         this.root= new Node()
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
//         let node =this.root

//         let queue = []

//         queue.push(node)

//         let c = 0

//         while(queue.length){
//             let val = queue.shift()

//             if(val.isEndOfWord){
//                 c++
//             }

//             for(let char in val.children){
//                 queue.push(val.children[char])
//             }
//         }

//         return c
//     }

//     longestPrefix(word){
//         let node = this.root
//         let currentPrefix = ''

//         for(let i=0;i<word.length;i++){
//             let char= word[i]
//             if(!node.children[char]){
//                 break
//             }
//             currentPrefix+=char
//             node =node.children[char]
//         }

       

//         return currentPrefix
//     }

//     countPrefix(word){
//         let node =this.root
//         let c=0

//         for(let i=0;i<word.length;i++){
//             let char = word[i]
//             if(!node.children[char]){
//                 return 0
//             }
//             node = node.children[char]
//         }

//         let queue =[]
//         queue.push(node)

//         while(queue.length){
//             let val = queue.shift()

//             if(val.isEndOfWord){
//                 c++
//             }

//             for(let char in val.children){
//                 queue.push(val.children[char])
//             }
//         }


//         return c
//     }
// }

// const t = new trie();

// // Insert some words
// t.insert("cat");
// t.insert("car");
// t.insert("cart");
// t.insert("care");
// t.insert("dog");
// t.insert("doll");
// t.insert("dorm");

// // Test case for countWord
// console.log("Total words in trie:", t.countWord()); // Expected: 7

// // Test case for longestPrefix
// console.log("Longest prefix in trie for 'careful':", t.longestPrefix("careful")); // Expected: "care"
// console.log("Longest prefix in trie for 'carry':", t.longestPrefix("carry"));     // Expected: "car"
// console.log("Longest prefix in trie for 'dodge':", t.longestPrefix("dodge"));     // Expected: "do"
// console.log("Longest prefix in trie for 'zebra':", t.longestPrefix("zebra"));     // Expected: ""

// // Test case for countPrefix
// console.log("Number of words with prefix 'car':", t.countPrefix("car")); // Expected: 3 (car, cart, care)
// console.log("Number of words with prefix 'do':", t.countPrefix("do"));   // Expected: 3 (dog, doll, dorm)
// console.log("Number of words with prefix 'ca':", t.countPrefix("ca"));   // Expected: 4 (cat, car, cart, care)
// console.log("Number of words with prefix 'z':", t.countPrefix("z"));     // Expected: 0

class Node{
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class bst{
    constructor() {
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        const node = new Node(value)

        if(this.root === null){
            this.root = node
        }else{
            this.insertNode(this.root,node)
        }
    }

    insertNode(root,node){
        if(node.value < root.value){
            if(root.left == null){
                root.left = node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right == null){
                root.right = node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }

    search(root,value){
        if(!root){
            return null
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

    bfs(){
        let queue=[]
        let node = this.root

        queue.push(node)

        while(queue.length){
            let cur = queue.shift()

            console.log(cur.value)

            if(cur.left){
                queue.push(cur.left)
            }

            if(cur.right){
                queue.push(cur.right)
            }
        }
    }

    min(root){
        if(!root){
            return null
        }

        while(root.left){
            root = root.left
        }

        return root.value
    }

    max(root){
        if(!root){
            return null
        }

        while(root.right){
            root = root.right
        }

        return root.value
    }

    delete(value){
        this.root = this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if(!root){
            return null
        }

        if(value < root.value){
            root.left = this.deleteNode(root.left,value)
        }
        else if(value > root.value){
            root.right = this.deleteNode(root.right,value)
        }
        else{
            if(!root.left && !root.right){
                return null
            }

            if(!root.left){
                return root.right
            }

            if(!root.right){
                return root.left
            }

            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }

    isPrime(num){
        if(num < 2){
            return false
        }

        for(let i=2;i<=Math.sqrt(num);i++){
            if(num % i === 0){
                return false
            }
        }

        return true
    }

    findKprimes(root,result=[]){
        if(root){
            this.findKprimes(root.left,result)
            if(this.isPrime(root.value)){
                result.push(root.value)
            }
            this.findKprimes(root.right,result)
        }
        return result
    }

    isIdentical(tree1,tree2){
        if(!tree1 && !tree2){
            return true
        }

        if(!tree1 || !tree2){
            return false
        }

        return (tree1.value === tree2.value) && this.isIdentical(tree1.left,tree2.left) && this.isIdentical(tree1.right,tree2.right)
    }

    isBst(root,min=-Infinity,max=Infinity){
        if(!root){
            return true
        }

        if(root.value <= min || root.value >= max){
            return false
        }

        return this.isBst(root.left,min,root.value) && this.isBst(root.right,root.value,max)
    }

    inorderTraversal(root,result=[]){
        if(root){
            this.inorderTraversal(root.left,result)
            result.push(root.value)
            this.inorderTraversal(root.right,result)
        }
        return result
    }

    findKthSmallest(root,k){
        let result = this.inorderTraversal(root)

        return result[k-1] || null
    }

    findKthLargest(root,k){
        let result = this.inorderTraversal(root)

        return result[result.length - k] || null
    }

    findClosest(root,value){
        let result = this.inorderTraversal(root)

        for(let i=0;i<result.length;i++){
            if(result[i]>=value){
                return result[i]
            }
        }

        return null
    }

    successor(root,target){
        if(!root){
            return null
        }

        let result = this.inorderTraversal(root)
        let successor
        for(let i=0;i<result.length;i++){
            if(result[i] === target){
                if(i+1 < result.length){
                    successor=result[i+1]
                    return successor
                }
            }
        }
    }

    predecessor(root,target){
        if(!root){
            return null
        }

        let result = this.inorderTraversal(root)
        let predecessor
        for(let i=0;i<result.length;i++){
            if(result[i] == target){
                if(i-1 >= 0){
                    predecessor = result[i-1]
                    return predecessor
                }
            }
        }
    }

    removeDuplicates(root){
        if(!root){
            return null
        }

        let unique = new Set()

        function inOrder(root){
            if(root){
                inOrder(root.left)
                unique.add(root.value)
                inOrder(root.right)
            }
        }

        inOrder(root)

        this.root = null

        unique.forEach((val)=>{
            this.insert(val)
        })
    }

   findParent(root,target){
    if(!root){
        return null
    }
    let parent
    function inOrder(root){
        if(root){
            inOrder(root.left)

            if(root.left && root.left.value === target){
                parent = root.value
            }

            if(root.right && root.right.value === target){
                parent = root.value
            }

            inOrder(root.right)
        }

        return parent
    }

  let foundedParent =inOrder(root)

  return foundedParent
   }

   findChildren(root,target){
    if(!root){
        return null
    }
    else if(root.value === target){
        const children = {
            leftChildren : root.left ? root.left.value : null,
            rightChildren : root.right ? root.right.value : null
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

   findSiblings(root,target){
    if(!root){
        return null
    }
    
    let siblings = null

    function inOrder(root){
        if(root){
            inOrder(root.left)

            if(root.left && root.left.value == target){
                siblings = root.right? root.right.value : null
                return siblings
            }

            if(root.right && root.right.value === target){
                siblings = root.left ? root.left.value :null
                return siblings
            }

            inOrder(root.right)
        }
    }

    inOrder(root)

    return siblings
   }

   findAncestor(root,target,result =[]){
    if(!root){
        return null
    }
    
    if(root.value == target){
        return result
    }

    result.push(root.value)
    if(target < root.value){
        return this.findAncestor(root.left,target,result)
    }else{
        return this.findAncestor(root.right,target,result)
    }
   }

   findDescendant(root,target){
    if(!root){
        return null
    }

    if(root.value===target){
        return this.collectDescendant(root)
    }
    else if(target < root.value){
        return this.findDescendant(root.left,target)
    }
    else{
        return this.findDescendant(root.right,target)
    }
   }

   collectDescendant(root,result=[]){
    if(root){
        result.push(root.value)

        this.collectDescendant(root.left,result)
        this.collectDescendant(root.right,result)
    }
    return result
   }

   findHeight(){
    let queue = []
    let node = this.root
    let height = 0
    queue.push(node)

    while(queue.length){
        let nodeCount = queue.length
        height++

        while(nodeCount){
            let cur = queue.shift()
            if(cur.left){
                queue.push(cur.left)
            }

            if(cur.right){
                queue.push(cur.right)
            }
            nodeCount--
        }
    }

    return height
   }

   findDegree(root,target){
    let c =0
    if(!root){
        return null
    }
    else if(root.value == target){
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

   findDistance(root,target){
    if(!root){
        return null
    }
    let distance =0 
    while(root){
        if(target < root.value){
            root = root.left
            distance++
        }
        else if(target > root.value){
            root = root.right
            distance++
        }
        else {
            return distance
        }
    }
    return -1
   }

   findDepth(root,target){
    if(!root){
        return null
    }

    let depth =0

    while(root){
        if(target < root.value){
            root = root.left
            depth++
        }
        else if(target > root.value){
            root = root.right
            depth++
        }
        else{
            return depth
        }
    }
    return -1
   }

   path(root,target,result=[]){
    if(!root){
        return null
    }

    while(root){
        result.push(root.value)

        if(target < root.value){
            root =root.left
        }
        else if(target > root.value){
            root = root.right
        }
        else {
            break
        }
    }

    return result
   }

   LCA(root,n1,n2){
    if(!root){
        return null
    }

    while(root){
        if(n1 < root.value && n2 < root.value){
            root = root.left
        }
        else if(n1 > root.value && n2 > root.value){
            root = root.right
        }
        else{
            return root
        }
    }
   }

   findDistanceBetweenTwoNode(n1,n2){
    let lca = this.LCA(this.root,n1,n2)

    if(!lca){
        return 0
    }

    let distance1=this.findDistance(lca,n1)
    let distance2=this.findDistance(lca,n2)

    return distance1 + distance2
}

   findPathBetweenTwoNodes(n1,n2){
    let lca = this.LCA(this.root,n1,n2)

    if(!lca){
        return []
    }

    let path1=this.path(lca,n1)
    let path2=this.path(lca,n2)

    return [...path1.reverse(),...path2.slice(1)]
   }

   onlyOneChildNode(root){
    if(!root){
        return null
    }

    let count=0

    function preOrder(root,result=[]){

        if(!root){
            return
        }

        if(root){
            if((root.left && !root.right) || (root.right && !root.left)){
                count++
                result.push(root.value)
            }
            preOrder(root.left,result)
            preOrder(root.right,result)
        }
        return result
    }

   ;let result= preOrder(root)

    return {count,result}
   }

   noOfNodes(root){
    let queue = []
    queue.push(root)

    let count = 0

    while(queue.length){
        let cur = queue.shift()

        count++

        if(cur.left){
            queue.push(cur.left)
        }

        if(cur.right){
            queue.push(cur.right)
        }
    }

    return count
   }

   leftNodeOnly(root){
    if(!root){
        return null
    }
    let c = 0
    function preOrder(root){
        if(root){
            if(root.left && !root.right){
                c++
            }
    
            preOrder(root.left)
            preOrder(root.left)
        }
    }

    preOrder(root)

    return c
   }

   rightNodeOnly(root){
    if(!root){
        return null
    }

    let count = 0

    function preOrder(root){
        if(root){
            if(root.right && !root.left){
                count++
            }

            preOrder(root.left)
            preOrder(root.right)
        }
    }

    preOrder(root)

    return count
   }

}


const tree = new bst()

// Insert nodes
tree.insert(50)
tree.insert(30)
tree.insert(70)
tree.insert(20)
tree.insert(40)
tree.insert(60)
tree.insert(80)
tree.insert(60)  // Duplicate

// Traversals
console.log("InOrder:", tree.inOrder(tree.root))        // 20 30 40 50 60 60 70 80
console.log("PreOrder:", tree.preOrder(tree.root))      // 50 30 20 40 70 60 80
console.log("PostOrder:", tree.postOrder(tree.root))    // 20 40 30 60 80 70 50
tree.bfs()                                               // 50 30 70 20 40 60 80

// Prime
console.log("Prime Nodes:", tree.findKprimes(tree.root)) // [ 2, 3, 5, 7 ] etc.

// Search
console.log("Search 60:", tree.search(tree.root, 60))    // true
console.log("Search 90:", tree.search(tree.root, 90))    // false

// Min, Max
console.log("Min:", tree.min(tree.root))                 // 20
console.log("Max:", tree.max(tree.root))                 // 80

// Kth
console.log("3rd Smallest:", tree.findKthSmallest(tree.root, 3)) // 40
console.log("2nd Largest:", tree.findKthLargest(tree.root, 2))   // 70

// Closest
console.log("Closest to 61:", tree.findClosest(tree.root, 61)) // 70

// Successor & Predecessor
console.log("Successor of 60:", tree.successor(tree.root, 60))     // 70
console.log("Predecessor of 60:", tree.predecessor(tree.root, 60)) // 50

// Parent
console.log("Parent of 60:", tree.findParent(tree.root, 60)) // 70

// Children
console.log("Children of 70:", tree.findChildren(tree.root, 70)) // { left: 60, right: 80 }

// Leaf Nodes
console.log("Leaf Nodes:", tree.findLeafNode(tree.root)) // [20, 40, 60, 80]

// Siblings
console.log("Sibling of 60:", tree.findSiblings(tree.root, 60)) // 80

// Ancestor
console.log("Ancestor of 60:", tree.findAncestor(tree.root, 60)) // [50, 70]

// Descendants
console.log("Descendants of 70:", tree.findDescendant(tree.root, 70)) // [70, 60, 80]

// Height
console.log("Tree Height:", tree.findHeight()) // 3

// Degree
console.log("Degree of 70:", tree.findDegree(tree.root, 70)) // 2

// Depth & Distance
console.log("Depth of 40:", tree.findDepth(tree.root, 40))      // 2
console.log("Distance to 20:", tree.findDistance(tree.root, 20))// 2

// Path
console.log("Path to 20:", tree.path(tree.root, 20)) // [50, 30, 20]

// LCA
console.log("LCA of 20 and 40:", tree.LCA(tree.root, 20, 40).value) // 30

// Distance between nodes
console.log("Distance between 20 and 80:", tree.findDistanceBetweenTwoNode(20, 80)) // 4

// Path between nodes
console.log("Path between 20 and 80:", tree.findPathBetweenTwoNodes(20, 80)) // [20, 30, 50, 70, 80]

// Remove Duplicates
tree.removeDuplicates(tree.root)
console.log("InOrder after removing duplicates:", tree.inOrder(tree.root)) // 20 30 40 50 60 70 80


let bst2 = new bst(); // Assuming you have a BST class
bst2.insert(10);
bst2.insert(5);
bst2.insert(2);
bst2.insert(15);
bst2.insert(12)
let res = bst2.onlyOneChildNode(bst2.root);
console.log(res); // Output: { count: 1, result: [20] }

console.log('noofNodes',bst2.noOfNodes(bst2.root))

console.log(bst2.leftNodeOnly(bst2.root)) // Output: 2

const bst3 = new bst();
bst3.insert(10);
bst3.insert(5);
bst3.insert(15);
bst3.insert(20);
bst3.insert(25);

console.log(bst3.rightNodeOnly(bst3.root)); // Output: 2

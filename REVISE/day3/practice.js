// class maxHeap{
//     constructor(){
//         this.heap=[]
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
//         let temp=this.heap[index1]
//         this.heap[index1] = this.heap[index2]
//         this.heap[index2] = temp
//     }

//     isEmpty(){
//         return this.heap.length === 0
//     }

//     add(value){
//         this.heap.push(value)
//         this.heapifyUp()
//     }

//     heapifyUp(){
//         let index=this.heap.length-1
//         while(this.hasParent(index) && this.getParent(index) < this.heap[index]){
//             this.swap(this.getParentIndex(index),index)
//             index = this.getParentIndex(index)
//         }
//     }

//     remove(){
//         if(this.isEmpty()){
//             return null
//         }

//         let val=this.heap[0]
        
//         this.heap[0]=this.heap[this.heap.length-1]

//         this.heap.pop()

//         this.heapifyDown()

//         return val
//     }

//     heapifyDown(){
//         let index=0
//         let largest
//         while(this.hasLeftChild(index)){
//             largest = this.getLeftChildIndex(index)

//             if(this.hasRightChild(index) && this.getRightChild(index) > this.getLeftChild(index)){
//                 largest=this.getRightChildIndex(index)
//             }

//             if(this.heap[index] >= this.heap[largest]){
//                 break
//             }else{
//                 this.swap(index,largest)
//             }

//             index=largest
//         }
//     }

//     heapSort(arr){
//         const heap=new maxHeap()

//         for(let i=0;i<arr.length;i++){
//             heap.add(arr[i])
//         }

//         let sortedArr=[]

//         while(heap.heap.length){
//             sortedArr.push(heap.remove())
//         }

//         return sortedArr
//     }

//     peek(){
//         if(this.isEmpty()){
//             return null
//         }

//         return this.heap[0]
//     }

//     findKthSmallest(arr,k){

//         if(arr.length < k){
//             return  null
//         }
//         const heap=new maxHeap()

//         for(let i=0;i<arr.length;i++){
//             heap.add(arr[i])

//             if(heap.heap.length > k){
//                 heap.remove()
//             }
//         }

//         return heap.peek()
//     }
// }

// const heap = new maxHeap();

// // Test 1: Insertion order
// heap.add(10);
// heap.add(5);
// heap.add(30);
// heap.add(2);
// heap.add(100);
// console.log("Test 1:", heap.heap); // [100, 30, 10, 2, 5]

// // Test 2: Remove max
// console.log("Test 2a:", heap.remove()); // 100
// console.log("Test 2b:", heap.heap);     // [30, 5, 10, 2]

// // Test 3: Remove all
// console.log("Test 3a:", heap.remove()); // 30
// console.log("Test 3b:", heap.remove()); // 10
// console.log("Test 3c:", heap.remove()); // 5
// console.log("Test 3d:", heap.remove()); // 2
// console.log("Test 3e:", heap.remove()); // null (not 'no value')

// // Test 4: Mixed add/remove
// heap.add(15);
// heap.add(40);
// heap.add(25);
// console.log("Test 4a:", heap.remove()); // 40
// console.log("Test 4b:", heap.remove()); // 25
// console.log("Test 4c:", heap.heap);     // [15]

// // Test 5: Heap Sort
// const h = new maxHeap();
// console.log("Test 5:", h.heapSort([5, 1, 9, 3, 7])); // [9, 7, 5, 3, 1]

// // Test 6: findKthSmallest
// const kTest = new maxHeap();
// // console.log("Test 6:", kTest.findKthSmallest([3, 1, 5, 12, 2, 11], 4)); // 5 (3rd smallest)

// // Edge Case: findKthSmallest when k > array size
// console.log("Test 7:", kTest.findKthSmallest([1, 2], 10)); // undefined or error depending on logic


// class minHeap{
//     constructor(){
//         this.heap=[]
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

//     isEmpty(){
//         return this.heap.length === 0
//     }

//     swap(index1,index2){
//         let temp=this.heap[index1]
//         this.heap[index1] = this.heap[index2]
//         this.heap[index2] = temp
//     }

//     peek(){
//         if(this.isEmpty()){
//             return null
//         }
        
//         return this.heap[0]
//     }

//     print(){
//         console.log(this.heap)
//     }

//     add(value){
//         this.heap.push(value)
//         this.heapifyUp()
//     }

//     heapifyUp(){
//         let index=this.heap.length-1

//         while(this.hasParent(index) && this.getParent(index) > this.heap[index]){
//             this.swap(this.getParentIndex(index),index)
//             index=this.getParentIndex(index)
//         }
//     }

//     remove(){
//         if(this.isEmpty()){
//             return null
//         }

//         let val=this.heap[0]

//         this.heap[0] = this.heap[this.heap.length-1]

//         this.heap.pop()

//         this.heapifyDown()

//         return val
//     }

//     heapifyDown(){
//         let index =0
//         let smallest

//         while(this.hasLeftChild(index)){
//             smallest = this.getLeftIndex(index)

//             if(this.hasRightChild(index) && this.getRightChild(index) < this.getLeftChild(index)){
//                 smallest = this.getRightIndex(index)
//             }

//             if(this.heap[index] <= this.heap[smallest]){
//                 break
//             }
//             else{
//                 this.swap(index,smallest)
//             }

//             index=smallest
//         }
//     }

//     heapSort(arr){
//         const h=new minHeap()

//         for(let i=0;i<arr.length;i++){
//             h.add(arr[i])
//         }

//         let sortedArr=[]

//         while(h.heap.length){
//             sortedArr.push(h.remove())
//         }

//         return sortedArr
//     }

//     findKthLargest(arr,k){

//         if(arr.length < k){
//             return null
//         }
//         const h=new minHeap()

//         for(let i=0;i<arr.length;i++){
//             h.add(arr[i])

//             if(h.heap.length > k){
//                 h.remove()
//             }
//         }

//         return h.peek()
//     }
// }

// const minHeapInstance = new minHeap();

// // Test 1: Insertion order
// minHeapInstance.add(10)
// minHeapInstance.add(5)
// minHeapInstance.add(30)
// minHeapInstance.add(2)
// minHeapInstance.add(100)
// console.log("Test 1:", minHeapInstance.heap) // Expected: [2, 5, 10, 30, 100]

// // Test 2: Remove root (min element)
// console.log("Test 2a:", minHeapInstance.remove()) // Expected: 2
// console.log("Test 2b:", minHeapInstance.heap)    // Expected: [5, 30, 10, 100]

// // Test 3: Heap sort
// const arr = [5, 1, 9, 3, 7]
// console.log("Test 3:", minHeapInstance.heapSort(arr)) // Expected: [1, 3, 5, 7, 9]

// // Test 4: Find kth largest element
// console.log("Test 4:", minHeapInstance.findKthLargest([3, 1, 5, 12, 2, 11], 3)) // Expected: 5 (3rd largest)
// console.log("Test 5:", minHeapInstance.findKthLargest([1, 2], 10))

// function topKFrequentElement(arr,k){
//     let map={}

//     for(let i=0;i<arr.length;i++){
//         if(map[arr[i]]){
//             map[arr[i]]++
//         }else{
//             map[arr[i]] = 1
//         }
//     }

//     for(let key in map){
//         if(map[key] === k){
//             return Number(key)
//         }
//     }

//     return -1
// }

// console.log(topKFrequentElement( [1, 1, 1, 2, 2, 3],3))

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

//     if(largest != i){
//         [arr[i],arr[largest]] = [arr[largest],arr[i]]
//         heapify(arr,i,largest)
//     }
// }

// function heapSort(arr){
//     let n=arr.length

//     for(let i=Math.floor((n/2)-1);i>=0;i--){
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
//             let char=word[i]

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
//                 return false
//             }
//             node = node.children[char]
//         }

//         let list =[]


//        return this.collectWords(node,word,list)
//     }

//     collectWords(node,word,list){
//         if(node.isEndOfWord){
//             list.push(word)
//         }

//         for(let char in node.children){
//             this.collectWords(node.children[char],word+char,list)
//         }

//         return list
//     }

//     print(){
//         return this.collectWords(this.root,'',[])
//     }

//     delete(word){
//         let node = this.root
//         let path=[]
//         for(let i=0;i<word.length;i++){
//             let char = word[i]
//             if(!node.children[char]){
//                 return false
//             }
//             path.push([node,char])
//             node = node.children[char]
//         }

//         if(!node.isEndOfWord){
//             return 'word does not contail end'
//         }

//         node.isEndOfWord = false

//         for(let i=word.length-1;i>=0;i--){
//             let [parentNode,char] = path[i]

//             if(Object.keys(node.children).length > 0 || node.isEndOfWord){
//                 break
//             }

//             delete parentNode.children[char]

//             node = parentNode
//         }
//     }
// }

// const t = new trie();

// // Insert words
// t.insert('car');
// t.insert('cart');
// t.insert('carbon');
// t.insert('cat');
// t.insert('dog');

// console.log("Initial Trie:", t.print());
// // Expected: ['car', 'cart', 'carbon', 'cat', 'dog']

// // Search tests
// console.log("Search 'cart':", t.search('cart'));       // true
// console.log("Search 'carp':", t.search('carp'));       // false

// // StartsWith tests
// console.log("StartsWith 'ca':", t.startsWith('ca'));   // true
// console.log("StartsWith 'do':", t.startsWith('do'));   // true
// console.log("StartsWith 'z':", t.startsWith('z'));     // false

// // AutoComplete tests
// console.log("AutoComplete 'car':", t.autoComplete('car'));
// // Expected: ['car', 'cart', 'carbon']

// console.log("AutoComplete 'c':", t.autoComplete('c'));
// // Expected: ['car', 'cart', 'carbon', 'cat']

// // Delete tests
// console.log("Deleting 'cart'");
// t.delete('cart');
// console.log("Trie after deleting 'cart':", t.print());
// // Expected: ['car', 'carbon', 'cat', 'dog']

// console.log("Deleting 'car'");
// t.delete('car');
// console.log("Trie after deleting 'car':", t.print());
// // Expected: ['carbon', 'cat', 'dog']

// console.log("Deleting non-existing 'zoo':", t.delete('zoo'));
// // Expected: false

// console.log("Deleting prefix but not full word 'ca':", t.delete('ca'));
// // Expected: 'word does not contain end'

// console.log("Final Trie:", t.print());
// // Expected: ['carbon', 'cat', 'dog']


// class Node{
//     constructor(){
//         this.children = {}
//         this.isEndOfWord = false
//     }
// }

// class suffixTrie{
//     constructor(value){
//         this.root = new Node()
//         this.buildSuffix(value)
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
//         let node =this.root

//         for(let i=0;i<word.length;i++){
//             let char = word[i]

//             if(!node.children[char]){
//                 return false
//             }

//             node = node.children[char]
//         }

//         return node.isEndOfWord
//     }
// }

// const trie = new suffixTrie('banana');

// console.log(trie.search('banana')); // true
// console.log(trie.search('anana'));  // true
// console.log(trie.search('nana'));   // true
// console.log(trie.search('ana'));    // true
// console.log(trie.search('na'));     // true
// console.log(trie.search('a'));      // true
// console.log(trie.search('ban'));    // false
// console.log(trie.search('nab'));    // false


// class Node{
//     constructor(){
//         this.children = {}
//         this.isEndOfWord = false
//     }
// }

// class trieOperation{
//     constructor(){
//         this.root = new Node()
//     }

//     insert(word){
//         let node =this.root

//         for(let i=0;i<word.length;i++){
//             let char = word[i]
//             if(!node.children[char]){
//                 node.children[char] = new Node()
//             }
//             node =  node.children[char]
//         }

//         node.isEndOfWord = true
//     }

//     countWord(){
//         let node =this.root
//         let queue= []
//         queue.push(node)

//         let count = 0

//         while(queue.length){
//             let val=queue.shift()

//             if(val.isEndOfWord){
//                 count++
//             }

//             for(let char in val.children){
//                 queue.push(val.children[char])
//             }
//         }

//         return count
//     }

//     countPrefixWord(word){
//         let node = this.root

//         for(let i=0;i<word.length;i++){
//             let char = word[i]

//             if(!node.children[char]){
//                 return 0
//             }
//             node = node.children[char]
//         }

//         let count = 0
//         let queue =[]
//         queue.push(node)

//         while(queue.length){
//             let val = queue.shift()

//             if(val.isEndOfWord){
//                 count++
//             }

//             for(let char in val.children){
//                 queue.push(val.children[char])
//             }
//         }

//         return count
//     }

//     longestPrefix(word){
//         let node = this.root
//         let longestPrefix = ''
//         let currentPrefix = ''
//         for(let i=0;i<word.length;i++){
//             let char = word[i]

//             if(!node.children[char]){
//                 break
//             }

//             node =node.children[char]

//             currentPrefix +=char

//             if(node.isEndOfWord){
//                 longestPrefix = currentPrefix
//             }
//         }
//         return longestPrefix
//     }
// }
// const t = new trieOperation()
// t.insert("apple")
// t.insert("app")
// t.insert("apricot")
// t.insert("aeroplane")
// t.insert("bat")
// t.insert("batman")

// console.log(t.countWord()) // Expected: 4
// console.log(t.countPrefixWord("a")) 
// console.log(t.longestPrefix("applesauce"))

class graph{
    constructor(){
        this.adjancyList = {}
    }

    addVertex(vertex){
        if(!this.adjancyList[vertex]){
            this.adjancyList[vertex] = new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjancyList[vertex1]){
            this.addVertex(vertex1)
        }

        if(!this.adjancyList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjancyList[vertex1].add(vertex2)
        this.adjancyList[vertex2].add(vertex1)
    }

    hasEdge(vertex1,vertex2){
        if(!this.adjancyList[vertex1] || !this.adjancyList[vertex2]){
            return null
        }

        return this.adjancyList[vertex1].has(vertex2) && this.adjancyList[vertex2].has(vertex1)
    }

    removeEdge(vertex1,vertex2){
        if(!this.adjancyList[vertex1] || !this.adjancyList[vertex2]){
            return null
        }

        this.adjancyList[vertex1].delete(vertex2)
        this.adjancyList[vertex2].delete(vertex1)
    }

    print(){
        for(let vertex in this.adjancyList){
            // console.log("vertex",vertex)
            // console.log("vertex edges and neighbours",this.adjancyList[vertex])
            console.log(`${vertex} => ${[...this.adjancyList[vertex]]}`)
        }
    }

    removeVertex(vertex){
        if(!this.adjancyList[vertex]){
            return null
        }

        for(let neighbour of this.adjancyList[vertex]){
            console.log(vertex,neighbour)

            this.removeEdge(vertex,neighbour)
        }


        delete this.adjancyList[vertex]

    }

    bfs(start){
        let visitedNode = new Set()
        visitedNode.add(start)
        let queue=[]
        queue.push(start)

        while(queue.length){
            let node = queue.shift()
            console.log(node)
            this.adjancyList[node].forEach((neighbour)=>{
                if(!visitedNode.has(neighbour)){
                    visitedNode.add(neighbour)
                    queue.push(neighbour)
                }
            })
        }
    }

    dfs(start,visitedNode = new Set()){
        visitedNode.add(start)

        console.log(start)

        this.adjancyList[start].forEach((neighbour)=>{
            if(!visitedNode.has(neighbour)){
                this.dfs(neighbour,visitedNode)
            }
        })
    }

    bfsCycleDetection(start){
        let visitedNode=new Set()
        visitedNode.add(start)
        let queue=[]
        queue.push({vertex:start,parent:null})

        while(queue.length){
            let {vertex,parent} = queue.shift()
            for(let neighbour of this.adjancyList[vertex]){
                if(!visitedNode.has(neighbour)){
                    visitedNode.add(neighbour)
                    queue.push({vertex:neighbour,parent:vertex})
                }
                else if(neighbour != parent){
                    console.log('cycle detected')
                    return
                }
            }
        }
        return false
    }

    dfsCycleDetection(start,visitedNode = new Set(),parent=null){
        visitedNode.add(start)

        for(let neighbour of this.adjancyList[start]){
            if(!visitedNode.has(neighbour)){
                this.dfsCycleDetection(neighbour,visitedNode,start)
                return true
            }
            else if(neighbour != parent){
                console.log("cycle detected")
                return true
            }
        }

        console.log("No cycle found")
    }
}

const g = new graph();

// Add vertices
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");

// Add edges
g.addEdge("A", "B");
g.addEdge("A", "C");

// Print graph
// g.print();
// Expected Output:
// A => [ 'B', 'C' ]
// B => [ 'A' ]
// C => [ 'A' ]

// Test hasEdge
// console.log("A-B:", g.hasEdge("A", "B")); // true
// console.log("B-C:", g.hasEdge("B", "C")); // false

// Remove edge
// g.removeEdge("A", "B");
// console.log("After removing edge A-B:");
// g.print();
// A => [ 'C' ]
// B => [ ]
// C => [ 'A' ]

// console.log("A-B:", g.hasEdge("A", "B")); // false

// console.log("remove vertex",g.removeVertex("A"))

// g.print()

// g.bfs('A')

// g.dfs('A')

console.log(g.bfsCycleDetection("A"))

console.log(g.dfsCycleDetection("A"))
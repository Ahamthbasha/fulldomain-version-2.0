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


class minHeap{
    constructor(){
        this.heap = []
    }

    isEmpty(){
        return this.heap.length == 0
    }

    getSize(){
        return this.heap.length
    }

    getParentIndex(index){
        return Math.floor((index-1)/2)
    }

    getLeftIndex(index){
        return 2 * index + 1
    }

    getRightIndex(index){
        return 2 * index + 2
    }

    getParent(index){
        return this.heap[this.getParentIndex(index)]
    }

    getLeft(index){
        return this.heap[this.getLeftIndex(index)]
    }

    getRight(index){
        return this.heap[this.getRightIndex(index)]
    }

    hasParent(index){
        return this.getParentIndex(index) >= 0
    }

    hasLeft(index){
        return this.getLeftIndex(index) < this.heap.length
    }

    hasRight(index){
        return this.getRightIndex(index) < this.heap.length
    }

    swap(index1,index2){
        let temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }

    peek(){
        if(this.isEmpty()){
            return 'empty'
        }

        return this.heap[0]
    }

    add(value){
        this.heap.push(value)
        this.heapifyUp()
    }

    heapifyUp(){
        let index = this.heap.length-1

        while(this.hasParent(index) && this.getParent(index) > this.heap[index]){
            this.swap(this.getParentIndex(index),index)

            index = this.getParentIndex(index)
        }
    }

    remove(){
        if(this.isEmpty()){
            return 'nothing to remove'
        }

        let val = this.heap[0]

        this.heap[0] = this.heap[this.heap.length-1]

        this.heap.pop()

        this.heapifyDown()

        return val
    }

    heapifyDown(){
        let index = 0

        let smallest
        
        while(this.hasLeft(index)){
            smallest = this.getLeftIndex(index)

            if(this.hasRight(index) && this.getRight(index) < this.getLeft(index)){
                smallest = this.getRightIndex(index)
            }

            if(this.heap[index] <= this.heap[smallest]){
                break
            }else{
                this.swap(index,smallest)
            }

            index = smallest
        }
    }

    heapSort(arr){
        let h = new minHeap()

        for(let i=0;i<arr.length;i++){
            h.add(arr[i])
        }

        let sortedArr = []

        while(h.heap.length){
            sortedArr.push(h.remove())
        }

        return sortedArr
    }

    findKthLargest(arr,k){
        if(arr.length < k){
            return 'invalid k'
        }

        const h = new minHeap()

        for(let i=0;i<arr.length;i++){
            h.add(arr[i])
            if(h.heap.length > k){
                h.remove()
            }
        }

        return h.peek()
    }
}

let heap = new minHeap();
heap.add(20);
heap.add(10);
heap.add(30);
console.log(heap.peek()); // Expected: 10


heap = new minHeap();
heap.add(5);
heap.add(2);
heap.add(8);
console.log(heap.remove()); // Expected: 2
console.log(heap.peek());   // Expected: 5


heap = new minHeap();
console.log(heap.heapSort([7, 1, 3, 5, 9])); 
// Expected: [1, 3, 5, 7, 9]

heap = new minHeap();
console.log(heap.findKthLargest([3, 2, 1, 5, 6, 4], 2)); 
// Expected: 5 (2nd largest is 5)

heap = new minHeap();
console.log(heap.peek()); // Expected: "empty"
console.log(heap.remove()); // Expected: "nothing to remove"

heap = new minHeap();
console.log(heap.findKthLargest([4, 2], 5)); 
// Expected: "invalid k"

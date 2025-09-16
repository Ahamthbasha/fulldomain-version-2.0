// function bubbleSort(arr){
//     let swapped = true
    
//     while(swapped){
//         swapped = false
//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i] > arr[i+1]){
//                 let temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp
//                 swapped = true
//             }
//         }
//     }
//     return arr
// }

// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let j = i - 1
//         let cur = arr[i]

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


// function QuickSort(arr){
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

//     return [...QuickSort(leftArr),pivot,...QuickSort(rightArr)]
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


// const arr1 = [5, 3, 8, 4, 2];
// const arr2 = [10, -1, 2, 5, 0, 6, 4, -5];
// const arr3 = [1, 2, 3, 4, 5];  // already sorted
// const arr4 = [5, 4, 3, 2, 1];  // reverse sorted
// const arr5 = [7];              // single element
// const arr6 = [];               // empty array

// console.log("Bubble Sort:", bubbleSort([...arr1]));
// console.log("Insertion Sort:", insertionSort([...arr1]));
// console.log("Selection Sort:", selectionSort([...arr1]));
// console.log("Quick Sort:", QuickSort([...arr1]));
// console.log("Merge Sort:", mergeSort([...arr1]));

// console.log("Bubble Sort (arr2):", bubbleSort([...arr2]));
// console.log("Quick Sort (arr3):", QuickSort([...arr3]));
// console.log("Merge Sort (arr4):", mergeSort([...arr4]));
// console.log("Insertion Sort (arr5):", insertionSort([...arr5]));
// console.log("Selection Sort (arr6):", selectionSort([...arr6]));


//stack

// class Stack{
//     constructor(){
//         this.items = []
//     }

//     isEmpty(){
//         return this.items.length == 0
//     }

//     push(value){
//         this.items.push(value)
//     }

//     pop(){
//         if(this.isEmpty()){
//             return 'stack is empty'
//         }else{
//             return this.items.pop()
//         }
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'stack is empty'
//         }

//         return this.items[this.items.length-1]
//     }

//     print(){
//         console.log(this.items)
//     }

//     revString(str){
//         const s = new Stack()

//         for(let i=0;i<str.length;i++){
//             s.push(str[i])
//         }

//         let newStr = ''

//         while(s.items.length){
//             newStr += s.pop()
//         }

//         return newStr
//     }

//     revArr(arr){
//         const s = new Stack()

//         for(let i=0;i<arr.length;i++){
//             s.push(arr[i])
//         }

//         let newArr = []

//         while(s.items.length){
//             newArr.push(s.pop())
//         }

//         return newArr
//     }
// }

// const s = new Stack();

// // Test stack push & print
// s.push(10);
// s.push(20);
// s.push(30);
// console.log("After pushing 10,20,30:");
// s.print();   // [10, 20, 30]

// // Test peek
// console.log("Peek:", s.peek());  // 30

// // Test pop
// console.log("Pop:", s.pop());    // 30
// console.log("After popping:");
// s.print();   // [10, 20]

// // Test isEmpty
// console.log("Is Empty:", s.isEmpty());  // false
// s.pop();
// s.pop();
// console.log("Pop empty:", s.pop());     // "stack is empty"
// console.log("Is Empty:", s.isEmpty());  // true

// // Test revString
// console.log("Reverse String:", s.revString("hello"));  // "olleh"

// // Test revArr
// console.log("Reverse Array:", s.revArr([1, 2, 3, 4, 5]));  // [5, 4, 3, 2, 1]


//object based stack

// class Stack{
//     constructor(){
//         this.items = {}
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     push(value){
//         this.items[this.size] = value
//         this.size++
//     }

//     pop(){
//         if(this.isEmpty()){
//             return 'stack is empty'
//         }
        
//         let val = this.items[this.size-1]
//         delete this.items[this.size-1]
//         this.size--
//         return val
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'stack is empty'
//         }

//         return this.items[this.size-1]
//     }

//     print(){
//         console.log(this.items)
//     }
// }

// const s = new Stack();

// // Test isEmpty on new stack
// console.log("Is Empty (initial):", s.isEmpty()); // true

// // Push values
// s.push(10);
// s.push(20);
// s.push(30);
// console.log("After pushing 10,20,30:");
// s.print(); // { '0': 10, '1': 20, '2': 30 }

// // Peek top value
// console.log("Peek:", s.peek()); // 30

// // Pop values
// console.log("Pop:", s.pop()); // 30
// console.log("After popping one:");
// s.print(); // { '0': 10, '1': 20 }

// // Pop remaining
// console.log("Pop:", s.pop()); // 20
// console.log("Pop:", s.pop()); // 10
// console.log("Pop empty:", s.pop()); // 'stack is empty'

// // Check empty again
// console.log("Is Empty (end):", s.isEmpty()); // true

//stack based on linkedlist

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

//     push(value){
//         const node = new Node(value)

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
//             return 'stack list is empty'
//         }
//         else if(this.size == 1){
//             let val = this.head.value
//             this.head = null
//             this.size--
//             return val
//         }
//         else{
//             let val = this.head.value
//             this.head = this.head.next
//             this.size--
//             return val
//         }
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'list is empty'
//         }
        
//         return this.head.value
//     }

//     display(){
//         if(this.isEmpty()){
//             return 'list is empty'
//         }else{
//             let val = ""

//             let temp = this.head

//             while(temp){
//                 val += temp.value + '->'
//                 temp = temp.next
//             }
            
//             val += 'null'

//             return val
//         }
//     }
// }

// const s = new Stack();

// console.log("Is Empty (initial):", s.isEmpty()); // true

// // Push values
// s.push(10);
// s.push(20);
// s.push(30);
// console.log("After pushing 10,20,30:");
// console.log(s.display()); // 30->20->10->null

// // Peek top value
// console.log("Peek:", s.peek()); // 30

// // Pop values
// console.log("Pop:", s.pop()); // 30
// console.log("After popping one:");
// console.log(s.display()); // 20->10->null

// // Pop remaining
// console.log("Pop:", s.pop()); // 20
// console.log("Pop:", s.pop()); // 10
// console.log("Pop empty:", s.pop()); // 'stack list is empty'

// // Check empty again
// console.log("Is Empty (end):", s.isEmpty()); // true
// console.log("Display empty:", s.display());  // 'list is empty'

//queue based on array

// class Queue{
//     constructor(){
//         this.item = []
//     }

//     isEmpty(){
//         return this.item.length == 0
//     }

//     enqueue(value){
//         this.item.push(value)
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return 'queue is empty'
//         }
//         return this.item.shift()
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'queue is empty'
//         }

//         return this.item[0]
//     }

//     print(){
//         console.log(this.item)
//     }
// }

// const q = new Queue();

// console.log("Is Empty (initial):", q.isEmpty()); // true

// // Enqueue elements
// q.enqueue(10);
// q.enqueue(20);
// q.enqueue(30);
// console.log("After enqueue 10,20,30:");
// q.print(); // [10, 20, 30]

// // Peek at front
// console.log("Peek:", q.peek()); // 10

// // Dequeue elements
// console.log("Dequeue:", q.dequeue()); // 10
// console.log("After one dequeue:");
// q.print(); // [20, 30]

// // Dequeue remaining
// console.log("Dequeue:", q.dequeue()); // 20
// console.log("Dequeue:", q.dequeue()); // 30
// console.log("Dequeue empty:", q.dequeue()); // 'queue is empty'

// // Check empty again
// console.log("Is Empty (end):", q.isEmpty()); // true


//queue based on object

// class Queue{
//     constructor(){
//         this.item = {}
//         this.head = 0
//         this.tail = 0
//     }

//     isEmpty(){
//         return this.head == this.tail
//     }

//     getSize(){
//         return this.head - this.tail
//     }

//     enqueue(value){
//         this.item[this.head] = value
//         this.head++
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return 'queue object is empty'
//         }

//         let val = this.item[this.tail]
//         delete this.item[this.tail]
//         this.tail++
//         return val
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'queue is empty'
//         }

//         return this.item[this.head-1]
//     }

//     print(){
//         console.log(this.item)
//     }
// }

// const q = new Queue();

// console.log("Is Empty (initial):", q.isEmpty()); // true
// console.log("Size (initial):", q.getSize()); // 0

// // Enqueue values
// q.enqueue(10);
// q.enqueue(20);
// q.enqueue(30);
// console.log("After enqueue 10,20,30:");
// q.print(); // { '0': 10, '1': 20, '2': 30 }
// console.log("Size:", q.getSize()); // 3
// console.log("Peek:", q.peek()); // 10

// // Dequeue values
// console.log("Dequeue:", q.dequeue()); // 10
// console.log("After dequeue:");
// q.print(); // { '1': 20, '2': 30 }
// console.log("Size:", q.getSize()); // 2

// console.log("Dequeue:", q.dequeue()); // 20
// console.log("Dequeue:", q.dequeue()); // 30

// // Try to dequeue empty
// console.log("Dequeue empty:", q.dequeue()); // 'queue object is empty'
// console.log("Is Empty (end):", q.isEmpty()); // true
// console.log("Size (end):", q.getSize()); // 0

//queue based on linked list

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
//         return this.size == 0
//     }

//     enqueue(value){
//         const node = new Node(value)

//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             let temp = this.head

//             while(temp.next){
//                 temp = temp.next
//             }

//            temp.next = node
//         }

//         this.size++
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return 'queue list is empty'
//         }
//         else if(this.size == 1){
//             let val = this.head.value
//             this.head = null
//             this.size--
//             return val
//         }
//         else{
//             let val = this.head.value
//             this.head = this.head.next
//             this.size--
//             return val
//         }
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'queue is empty'
//         }
//         return this.head.value
//     }

//     print(){
//         if(this.isEmpty()){
//             return 'queue is empty'
//         }else{
//             let list = ''

//             let temp = this.head

//             while(temp){
//                 list += temp.value + '->'
//                 temp = temp.next
//             }

//             list += 'null'

//             return list
//         }
//     }
// }

// const q = new Queue();

// console.log("Is Empty:", q.isEmpty()); // true

// q.enqueue(10);
// q.enqueue(20);
// q.enqueue(30);
// console.log("After enqueue 10,20,30:", q.print()); // 10->20->30->null
// console.log("Peek:", q.peek()); // 10

// console.log("Dequeue:", q.dequeue()); // 10
// console.log("After dequeue:", q.print()); // 20->30->null

// console.log("Dequeue:", q.dequeue()); // 20
// console.log("Dequeue:", q.dequeue()); // 30
// console.log("Dequeue empty:", q.dequeue()); // 'queue list is empty'

//hashmap

// class Hashtable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     isEmpty(){
//         return this.table.every((val)=>{
//             return val === undefined
//         })
//     }

//     hash(key){
//         let total = 0

//         for(let i=0;i<key.length;i++){
//             total += key.charCodeAt(i)
//         }

//         return total % this.size
//     }

//     insert(key,value){
//         let index = this.hash(key)
//         this.table[index] = value
//     }

//     get(key){
//         let index = this.hash(key)
//         return this.table[index] || 'not a valid key'
//     }

//     remove(key){
//         let index = this.hash(key)

//         if(index){
//             this.table[index] = undefined
//             return 'removed'
//         }

//         return 'invalid key'
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

// console.log("Is Empty:", ht.isEmpty());  // should show if empty (you still need to implement)

// ht.insert("name", "Alice");
// ht.insert("age", 25);
// ht.insert("city", "London");

// console.log("After insertions:");
// ht.print();
// // Expected: index (some number) -> Alice, index -> 25, index -> London

// console.log("Get 'name':", ht.get("name"));   // Alice
// console.log("Get 'age':", ht.get("age"));     // 25
// console.log("Get 'city':", ht.get("city"));   // London
// console.log("Get 'country':", ht.get("country")); // not a valid key

// console.log("Remove 'age':", ht.remove("age"));  // removed
// console.log("Get 'age' after removal:", ht.get("age")); // not a valid key

// console.log("Remove 'random':", ht.remove("random")); // invalid key

// console.log("Final table:");
// ht.print();


//hash table hadling collisons

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
//         }else{
//             let sameKey = bucket.find((val)=>val[0] == key)

//             if(sameKey){
//                 sameKey[1] = value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }

//     get(key){
//         let index = this.hash(key)
//         let bucket = this.table[index]

//         if(bucket){
//             let find = bucket.find((val)=>val[0] == key)
            
//             if(find){
//                 return find[1]
//             }
//         }
//         return undefined
//     }

//     remove(key){
//         let index = this.hash(key)
//         let bucket = this.table[index]

//         if(bucket){
//             let element = bucket.findIndex((val)=>val[0] == key)

//             bucket.splice(element,1)

//             return 'removed'
//         }

//         return 'invalid key'
//     }

//     print(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }

//     findDuplicates(){
//         let temp = this.table
//         let duplicateValue = []
//         let duplicateKey = []
//         let freqMap = {}

//         for(let i=0;i<this.table.length;i++){
//             let bucket = this.table[i]
//             if(bucket){
//                 for(let j=0;j<bucket.length;j++){
//                     if(freqMap[bucket[j][1]]){
//                         if(!duplicateKey.includes(bucket[j][0])){
//                             duplicateKey.push(bucket[j][0])
//                         }

//                         if(!duplicateValue.includes(bucket[j][1])){
//                             duplicateValue.push(bucket[j][1])
//                         }
//                     }else{
//                         freqMap[bucket[j][1]] = 1
//                     }
//                 }
//             }
//         }
//         return {duplicateKey,duplicateValue}
//     }

//     removeDuplicates(){
//         let seen = new Set()

//         for(let i=0;i<this.table.length;i++){
//             let bucket = this.table[i]
//             if(bucket){
//                 let newBucekt = []
//                 for(let j=0;j<bucket.length;j++){
//                     if(!seen.has(bucket[j][1])){
//                         seen.add(bucket[j][1])
//                         newBucekt.push(bucket[j])
//                     }
//                 }
//                 this.table[i] = newBucekt.length > 0 ? newBucekt : undefined
//             }
//         }
//     }

//     findDuplicatesFromInput(arr){
//         const input = Array.isArray(arr) ? arr : arr.split('')

//         let tempo = new Hashtable(50)

//         for(let i=0;i<input.length;i++){
//             let val = input[i].toString()
//             let count = tempo.get(val) || 0
//             tempo.set(val,count+1)
//         }

//         let duplicates = []
//         for(let i=0;i<tempo.table.length;i++){
//             let bucket = tempo.table[i]
//             if(bucket){
//                 for(let j=0;j<bucket.length;j++){
//                     const [key,value] = bucket[j]
//                     if(value > 1){
//                         duplicates.push(key)
//                     }
//                 }
//             }
//         }
//         return duplicates
//     }

//     findUniqueFromInput(arr){
//         let input = Array.isArray(arr) ? arr : arr.split('')

//         const tempo = new Hashtable(50)

//         for(let i=0;i<input.length;i++){
//             let val = input[i].toString()
//             let count = tempo.get(val) || 0
//             tempo.set(val,count+1)
//         }

//         let unique = [] 

//         for(let i=0;i<tempo.table.length;i++){
//             let bucket = tempo.table[i]
//             if(bucket){
//                 for(let j=0;j<bucket.length;j++){
//                     const [key,value] = bucket[j]

//                     if(value == 1){
//                         unique.push(key)
//                     }
//                 }
//             }
//         }

//         return unique
//     }

//     nthMostFrequency(input,n){
//         let given = Array.isArray(input) ? input : input.split('')

//         let tempo = new Hashtable(50)
//         for(let i=0;i<given.length;i++){
//             let val = given[i].toString()
//             let count = tempo.get(val) || 0
//             tempo.set(val,count+1)
//         }

//         let result = []

//         for(let i=0;i<tempo.table.length;i++){
//             let bucket = tempo.table[i]
//             if(bucket){
//                 for(let j=0;j<bucket.length;j++){
//                     result.push(bucket[j])
//                 }
//             }
//         }

//         result.sort((a,b)=>b[1] - a[1])

//         return result[n-1] || null
//     }
// }

// const ht = new Hashtable(10);

// console.log("=== Insert values ===");
// ht.set("name", "basha");
// ht.set("idiot", "basha");  // duplicate value
// ht.set("age", "25");
// ht.set("city", "London");
// ht.set("job", "Engineer");

// ht.print();
// // Expected: "basha" stored twice, other values unique

// console.log("\n=== Get values ===");
// console.log("name:", ht.get("name"));     // basha
// console.log("city:", ht.get("city"));     // London
// console.log("invalid:", ht.get("salary")); // invalid key

// console.log("\n=== Remove values ===");
// console.log("Remove job:", ht.remove("job")); // removed
// console.log("Remove invalid:", ht.remove("xyz")); // invalid key
// ht.print();

// console.log("\n=== Find Duplicates in Table ===");
// console.log(ht.findDuplicates());
// // Expected: { duplicateKey: ["idiot"], duplicateValue: ["basha"] }

// console.log("\n=== Remove Duplicates in Table ===");
// ht.removeDuplicates();
// ht.print();
// // Either "name" or "idiot" should remain, not both.

// console.log("\n=== Find Duplicates from Input ===");
// console.log("From string 'programming':", ht.findDuplicatesFromInput("programming"));
// // Expected: [ 'r','g','m' ]
// console.log("From array [1,2,2,3,3,3,4]:", ht.findDuplicatesFromInput([1,2,2,3,3,3,4]));
// // Expected: ['2','3']

// console.log("\n=== Find Unique from Input ===");
// console.log("From string 'hello':", ht.findUniqueFromInput("hello"));
// // Expected: ['h','e','o']
// console.log("From array [1,2,2,3,4,4,5]:", ht.findUniqueFromInput([1,2,2,3,4,4,5]));
// // Expected: ['1','3','5']

// console.log("\n=== nth Most Frequent ===");
// console.log("In 'banana', 1st most frequent:", ht.nthMostFrequency("banana", 1));
// // Expected: ['a', 3] or ['n', 2] depending on order (fix sorting by value)
// console.log("In [1,2,2,3,3,3], 2nd most frequent:", ht.nthMostFrequency([1,2,2,3,3,3], 2));
// // Expected: ['2', 2]


//tree

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

//     search(node,value){
//         if(!node){
//             return false
//         }
//         else if(node.value == value){
//             return true
//         }
//         else if(value < node.value){
//             return this.search(node.left,value)
//         }
//         else{
//             return this.search(node.right,value)
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
//             const cur = queue.shift()

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

//     max(root){
//         if(!root){
//             return null
//         }

//         while(root.right){
//             root = root.right
//         }

//         return root.value
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

//     isBst(root,min=null,max=null){
//         if(!root){
//             return true
//         }

//         if((min != null && root.value <= min) || (max != null && root.value >= max)){
//             return false
//         }

//         return this.isBst(root.left,root.value,max) && this.isBst(root.right,min,root.value)
//     }

//     isIdentical(tree1,tree2){
//         if(!tree1 && !tree2){
//             return true
//         }

//         if((!tree1 && tree2) || (tree1 && !tree2)){
//             return false
//         }

//         return  tree1.value == tree2.value && this.isIdentical(tree1.left,tree2.left) && this.isIdentical(tree1.right,tree2.right)
//     }

//     isPrime(no){
//         if(no <= 1){
//             return false
//         }

//         for(let i=2;i<=Math.sqrt(no);i++){
//             if(no % i == 0){
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

//     inOrderTraversal(root,result=[]){
//         if(root){
//             this.inOrderTraversal(root.left,result)
//             result.push(root.value)
//             this.inOrderTraversal(root.right,result)
//         }
//         return result
//     }

//     successor(root,k){
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

//     predecessor(root,k){
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

//     findKthSmallest(root,k){
//         let result = this.inOrderTraversal(root)

//         return result[k-1] || null
//     }

//     findKthLargest(root,k){
//         let result = this.inOrderTraversal(root)

//         return result[result.length - k] || null
//     }

//     closestValue(root,k){
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

//     removeDuplicates(root){
//         if(!root){
//             return null
//         }

//         let unique = new Set()

//         function inOrder(root){
//             inOrder(root.left)
//             unique.add(root.value)
//             inOrder(root.right)
//         }

//         inOrder(root)

//         this.root = null

//         unique.forEach((val)=>{
//             this.insert(val)
//         })
//     }

//     findParent(root,target){
//         if(!root){
//             return null
//         }

//         if((root.left && root.left.value == target) || (root.right && root.right.value == target)){
//             return root.value
//         }

//         if(target < root.value){
//             return this.findParent(root.left,target)
//         }
//         else{
//             return this.findParent(root.right,target)
//         }
       
//     }

//     findChildren(root,target){
//         if(!root){
//             return null
//         }
//         else if(root.value == target){
//             const children = {
//                 leftChildren : root.left ? root.left.value : null,
//                 rightChildren : root.right ? root.right.value : null
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

//         if(root.left && root.left.value == target){
//             return root.right ? root.right.value : null
//         }

//         if(root.right && root.right.value == target){
//             return root.left ? root.left.value : null
//         }

//         if(target < root.left){
//             return this.findSiblings(root.left,target)
//         }else{
//             return this.findSiblings(root.right,target)
//         }
//     }

//     findLeafNode(root,result=[]){
//         if(root){
//             this.findLeafNode(root.left,result)
//             if(!root.left && !root.right){
//                 result.push(root.value)
//             }
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

//     findDegree(root,target){
//         if(!root){
//             return null
//         }

//         if(root.value == target){
//             let depth = 0
//             if(root.left) depth++
//             if(root.right) depth++
//             return depth
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

//     findPath(root,target){
//         if(!root){
//             return null
//         }
//         let result = []

//         while(root){
//             result.push(root.value)
//             if(target < root.value){
//                 root = root.left
//             }
//             else if(target > root.value){
//                 root = root.right
//             }
//             else{
//                 return result
//             }
//         }
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

//     findLCA(root,n1,n2){
//         if(!root){
//             return null
//         }

//         while(root){
//             if((n1 < root.value) && (n2 < root.value)){
//                 root = root.left
//             }
//             else if((n1 > root.value) && (n2 > root.value)){
//                 root = root.right
//             }
//             else{
//                 return root
//             }
//         }
//     }

//     distanceBetweenTwoNodes(n1,n2){
//         let lca = this.findLCA(this.root,n1,n2)

//         if(!lca){
//             return null
//         }

//         let distance1 = this.findDistance(this.root,n1)
//         let distance2 = this.findDistance(this.root,n2)

//         return distance1 + distance2
//     }

//     pathBetweenTwoNodes(n1,n2){
//         let lca = this.findLCA(this.root,n1,n2)

//         if(!lca){
//             return []
//         }

//         let path1 = this.findPath(this.root,n1)
//         let path2 = this.findPath(this.root,n2)

//         return [...path1.reverse(),...path2.slice(1)]
//     }

//     countLeafNode(root){
//         if(!root){
//             return 0
//         }

//         if(!root.right && !root.left){
//             return 1
//         }

//         return this.countLeafNode(root.left) + this.countLeafNode(root.right)
//     }

//     RightNodeOnly(root,result=[]){
//         if(root){
//             this.RightNodeOnly(root.left,result)
//             if(!root.left && root.right){
//                 result.push(root.value)
//             }
//             this.RightNodeOnly(root.right,result)
//         }
//         return result
//     }

//     LeftNodeonly(root,result=[]){
//         if(root){
//             this.LeftNodeonly(root.left,result)
//             if(root.left && !root.right){
//                 result.push(root.value)
//             }
//             this.LeftNodeonly(root.right,result)
//         }
//         return result
//     }
// }

// const bst = new Bst();
// [50, 30, 70, 20, 40, 60, 80, 35, 45, 65, 75].forEach(v => bst.insert(v));

// console.log("InOrder Traversal (sorted):");
// bst.inOrder(bst.root); // 20 30 35 40 45 50 60 65 70 75 80

// console.log("PreOrder Traversal:");
// bst.preOrder(bst.root); // 50 30 20 40 35 45 70 60 65 80 75

// console.log("PostOrder Traversal:");
// bst.postOrder(bst.root); // 20 35 45 40 30 65 60 75 80 70 50

// console.log("LevelOrder Traversal:");
// bst.levelOrder(bst.root); 
// // 50 30 70 20 40 60 80 35 45 65 75

// console.log("Search 65:", bst.search(bst.root,65)); // true
// console.log("Search 99:", bst.search(bst.root,99)); // false

// console.log("Min:", bst.min(bst.root)); // 20
// console.log("Max:", bst.max(bst.root)); // 80

// console.log("Is BST:", bst.isBst(bst.root)); // true

// console.log("Successor of 45:", bst.successor(bst.root,45)); // 50
// console.log("Predecessor of 45:", bst.predecessor(bst.root,45)); // 40

// console.log("3rd Smallest:", bst.findKthSmallest(bst.root,3)); // 35
// console.log("2nd Largest:", bst.findKthLargest(bst.root,2));   // 75

// console.log("Closest value >= 46:", bst.closestValue(bst.root,46)); // 50

// console.log("Parent of 35:", bst.findParent(bst.root,35)); // 40
// console.log("Children of 30:", bst.findChildren(bst.root,30)); 
// // { leftChildren: 20, rightChildren: 40 }

// console.log("Siblings of 45:", bst.findSiblings(bst.root,45)); // 35

// console.log("Leaf nodes:", bst.findLeafNode(bst.root)); // [20, 35, 45, 65, 75]

// console.log("Ancestors of 65:", bst.findAncestor(bst.root,65)); // [50,70,60]

// console.log("Descendants of 70:", bst.findDescendant(bst.root,70)); 
// // [70,60,65,80,75]

// console.log("Degree of 30:", bst.findDegree(bst.root,30)); // 2
// console.log("Depth of 65:", bst.findDepth(bst.root,65));   // 3
// console.log("Path to 65:", bst.findPath(bst.root,65));     // [50,70,60,65]

// console.log("Height of Tree:", bst.findHeight(bst.root)); // 4

// console.log("Distance to 75:", bst.findDistance(bst.root,75)); // 3

// console.log("LCA of 35 and 45:", bst.findLCA(bst.root,35,45).value); // 40

// console.log("Distance between 35 and 75:", bst.distanceBetweenTwoNodes(35,75)); 
// // should be 6

// console.log("Path between 35 and 75:", bst.pathBetweenTwoNodes(35,75)); 
// // [35,40,30,50,70,80,75]

// console.log("Prime Numbers in Tree:", bst.findPrime(bst.root)); 
// // [  2️⃣0 is not prime, expect [  2,  3?, check set ] → [  2 missing ] 
// // Actually primes in given:  20 ❌, 30 ❌, 70 ❌, 40 ❌, 35 ❌, 45 ❌, 50 ❌, 65 ❌, 75 ❌, 60 ❌, 80 ❌. 
// // Only prime is NONE 😅 (no prime inserted)


// console.log("Leaf count:", bst.countLeafNode(bst.root)); 
// // 4

// console.log("Right-only nodes:", bst.RightNodeOnly(bst.root)); 
// // [60]

// console.log("Left-only nodes:", bst.LeftNodeonly(bst.root)); 
// // []

//heap

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

//     hasLeftchild(index){
//         return this.getLeftChildIndex(index) < this.heap.length
//     }

//     hasRightchild(index){
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

//     push(value){
//         this.heap.push(value)
//         this.heapifyUp()
//     }

//     heapifyUp(){
//         let index = this.heap.length-1

//         while(this.hasParent(index) && this.getParent(index) > this.heap[index]){
//             this.swap(index,this.getParentIndex(index))
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

//         while(this.hasLeftchild(index)){
//             let smallest = this.getLeftChildIndex(index)

//             if(this.hasRightchild(index) && this.getRightChild(index) < this.getLeftChild(index)){
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
//         let temp = new MinHeap

//         for(let i=0;i<arr.length;i++){
//             temp.push(arr[i])
//         }

//         let sorted = []

//         while(temp.heap.length){
//             sorted.push(temp.remove())
//         }

//         return sorted
//     }

//     findKthLargest(arr,k){
//         let temp = new MinHeap()

//         for(let i=0;i<arr.length;i++){
//             temp.push(arr[i])

//             if(temp.heap.length > k){
//                 temp.remove()
//             }
//         }

//         return temp.peek()
//     }
// }

// const heap = new MinHeap();

// // Test 1: push + peek
// heap.push(10);
// heap.push(5);
// heap.push(20);
// heap.push(3);
// console.log("Peek (should be 3):", heap.peek());  
// // Expected: 3

// // Test 2: remove
// console.log("Remove:", heap.remove());  
// // Expected: 3
// console.log("Peek after remove:", heap.peek());  
// // Expected: 5

// // Test 3: heapSort
// const arr = [9, 3, 7, 1, 8, 2];
// console.log("Heap Sort:", heap.heapSort(arr));  
// // Expected: [1,2,3,7,8,9]

// // Test 4: findKthLargest
// console.log("2nd Largest in [9,3,7,1,8,2]:", heap.findKthLargest(arr,2));  
// // Expected: 8
// console.log("3rd Largest in [9,3,7,1,8,2]:", heap.findKthLargest(arr,3));  
// // Expected: 7

// // Test 5: remove all elements
// const h2 = new MinHeap();
// [4,1,6,2].forEach(v => h2.push(v));
// while(!h2.isEmpty()){
//     console.log("Removing:", h2.remove());
// }
// // Expected order: 1,2,4,6

//maxHeap

// class MaxHeap{
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

//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp()
//     }

//     heapifyUp(){
//         let index = this.heap.length-1

//         while(this.hasParent(index) && this.getParent(index) < this.heap[index]){
//             this.swap(index,this.getParentIndex(index))
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
//         let temp = new MaxHeap()
//         for(let i=0;i<arr.length;i++){
//             temp.insert(arr[i])
//         }

//         let sortedArr = []

//         while(temp.heap.length){
//             sortedArr.push(temp.remove())
//         }

//         return sortedArr.reverse()
//     }

//     findKthSmallest(arr,k){
//         let temp = new MaxHeap()

//         for(let i=0;i<arr.length;i++){
//             temp.insert(arr[i])
//             if(temp.heap.length > k){
//                 temp.remove()
//             }
//         }

//         return temp.peek()
//     }
// }

// function runTests() {
//     let heap = new MaxHeap();

//     console.log("=== Basic Heap Operations ===");
//     heap.insert(10);
//     heap.insert(20);
//     heap.insert(5);
//     heap.insert(30);

//     console.log("Peek (should be 30):", heap.peek());  // 30
//     console.log("Remove (should be 30):", heap.remove()); // 30
//     console.log("Peek after remove (should be 20):", heap.peek()); // 20

//     console.log("=== Heap Sort ===");
//     let arr = [5, 3, 8, 1, 2];
//     console.log("Original:", arr);
//     console.log("Heap Sort Result:", heap.heapSort(arr)); // [1,2,3,5,8]

//     console.log("=== findKthSmallest ===");
//     let arr2 = [7, 10, 4, 3, 20, 15];
//     console.log("Array:", arr2);
//     console.log("1st smallest (should be 3):", heap.findKthSmallest(arr2, 1));
//     console.log("2nd smallest (should be 4):", heap.findKthSmallest(arr2, 2));
//     console.log("3rd smallest (should be 7):", heap.findKthSmallest(arr2, 3));
//     console.log("4th smallest (should be 10):", heap.findKthSmallest(arr2, 4));

//     console.log("=== Edge Cases ===");
//     let emptyHeap = new MaxHeap();
//     console.log("Peek empty:", emptyHeap.peek()); // "heap is empty"
//     console.log("Remove empty:", emptyHeap.remove()); // "heap is empty"
// }

// runTests();

//trie

class Node{
    constructor(){
        this.children = {}
        this.isEndOfWord = false
    }
}
class Trie{
    constructor(){
        this.root = new Node()
    }

    insert(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new Node()
            }
            node = node.children[char]
        }

        node.isEndOfWord = true
    }

    search(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return node.isEndOfWord
    }

    startsWith(prefix){
        let node = this.root

        for(let char of prefix){
            if(!node.children[char]){
                return false
            }

            node = node.children[char]
        }

        return true
    }

    autoComplete(word){
        let node = this.root

        for(let char of word){
            if(!node.children[char]){
                return []
            }
            node = node.children[char]
        }

        return this.collectWord(node,word)
    }

    collectWord(node,word,result=[]){
        if(node.isEndOfWord){
            result.push(word)
        }

        for(let char in node.children){
            this.collectWord(node.children[char],word+char,result)
        }

        return result
    }

    print(){
        return this.collectWord(this.root,"")
    }

    delete(word){
        let node = this.root
        let path = []
        for(let char of word){
            if(!node.children[char]){
                return 'no matching'
            }

            path.push([node,char])
            node = node.children[char]
        }

        if(node.isEndOfWord){
            node.isEndOfWord = false
        }

        for(let i=word.length-1;i>=0;i--){
            let [parentNode,char] = path[i]

            let childNode = parentNode.children[char]

            if(Object.keys(childNode).length > 0 || childNode.isEndOfWord){
                break
            }

            delete parentNode.children[char]
        }
    }
}

function runTests() {
    let trie = new Trie();

    console.log("=== Insert & Search ===");
    trie.insert("apple");
    console.log(trie.search("apple"));   // true
    console.log(trie.search("app"));     // false
    console.log(trie.startsWith("app")); // true

    trie.insert("app");
    console.log(trie.search("app"));     // true

    console.log("=== AutoComplete ===");
    trie.insert("apricot");
    trie.insert("banana");
    console.log(trie.autoComplete("ap")); // ["apple", "app", "apricot"]

    console.log("=== Print All Words ===");
    console.log(trie.print()); // ["apple", "app", "apricot", "banana"]

    console.log("=== Delete ===");
    trie.delete("app");
    console.log(trie.search("app"));     // false
    console.log(trie.search("apple"));   // true
    console.log(trie.autoComplete("ap")); // ["apple", "apricot"]

    trie.delete("apple");
    console.log(trie.search("apple"));   // false
    console.log(trie.autoComplete("ap")); // ["apricot"]

    console.log(trie.delete("notfound")); // "no matching"
}

runTests();

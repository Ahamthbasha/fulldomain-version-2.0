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

// function runTests() {
//     const testCases = [
//         { input: [], expected: [] },
//         { input: [1], expected: [1] },
//         { input: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5] },
//         { input: [5, 4, 3, 2, 1], expected: [1, 2, 3, 4, 5] },
//         { input: [3, 1, 4, 1, 5, 9, 2, 6], expected: [1, 1, 2, 3, 4, 5, 6, 9] },
//         { input: [0, -5, 3, -2, 8, -1], expected: [-5, -2, -1, 0, 3, 8] }
//     ];

//     const algorithms = {
//         bubbleSort,
//         insertionSort,
//         selectionSort,
//         quickSort,
//         mergeSort
//     };

//     for (let [name, fn] of Object.entries(algorithms)) {
//         console.log(`\nTesting ${name}:`);
//         testCases.forEach(({ input, expected }, idx) => {
//             const result = fn([...input]); // use spread to avoid in-place mutation affecting other tests
//             const passed = JSON.stringify(result) === JSON.stringify(expected);
//             console.log(` Test ${idx + 1}: ${passed ? "✅ PASSED" : "❌ FAILED"} | Input: ${input} | Output: ${result}`);
//         });
//     }
// }

// runTests();






//stack

// class Stack{
//     constructor() {
//         this.items = []
//     }

//     isEmpty(){
//         return this.items.length == 0
//     }

//     push(val){
//         return this.items.push(val)
//     }

//     pop(){
//         if(this.isEmpty()){
//             return 'stack is empty'
//         }

//         return this.items.pop()
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'stack is empty'
//         }

//         return this.items[this.items.length-1]
//     }

//     display(){
//         console.log(this.items)
//     }

//     reverseArr(arr){
//         let stack = new Stack()

//         for(let i=0;i<arr.length;i++){
//             stack.push(arr[i])
//         }

//         let reversedArr = []

//         while(stack.items.length){
//             reversedArr.push(stack.pop())
//         }

//         return reversedArr
//     }


//     reverseStr(str){
//         let stack = new Stack()

//         for(let i=0;i<str.length;i++){
//             stack.push(str[i])
//         }

//         let reversedStr = ''

//         while(stack.items.length){
//             reversedStr += stack.pop()
//         }

//         return reversedStr
//     }
// }


// function runStackTests() {
//     let stack = new Stack();

//     console.log("=== Stack Basic Operations ===");

//     console.log("Is stack empty?", stack.isEmpty()); // true ✅

//     stack.push(10);
//     stack.push(20);
//     stack.push(30);

//     console.log("Stack after pushes (should be [10,20,30]):");
//     stack.display(); // [10,20,30]

//     console.log("Peek (should be 30):", stack.peek()); // 30 ✅
//     console.log("Pop (should return 30):", stack.pop()); // 30 ✅
//     console.log("Pop again (should return 20):", stack.pop()); // 20 ✅
//     console.log("Peek now (should be 10):", stack.peek()); // 10 ✅

//     console.log("Is stack empty?", stack.isEmpty()); // false ✅

//     stack.pop(); // removes 10
//     console.log("Pop on empty stack (should be 'stack is empty'):", stack.pop()); // "stack is empty"

//     console.log("\n=== Reverse Array Using Stack ===");
//     const arr = [1, 2, 3, 4, 5];
//     console.log("Original:", arr);
//     console.log("Reversed:", stack.reverseArr(arr)); // [5,4,3,2,1] ✅

//     console.log("\n=== Reverse String Using Stack ===");
//     const str = "hello";
//     console.log("Original:", str);
//     console.log("Reversed:", stack.reverseStr(str)); // "olleh" ✅
// }

// runStackTests();

//object based stack

// class Stack{
//     constructor(){
//         this.items = {}
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size == 0
//     }

//     push(val){
//         this.items[this.size] = val
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


//     display(){
//         console.log(this.items)
//     }
// }


// function runStackTests() {
//     let stack = new Stack();

//     console.log("=== Stack Basic Operations ===");

//     // Initially empty
//     console.log("Is stack empty? ->", stack.isEmpty()); // true ✅
//     console.log("Peek on empty stack ->", stack.peek()); // "stack is empty" ✅
//     console.log("Pop on empty stack ->", stack.pop()); // "stack is empty" ✅

//     // Push values
//     stack.push(10);
//     stack.push(20);
//     stack.push(30);

//     console.log("Stack after pushes (should have {0:10,1:20,2:30}):");
//     stack.display(); // {0:10, 1:20, 2:30}
//     console.log("Size ->", stack.size); // 3 ✅

//     // Peek
//     console.log("Peek (should be 30) ->", stack.peek()); // 30 ✅

//     // Pop values
//     console.log("Pop (should return 30) ->", stack.pop()); // 30 ✅
//     console.log("Pop again (should return 20) ->", stack.pop()); // 20 ✅
//     console.log("Peek now (should be 10) ->", stack.peek()); // 10 ✅

//     // Check size after pops
//     console.log("Current size ->", stack.size); // 1 ✅

//     // Pop last element
//     console.log("Pop last element (should return 10) ->", stack.pop()); // 10 ✅
//     console.log("Is stack empty? ->", stack.isEmpty()); // true ✅

//     // Edge case checks again
//     console.log("Pop on empty (should say 'stack is empty') ->", stack.pop()); 
//     console.log("Peek on empty (should say 'stack is empty') ->", stack.peek()); 

//     console.log("\n=== Multiple Push/Pop Again ===");
//     stack.push("a");
//     stack.push("b");
//     stack.push("c");
//     stack.display(); // {0:"a",1:"b",2:"c"}
//     console.log("Pop (should return 'c') ->", stack.pop()); // "c"
//     console.log("Peek (should return 'b') ->", stack.peek()); // "b"
//     console.log("Size ->", stack.size); // 2
// }

// runStackTests();



//linked list based stack

// class LinkedList{
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
//         return this.size == 0
//     }

//     push(value){
//         const node = new LinkedList(value)
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
//             return 'stack is empty'
//         }
//         else if(this.size == 1){
//             let value = this.head.value
//             this.head = null
//             this.size--
//             return value
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
//             return 'stack is empty'
//         }
//         else{
//             return this.head.value
//         }
//     }

//     display(){
//         if(this.isEmpty()){
//             return 'stack is empty'
//         }else{
//             let temp = this.head
//             let result = ''

//             while(temp){
//                 result += temp.value + '->'
//                 temp = temp.next
//             }

//             result += 'null'
//             return result
//         }
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


// function runLinkedListStackTests() {
//     let stack = new Stack();

//     console.log("=== LinkedList Stack Tests ===");

//     // Empty stack
//     console.log("Is stack empty? ->", stack.isEmpty()); // true
//     console.log("Peek on empty ->", stack.peek()); // "stack is empty"
//     console.log("Pop on empty ->", stack.pop()); // "stack is empty"
//     console.log("Display empty ->", stack.display()); // "stack is empty"

//     // Push elements
//     stack.push(10);
//     stack.push(20);
//     stack.push(30);

//     console.log("After pushes (30->20->10->null):", stack.display()); // 30->20->10->null
//     console.log("Peek (should be 30):", stack.peek()); // 30
//     console.log("Size (should be 3):", stack.size); // 3

//     // Pop elements
//     console.log("Pop (should return 30):", stack.pop()); // 30
//     console.log("Pop (should return 20):", stack.pop()); // 20
//     console.log("Peek (should be 10):", stack.peek()); // 10
//     console.log("Size (should be 1):", stack.size); // 1
//     console.log("Display (10->null):", stack.display()); // 10->null

//     // Pop last element
//     console.log("Pop (should return 10):", stack.pop()); // 10
//     console.log("Pop again (empty) ->", stack.pop()); // "stack is empty"
//     console.log("Is stack empty? ->", stack.isEmpty()); // true

//     // Push again and test reverse()
//     stack.push("a");
//     stack.push("b");
//     stack.push("c");
//     console.log("Stack before reverse (c->b->a->null):", stack.display());
//     stack.reverse();
//     console.log("Stack after reverse (a->b->c->null):", stack.display());
// }

// runLinkedListStackTests();


//QUEUE BASED ON ARRAY

// class Queue{
//     constructor(){
//         this.items = []
//     }

//     isEmpty(){
//         return this.items.length == 0
//     }

//     enqueue(value){
//         this.items.push(value)
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return 'queue is empty'
//         }

//         return this.items.shift()
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'queue is empty'
//         }

//         return this.items[0]
//     }

//     display(){
//         console.log(this.items)
//     }
// }

// const q = new Queue();

// // Test 1: isEmpty on new queue
// console.log(q.isEmpty()); // true

// // Test 2: dequeue on empty queue
// console.log(q.dequeue()); // 'queue is empty'

// // Test 3: enqueue elements
// q.enqueue(10);
// q.enqueue(20);
// q.enqueue(30);
// q.display(); // [10, 20, 30]

// // Test 4: peek at front element
// console.log(q.peek()); // 10

// // Test 5: dequeue elements
// console.log(q.dequeue()); // 10
// q.display(); // [20, 30]

// // Test 6: check isEmpty after dequeue
// console.log(q.isEmpty()); // false

// // Test 7: dequeue all elements
// q.dequeue();
// q.dequeue();
// console.log(q.isEmpty()); // true
// console.log(q.dequeue()); // 'queue is empty'


//queue based on object

// class Queue{
//     constructor() {
//         this.items = {}
//         this.rear = 0
//         this.front = 0
//     }

//     isEmpty(){
//         return this.rear - this.front == 0
//     }

//     enqueue(value){
//         this.items[this.rear] = value
//         this.rear++
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return 'queue is empty'
//         }
//         let val = this.items[this.front]
//         delete this.items[this.front]
//         this.front++
//         return val 
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'queue is empty'
//         }

//         return this.items[this.front]
//     }

//     display(){
//         console.log(this.items)
//     }
// }


// const q = new Queue();

// // Test 1: isEmpty on new queue
// console.log(q.isEmpty()); // true

// // Test 2: dequeue on empty queue
// console.log(q.dequeue()); // 'queue is empty'

// // Test 3: enqueue elements
// q.enqueue(10);
// q.enqueue(20);
// q.enqueue(30);
// q.display(); // { '0': 10, '1': 20, '2': 30 }

// // Test 4: peek at front element
// console.log(q.peek()); // 10

// // Test 5: dequeue elements
// console.log(q.dequeue()); // 10
// q.display(); // { '1': 20, '2': 30 }

// // Test 6: check isEmpty after some dequeues
// console.log(q.isEmpty()); // false

// // Test 7: dequeue remaining elements
// console.log(q.dequeue()); // 20
// console.log(q.dequeue()); // 30
// console.log(q.isEmpty()); // true
// console.log(q.dequeue()); // 'queue is empty'


//queue based on linked list

// class LinkedList{
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
//         const node = new LinkedList(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
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
//             return 'queue is empty'
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

//     display(){
//         if(this.isEmpty()){
//             return 'queue is empty'
//         }
//         else{
//             let temp = this.head
//             let list = ''
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

// // Test 1: isEmpty on new queue
// console.log(q.isEmpty()); // true

// // Test 2: dequeue on empty queue
// console.log(q.dequeue()); // 'queue is empty'

// // Test 3: peek on empty queue
// console.log(q.peek()); // 'queue is empty'

// // Test 4: enqueue elements
// q.enqueue(10);
// q.enqueue(20);
// q.enqueue(30);
// console.log(q.display()); // "10->20->30->null"

// // Test 5: peek should return first element
// console.log(q.peek()); // 10

// // Test 6: dequeue first element
// console.log(q.dequeue()); // 10
// console.log(q.display()); // "20->30->null"

// // Test 7: dequeue remaining
// console.log(q.dequeue()); // 20
// console.log(q.dequeue()); // 30
// console.log(q.display()); // 'queue is empty'

// // Test 8: check isEmpty after dequeues
// console.log(q.isEmpty()); // true



//hashtable basic implementation

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

//     insert(key,value){
//         let index = this.hash(key)
//         this.table[index] = value
//     }

//     remove(key){
//         let index = this.hash(key)

//         if(this.table[index] != -1){
//             this.table[index] = undefined
//             return 'removed'
//         }
//     }

//     get(key){
//         let index = this.hash(key)

//         return this.table[index] || 'undefined'
//     }

//     print(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }


// let ht = new Hashtable(10);
// ht.insert("apple", 100);
// ht.insert("banana", 200);

// console.log(ht.get("apple"));  // 100
// console.log(ht.get("banana")); // 200
// ht.print(); 
// // Expected: prints both keys if no collision occurred

// let ht2 = new Hashtable(5); // Small size to force collisions
// ht2.insert("ab", 1);
// ht2.insert("ba", 2);

// console.log(ht2.get("ab")); // May return 2 (overwritten) due to collision
// console.log(ht2.get("ba")); // 2
// ht2.print();
// // Expected: Only one value remains at that index because collision overwrote the other


//hashtable handle collision

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
//             let nextPlace = bucket.find((item)=>item[0] == key)

//             if(nextPlace){
//                 nextPlace[1] = value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }


//     get(key){
//         let index = this.hash(key)

//         let bucket = this.table[index]

//         if(bucket){
//             let search = bucket.find((item)=>item[0] == key)

//             return search ? search[1] : undefined
//         }
//         return undefined
//     }

//     remove(key){
//         let index = this.hash(key)

//         let bucket = this.table[index]

//         if(bucket){
//             let valIndex = bucket.findIndex((item)=>item[0]==key)

//             if(valIndex != -1){
//                 bucket.splice(valIndex,1)
//                 return 'removed'
//             }
//             else{
//                 return 'no index'
//             }
//         }
//     }

//     print(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }


//     findDuplicatesFromTable(){
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

//         let duplicates = []
        
//         for(let key in valMap){
//             if(valMap[key] > 1){
//                 duplicates.push(key)
//             }
//         }
//         return duplicates
//     }

//     removeDuplicatesFromTable(){
//         let seen = {}
//         for(let i=0;i<this.table.length;i++){
//             let bucket = this.table[i]
//             if(bucket){
//                 let newBucket = []
//                 for(let j=0;j<bucket.length;j++){
//                     let [key,value] = bucket[j]
//                     if(!seen[value]){
//                         seen[value] = true
//                         newBucket.push([key,value])
//                     }
//                 }
//                 this.table[i] = newBucket.length > 0 ? newBucket : this.table[i]
//             }
//         }
//     }


//     FindDuplicatesFromInput(input){
//         let givenInput = Array.isArray(input) ? input : input.split('')
//         let table = new Hashtable(50)

//         for(let i=0;i<givenInput.length;i++){
//             let val = givenInput[i].toString()
//             let count = table.get(val)||0
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

//     RemoveDuplicatesFromInput(input){
//         let given = Array.isArray(input) ? input : input.split('')
//         let tempTable = new Hashtable(50)
        
//         for(let i=0;i<given.length;i++){
//             let val = given[i].toString()
//             let count = tempTable.get(val) || 0
//             tempTable.set(val,count+1)
//         }

//         let unique = []

//         for(let i=0;i<tempTable.table.length;i++){
//             let bucket = tempTable.table[i]
//             if(bucket){
//                 for(let j=0;j<bucket.length;j++){
//                     let [key,value] = bucket[j]
//                     if(value == 1){
//                         unique.push(key)
//                     }
//                 }
//             }
//         }

//         return Array.isArray(input) ? unique : unique.join('')
//     }

//     nthMostFrequencey(arr,n){
//         let given = Array.isArray(arr) ? arr : arr.split('')
//         let temp = new Hashtable(50)
//         for(let i=0;i<given.length;i++){
//             let val = given[i].toString()
//             let count = temp.get(val) || 0
//             temp.set(val,count+1)
//         }
//         let result = []
//         for(let i=0;i<temp.table.length;i++){
//             let bucket = temp.table[i]
//             if(bucket){
//                 for(let j=0;j<bucket.length;j++){
//                     let [key,value] = bucket[j]
//                     result.push([key,value])
//                 }
//             }
//         }

//         result.sort((a,b)=>b[1]-a[1])

//         return result[n-1] || 'undefined'
//     }
// }




// let ht = new Hashtable(10);

// // ---------- Basic Insert, Get, Remove ----------
// console.log("---- Basic Insert & Get ----");
// ht.set("apple", 1);
// ht.set("banana", 2);
// ht.set("grape", 3);
// console.log(ht.get("apple"));   // 1
// console.log(ht.get("banana"));  // 2
// console.log(ht.get("grape"));   // 3

// console.log("---- Update Value ----");
// ht.set("apple", 10);
// console.log(ht.get("apple"));   // 10 (updated)

// console.log("---- Remove Key ----");
// console.log(ht.remove("banana")); // removed
// console.log(ht.get("banana"));    // undefined

// // ---------- Collision Handling ----------
// console.log("---- Collision Handling ----");
// let smallHT = new Hashtable(5);
// smallHT.set("ab", 100);
// smallHT.set("ba", 200); // Collides with "ab"
// console.log(smallHT.get("ab"));  // 100
// console.log(smallHT.get("ba"));  // 200
// smallHT.print();

// // ---------- Duplicates in Table ----------
// console.log("---- Duplicates in Table ----");
// ht.set("k1", "x");
// ht.set("k2", "y");
// ht.set("k3", "x"); // Duplicate value "x"
// console.log(ht.findDuplicatesFromTable()); // ["x"]

// console.log("---- Remove Duplicates From Table ----");
// ht.removeDuplicatesFromTable();
// ht.print(); // Only one key with value "x" remains

// // ---------- Duplicates from Input ----------
// console.log("---- Duplicates from String Input ----");
// let dups1 = ht.FindDuplicatesFromInput("programming");
// console.log(dups1); // e.g. "rgm" (order may vary)

// console.log("---- Duplicates from Array Input ----");
// let dups2 = ht.FindDuplicatesFromInput([1, 2, 2, 3, 4, 4]);
// console.log(dups2); // [2, 4]

// // ---------- Remove Duplicates from Input ----------
// console.log("---- Remove Duplicates from String Input ----");
// let unique1 = ht.RemoveDuplicatesFromInput("programming");
// console.log(unique1); // e.g. "poain" (letters occurring once)

// console.log("---- Remove Duplicates from Array Input ----");
// let unique2 = ht.RemoveDuplicatesFromInput([1, 2, 2, 3, 4, 4]);
// console.log(unique2); // [1, 3]

// // ---------- Nth Most Frequent ----------
// console.log("---- Nth Most Frequent ----");
// console.log(ht.nthMostFrequencey("mississippi", 1)); // most frequent, e.g. ["i", 4]
// console.log(ht.nthMostFrequencey("mississippi", 2)); // second most frequent, e.g. ["s", 4]
// console.log(ht.nthMostFrequencey("mississippi", 3)); // e.g. ["p", 2]

//tree

class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}


class Bst{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.root = node
        }
        else{
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

    levelOrder(root){
        if(!root){
            return null
        }

        let queue = []
        queue.push(root)

        while(queue.length){
            let cur = queue.shift()

            if(cur){
                console.log(cur.value)

                if(cur.left){
                    queue.push(cur.left)
                }

                if(cur.right){
                    queue.push(cur.right)
                }
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
        else if(value < root.value){
            root.left = this.deleteNode(root.left,value)
        }
        else if(value > root.value){
            root.right = this.deleteNode(root.right,value)
        }
        else{
            if(!root.right && !root.left){
                return null
            }

            if(!root.right){
                return root.left
            }

            if(!root.left){
                return root.right
            }

            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }

    isPrime(value){
        if(value <= 1){
            return false
        }

        for(let i=2;i<=Math.sqrt(value);i++){
            if(value % i == 0){
                return false
            }
        }

        return true
    }

    findPrimes(root,result=[]){
        if(root){
            this.findPrimes(root.left,result)
            if(this.isPrime(root.value)){
                result.push(root.value)
            }
            this.findPrimes(root.right,result)
        }
        return result
    }

    isBst(root,min=null,max=null){
        if(!root){
            return true
        }

        if(min != null && root.value <= min || max != null && root.value >= max){
            return false
        }

        return this.isBst(root.left,root.value,max) && this.isBst(root.right,min,root.value)
    }

    isIdentical(tree1,tree2){
        if(!tree1 && !tree2){
            return true
        }

        if((!tree1 && tree2) || (tree1 && !tree2)){
            return false
        }

        return tree1.value == tree2.value && this.isIdentical(tree1.left,tree2.left) && this.isIdentical(tree1.right,tree2.right)
    }

    inOrderTraversal(root,result=[]){
        if(root){
            this.inOrderTraversal(root.left,result)
            result.push(root.value)
            this.inOrderTraversal(root.right,result)
        }
        return result
    }

    findKthSmallest(root,k){
        if(!root){
            return null
        }
        let result = this.inOrderTraversal(root)
        if(k > result.length){
            return 'invalid k'
        }

        return result[k-1]
    }

    findKthLargest(root,k){
        if(!root){
            return null
        }
        let result = this.inOrderTraversal(root)
        if(k > result.length){
            return 'invalid k'
        }

        return result[result.length-k]
    }

    findClosest(root,value){
        if(!root){
            return null
        }

        let result = this.inOrderTraversal(root)
        let closest = null
        for(let i=0;i<result.length;i++){
            if(result[i] >= value){
                closest = result[i]
                break
            }
        }

        return closest
    }

    successor(root,k){
        if(!root){
            return null
        }

        let result = this.inOrderTraversal(root)
        let successor = null
        for(let i=0;i<result.length;i++){
            if(result[i] == k){
                if(i+1 < result.length){
                    successor = result[i+1]
                    break
                }
            }
        }

        return successor
    }

    predecessor(root,k){
        if(!root){
            return null
        }

        let result = this.inOrderTraversal(root)
        let predecessor = null
        for(let i=0;i<result.length;i++){
            if(result[i] == k){
                if(i-1 >= 0){
                    predecessor = result[i-1]
                }
            }
        }

        return predecessor
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


    findParents(root,value){
        if(!root){
            return null
        }

        let parent = null

        if(root){
            this.findParents(root.left,value)

            if(root.left && root.left.value == value){
                parent = root.value
                return
            }

            if(root.right && root.right.value == value){
                parent = root.value
                return
            }

            this.findParents(root.right,value)
        }

        return parent
    }

    findChildren(root,value){
        if(!root){
            return null
        }
        else if(root.value ==  value){
            const children = {
                leftChild : root.left ? root.left.value : null,
                rightChild: root.right ? root.right.value : null
            }

            return children
        }
        else if(value < root.value){
            return this.findChildren(root.left,value)
        }
        else{
            return this.findChildren(root.right,value)
        }
    }

    findSiblings(root,value){
        if(!root){
            return null
        }

        let sibling = null
        if(root){
            this.findSiblings(root.left,value)

            if(root.left && root.left.value == value){
                sibling = root.right ? root.right.value : null
            }

            if(root.right && root.right.value == value){
                sibling = root.left ? root.left.value : null
            }

            this.findSiblings(root.right,value)
        }

        return sibling
    }


    findLeafNode(root,result = []){
        if(root){
            if(!root.left && !root.right){
                result.push(root.value)
            }

            this.findLeafNode(root.left,result)
            this.findLeafNode(root.right,result)
        }

        return result
    }

    findHeight(root){
        if(!root){
            return null
        }

        let queue = []
        queue.push(root)

        let height = 0

        while(queue.length){
            let nodeCount = queue.length
            height++

            while(nodeCount){
                let cur = queue.shift()

                if(cur){
                    if(cur.left){
                        queue.push(cur.left)
                    }

                    if(cur.right){
                        queue.push(cur.right)
                    }
                }

                nodeCount--
            }
        }

        return height
    }

    findAncestors(root,value,result=[]){
        if(!root){
            return null
        }
        result.push(root.value)
        if(root.value == value){
            return result
        }
        else if(value < root.value){
            return this.findAncestors(root.left,value,result)
        }
        else{
            return this.findAncestors(root.right,value,result)
        }
    }

    findDescendants(root,value){
        if(!root){
            return null
        }

        if(root.value == value){
            let result = this.collectDescendants(root)
            return result
        }
        else if(value < root.value){
            return this.findDescendants(root.left,value)
        }
        else{
            return this.findDescendants(root.right,value)
        }
    }

    collectDescendants(root,result=[]){
        if(root){
            result.push(root.value)
            this.collectDescendants(root.left,result)
            this.collectDescendants(root.right,result)
        }

        return result
    }

    findDegree(root,val){
        if(!root){
            return null
        }
        let degree = 0
        if(root.value == val){
            if(root.left){
                degree++
            }
            if(root.right){
                degree++
            }

            return degree
        }

        else if(val < root.value){
            return this.findDegree(root.left,val)
        }
        else{
            return this.findDegree(root.right,val)
        }
    }

    findDepth(root,val){
        if(!root){
            return null
        }

        let depth = 0 

        while(root){
            if(val < root.value){
                root = root.left
                depth++
            }
            else if(val > root.value){
                root = root.right
                depth++
            }
            else{
                return depth
            }
        }
    }

    findDistance(root,value){
        if(!root){
            return null
        }

        let distance = 0

        while(root){
            if(value < root.value){
                root = root.left
                distance++
            }
            else if(value > root.value){
                root = root.right
                distance++
            }
            else{
                return distance
            }
        }
    }

    findPath(root,value){
        if(!root){
            return null
        }

        let result = []

        while(root){
            result.push(root.value)
            if(value < root.value){
                root = root.left
            }
            else if(value > root.value){
                root = root.right
            }
            else{
                return result
            }
        }
    }

    findLCA(root,n1,n2){
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

    findDistanceBetWeenTwoNodes(n1,n2){
        let lca = this.findLCA(this.root,n1,n2)

        if(!lca){
            return null
        }

        let distance1 = this.findDistance(this.root,n1)
        let distance2 = this.findDistance(this.root,n2)

        return distance1 + distance2
    }

    findPathBetweenTwoNodes(n1,n2){
        let lca = this.findLCA(this.root,n1,n2)

        if(!lca){
            return null
        }

        let path1 = this.findPath(lca,n1)
        let path2 = this.findPath(lca,n2)

        return [...path1.reverse(),...path2.slice(1)]
    }

    noOfNodes(root){
        if(!root){
            return null
        }

        let queue = []
        queue.push(root)
        let nodes = 0
        while(queue.length){
            let cur = queue.shift()
            
            if(cur){
                if(cur.left){
                    queue.push(cur.left)
                }
                
                if(cur.right){
                    queue.push(cur.right)
                }
            }
            nodes++
        }
        return nodes
    }

    onlyOneNode(root,result=[]){
        if(root){
            if((!root.left && root.right) || (root.right && !root.left)){
                result.push(root.value)
            }
            this.onlyOneNode(root.left,result)
            this.onlyOneNode(root.right,result)
        }

        return result
    }

    onlyLeftNode(root,result=[]){
        if(root){
            if(root.left && !root.right){
                result.push(root.value)
            }

            this.onlyLeftNode(root.left,result)
            this.onlyLeftNode(root.right,result)
        }
        return result
    }

    onlyRightNode(root,result=[]){
        if(root){
            if(root.right && !root.left){
                result.push(root.value)
            }

            this.onlyRightNode(root.left,result)
            this.onlyRightNode(root.right,result)
        }
        return result
    }

    onlyOneNodeCount(root){
        if(!root){
            return 0
        }

        let count = 0

        if(root.left && !root.right || !root.left && root.right){
            count++
        }

        return count + this.onlyOneNodeCount(root.left) + this.onlyOneNodeCount(root.right)
    }

    onlyLeftNodeCount(root) {
    if (!root) return 0;
    let count = 0;
    if (root.left && !root.right) count++;
    return count + this.onlyLeftNodeCount(root.left) + this.onlyLeftNodeCount(root.right);
}

    onlyRightNodeCount(root){
        if(!root){
            return 0
        }

        let count = 0

        if(root.right && !root.left){
            count++
        }

        return count + this.onlyRightNodeCount(root.left) + this.onlyRightNodeCount(root.right)
    }
}

// Create BST Instance
const tree = new Bst();

// Insert sample values
[50, 30, 70, 20, 40, 60, 80, 35, 45, 65, 75].forEach(v => tree.insert(v));

console.log("===== Traversals =====");
console.log("Pre-Order:");
tree.preOrder(tree.root);
console.log("In-Order:");
tree.inOrder(tree.root);
console.log("Post-Order:");
tree.postOrder(tree.root);
console.log("Level-Order:");
tree.levelOrder(tree.root);

console.log("\n===== Search Tests =====");
console.log("Search 40:", tree.search(tree.root, 40)); // true
console.log("Search 99:", tree.search(tree.root, 99)); // null

console.log("\n===== Min / Max =====");
console.log("Min:", tree.min(tree.root)); // 20
console.log("Max:", tree.max(tree.root)); // 80

console.log("\n===== Kth Smallest / Largest =====");
console.log("3rd Smallest:", tree.findKthSmallest(tree.root, 3)); // 35
console.log("2nd Largest:", tree.findKthLargest(tree.root, 2)); // 75

console.log("\n===== Closest / Successor / Predecessor =====");
console.log("Closest to 46:", tree.findClosest(tree.root, 46)); // 50
console.log("Successor of 40:", tree.successor(tree.root, 40)); // 45
console.log("Predecessor of 40:", tree.predecessor(tree.root, 40)); // 35

console.log("\n===== Leaf Nodes =====");
console.log("Leaf Nodes:", tree.findLeafNode(tree.root));

console.log("\n===== Height =====");
console.log("Height:", tree.findHeight(tree.root));

console.log("\n===== Degree / Depth / Distance =====");
console.log("Degree of 30:", tree.findDegree(tree.root, 30));
console.log("Depth of 35:", tree.findDepth(tree.root, 35));
console.log("Distance to 65:", tree.findDistance(tree.root, 65));

console.log("\n===== Path & LCA =====");
console.log("Path to 45:", tree.findPath(tree.root, 45));
console.log("LCA of 35 and 45:", tree.findLCA(tree.root, 35, 45).value);
console.log("Distance between 35 and 45:", tree.findDistanceBetWeenTwoNodes(35, 45));
console.log("Path between 35 and 45:", tree.findPathBetweenTwoNodes(35, 45));

console.log("\n===== Node Counts =====");
console.log("Total Nodes:", tree.noOfNodes(tree.root));

console.log("\n===== One/Left/Right Child Nodes =====");
console.log("Only One Child Nodes:", tree.onlyOneNode(tree.root));
console.log("Only One Child Count:", tree.onlyOneNodeCount(tree.root));
console.log("Only Left Child Nodes:", tree.onlyLeftNode(tree.root));
console.log("Only Left Child Count:", tree.onlyLeftNodeCount(tree.root));
console.log("Only Right Child Nodes:", tree.onlyRightNode(tree.root));
console.log("Only Right Child Count:", tree.onlyRightNodeCount(tree.root));

console.log("\n===== Prime Numbers in BST =====");
console.log("Prime Nodes:", tree.findPrimes(tree.root));

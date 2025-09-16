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

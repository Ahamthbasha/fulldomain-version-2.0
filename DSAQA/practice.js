// //sorting algo

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
//         let j = i-1
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

// const testArray = [5, 3, 8, 4, 2];

// console.log("Bubble Sort:", bubbleSort([...testArray]));
// console.log("Insertion Sort:", insertionSort([...testArray]));
// console.log("Selection Sort:", selectionSort([...testArray]));
// console.log("Quick Sort:", quickSort([...testArray]));
// console.log("Merge Sort:", mergeSort([...testArray]));


//stack

// class Stack{
//     constructor(){
//         this.item = []
//     }

//     isEmpty(){
//         return this.item.length == 0
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'stack is empty'
//         }
//         return this.item[this.item.length-1]
//     }

//     push(value){
//         this.item.push(value)
//     }

//     pop(){
//         if(this.isEmpty()){
//             return 'underflow'
//         }else{
//             return this.item.pop()
//         }
//     }

//     print(){
//         console.log(this.item)
//     }

//     reverse(arr){
//         let newStack = new Stack()

//         for(let i=0;i<arr.length;i++){
//             newStack.push(arr[i])
//         }

//         let reverse = []

//         while(!newStack.isEmpty()){
//             reverse.push(newStack.pop())
//         }

//         return reverse
//     }
// }

// const stack = new Stack();

// console.log("Is Empty:", stack.isEmpty()); // true
// console.log("Peek:", stack.peek()); // 'stack is empty'
// console.log("Pop:", stack.pop()); // 'underflow'

// stack.push(10);
// stack.push(20);
// stack.push(30);

// stack.print(); // [10, 20, 30]

// console.log("Is Empty:", stack.isEmpty()); // false
// console.log("Peek:", stack.peek()); // 30

// console.log("Pop:", stack.pop()); // 30
// console.log("Peek after pop:", stack.peek()); // 20

// stack.print(); // [10, 20]

// stack.pop(); // removes 20
// stack.pop(); // removes 10
// console.log("Pop from empty stack:", stack.pop()); // 'underflow'

// // ✅ Reverse test
// const arrToReverse = [1, 2, 3, 4, 5];
// console.log("Reversed array:", stack.reverse(arrToReverse)); 

//object stack

// class Stack{
//     constructor(){
//         this.item = {}
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size == 0
//     }

//     push(value){
//         this.item[this.size] = value
//         this.size++
//     }

//     pop(){
//         if(this.isEmpty()){
//             return 'stack is empty'
//         }else{
//             let val = this.item[this.size-1]
//             delete this.item[this.size-1]
//             this.size--
//             return val
//         }
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'stack is empty'
//         }else{
//             return this.item[this.size-1]
//         }
//     }

//     print(){
//         console.log(this.item)
//     }
// }

// const stack = new Stack();

// console.log("Is Empty:", stack.isEmpty()); // true
// console.log("Peek:", stack.peek()); // 'stack is empty'
// console.log("Pop:", stack.pop()); // 'stack is empty'

// stack.push(100);
// stack.push(200);
// stack.push(300);

// console.log("Peek after pushes:", stack.peek()); // 300
// stack.print(); // { '0': 100, '1': 200, '2': 300 }

// console.log("Pop:", stack.pop()); // 300
// console.log("Peek after pop:", stack.peek()); // 200

// stack.print(); // { '0': 100, '1': 200 }

// stack.pop(); // 200
// stack.pop(); // 100
// console.log("Pop on empty again:", stack.pop()); // 'stack is empty'

//queue

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
//         }else{
//             return this.item.shift()
//         }
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'queue is empty'
//         }else{
//             return this.item[0]
//         }
//     }

//     print(){
//         console.log(this.item)
//     }
// }

// const queue = new Queue();

// console.log("Is Empty:", queue.isEmpty()); // true
// console.log("Dequeue:", queue.dequeue());  // 'queue is empty'
// console.log("Peek:", queue.peek());        // 'queue is empty'

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);

// console.log("Is Empty after enqueue:", queue.isEmpty()); // false
// queue.print(); // [10, 20, 30]

// console.log("Peek:", queue.peek());        // 10

// console.log("Dequeue:", queue.dequeue());  // 10
// console.log("Peek after dequeue:", queue.peek()); // 20
// queue.print(); // [20, 30]

// queue.dequeue(); // removes 20
// queue.dequeue(); // removes 30

// console.log("Final Dequeue:", queue.dequeue()); // 'queue is empty'
// console.log("Is Empty at end:", queue.isEmpty()); // true

//queue based on object

// class Queue{
//     constructor() {
//         this.item = {}
//         this.head = 0
//         this.tail = 0
//     }

//     isEmpty(){
//         return this.tail - this.head == 0
//     }

//     enqueue(value){
//         this.item[this.tail] = value
//         this.tail++
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return 'queue is empty'
//         }else{
//             let val = this.item[this.head]
//             delete this.item[this.head]
//             this.head++
//             return val
//         }
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'queue is empty'
//         }else{
//             return this.item[this.head]
//         }
//     }

//     print(){
//         console.log(this.item)
//     }
// }

// const queue = new Queue();

// console.log("Is Empty:", queue.isEmpty());         // true
// console.log("Dequeue:", queue.dequeue());          // 'queue is empty'
// console.log("Peek:", queue.peek());                // 'queue is empty'

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);

// console.log("Is Empty:", queue.isEmpty());         // false
// queue.print();                                     // { '0': 10, '1': 20, '2': 30 }

// console.log("Peek:", queue.peek());                // 10
// console.log("Dequeue:", queue.dequeue());          // 10
// console.log("Peek after dequeue:", queue.peek());  // 20

// queue.dequeue(); // 20
// queue.dequeue(); // 30

// console.log("Final Dequeue:", queue.dequeue());    // 'queue is empty'
// console.log("Is Empty at end:", queue.isEmpty());  // true



//linkedlist

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size == 0
//     }

//     prepend(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     append(value){
//         const node = new Node(value)
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

//     insert(value,index){
//         if(index < 0 || index > this.size){
//             return 'invalid index'
//         }
//         else if(index == 0){
//             this.prepend(value)
//         }
//         else if(index == this.size){
//             this.append(value)
//         }
//         else{
//             let temp = this.head
//             const node = new Node(value)

//             for(let i=0;i<index-1;i++){
//                 temp = temp.next
//             }

//             node.next = temp.next
//             temp.next = node
//             this.size++
//         }
//     }

//     removeFromStart(){
//         if(this.isEmpty()){
//             return 'list is empty'
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

//     removeFromEnd(){
//         if(this.isEmpty()){
//             return 'list is empty'
//         }
//         else if(this.size == 1){
//             let val = this.head.value
//             this.head = null
//             this.size--
//             return val
//         }
//         else{
//             let temp = this.head

//             while(temp.next.next){
//                 temp = temp.next
//             }

//             let val = temp.next.value
//             temp.next = null
//             this.size--
//             return val
//         }
//     }

//     removeByIndex(index){
//         if(index < 0 || index > this.size-1){
//             return 'invalid index'
//         }
//         else if(this.isEmpty()){
//             return 'list is empty'
//         }
//         else if(index == 0){
//             return this.removeFromStart()
//         }
//         else if(index == this.size-1){
//             return this.removeFromEnd()
//         }
//         else{
//             let temp = this.head

//             for(let i=0;i<index-1;i++){
//                 temp = temp.next
//             }

//             let val = temp.next.value
//             temp.next = temp.next.next
//             this.size--
//             return val
//         }
//     }

//     removeByValue(value){
//         if(this.isEmpty()){
//             return 'list is empty'
//         }
//         else if(this.size == 1){
//             if(value == this.head.value){
//                 let val = this.head.value
//                 this.head = null
//                 this.size--
//                 return val
//             }
//         }
//         else if(value == this.head.value){
//             let val = this.head.value
//             this.head = this.head.next
//             this.size--
//             return val
//         }
//         else{
//             let temp = this.head
//             while(temp.next && temp.next.value != value){
//                 temp = temp.next
//             }

//             if(temp.next == null){
//                 return 'value is invalid'
//             }
//             else{
//                 let val = temp.next.value
//                 temp.next = temp.next.next
//                 this.size--
//                 return val
//             }
//         }
//     }

//     search(value){
//         if(this.isEmpty()){
//             return 'list is empty'
//         }
//         else{
//             let temp = this.head
//             let index = 0
            
//             while(temp){
//                 if(temp.value == value){
//                     return index
//                 }
//                 temp = temp.next
//                 index++
//             }
//         }

//         return 'invalid value'
//     }

//     reverse(){
//         let prev = null
//         let cur = this.head
//         while(cur){
//            let next = cur.next
//             cur.next = prev
//             prev = cur
//             cur = next
//         }

//         this.head = prev
//     }

//     makeCycle(){
//         let temp = this.head

//         while(temp.next){
//             temp = temp.next
//         }

//         temp.next = this.head
//     }

//     isCycle(){
//         let slow = this.head
//         let fast = this.head

//         while(fast && fast.next){
//             slow = slow.next
//             fast = fast.next.next

//             if(slow == fast){
//                 return 'cycle found'
//             }
//         }

//         return 'cycle not found'
//     }

//     print(){
//         if(this.isEmpty()){
//             return 'list is empty'
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

// const list = new LinkedList();

// // Test 1: Initial state
// console.log(list.print()); // "list is empty"
// console.log(list.isEmpty()); // true

// // Test 2: Prepend
// list.prepend(10);
// list.prepend(20);
// console.log(list.print()); // "20->10->null"

// // Test 3: Append
// list.append(30);
// console.log(list.print()); // "20->10->30->null"

// // Test 4: Insert at position
// list.insert(25, 2); // Between 10 and 30
// console.log(list.print()); // "20->10->25->30->null"
// console.log(list.insert(99, -1)); // "invalid index"
// console.log(list.insert(99, 100)); // "invalid index"

// // Test 5: Remove From Start
// console.log(list.removeFromStart()); // 20
// console.log(list.print()); // "10->25->30->null"

// // Test 6: Remove From End
// console.log(list.removeFromEnd()); // 30
// console.log(list.print()); // "10->25->null"

// // Test 7: Remove By Index
// console.log(list.removeByIndex(1)); // 25
// console.log(list.print()); // "10->null"
// console.log(list.removeByIndex(5)); // "invalid index"

// // Test 8: Remove By Value
// list.append(50);
// list.append(60);
// console.log(list.removeByValue(10)); // 10
// console.log(list.removeByValue(70)); // "value is invalid"
// console.log(list.print()); // "50->60->null"

// // Test 9: Search
// console.log(list.search(50)); // 0
// console.log(list.search(100)); // "invalid value"

// // Test 10: Reverse
// list.append(70); // List: 50->60->70
// list.reverse();
// console.log(list.print()); // "70->60->50->null"

// // Test 11: Cycle
// console.log(list.isCycle()); // "cycle not found"
// list.makeCycle();
// console.log(list.isCycle()); // "cycle found"

// // ❗ Avoid calling list.print() after cycle is made — it will go infinite

// // Test 12: Insert and Remove in edge cases
// const list2 = new LinkedList();
// list2.append(1);
// console.log(list2.removeByValue(2)); // "value is invalid"
// console.log(list2.removeByValue(1)); // 1
// console.log(list2.removeByValue(1)); // "list is empty"

//linkedlist in stack

// class Node{
//     constructor(value) {
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
//         const node = new Node(value)
//         node.next = this.head
//         this.head = node
//         this.size++
//     }

//     pop(){
//         if(this.isEmpty()){
//             return 'list is empty'
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
//         }else{
//             return this.head.value
//         }
//     }

//     print(){
//         if(this.isEmpty()){
//             return 'list is empty'
//         }else{
//             let temp = this.head
//             let list = ''

//             while(temp){
//                 list += temp.value+'->'
//                 temp = temp.next
//             }
//             list += 'null'

//             return list
//         }
//     }
// }

// const stack = new Stack()

// console.log("Is empty:", stack.isEmpty()) // true
// console.log("Peek empty:", stack.peek())  // 'list is empty'
// console.log("Pop empty:", stack.pop())    // 'list is empty'
// console.log("Print empty:", stack.print())// 'list is empty'

// // Push elements
// stack.push(10)
// stack.push(20)
// stack.push(30)

// console.log("Is empty after push:", stack.isEmpty()) // false
// console.log("Peek:", stack.peek())  // 30
// console.log("Print:", stack.print()) // 30->20->10->null

// // Pop elements
// console.log("Pop:", stack.pop())    // 30
// console.log("Peek after pop:", stack.peek()) // 20
// console.log("Print after pop:", stack.print()) // 20->10->null

// // Pop remaining elements
// console.log("Pop:", stack.pop())    // 20
// console.log("Pop:", stack.pop())    // 10
// console.log("Pop on empty:", stack.pop())  // 'list is empty'
// console.log("Print empty again:", stack.print()) // 'list is empty'

// // Push again after empty
// stack.push(100)
// stack.push(200)
// console.log("Peek after repush:", stack.peek()) // 200
// console.log("Print after repush:", stack.print()) // 200->100->null

//linkedlist based on queue

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
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return 'queue is empty'
//         }
//         else if(this.size == 1){
//             const val = this.head.value
//             this.head = null
//             this.size--
//             return val
//         }
//         else{
//             let temp = this.head

//             while(temp.next.next){
//                 temp = temp.next
//             }

//             let val = temp.next.value
//             temp.next = temp.next.next
//             this.size--
//             return val
//         }
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'queue is empty'
//         }
//         else{
//             let temp = this.head

//             while(temp.next){
//                 temp = temp.next
//             }
//             let val = temp.value
//             return val
//         }
//     }

//     print(){
//         if(this.isEmpty()){
//             return 'list is empty'
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

// const queue = new Queue()

// console.log("Is empty:", queue.isEmpty()) // true
// console.log("Peek empty:", queue.peek())  // 'queue is empty'
// console.log("Dequeue empty:", queue.dequeue())  // 'queue is empty'
// console.log("Print empty:", queue.print()) // 'list is empty'

// // Enqueue elements
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)

// console.log("Print after enqueue:", queue.print()) // 30->20->10->null
// console.log("Peek:", queue.peek()) // 10 (FIFO)
// console.log("Is empty:", queue.isEmpty()) // false

// // Dequeue
// console.log("Dequeue:", queue.dequeue()) // 10
// console.log("Peek after dequeue:", queue.peek()) // 20
// console.log("Print after dequeue:", queue.print()) // 30->20->null

// queue.enqueue(40)
// console.log("Print after enqueue 40:", queue.print()) // 40->30->20->null
// console.log("Dequeue:", queue.dequeue()) // 20
// console.log("Dequeue:", queue.dequeue()) // 30
// console.log("Dequeue:", queue.dequeue()) // 40
// console.log("Dequeue empty again:", queue.dequeue()) // 'queue is empty'
// console.log("Print now:", queue.print()) // 'list is empty'

//hashtable

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
//         return this.table[index] || 'invalid key'
//     }

//     delete(key){
//         let index = this.hash(key)

//         if(this.table[index]){
//             this.table[index] = undefined
//         }else{
//             return 'invalid key'
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

// const ht = new Hashtable(10)

// // 1. Set and Get
// ht.set("apple", "fruit")
// ht.set("carrot", "vegetable")
// ht.set("rose", "flower")

// console.log("Get apple:", ht.get("apple"))     // fruit
// console.log("Get carrot:", ht.get("carrot"))   // vegetable
// console.log("Get rose:", ht.get("rose"))       // flower
// console.log("Get banana:", ht.get("banana"))   // invalid key

// // 2. Delete
// ht.delete("carrot")
// console.log("After deleting carrot:", ht.get("carrot")) // invalid key

// // 3. Print
// ht.print()
// // Expected: It should print valid index-value pairs (not including deleted keys)

// // 4. Edge case: Key with same hash (manually force a collision)
// const ht2 = new Hashtable(5)
// ht2.set("ab", "first")
// ht2.set("ba", "second") // Both 'ab' and 'ba' have same ASCII total: 97+98 = 195

// console.log("Hash(ab):", ht2.hash("ab"))  // 195 % 5 = 0
// console.log("Hash(ba):", ht2.hash("ba"))  // 195 % 5 = 0

// ht2.print()
// // Only one value will remain due to collision (second overwrites first)
// console.log("Get ab:", ht2.get("ab"))  // second
// console.log("Get ba:", ht2.get("ba"))  // second


//hashtable handle collisions

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
//             let sameElement = bucket.find((val)=>val[0] == key)
//             if(sameElement){
//                 sameElement[1] = value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }

//     get(key){
//         let index = this.hash(key)
//         let bucket = this.table[index]

//         if(bucket){
//             const sameElement = bucket.find((val)=>val[0]==key)
//             return sameElement ? sameElement[1] : 'key not found'
//         }else{
//             return 'invalid index'
//         }
//     }

//     delete(key){
//         let index = this.hash(key)
//         let bucket = this.table[index]
//         if(bucket){
//             const sameElement = bucket.findIndex((val)=>val[0]==key)

//             if(sameElement != -1){
//                 bucket.splice(sameElement,1)
//                 return 'key deleted'
//             }
//         }else{
//             return 'invalid key'
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

// const ht = new Hashtable(5)

// // Add elements
// ht.set("apple", "fruit")
// ht.set("carrot", "vegetable")
// ht.set("rose", "flower")

// console.log("apple:", ht.get("apple"))       // fruit
// console.log("carrot:", ht.get("carrot"))     // vegetable
// console.log("rose:", ht.get("rose"))         // flower

// // Update existing key
// ht.set("apple", "red fruit")
// console.log("updated apple:", ht.get("apple")) // red fruit

// // Force collision
// ht.set("ab", "first")   // hash(ab) = 0 (e.g.)
// ht.set("ba", "second")  // same hash → same index

// console.log("ab:", ht.get("ab"))           // first
// console.log("ba:", ht.get("ba"))           // second

// // Delete existing key
// console.log(ht.delete("ab"))               // ab deleted
// console.log("ab:", ht.get("ab"))           // key not found

// // Delete non-existing key
// console.log(ht.delete("mango"))            // key not found

// // Get non-existing key
// console.log(ht.get("banana"))              // key not found

// // Print hashtable
// ht.print()


//tree

// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class Tree{
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

//     search(root,target){
//         if(!root){
//             return null
//         }
//         else if(root.value == target){
//             return true
//         }
//         else if(target < root.value){
//             return this.search(root.left,target)
//         }
//         else{
//             return this.search(root.right,target)
//         }
//     }

//     preOrder(root){
//         if(root){
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     inorder(root){
//         if(root){
//             this.inorder(root.left)
//             console.log(root.value)
//             this.inorder(root.right)
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
//         if(!root){
//             return null
//         }

//         let queue = []
//         queue.push(root)

//         while(queue.length){
//             let cur = queue.shift()

//             if(cur){
//                 console.log(cur.value)
//             }

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

//     deleteNode(root,target){
//         if(!root){
//             return null
//         }

//         else if(target < root.value){
//             root.left = this.deleteNode(root.left,target)
//         }
//         else if(target > root.value){
//             root.right = this.deleteNode(root.right,target)
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
//             this.root = this.deleteNode(root.right,target)
//         }
//         return root
//     }

//     inOrderTraversal(root,result=[]){
//         if(root){
//             this.inOrderTraversal(root.left,result)
//             result.push(root.value)
//             this.inOrderTraversal(root.right,result)
//         }
//         return result
//     }

//     findleafNode(root,result=[]){
//         if(root){
//             if(!root.right && !root.left){
//                 result.push(root.value)
//             }
//             this.findleafNode(root.left,result)
//             this.findleafNode(root.right,result)
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

//         return  this.isBst(root.left,min,root.value) && this.isBst(root.right,root.value,max)
//     }

//     isIdentical(tree1,tree2){
//         if(!tree1 && !tree2){
//             return true
//         }
        
//         if((!tree1 && tree2)||(tree1 && !tree2)){
//             return false
//         }

//         return tree1.value == tree2.value && (this.isIdentical(tree1.left,tree2.left)) && (this.isIdentical(tree1.right,tree2.right))
//     }

//     findHeight(root){
//         if(!root){
//             return null
//         }

//         let queue = []
//         queue.push(root)
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

//     findDepth(root,target){
//         if(!root){
//             return null
//         }

//         if(root.value == target){
//             let depth = 0
//             if(root.left){
//                 depth++
//             }

//             if(root.right){
//                 depth++
//             }
//             return depth
//         }
//         else if(target < root.value){
//             return this.findDepth(root.left,target)
//         }
//         else if(target > root.value){
//             return this.findDepth(root.right,target)
//         }
//     }
// }

// const tree = new Tree()
// tree.insert(10)
// tree.insert(5)
// tree.insert(15)
// tree.insert(3)
// tree.insert(7)
// tree.insert(12)
// tree.insert(18)

// console.log("Search 7:", tree.search(tree.root, 7)) // true
// console.log("Search 20:", tree.search(tree.root, 20)) // null

// console.log("Inorder (should be sorted):")
// tree.inorder(tree.root) // 3, 5, 7, 10, 12, 15, 18

// console.log("Preorder:")
// tree.preOrder(tree.root)

// console.log("Postorder:")
// tree.postOrder(tree.root)

// console.log("Level Order:")
// tree.levelOrder(tree.root)

// console.log("Min value:", tree.min(tree.root)) // 3
// console.log("Max value:", tree.max(tree.root)) // 18

// console.log("Leaf Nodes:", tree.findleafNode(tree.root)) // [3, 7, 12, 18]

// console.log("Tree Height:", tree.findHeight(tree.root)) // 3

// console.log("Depth of 7:", tree.findDepth(tree.root, 7)) // 2
// console.log("Depth of 15:", tree.findDepth(tree.root, 15)) // 1

// console.log("Is BST:", tree.isBst(tree.root)) // true

// console.log("Delete 10 (root):")
// tree.delete(10)
// tree.inorder(tree.root) // updated BST

// const tree2 = new Tree()
// tree2.insert(5)
// tree2.insert(3)
// tree2.insert(7)

// console.log("Identical Trees:", tree.isIdentical(tree.root, tree2.root)) // false

//heap

// class Heap{
//     constructor(){
//         this.heap = []
//     }

//     isEmpty(){
//         return this.heap.length == 0
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
//             return 'heap empty'
//         }else{
//             return this.heap[0]
//         }
//     }

//     print(){
//         console.log(this.heap)
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
//             return 'heap empty'
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
//             let smaller = this.getLeftIndex(index)

//             if(this.hasRightChild(index) && this.getRightChild(index) < this.getLeftChild(index)){
//                 smaller = this.getRightIndex(index)
//             }

//             if(this.heap[index] <= this.heap[smaller]){
//                 break
//             }else{
//                 this.swap(index,smaller)
//             }

//             index = smaller
//         }
//     }

//     heapSort(arr){
//         let heap = new Heap()

//         for(let i=0;i<arr.length;i++){
//             heap.add(arr[i])
//         }

//         let sortedArr = []

//         while(heap.heap.length){
//             sortedArr.push(heap.remove())
//         }

//         return sortedArr
//     }

//     findKthLargest(arr,k){
//         let heap = new Heap()

//         for(let i=0;i<arr.length;i++){
//             heap.add(arr[i])
//             if(heap.heap.length > k){
//                 heap.remove()
//             }
//         }

//         return heap.peek()
//     }
// }

// // Create a new heap instance
// const h = new Heap();

// // Test isEmpty and peek on empty heap
// console.log("Initial isEmpty:", h.isEmpty()); // true
// console.log("Initial peek:", h.peek()); // "heap empty"

// // Test add and heap property
// h.add(5);
// h.add(3);
// h.add(8);
// h.add(1);
// h.add(2);
// console.log("Heap after inserts:");
// h.print(); // Should be a valid min heap

// // Test peek after insertions
// console.log("Peek after inserts:", h.peek()); // 1 (min element)

// // Test remove (min extraction)
// console.log("Remove 1st:", h.remove()); // 1
// console.log("Remove 2nd:", h.remove()); // 2
// console.log("Remove 3rd:", h.remove()); // 3
// console.log("Heap after removals:");
// h.print(); // Should still be a valid min heap

// // Test heapSort
// const sorted = h.heapSort([9, 4, 7, 1, -2, 6, 5]);
// console.log("Heap Sort Result:", sorted); // [-2, 1, 4, 5, 6, 7, 9]

// // Test findKthLargest
// const arr1 = [3, 2, 1, 5, 6, 4];
// const k1 = 2;
// console.log(`findKthLargest (k=${k1}) from`, arr1, "=>", h.findKthLargest(arr1, k1)); // 5

// const arr2 = [3, 2, 3, 1, 2, 4, 5, 5, 6];
// const k2 = 4;
// console.log(`findKthLargest (k=${k2}) from`, arr2, "=>", h.findKthLargest(arr2, k2)); // 4

// // Final check isEmpty
// console.log("Is heap empty now?", h.isEmpty()); // true or false based on leftover elements

//maxHeap

class MaxHeap {
    constructor(){
        this.heap = []
    }

    isEmpty(){
        return this.heap.length == 0
    }

    getParentIndex(index){
        return Math.floor((index-1)/2)
    }

    getLeftChildIndex(index){
        return 2 * index + 1
    }

    getRightChildIndex(index){
        return 2 * index + 2
    }

    getParent(index){
        return this.heap[this.getParentIndex(index)]
    }

    getLeftChild(index){
        return this.heap[this.getLeftChildIndex(index)]
    }

    getRightChild(index){
        return this.heap[this.getRightChildIndex(index)]
    }

    hasParent(index){
        return this.getParentIndex(index) >= 0
    }

    hasLeftChild(index){
        return this.getLeftChildIndex(index) < this.heap.length
    }

    hasRightChild(index){
        return this.getRightChildIndex(index) < this.heap.length
    }

    swap(index1,index2){
        let temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }

    peek(){
        if(this.isEmpty()){
            return 'heap is empty'
        }else{
            return this.heap[0]
        }
    }

    add(value){
        this.heap.push(value)
        this.heapifyUp()
    }

    heapifyUp(){
        let index = this.heap.length - 1

        while(this.hasParent(index) && this.getParent(index) < this.heap[index]){
            this.swap(this.getParentIndex(index),index)
            index = this.getParentIndex(index)
        }
    }

    remove(){
        if(this.isEmpty()){
            return 'heap is empty'
        }

        let val = this.heap[0]
        this.heap[0] = this.heap[this.heap.length-1]
        this.heap.pop()
        this.heapifyDown()
        return val
    }

    heapifyDown(){
        let index = 0

        while(this.hasLeftChild(index)){
            let largerIndex = this.getLeftChildIndex(index)

            if(this.hasRightChild(index) && this.getRightChild(index) > this.getLeftChild[index]){
                largerIndex = this.getRightChildIndex(index)
            }

            if(this.heap[index] >= this.heap[largerIndex]){
                break
            }else{
                this.swap(index,largerIndex)
            }

            index = largerIndex
        }
    }

    heapSort(arr){
        let heap = new MaxHeap()

        for(let i=0;i<arr.length;i++){
            heap.add(arr[i])
        }

        let sortedArr = []

        while(heap.heap.length){
            sortedArr.push(heap.remove())
        }

        return sortedArr
    }

    findKthSmallest(arr,k){
        let heap = new MaxHeap()

        for(let i=0;i<arr.length;i++){
            heap.add(arr[i])
            if(heap.heap.length > k){
                heap.remove()
            }
        }
        return heap.peek()
    }

    print(){
        console.log(this.heap)
    }
}


const heap = new MaxHeap();

console.log("Initial isEmpty:", heap.isEmpty()); // true
console.log("Initial peek:", heap.peek()); // heap is empty

// Insert values
heap.add(10);
heap.add(20);
heap.add(5);
heap.add(100);
heap.add(1);
heap.add(75);
heap.add(30);

console.log("Heap after insertions:");
heap.print(); // Should follow max-heap order

console.log("Peek (max):", heap.peek()); // 100

// Remove max elements
console.log("Removed:", heap.remove()); // 100
console.log("Removed:", heap.remove()); // 75

console.log("Heap after removals:");
heap.print(); // Still in max-heap order

// Test heapSort
const unsorted = [7, 3, 5, 2, 9, 1];
const sortedDesc = heap.heapSort(unsorted);
console.log("Heap Sort (descending):", sortedDesc); // [9, 7, 5, 3, 2, 1]

// Test findKthSmallest
const arr = [8, 4, 2, 9, 6, 1, 3];
console.log("3rd smallest:", heap.findKthSmallest(arr, 3)); // 3

console.log("Is heap empty now?", heap.isEmpty()); // false (only original heap)

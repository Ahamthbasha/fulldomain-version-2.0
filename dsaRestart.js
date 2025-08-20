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

class LinkedList{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size == 0
    }

    push(value){
        const node = new LinkedList(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    pop(){
        if(this.isEmpty()){
            return 'stack is empty'
        }
        else if(this.size == 1){
            let value = this.head.value
            this.head = null
            this.size--
            return value
        }
        else{
            let val = this.head.value
            this.head = this.head.next
            this.size--
            return val
        }
    }

    peek(){
        if(this.isEmpty()){
            return 'stack is empty'
        }
        else{
            return this.head.value
        }
    }

    display(){
        if(this.isEmpty()){
            return 'stack is empty'
        }else{
            let temp = this.head
            let result = ''

            while(temp){
                result += temp.value + '->'
                temp = temp.next
            }

            result += 'null'
            return result
        }
    }

    reverse(){
        let prev = null 
        let cur = this.head

        while(cur){
            let next = cur.next
            cur.next = prev
            prev = cur
            cur = next
        }

        this.head = prev
    }
}


function runLinkedListStackTests() {
    let stack = new Stack();

    console.log("=== LinkedList Stack Tests ===");

    // Empty stack
    console.log("Is stack empty? ->", stack.isEmpty()); // true
    console.log("Peek on empty ->", stack.peek()); // "stack is empty"
    console.log("Pop on empty ->", stack.pop()); // "stack is empty"
    console.log("Display empty ->", stack.display()); // "stack is empty"

    // Push elements
    stack.push(10);
    stack.push(20);
    stack.push(30);

    console.log("After pushes (30->20->10->null):", stack.display()); // 30->20->10->null
    console.log("Peek (should be 30):", stack.peek()); // 30
    console.log("Size (should be 3):", stack.size); // 3

    // Pop elements
    console.log("Pop (should return 30):", stack.pop()); // 30
    console.log("Pop (should return 20):", stack.pop()); // 20
    console.log("Peek (should be 10):", stack.peek()); // 10
    console.log("Size (should be 1):", stack.size); // 1
    console.log("Display (10->null):", stack.display()); // 10->null

    // Pop last element
    console.log("Pop (should return 10):", stack.pop()); // 10
    console.log("Pop again (empty) ->", stack.pop()); // "stack is empty"
    console.log("Is stack empty? ->", stack.isEmpty()); // true

    // Push again and test reverse()
    stack.push("a");
    stack.push("b");
    stack.push("c");
    console.log("Stack before reverse (c->b->a->null):", stack.display());
    stack.reverse();
    console.log("Stack after reverse (a->b->c->null):", stack.display());
}

runLinkedListStackTests();

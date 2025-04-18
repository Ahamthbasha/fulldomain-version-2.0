// class stack{
//     constructor(){
//         this.item={}
//         this.top=0
//     }

//     push(element){
//         this.item[this.top] = element
//         this.top++
//     }

//     pop(){
//         this.top--
//         const value=this.item[this.top]
//         delete this.item[this.top]
//         return value
//     }

//     peek(){
//         return this.item[this.top-1]
//     }

//     isEmpty(){
//         return this.top === 0
//     }

//     getSize(){
//         return this.top
//     }

//     display(){
//         console.log(this.item)
//     }
// }

// const stack1=new stack()
// stack1.push(1)
// stack1.push(2)
// stack1.push(3)
// stack1.push(4)
// stack1.display()
// console.log(stack1.pop())
// console.log(stack1.peek())
// console.log(stack1.isEmpty())
// console.log(stack1.getSize())

// class stack{
//     constructor(){
//         this.item=[]
//     }

//     push(element){
//         this.item.push(element)
//     }

//     pop(){
//         return this.item.pop()
//     }

//     peek(){
//         return this.item[0]
//     }

//     getSize(){
//         return this.item.length
//     }

//     isEmpty(){
//         return this.item.length == 0
//     }

//     display(){
//         console.log(this.item)
//     }
// }

// const stack1=new stack()
// stack1.push(1)
// stack1.push(2)
// stack1.push(3)
// stack1.push(4)
// stack1.display()
// console.log(stack1.pop())
// console.log(stack1.peek())
// console.log(stack1.isEmpty())
// console.log(stack1.getSize())

//linkedlist using stack

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class Stack {
//     constructor() {
//         this.top = null;
//         this.size = 0;
//     }

//     isEmpty() {
//         return this.size === 0;
//     }

//     getSize() {
//         return this.size;
//     }

//     push(value) {
//         const node = new Node(value);
//         node.next = this.top;
//         this.top = node;
//         this.size++;
//     }

//     pop() {
//         if (this.isEmpty()) {
//             console.log("Stack is empty. Nothing to pop.");
//             return null;
//         }
//         const poppedValue = this.top.value;
//         this.top = this.top.next;
//         this.size--;
//         return poppedValue;
//     }

//     peek() {
//         if (this.isEmpty()) {
//             console.log("Stack is empty. Nothing to peek.");
//             return null;
//         }
//         return this.top.value;
//     }

//     print() {
//         let temp = this.top;
//         let list = '';
//         const val = [];
//         while (temp) {
//             list += temp.value + ' => ';
//             val.push(temp.value);
//             temp = temp.next;
//         }
//         list += 'null';
//         console.log("Stack as list:", list);
//         console.log("Stack as array:", val);
//     }
// }

// const stack = new Stack();

// stack.push(10);
// stack.push(20);
// stack.push(30);

// stack.print();

// console.log("Top:", stack.peek());

// console.log("Popped:", stack.pop());
// stack.print();
// console.log("Is empty?", stack.isEmpty());

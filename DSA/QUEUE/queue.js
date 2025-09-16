// class Queue{
//     constructor(){
//         this.queue=[]
//     }

//     isEmpty(){
//         return this.queue.length === 0
//     }

//     getSize(){
//         return this.queue.length
//     }

//     enqueue(value){
//         this.queue.push(value)
//     }

//     dequeue(){
//         return this.queue.shift()
//     }

//     peek(){
//         return this.queue[0]
//     }

//     display(){
//         console.log(this.queue)
//     }
// }

// const queue=new Queue()

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.enqueue(50)

// queue.display()

// queue.dequeue()

// queue.display()

// console.log(queue.isEmpty())
// console.log(queue.getSize())

// console.log(queue.peek())

//object

// class queue{
//     constructor(){
//         this.item={}
//         this.front=0
//         this.rear=0
//     }

//     isEmpty(){
//         return this.rear === this.front
//     }

//     getSize(){
//         return this.rear - this.front 
//     }

//     enqueue(value){
//         this.item[this.rear]=value
//         this.rear++
//     }

//     dequeue(){
//        delete this.item[this.front]
//        this.front++
//     }

//     peek(){
//         if(this.isEmpty()){
//             console.log('queue is empty')
//             return
//         }
//         console.log(this.item[this.front])
//     }

//     display(){
//         let result=''
//        for(let i in this.item){
//         result += this.item[i]+','
//        }
//        console.log(result)
//     }
// }

// const q=new queue()

// console.log(q.isEmpty())
// console.log(q.getSize())

// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)
// q.enqueue(40)

// q.display()

// q.dequeue()
// q.display()

// q.peek()

//linked list in queue

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class queue{
//     constructor(){
//         this.head=null
//         this.size=0
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     getSize(){
//         return this.size
//     }

//     enqueue(value){
//         const node=new Node(value)

//         if(this.isEmpty()){
//             this.head=node
//         }else{
//             let temp=this.head

//             while(temp.next != null){
//                 temp=temp.next
//             }

//             temp.next=node
//             node.next=null
//         }
//         this.size++
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             console.log("list is empty")
//             return
//         }

//         if(this.size == 1){
//             this.head=null
//         }else{
//             this.head=this.head.next
//         }
//         this.size--
//     }

//     peek(){
//         if(this.isEmpty()){
//             console.log("queue is empty")
//             return
//         }
//         return this.head.value
//     }

//     display(){
//         if(this.isEmpty()){
//             console.log("queue is empty")
//             return
//         }

//         let temp=this.head
//         let list=''

//         while(temp){
//             list+=temp.value+'->'
//             temp=temp.next
//         }
//         list+='null'
//         console.log(list)
//     }
// }


// const q=new queue()

// console.log(q.getSize())
// console.log(q.isEmpty())

// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)
// q.enqueue(40)

// q.display()

// q.dequeue()
// q.display()
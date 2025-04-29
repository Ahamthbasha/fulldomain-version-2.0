// class queue{
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
//         if(this.isEmpty()){
//             return 'it is empty'
//         }
//         let val=this.queue[0]
//         this.queue.shift()
//         return val
//     }

//     display(){
//         if(this.isEmpty()){
//             console.log("queue is empty")
//             return
//         }
//         console.log(this.queue)
//     }

//     peek(){
//         if(this.isEmpty()){
//             console.log("queue is empty")
//             return
//         }
//         console.log(this.queue[0])
//     }

// }

// const q = new queue()

// q.enqueue(20)
// q.enqueue(30)
// q.enqueue(40)
// q.enqueue(50)
// q.enqueue(10)

// q.display()

// console.log(q.dequeue())

// q.display()

// console.log(q.isEmpty())
// console.log(q.getSize())

// q.peek()

// class queue{
//     constructor(){
//         this.queue={}
//         this.front=0
//         this.rear =0
//     }

//     isEmpty(){
//         return this.rear - this.front === 0
//     }

//     getSize(){
//         return this.rear - this.front
//     }

//     enqueue(value){
//         this.queue[this.rear] = value
//         this.rear++
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return ' it is empty'
//         }
//         let val=this.queue[this.front]

//         delete this.queue[this.front]

//         this.front++
//         return val
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'it is empty'
//         }

//         return this.queue[this.front]
//     }

//     display(){

//         if(this.isEmpty()){
//             console.log("it is empty")
//             return
//         }

//         console.log(this.queue)
//     }
// }

// const q = new queue()

// q.enqueue(20)
// q.enqueue(30)
// q.enqueue(40)
// q.enqueue(50)
// q.enqueue(10)

// q.display()

// console.log(q.dequeue())

// q.display()

// console.log(q.isEmpty())
// console.log(q.getSize())

// q.peek()

class Node{
    constructor(value){
        this.value=value
        this.next = null
    }
}

class qll{
    constructor(){
        this.head=null
        this.size=0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    enqueue(value){
        const node=new Node(value)

        if(this.isEmpty()){
            this.head=node
            this.size++
        }
        else{
            let temp=this.head

            while(temp.next){
                temp=temp.next
            }

            temp.next=node
            node.next=null
            this.size++
        }
    }

    dequeue(){
        if(this.isEmpty()){
            return 'queue is empty'
        }
        else if(this.size == 1){
            let val=this.head.value
            this.head=null
            this.size--
            return val
        }
        else{
            let val=this.head.value
            this.head=this.head.next
            this.size--
            return val
        }
    }

    peek(){
        if(this.isEmpty()){
            console.log('queue is empty')
            return
        }
        console.log(this.head.value)
    }

    display(){
        if(this.isEmpty()){
            console.log('queue is empty')
            return 
        }
        else{
            let temp=this.head

            let list=''

            while(temp){
                list+=temp.value+'<-'
                temp=temp.next
            }

            list+='null'

            console.log(list)
        }
    }
}

const q = new qll()

q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)
q.enqueue(50)


q.display()

console.log(q.dequeue())

q.display()

console.log(q.isEmpty())
console.log(q.getSize())

q.peek()
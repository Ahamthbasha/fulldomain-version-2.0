// class stack{
//     constructor(){
//         this.item=[]
//     }

//     isEmpty(){
//         return this.item.length == 0
//     }

//     getSize(){
//         return this.item.length
//     }

//     peek(){
//         if(this.isEmpty()){
//             console.log("stack is empty")
//             return
//         }
//         return this.item[this.item.length-1]
//     }

//     push(value){
//         this.item.push(value)
//     }

//     pop(){
//         if(this.isEmpty()){
//             return 'stack is empty'
//         }
//        return this.item.pop()
//     }

//     display(){
//         console.log(this.item)
//     }
// }
// const s= new stack()

// console.log(s.isEmpty())
// console.log(s.getSize())

// s.push(10)
// s.push(20)
// s.push(30)
// s.push(40)

// console.log(s.peek())

// console.log(s.pop())

// s.display()

// class stack{
//     constructor(){
//         this.item={}
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     getSize(){
//         return this.size
//     }

//     push(value){
//         this.item[this.size] = value

//         this.size++
//     }

//     pop(){
//         if(this.isEmpty()){
//             return 'stack is empty'
//         }

//         let val=this.item[this.size-1]
//         delete this.item[this.size-1]
//         this.size--
//         return val
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'stack is empty'
//         }

//         return this.item[this.size-1]
//     }

//     display(){
//         console.log(this.item)
//     }
// }

// const s= new stack()

// console.log(s.isEmpty())
// console.log(s.getSize())

// s.push(10)
// s.push(20)
// s.push(30)
// s.push(40)

// console.log(s.peek())

// console.log(s.pop())

// s.display()

class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class ssLL{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    push(value){
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

    pop(){
        if(this.isEmpty()){
            return 'stack is empty'
        }
        else if(this.size === 1){
            let val=this.head.value
            this.head = null
            this.size--
            return val
        }
        else{
            let temp=this.head

            while(temp.next.next !=null){
                temp=temp.next
            }
            let val=temp.next.value
            temp.next=null
            this.size--
            return val
        }
    }

    peek(){
        if(this.isEmpty()){
            return 'stack is empty'
        }
        else{
            let temp=this.head

            while(temp.next != null){
                temp=temp.next
            }

            let val=temp.value
            return val
        }
    }

    display(){
        let list=''

        let temp=this.head

        while(temp){
            list+=temp.value+'<-'
            temp=temp.next
        }
        list+='null'

        console.log(list)

    }
}

const s= new ssLL()

console.log(s.isEmpty())
console.log(s.getSize())

s.push(10)
s.push(20)
s.push(30)
s.push(40)

s.display()

console.log(s.pop())

s.display()

console.log(s.peek())

console.log(s.pop())

s.display()

console.log(s.peek())
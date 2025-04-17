// circular convert
// ciruclar find
// sort linked list
// find duplicates
// remove duplicates
// array ll
// ll array
// palindrome


// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class linkedlist{
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

//     prepend(value){
//         const node=new Node(value)

//         if(this.isEmpty()){
//             this.head=node
//         }else{
//             node.next=this.head
//             this.head=node
//         }
//         this.size++
//     }

//     append(value){
//         const node=new Node(value)

//         if(this.isEmpty()){
//             this.head=node
//         }else{
//             let prev=this.head

//             while(prev.next != null){
//                 prev=prev.next
//                 console.log(prev)
//             }

//             prev.next=node
//             node.next=null
//         }
//         this.size++
//     }

//     insert(value,index){
//         if(index < 0 || index > this.size){
//             return 'invalid index'
//         }

//         if(index == 0){
//             this.prepend(value)
//         }
//         else if(index == this.size){
//             this.append(value)
//         }
//         else{
//             const node=new Node(value)
//             let prev=this.head

//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }

//             node.next=prev.next
//             prev.next=node

//             this.size++
//         }
//     }

//     removeFromStart(){
//         if(this.isEmpty()){
//             console.log("nothing to remove")
//         }

//         const value=this.head.value
        
//         if(this.size==1){
//             this.head=null
//             this.size--
//             return value
//         }

//         else{
//             this.head=this.head.next
//             this.size--
//             return value
//         }
//     }

//     removeFromEnd(){
//         if(this.isEmpty()){
//             console.log("nothing to remove")
//         }

//         if(this.size==1){
//             const value=this.head.value
//             this.head=null
//             this.size--
//             return value
//         }else{
//             let temp=this.head

//             while(temp.next.next != null){
//                 temp=temp.next
//             }
//             const value=temp.next.value
//             temp.next=null
//             this.size--
//             return value
//         }
//     }


//     removeIndex(index){
//         if(index < 0 || index > this.size){
//             console.log('invalid index')
//         }
//         if(index === 0){
//             const value=this.head.value
//             this.head=this.head.next
//             this.size--
//             return value
//         }else{
//             let temp=this.head
//             for(let i=0;i<index-1;i++){
//                 temp=temp.next
//             }
//             const removeNode=temp.next
//             temp.next=temp.next.next
//             this.size--
//             console.log(removeNode.value)
//         }
//     }

//     removeValue(value){
//         if(this.isEmpty()){
//             console.log("list is empty")
//         }

//         if(this.head.value == value){
//             this.head=this.head.next
//             this.size--
//             return
//         }else{
//             let temp=this.head

//             while(temp.next && temp.next.value != value){
//                 temp=temp.next
//             }

//             if(temp.next){
//                 temp.next=temp.next.next
//                 this.size--
//                 return 
//             }

//             console.log("no value matching")
//         }
//     }

//     search(value){
//         if(this.isEmpty()){
//             console.log("list is empty")
//         }

//         if(this.head.value==value){
//             return 0
//         }else{
//             let temp=this.head
//             let i=0
//             while(temp != null){
//                 if(temp.value==value){
//                     return i
//                 }
//                 i++
//                 temp=temp.next
//             }
//             return 'no matches found'
//         }
//     }

//     reverse(){
//         if(this.isEmpty()){
//             console.log("list is empty")
//         }

//         let prev=null
//         let cur=this.head
//         let next

//         while(cur){
//             next=cur.next
//             cur.next=prev
//             prev=cur
//             cur=next
//         }
//         this.head=prev
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log('list is empty')
//         }else{
//             let prev=this.head
//             let list=''
//             while(prev !=null){
//                 list+=prev.value+'->'
//                 prev=prev.next
//             }
//             list+='null'
//             console.log(list)
//         }
//     }
// }

// const list=new linkedlist()

// console.log(list.isEmpty())
// console.log(list.getSize())

// list.prepend(10)
// list.append(20)
// list.append(30)
// list.append(40)
// list.append(50)
// list.append(60)
// list.append(70)

// list.print()

// console.log(list.getSize())
// // list.insert(30,1)
// // list.print()
// // console.log("removed first",list.removeFromStart())
// // list.print()
// // console.log("removed last",list.removeFromEnd())
// // list.print()
// // console.log("removed first",list.removeFromStart())
// // list.print()

// // list.removeIndex(1)
// // list.print()

// list.removeValue(50)
// list.print()
// // list.removeValue(70)
// // list.print()

// console.log(list.search(100))

//tail implementation

class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class linkedlist{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
            this.size++
        }else{
            node.next=this.head
            this.head=node
            this.size++
        }
    }

    append(value){
        const node=new Node(value)

        if(this.isEmpty()){
            this.head=node
            this.tail=node
            this.size++
        }else{

            this.tail.next=node
            this.tail=node
            node.next=null
            this.size++
        }
    }

    removeFromStart(){
        if(this.size==1){
            this.tail=null
            this.head=null
        }else{
            this.head=this.head.next
        }
        this.size--
    }

    removeFromEnd(){
        if(this.size==1){
            this.head=null
            this.tail=null
        }else{
            let temp=this.head

            while(temp.next.next != null){
                temp=temp.next
            }

            temp.next=null
            this.tail=temp
        }
        this.size--
    }

    reverse(){
        let prev=null
        let cur=this.head
        let next

        while(cur){
            next=cur.next
            cur.next=prev
            prev=cur
            cur=next
        }

        this.head=this.tail
        this.tail=prev
    }

    print(){
        if(this.isEmpty()){
            console.log("list is empty")
        }else{
            let temp=this.head
            let list=''
            while(temp != null){
                list+=temp.value+'->'
                temp=temp.next
            }
            list+='null'
            console.log(list)
        }
    }
}

const list=new linkedlist()

list.prepend(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.append(60)
list.append(70)

list.print()

list.removeFromStart()
list.print()

list.reverse()
list.print()

list.removeFromEnd()
list.print()
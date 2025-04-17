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
// list.print()

// console.log(list.getSize())
// list.insert(30,1)
// list.print()
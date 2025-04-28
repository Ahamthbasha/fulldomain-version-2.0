// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class ll{
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
//         }
//         else{
//             let temp=this.head

//             while(temp.next !=null){
//                 temp=temp.next
//             }

//             temp.next=node
//             node.next=null
//         }

//         this.size++
//     }

//     removeFromStart(){
//         if(this.isEmpty()){
//             return 'there is nothing to remove'
//         }
//         else if(this.size === 1){
//             let value=this.head.value
//             this.head=null
//             this.size--
//             return value
//         }
//         else{
//             let val=this.head.value
//             this.head=this.head.next
//             this.size--
//             return val
//         }
//     }

//     removeFromEnd(){
//         if(this.isEmpty()){
//             return 'there is nothing to remove'
//         }
//         else if(this.size === 1){
//             let val=this.head.value
//             this.head=null
//             this.size--
//             return val
//         }
//         else{
//             let temp=this.head

//             while(temp.next.next != null){
//                 temp=temp.next
//             }

//             let val=temp.next.value
//             temp.next=null
//             this.size--
//             return val
//         }
//     }

//     removeIndex(index){
//         if(this.isEmpty() || index < 0 || index > this.size){
//             return 'list is empty or index value should be greater than zero'
//         }
//         else if(index===0){
//             return this.removeFromStart()
//         }
//         else if(this.size-1 === index){
//             return this.removeFromEnd()
//         }
//         else{
//             let temp=this.head

//             for(let i=0;i<index-1;i++){
//                 temp=temp.next
//             }
//             let val=temp.next.value
//             temp.next=temp.next.next
//             this.size--
//             return val
//         }
//     }

//     removeByValue(value){
//         if(this.isEmpty()){
//             return 'list is empty'
//         }
//         else if(this.head.value===value){
//             let val=this.head.value
//             this.head=this.head.next
//             this.size--
//             return val
//         }
//         else if(this.size===1 && this.head.value === value){
//                 let val=this.head.value
//                 this.head=null
//                 this.size--
//                 return val
//         }
//         else{
//             let temp=this.head
            
//             while(temp.next != null && temp.next.value != value){
//                 temp=temp.next
//             }

//             if(temp.next === null){
//                 return "value is not found"
//             }
//             else{
//                 let val=temp.next.value
//                 temp.next=temp.next.next
//                 this.size--
//                 return val
//             }
//         }
//     }

//     reverse(){
//         let prev=null
//         let cur=this.head

//         while(cur){
//             let next=cur.next
//             cur.next=prev
//             prev=cur
//             cur=next
//         }

//         this.head=prev
//     }

//     revRec(){
//         this.head=this.revRecursion(this.head)
//     }

//     revRecursion(cur){
//         if(cur == null || cur.next == null){
//             return cur
//         }

//         let newHead=this.revRecursion(cur.next)

//         cur.next.next=cur
//         cur.next=null

//         return newHead
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log("linked list is empty")
//             return
//         }
//         else{
//             let list=''
//             let temp=this.head
//             while(temp){
//                 list+=temp.value+'->'
//                 temp=temp.next
//             }
//             list+='null'
//             console.log(list)
//             return
//         }
//     }

//     insert(value,index){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//             this.size++
//         }
//         else if(index === 0){
//             this.prepend(value)
//         }
//         else if(index < 0 || index > this.size){
//             return "invalid index"
//         }
//         else{
//             let temp=this.head

//             for(let i=0;i<index-1;i++){
//                 temp=temp.next
//             }

//             let next=temp.next
//             temp.next=node
//             node.next=next
//             this.size++
//         }
//     }

//     MidValueDelete(){
//         let middleIndex=Math.floor((this.size)/2)
//         return this.removeIndex(middleIndex)
//     }

//     findMiddle(){
//         let slow=this.head
//         let fast=this.head

//         while(fast != null && fast.next !=null){
//             slow=slow.next
//             fast=fast.next.next
//         }

//         return slow
//     }


//     reverseSecondHalf(index){
//         let prev=null
//         let cur=index

//         while(cur){
//             let next=cur.next
//             cur.next=prev
//             prev=cur
//             cur=next
//         }
//         return prev
//     }

//     isPalindrome(){
//         if(this.head === null || this.head.next === null){
//             return true
//         }

//         let middle=this.findMiddle()

//         let secondHalf=this.reverseSecondHalf(middle)
//         let firstHalf=this.head
//         let reveresedSecondHalf=secondHalf
//         while(reveresedSecondHalf){
//             if(firstHalf.value != reveresedSecondHalf.value){
//                 return false
//             }

//             firstHalf=firstHalf.next
//             reveresedSecondHalf=reveresedSecondHalf.next
//         }

//         return true
//     }

//     toArray(){
//         let temp=this.head
//         let arr=[]

//         while(temp){
//             arr.push(temp.value)
//             temp=temp.next
//         }

//         return arr
//     }

//     fromArrayToll(arr){
//         for(let i=0;i<arr.length;i++){
//             this.append(arr[i])
//         }
//     }

//     findDuplicates(){
//         let temp=this.head

//         let set=new Set()
//         let duplicates=[]

//         while(temp){
//             if(set.has(temp.value)){
//                 duplicates.push(temp.value)
//             }else{
//                 set.add(temp.value)
//             }
//             temp=temp.next
//         }

//         return duplicates
//     }

//     removeDuplicates(){
//         let temp=this.head
//         let set=new Set()
//         let prev=null
//         while(temp){
//             if(set.has(temp.value)){
//             prev.next=temp.next
//             this.size--
//             }else{
//                 set.add(temp.value)
//                 prev=temp
//             }
//             temp=temp.next
//         }
//     }

//     sortll(){
//         if(!this.head || !this.head.next){
//             return
//         }

//         let swapped
        
//         do{
//             swapped=false
//             let temp=this.head

//             while(temp && temp.next){
//                 if(temp.value > temp.next.value){
//                     let tempo=temp.value
//                     temp.value=temp.next.value
//                     temp.next.value=tempo
//                     swapped=true
//                 }
//                 temp=temp.next
//             }
//         }while(swapped)
//     }

//     makeCircular(){
//         let temp=this.head

//         while(temp.next){
//             temp=temp.next
//         }

//         temp.next=this.head
//     }

//     checkCircular(){
//         let slow=this.head
//         let fast=this.head

//         while(fast && fast.next){
//             slow=slow.next
//             fast=fast.next.next

//             if(slow === fast){
//                 return true
//             }
//         }
//         return false
//     }

//    breakCycle(){
//     let slow=this.head
//     let fast=this.head

//     while(fast && fast.next){
//         slow=slow.next
//         fast=fast.next.next

//         if(slow == fast){
//             slow = this.head
// //find start of the cycle
//             while(slow != fast){
//                 slow=slow.next
//                 fast=fast.next
//             }

//             let cycleStart=slow

//             let temp=cycleStart
// //find last node of the cycle
//             while(temp.next!=cycleStart){
//                 temp=temp.next
//             }

//             temp.next=null
//             return 'cycle removed'
//         }
//     }
//    }

// }

// const linked=new ll()

// console.log(linked.isEmpty())
// console.log(linked.getSize())

// linked.print()

// linked.prepend(30)
// linked.prepend(20)
// linked.prepend(10)

// linked.append(40)
// linked.append(50)

// linked.append(40)
// linked.append(50)
// linked.append(50)
// linked.append(40)

// linked.print()

// linked.removeFromStart()

// linked.print()

// console.log(linked.removeFromEnd())

// linked.print()

// console.log(linked.removeIndex(-1))

// linked.print()

// console.log(linked.removeByValue(400))

// linked.print()

// linked.reverse()

// linked.print()

// linked.revRec()

// linked.print()

// linked.insert(70,5)

// linked.print()

// console.log(linked.MidValueDelete())

// linked.print()

// console.log(linked.isPalindrome())

// console.log(linked.toArray())

// linked.fromArrayToll([10,20,30,40,40])

// console.log(linked.findDuplicates())

// linked.append(10);
// linked.append(20);
// linked.append(30);
// linked.append(20);
// linked.append(40);
// linked.append(10);

// console.log("Before removing duplicates:");
// linked.print();

// linked.removeDuplicates();

// console.log("After removing duplicates:");
// linked.print();

// linked.sortll()

// linked.print()

// linked.makeCircular();

// console.log(linked.checkCircular())

// console.log(linked.breakCycle())
// console.log(linked.checkCircular())

class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class ll{
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

    prepend(value){
        const node = new Node(value)

        if(this.isEmpty()){
            this.head=node
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
            this.size++
        }else{
            let temp=this.head
            while(temp.next != null){
                temp=temp.next
            }
            temp.next=node
            node.next=null
            this.size++
        }
    }

    insert(value,index){
        const node=new Node(value)

        if(index < 0 || index > this.size){
            return 'index is not valid'
        }
        else if(this.isEmpty()){
            this.head=node
            this.size++
        }
        else if(index == 0){
            this.prepend(value)
        }
        else if(this.size-1 === index){
            this.append(value)
        }
        else{
            let temp=this.head

            for(let i=0;i<index-1;i++){
                temp=temp.next
            }

            let tempo=temp.next
            temp.next=node
            node.next=tempo

            this.size++
        }
    }

    search(value){
        if(this.isEmpty()){
            return 'list is empty'
        }
        else if(this.head.value == value){
            return 0
        }
        else{
            let temp = this.head
            let i=0
            
            while(temp){
                if(temp.value == value){
                    return i
                }
                temp=temp.next
                i++
            }

            if(temp.next === null){
                return 'value is not found'
            }
        }
    }

    removeFromStart(){
        if(this.isEmpty()){
            return 'list is empty'
        }
        else if(this.size==1){
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

    removeFromEnd(){
        if(this.isEmpty()){
            return 'list is empty'
        }
        else if(this.size == 1){
            const val=this.head.value
            this.head=null
            this.size--
            return val
        }
        else{
            let temp=this.head

            while(temp.next.next != null){
                temp=temp.next
            }

            let val=temp.val

            temp.next=null
            this.size--
            return val
        }
    }

    print(){
        let list=''
        let temp=this.head

        while(temp){
            list+=temp.value+'->'
            temp=temp.next
        }
        list+='null'

        console.log(list)
    }

    removeIndex(index){
        if(this.isEmpty() || index < 0 || index > this.size){
            return 'list is empty and index value must be valid'
        }
        else if(index == 0){
            const val=this.head.value
            this.head=this.head.next
            this.size--
            return val
        }
        else{
            let temp=this.head

            for(let i=0;i<index-1;i++){
                temp=temp.next
            }

            temp.next=temp.next.next

            this.size--
        }
    }

    removeByValue(value){
        if(this.isEmpty()){
            return 'list is empty'
        }
        else if(this.head.value == value){
            let val=this.head.value
            this.head=this.head.next
            this.size--
            return val
        }
        else{
            let temp=this.head

            while(temp.next != null){
                if(temp.next.value === value){
                temp.next=temp.next.next
                this.size--
                }
                temp=temp.next
            }

            if(temp.next == null){
                return 'value is not found'
            }
        }
    }
}


const linked=new ll()

console.log(linked.isEmpty())
console.log(linked.getSize())

linked.print()

linked.prepend(30)
linked.prepend(20)
linked.prepend(10)

linked.append(40)
linked.append(50)

console.log(linked.getSize())

// linked.append(40)
// linked.append(50)
// linked.append(50)
// linked.append(40)

linked.print()

// console.log(linked.search(50))

// linked.removeFromStart()

// linked.print()

// linked.removeFromEnd()

// linked.print()

// console.log(linked.removeIndex(1))

// linked.print()

console.log(linked.removeByValue(50))

linked.print()

// linked.reverse()

// linked.print()

// linked.revRec()

// linked.print()

// linked.insert(70,5)

// linked.print()
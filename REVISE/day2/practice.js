// function bubbleSort(arr){
//     let swapped

//     do{
//         swapped=false
//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i] > arr[i+1]){
//                 let temp=arr[i]
//                 arr[i]=arr[i+1]
//                 arr[i+1]=temp
//                 swapped = true
//             }
//         }
//     }while(swapped)
//         return arr
// }

// console.log(bubbleSort([42, 7, 13, 29, 3, 18, 5, 11]))

// function insertionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let cur=arr[i]
//         let j=i-1

//         while(j>=0 && arr[j] > cur){
//             arr[j+1] = arr[j]
//             j--
//         }

//         arr[j+1] =cur
//     }
//     return arr
// }

// console.log(insertionSort( [42, 7, 13, 29, 3, 18, 5, 11]))

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

// console.log(selectionSort( [42, 7, 13, 29, 3, 18, 5, 11]))

// function quickSort(arr){
//     if(arr.length < 2){
//         return arr
//     }

//     let pivot=arr[arr.length-1]
//     let leftArr=[]
//     let rightArr=[]

//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i] < pivot){
//             leftArr.push(arr[i])
//         }else{
//             rightArr.push(arr[i])
//         }
//     }

//     return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
// }

// console.log(quickSort( [42, 7, 13, 29, 3, 18, 5, 11]))

// function mergeSort(arr){
//     if(arr.length < 2){
//         return arr
//     }

//     let mid=Math.floor(arr.length/2)
//     let leftArr=arr.slice(0,mid)
//     let rightArr=arr.slice(mid)

//     return merge(mergeSort(leftArr),mergeSort(rightArr))
// }

// function merge(leftArr,rightArr){
//     let sortedArr=[]
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0] < rightArr[0]){
//             sortedArr.push(leftArr.shift())
//         }
//         else{
//             sortedArr.push(rightArr.shift())
//         }
//     }
//     return sortedArr.concat(leftArr,rightArr)
// }

// console.log(mergeSort( [42, 7, 13, 29, 3, 18, 5, 11]))

// class stack{
//     constructor(){
//         this.item = []
//     }

//     isEmpty(){
//         return this.item.length == 0
//     }

//     getSize(){
//         return this.item.length
//     }

//     push(value){
//         this.item.push(value)
//     }

//     pop(){
//         if(this.isEmpty()){
//             return null
//         }

//         return this.item.pop()
//     }

//     peek(){
//         if(this.isEmpty()){
//             return null
//         }

//         return this.item[this.item.length-1]
//     }

//     display(){
//         console.log(this.item)
//     }

//     revStr(str){
//         const s=new stack()

//         for(let i=0;i<str.length;i++){
//             s.push(str[i])
//         }

//         let reverseStr=''

//         while(!s.isEmpty()){
//             reverseStr+=s.pop()
//         }

//         return reverseStr
//     }

//     revArr(arr){
//         const s=new stack()

//         for(let i=0;i<arr.length;i++){
//             s.push(arr[i])
//         }

//         let result = []

//         while(!s.isEmpty()){
//             result.push(s.pop())
//         }

//         return result
//     }
// }

// const s = new stack()

// // Test 1: Reverse a string
// console.log("Reverse String Tests:")
// console.log(s.revStr("hello"))              // Expected: "olleh"
// console.log(s.revStr("OpenAI"))             // Expected: "IAnepO"
// console.log(s.revStr(""))                   // Expected: ""

// // Test 2: Reverse an array
// console.log("\nReverse Array Tests:")
// console.log(s.revArr([1, 2, 3, 4, 5]))       // Expected: [5, 4, 3, 2, 1]
// console.log(s.revArr(["a", "b", "c"]))      // Expected: ["c", "b", "a"]
// console.log(s.revArr([]))                   // Expected: []

// // Test 3: Use display() to see stack contents
// console.log("\nPush and Display Tests:")
// s.push(10)
// s.push(20)
// s.push(30)
// s.display()                                 // Expected: [10, 20, 30]

// console.log("\nPop and Peek Tests:")
// console.log(s.pop())                        // Expected: 30
// console.log(s.peek())                       // Expected: 20
// s.display()                                 // Expected: [10, 20]


// class stack{
//     constructor(){
//         this.item={}
//         this.size=0
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
//             return null
//         }

//         let val=this.item[this.size-1]

//         delete this.item[this.size-1]

//         this.size--

//         return val
//     }

//     peek(){
//         if(this.isEmpty()){
//             return null
//         }

//         return this.item[this.size-1]
//     }

//     display(){
//         console.log(this.item)
//     }
// }

// const s = new stack()

// console.log("Initial Checks:")
// console.log(s.isEmpty())         // Expected: true
// console.log(s.getSize())         // Expected: 0
// s.display()                      // Expected: {}

// console.log("\nPushing values:")
// s.push(10)
// s.push(20)
// s.push(30)
// console.log(s.getSize())         // Expected: 3
// s.display()                      // Expected: {0: 10, 1: 20, 2: 30}

// console.log("\nPeeking top value:")
// console.log(s.peek())            // Expected: 30

// console.log("\nPopping values:")
// console.log(s.pop())             // Expected: 30
// console.log(s.pop())             // Expected: 20
// s.display()                      // Expected: {0: 10}

// console.log("\nPeeking again:")
// console.log(s.peek())            // Expected: 10

// console.log("\nFinal Pops:")
// console.log(s.pop())             // Expected: 10
// console.log(s.pop())             // Expected: null (empty stack)
// console.log(s.isEmpty())         // Expected: true
// s.display()                      // Expected: {}


// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class sll{
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

//     push(value){
//         const node=new Node(value)

//         if(this.isEmpty()){
//             this.head=node
//             this.size++
//         }
//         else{
//             let temp=this.head

//             while(temp.next != null){
//                 temp=temp.next
//             }

//             temp.next=node
//             node.next=null

//             this.size++
//         }
//     }

//     pop(){
//         if(this.isEmpty()){
//             return 'stack is empty'
//         }
//         else if(this.size == 1){
//             let val=this.head.value
//             this.head=null
//             this.size--
//             return val
//         }else{
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

//     peek(){
//         if(this.isEmpty()){
//             return 'stack is empty'
//         }

//         let temp=this.head

//         while(temp.next != null){
//             temp=temp.next
//         }

//         let val=temp.value
//         return val
//     }

//     display(){
//         if(this.isEmpty()){
//             return null
//         }

//         let temp=this.head
//         let list=''
//         while(temp){
//             list+=temp.value+'<-'
//             temp=temp.next
//         }

//         list+='null'

//         console.log(list)
//     }
// }

// const stack = new sll()

// console.log("Is Empty:", stack.isEmpty())  // true
// console.log("Size:", stack.getSize())      // 0

// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.display()                            // 10 -> 20 -> 30

// console.log("Peek:", stack.peek())         // 30

// console.log("Pop:", stack.pop())           // 30
// stack.display()                            // 10 -> 20

// console.log("Pop:", stack.pop())           // 20
// console.log("Pop:", stack.pop())           // 10
// console.log("Pop:", stack.pop())           // 'stack is empty'


// class queue{
//     constructor(){
//         this.item=[]
//     }

//     isEmpty(){
//         return this.item.length === 0
//     }
    
//     getSize(){
//         return this.item.length
//     }

//     enqueue(value){
//         this.item.push(value)
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return null
//         }

//         return this.item.shift()
//     }

//     peek(){
//         if(this.isEmpty()){
//             return null
//         }

//         return this.item[0]
//     }

//     display(){
//         console.log(this.item)
//     }
// }

// const q = new queue()

// console.log("Is Empty?", q.isEmpty())         // true
// console.log("Size:", q.getSize())             // 0

// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)
// q.enqueue(40)

// q.display()                                   // [10, 20, 30, 40]

// console.log("Peek:", q.peek())                // 10
// console.log("Dequeue:", q.dequeue())          // 10
// q.display()                                   // [20, 30, 40]

// console.log("Dequeue:", q.dequeue())          // 20
// console.log("Peek:", q.peek())                // 30
// console.log("Size:", q.getSize())             // 2

// console.log("Dequeue:", q.dequeue())          // 30
// console.log("Dequeue:", q.dequeue())          // 40
// console.log("Dequeue:", q.dequeue())          // null
// console.log("Is Empty?", q.isEmpty())         // true
// q.display()                                   // []

// class queue{
//     constructor(){
//         this.item={}
//         this.head=0
//         this.tail=0
//     }


//     isEmpty(){
//         return this.tail - this.head === 0
//     }

//     getSize(){
//         return this.tail - this.head
//     }

//     enqueu(value){
//         this.item[this.tail] = value
//         this.tail++
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return null
//         }

//         let val=this.item[this.head]

//         delete this.item[this.head]

//         this.head++

//         return val
//     }

//     peek(){
//         if(this.isEmpty()){
//             return null
//         }

//         return this.item[this.head]
//     }

//     display(){
//         console.log(this.item)
//     }
// }


// const q = new queue()

// console.log("Is Empty?", q.isEmpty())        // true
// console.log("Size:", q.getSize())            // 0

// q.enqueu(100)
// q.enqueu(200)
// q.enqueu(300)

// q.display()                                  // { '0': 100, '1': 200, '2': 300 }

// console.log("Peek:", q.peek())               // 100
// console.log("Dequeue:", q.dequeue())         // 100
// q.display()                                  // { '1': 200, '2': 300 }

// console.log("Peek:", q.peek())               // 200
// console.log("Size:", q.getSize())            // 2

// console.log("Dequeue:", q.dequeue())         // 200
// console.log("Dequeue:", q.dequeue())         // 300
// console.log("Dequeue:", q.dequeue())         // null
// console.log("Is Empty?", q.isEmpty())        // true

// q.display()                                  // {}

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class qll{
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
//             this.size++
//         }
//         else{
//             let temp=this.head

//             while(temp.next != null){
//                 temp=temp.next
//             }

//             temp.next=node
//             node.next=null
//             this.size++
//         }
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return null
//         }
//         else if(this.size == 1){
//             let val=this.head.value
//             this.head=null
//             this.size--
//             return val
//         }
//         else{
//             let val=this.head.value

//             this.head=this.head.next

//             this.size--

//             return val
//         }
//     }


//     peek(){
//         if(this.isEmpty()){
//             return null
//         }
//         return this.head.value
//     }

//     display(){
//         if(this.isEmpty()){
//             return null
//         }
//         else{
//             let temp=this.head
//             let list=''
//             while(temp){
//                 list+=temp.value+'->'
//                 temp=temp.next
//             }
//             list+='null'

//             return list
//         }
//     }
// }

// const q = new qll()

// console.log("Is Empty?", q.isEmpty())       // true
// console.log("Size:", q.getSize())           // 0
// console.log("Peek:", q.peek())              // null
// console.log("Display:", q.display())        // null

// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)

// console.log("Is Empty?", q.isEmpty())       // false
// console.log("Size:", q.getSize())           // 3
// console.log("Peek:", q.peek())              // 10
// console.log("Display:", q.display())        // 10 -> 20 -> 30 -> null

// console.log("Dequeue:", q.dequeue())        // 10
// console.log("Peek:", q.peek())              // 20
// console.log("Display:", q.display())        // 20 -> 30 -> null

// console.log("Dequeue:", q.dequeue())        // 20
// console.log("Dequeue:", q.dequeue())        // 30
// console.log("Dequeue:", q.dequeue())        // null (empty)
// console.log("Is Empty?", q.isEmpty())       // true
// console.log("Display:", q.display())        // null


//hashtable

// class table{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }

//     hash(key){
//         let total=0

//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }

//         return total % this.size
//     }

//     set(key,value){
//         let index = this.hash(key)
//         this.table[index] = value
//     }

//     get(key){
//         let index = this.hash(key)
//         return this.table[index] || 'no found'
//     }

//     remove(key){
//         let index = this.hash(key)
//         let val = this.table[index]
//         this.table[index] = undefined
//         return val
//     }

//     print(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }

// const ht = new table(20)

// // Insert key-value pairs
// ht.set("name", "Alice")
// ht.set("age", 25)
// ht.set("city", "New York")

// // Retrieve values
// console.log("name:", ht.get("name"))      // Alice
// console.log("age:", ht.get("age"))        // 25
// console.log("city:", ht.get("city"))      // New York
// console.log("country:", ht.get("country"))// no found

// // Remove a key
// console.log("Remove age:", ht.remove("age"))  // 25
// console.log("age after remove:", ht.get("age")) // no found

// // Display all entries
// ht.print()


//handle collision in hashtable

class table{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }

    hash(key){
        let total=0

        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }

        return total % this.size
    }

    set(key,value){
        let index = this.hash(key)

        let bucket = this.table[index]

        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            let sameElement = bucket.find((item) => item[0] == key)

            if(sameElement){
                sameElement[1] = value
            }else {
                bucket.push([key,value])
            }
        }
    }

    get(key){
        let index = this.hash(key)

        let bucket=this.table[index]

        if(bucket){
            let element=bucket.find((item)=>item[0]==key)

            if(element){
                return element[1]
            }
        }else{
            return null
        }
    }

    remove(key){
        let index=this.hash(key)

        let bucket=this.table[index]

        if(bucket){
            let elementIndex=bucket.findIndex((item)=>item[0]==key)

            if(elementIndex != -1){
                return bucket.splice(elementIndex,1)
            }
        }else{
            return null
        }
    }

    print(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }

    findDuplicates(){
        let valMap={}

        for(let i=0;i<this.table.length;i++){
            let bucket=this.table[i]
            if(bucket){
                for(let j=0;j<bucket.length;j++){
                    const [key,value] = bucket[j]
                    if(valMap[value]){
                        valMap[value]++
                    }else{
                        valMap[value]=1
                    }
                }
            }
        }

        let duplicates=[]
        for(let key in valMap){
            if(valMap[key] > 1){
                duplicates.push(key)
            }
        }

        return duplicates
    }

    removeDuplicates(){
        let valMap={}

        for(let i=0;i<this.table.length;i++){
            let bucket=this.table[i]

            if(bucket){
                const newBucket=[]
                for(let j=0;j<bucket.length;j++){
                    const [key,value] = bucket[j]
                    if(!valMap[value]){
                        valMap[value] = true
                        newBucket.push([key,value])
                    }
                }

                this.table[i] = newBucket . length > 0 ? newBucket : undefined
            }
        }
    }

    findDuplicatesFromInput(input){
        let value=Array.isArray(input) ? input : input.split('')

        for(let i=0;i<value.length;i++){
            let val=value[i].toString()
            let count = this.get(val) || 0
            this.set(val,count+1)
        }

        let duplicates=[]
        let valMap={}

        for(let i=0;i<this.table.length;i++){
            let bucket=this.table[i]

            if(bucket){
                for(let j=0;j<bucket.length;j++){
                    const [key,value] = bucket[j]
                    if(value > 1){
                        duplicates.push(key)
                    }
                }
            }
        }
        return Array.isArray(input) ? duplicates : duplicates.join('')
    }

    removeDuplicatesFromInput(input){
        let value=Array.isArray(input) ? input : input.split('')
        let unique=[]
        for(let i=0;i<value.length;i++){
            let val=value[i]
            if(!this.get(val)){
                this.set(val,true)
                unique.push(val)
            }
        }
        return unique
    }

    nthMostFrequency(arr,n){
        let value=Array.isArray(arr) ? arr : arr.split('')
        
        for(let i=0;i<value.length;i++){
            let val=value[i].toString()
            let count=this.get(val) || 0
            this.set(val,count+1)
        }

        let result=[]

        for(let i=0;i<this.table.length;i++){
            let bucket=this.table[i]
            if(bucket){
                for(let j=0;j<bucket.length;j++){
                    // const [key,value] = bucket[j]

                    result.push(bucket[j])
                }
            }    
        }

        result.sort((a,b)=>b[1]-a[1])
        console.log(result)
        return result[n-1] || null
    }
}

// const ht = new table(10)

// // Insert key-value pairs
// ht.set("name", "Alice")
// ht.set("age", 25)
// ht.set("city", "New York")

// console.log("Get name:", ht.get("name"))    // Alice
// console.log("Get age:", ht.get("age"))      // 25
// console.log("Get city:", ht.get("city"))    // New York

// // Update value
// ht.set("city", "Los Angeles")
// console.log("Updated city:", ht.get("city"))  // Los Angeles

// // Handle collisions
// ht.set("mane", "Alice")  // Same hash as "name" likely if hash function results in collision
// console.log("Get mane:", ht.get("mane"))      // Bob

// // Remove key
// console.log("Remove age:", ht.remove("age"))  // [ [ 'age', 25 ] ]
// console.log("Get age after removal:", ht.get("age"))  // null

// // Remove non-existing key
// console.log("Remove salary:", ht.remove("salary")) // null

// // Print all entries
// ht.print()


// console.log(ht.findDuplicates())

// ht.removeDuplicates()

// ht.print()

// const ht2=new table(50)

// // console.log(ht2.findDuplicatesFromInput([1,2,3,4,4,1,5,10]))

// // console.log(ht2.removeDuplicatesFromInput([1,2,3,4,4,1,5,10]))
// // console.log(ht2.removeDuplicatesFromInput('asdfasdfe'))

// console.log(ht2.nthMostFrequency([1,2,3,4,4,1,5,10],3))
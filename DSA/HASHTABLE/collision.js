// class hashtable{
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
//         let index=this.hash(key)

//         let bucket=this.table[index]

//         if(!bucket){
//             this.table[index] = [[key,value]]
//         }else{
//             let sameKey=bucket.find((item)=>item[0]==key)

//             if(sameKey){
//                 sameKey[1]=value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }

//     get(key){
//         let index=this.hash(key)
//         let bucket=this.table[index]
//         if(bucket){
//             let value=bucket.find((item)=>item[0]==key)
//             return value ? value[1] : undefined
//         }
//             return undefined
//     }

//     remove(key){
//         let index=this.hash(key)
//         let bucket=this.table[index]

//         if(bucket){
//             let elementIndex=bucket.findIndex((item)=>item[0]==key)
//             if(elementIndex != -1){
//                return bucket.splice(elementIndex,1)
//             }
//         }
//         return 'no match'
//     }

//     findDuplicates(){
//         let valueMap={}
//         let duplicates=[]

//         for(let i=0;i<this.table.length;i++){
//             let bucket=this.table[i]
//             if(bucket){
//                 for(let j=0;j<bucket.length;j++){
//                     const [key,value] = bucket[j]

//                     if(valueMap[value]){
//                         valueMap[value]++
//                     }else{
//                         valueMap[value]=1
//                     }
//                 }
//             }
//         }

//         console.log(valueMap)

//         for(let val in valueMap){
//             if(valueMap[val] > 1){
//                 duplicates.push(val)
//             }
//         }
//         return duplicates
//     }

//     removeDuplicates(){
//         let seen={}

//         for(let i=0;i<this.table.length;i++){
//             let bucket=this.table[i]
//             if(bucket){
//                 let newBucket=[]
//                 for(let j=0;j<bucket.length;j++){
//                     const [key,value]= bucket[j]
//                     if(!seen[value]){
//                         seen[value]=true
//                         newBucket.push(bucket[j])
//                     }
//                 }
//                this.table[i] = newBucket.length > 0 ? newBucket : undefined
//             }
//         }
//     }

//     findDuplicatesFromInput(input){
//         let value=Array.isArray(input) ? input : input.split('')

//         for(let i=0;i<value.length;i++){
//             let val=value[i].toString()
//             let count=this.get(val) || 0
//             this.set(val,count+1)
//         }

//         let duplicates=[]

//         for(let i=0;i<this.table.length;i++){
//             let bucket=this.table[i]
//             if(bucket){
//                 for(let j=0;j<bucket.length;j++){
//                     const [key,value] = bucket[j]

//                     if(value > 1){
//                         duplicates.push(key)
//                     }
//                 }
//             }
//         }

//         return Array.isArray(input) ? duplicates : duplicates.join('')
//     }

//     removeDuplicatesFromInput(input){
//         let value=Array.isArray(input) ? input : input.split('')

//         let unique=[]
//         for(let i=0;i<value.length;i++){
//             let val=value[i]
//             if(!this.get(val)){
//                 this.set(val,true)
//                 unique.push(val)
//             }
//         }

//         return unique
//     }

//     nthMostFrequency(input,n){
//         let value=Array.isArray(input) ? input : input.split('')

//         for(let i=0;i<value.length;i++){
//             let val=value[i].toString()
//             let count=this.get(val) || 0
//             this.set(val,count+1)
//         }

//         let result=[]

//         for(let i=0;i<this.table.length;i++){
//             let bucket=this.table[i]
//             if(bucket){
//                 for(let j=0;j<bucket.length;j++){
//                     result.push(bucket[j])
//                 }
//             }
//         }

//         result.sort((a,b)=>b[1]-a[1])

//         return result[n-1] || null
//     }

//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }

// // const table1=new hashtable(50)
// // table1.set("name","ahamathbasha")
// // table1.set("mane","picture abhi baakhi hai")
// // table1.set("name","shahrukhkahan")
// // table1.set("movie","wake up sid")
// // table1.set("hero", "wake up sid");
// // table1.display()

// // console.log(table1.get("name"))
// // table1.display()

// // console.log(table1.remove("name"))
// // table1.display()

// // console.log("Duplicates:", table1.findDuplicates());

// // table1.removeDuplicates()
// // console.log("After removing duplicates:");
// // table1.display()

// const table2=new hashtable(50)
// // console.log(table2.findDuplicatesFromInput([1,2,2,31,1,5,5,6]))

// // console.log(table2.removeDuplicatesFromInput([1,2,2,31,1,5,5,6]))

// console.log(table2.nthMostFrequency([1,1,1,22,22,22,4,4,3,4,4], 1));
// // Might return: [ 'b', 2 ]


class hashtable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total =0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total
    }

    set(key,value){
        let index = this.hash(key)

        let bucket = this.table[index]

        if(!bucket){
            this.table[index] = [[key,value]]
        }
        else{
            let sameElement = bucket.find((item)=>item[0]==key)

            if(sameElement){
                sameElement[1]=value
            }
            else{
                bucket.push([key,value])
            }
        }
    }

    get(key){
        let index = this.hash(key)

        let bucket = this.table[index]

        if(bucket){
            let sameElement = bucket.find((item)=>item[0]== key)

            if(sameElement){
                return sameElement[1]
            }
            else{
                return 'no matching key'
            }
        }
    }

    remove(key){
        let index = this.hash(key)

        let bucket = this.table[index]

        if(bucket){
            let sameElementIndex = bucket.findIndex((item)=>item[0]==key)

            if(sameElementIndex != -1){
                return bucket.splice(sameElementIndex,1)
            }
        }

        return ' no keys'
    }

    print(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }

    findDuplicates(){
        let valMap = {}

        for(let i=0;i<this.table.length;i++){
            let bucket = this.table[i]

            if(bucket){
                for(let j=0;j<bucket.length;j++){
                    let [key,value] = bucket[j]
                    if(valMap[value]){
                        valMap[value]++
                    }else{
                        valMap[value] = 1
                    }
                }
            }
        }

        let duplicates = []

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
            let bucket = this.table[i]

            if(bucket){
                let newBucket = []

                for(let j=0;j<bucket.length;j++){
                    let [key,value] = bucket[j]

                    if(!valMap[value]){
                        valMap[value] = true
                        newBucket.push([key,value])
                    }
                }
                this.table[i] = newBucket.length > 0 ? newBucket : undefined
            }
        }
    }

    findDuplicatesFromInput(input){
        let value = Array.isArray(input) ? input : input.split('')

        let tempHash = new hashtable(50)

        for(let i=0;i<value.length;i++){
            let val = value[i].toString()
            let count = tempHash.get(val) || 0
            tempHash.set(val,count+1)
        }

        let duplicates = []

        for(let i=0;i<tempHash.table.length;i++){
            let bucket = tempHash.table[i]
            if(bucket){
                for(let j=0;j<bucket.length;j++){
                    let [key,value] = bucket[j]

                    if(value > 1){
                        duplicates.push(key)
                    }
                }
            }
        }

        return Array.isArray(input) ? duplicates : duplicates.join('')
    }

    removeDuplicatesFromInput(input){
        let value = Array.isArray(input) ? input : input.split('')
        
        let tempHash = new hashtable(50)

        for(let i=0;i<value.length;i++){
            let val = value[i].toString()
            let count = tempHash.get(val) || 0
            tempHash.set(val,count+1)
        }

        let unique=[]

        for(let i=0;i<tempHash.table.length;i++){
            let bucket = tempHash.table[i]
            if(bucket){
                for(let j=0;j<bucket.length;j++){
                    let [key,value] = bucket[j]
                    if(value == 1){
                        unique.push(key)
                    }
                }
            }
        }

        return Array.isArray(input) ? unique : unique.join('')
    }

    nthMostOcuurence(arr,n){
        let tempHash = new hashtable(50)

        let value = Array.isArray(arr) ? arr : arr.split('')

        for(let i=0;i<value.length;i++){
            let val = value[i].toString()
            let count = tempHash.get(val) || 0
            tempHash.set(val,count+1)
        }

        let result = []

        for(let i=0;i<tempHash.table.length;i++){
            let bucket = tempHash.table[i]
            if(bucket){
                for(let j=0;j<bucket.length;j++){
                    let [key,value] = bucket[j]
                    result.push([key,value])
                }
            }
        }

        result.sort((a,b)=>b[1]-a[1])

        return result[n-1] || null
    }
}

function testHashtable() {
    const ht = new hashtable(50);

    console.log("✅ Testing set() and get():");
    ht.set("a", 1);
    ht.set("b", 2);
    ht.set("c", 3);
    console.log(ht.get("a")); // 1
    console.log(ht.get("b")); // 2
    console.log(ht.get("x")); // 'no matching key'

    console.log("\n✅ Testing remove():");
    ht.remove("b");
    console.log(ht.get("b")); // 'no matching key'

    console.log("\n✅ Testing print():");
    ht.print(); // Should print 'a' and 'c'

    console.log("\n✅ Testing findDuplicates():");
    ht.set("d", 3);
    ht.set("e", 3);
    console.log(ht.findDuplicates()); // ['3']

    console.log("\n✅ Testing removeDuplicates():");
    ht.removeDuplicates();
    ht.print(); // Should only print keys with unique values (no '3's)

    console.log("\n✅ Testing findDuplicatesFromInput():");
    console.log(ht.findDuplicatesFromInput("aabbcdef")); // 'ab'
    console.log(ht.findDuplicatesFromInput(["x", "y", "x", "z", "y", "y"])); // ['x', 'y']

    console.log("\n✅ Testing removeDuplicatesFromInput():");
    console.log(ht.removeDuplicatesFromInput("aabbcdef")); // 'cdef'
    console.log(ht.removeDuplicatesFromInput(["x", "y", "x", "z", "y", "y"])); // ['z']

    console.log("\n✅ Testing nthMostOcuurence():");
    console.log(ht.nthMostOcuurence("aabbbcddd", 1)); // ['d', 3]
    console.log(ht.nthMostOcuurence("aabbbcddd", 2)); // ['b', 3]
    console.log(ht.nthMostOcuurence("aabbbcddd", 3)); // ['a', 2]
    console.log(ht.nthMostOcuurence("aabbbcddd", 4)); // ['c', 1]
    console.log(ht.nthMostOcuurence("aabbbcddd", 5)); // null
}

testHashtable();

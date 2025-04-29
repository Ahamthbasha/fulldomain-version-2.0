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
//         this.table[index] = value
//     }

//     get(key,value){
//         let index=this.hash(key)

//         return this.table[index] || 'not found'
//     }

//     remove(key){
//         let index = this.hash(key)
//         let value=this.table[index]
//         this.table[index] = undefined
//         return value
//     }

//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }

// const table1=new hashtable(50)
// table1.set("name","ahamathbasha")
// table1.set("mane","picture abhi baakhi hai")
// table1.set("name","shahrukhkahan")
// table1.set("movie","wake up sid")
// table1.display()

// console.log(table1.get('mane'))

// console.log(table1.get("name"))
// table1.display()

// console.log(table1.remove("name"))
// table1.display()

class hashtable{
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
        let bucket=this.table[index]

        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            let sameElement=bucket.find((item)=>item[0] === key)

            if(sameElement){
                sameElement[1] = value
            }else{
                bucket.push([key,value])
            }
        }
    }

    get(key){
        let index =  this.hash(key)
        let bucket = this.table[index]

        if(bucket){
            let element=bucket.find((item)=>item[0]==key)

            if(element){
                return element[1]
            }

            else{
                return 'there is no key likes that'
            }
        }
    }

    remove(key){
        let index = this.hash(key)

        let bucket=this.table[index]

        if(bucket){
            let elementIndex=bucket.findIndex((item)=>item[0]==key)

           return bucket.splice(elementIndex,1)
        }
    }

    display(){
        for(let  i=0;i<this.table.length;i++){
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
                        valMap[value] = 1
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
                this.table[i] = newBucket.length > 0 ? newBucket : undefined
            }
        }
    }

    findDuplicatesFromInput(input){
        let value = Array.isArray(input) ? input : input.split('')

        for(let i=0;i<value.length;i++){
            let val=value[i].toString()
            let count=this.get(val) || 0
            this.set(val,count+1)
        }
        let duplicates=[]
        let valMap=[]
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
        let value = Array.isArray(input) ? input : input.split('')

        let unique=[]
        for(let i=0;i<value.length;i++){
            let val=value[i].toString()
            if(!this.get(val)){
                this.set(val,true)
                unique.push(val)
            }
        }

        return Array.isArray(input) ? unique : unique.join('')
    }

    nthMostFrequency(input,n){
        let value=Array.isArray(input) ? input : input.split('')

        for(let i=0;i<value.length;i++){
            let val=value[i].toString()
            let count=this.get(val) || 0
            this.set(val,count+1)
        }

        let result = []

        for(let j=0;j<this.table.length;j++){
            let bucket=this.table[j]
            if(bucket){
                for(let j=0;j<bucket.length;j++){
                    const [key,value] = bucket[j]
                    result.push([key,value])
                }
            }
        }

        result.sort((a,b)=>b[1]-a[1])
        console.log(result)
        return result[n-1] || null
    }
}

const table1=new hashtable(50)
// table1.set("name","ahamathbasha")
// table1.set("mane","picture abhi baakhi hai")
// table1.set("name","shahrukhkahan")
// table1.set("movie","wake up sid")
// table1.set("hero", "wake up sid");
// table1.display()

// console.log(table1.get("name"))
// // table1.display()

// console.log(table1.remove("name"))
// table1.display()

// console.log("Duplicates:", table1.findDuplicates());

// table1.removeDuplicates();
// console.log("After removing duplicates:");
// table1.display()

// const table2=new hashtable(50)
// // console.log(table2.findDuplicatesFromInput('asdasdfse'))
// console.log(table2.findDuplicatesFromInput([1,2,3,1,2,3,4,5]))

// const table3=new hashtable(50)
// // console.log(table3.removeDuplicatesFromInput('asdasdfse'))
// console.log(table3.removeDuplicatesFromInput([1,2,3,4,5,6,5,2,3,3,2,1]))

// const table = new hashtable(50);

// console.log(table.nthMostFrequency("abracadabra", 1));
// Might return: [ 'b', 2 ]

// console.log(table.nthMostFrequency([1,2,2,3,3,3,4],1));
// Returns: [ '3', 3 ]
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
        let index=this.hash(key)

        let bucket=this.table[index]

        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            let sameKey=bucket.find((item)=>item[0]==key)

            if(sameKey){
                sameKey[1]=value
            }else{
                bucket.push([key,value])
            }
        }
    }

    get(key){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(bucket){
            let value=bucket.find((item)=>item[0]==key)
            return value ? value[1] : undefined
        }
            return undefined
    }

    remove(key){
        let index=this.hash(key)
        let bucket=this.table[index]

        if(bucket){
            let elementIndex=bucket.findIndex((item)=>item[0]==key)
            if(elementIndex != -1){
               return bucket.splice(elementIndex,1)
            }
        }
        return 'no match'
    }

    findDuplicates(){
        let valueMap={}
        let duplicates=[]

        for(let i=0;i<this.table.length;i++){
            let bucket=this.table[i]
            if(bucket){
                for(let j=0;j<bucket.length;j++){
                    const [key,value] = bucket[j]

                    if(valueMap[value]){
                        valueMap[value]++
                    }else{
                        valueMap[value]=1
                    }
                }
            }
        }

        console.log(valueMap)

        for(let val in valueMap){
            if(valueMap[val] > 1){
                duplicates.push(val)
            }
        }
        return duplicates
    }

    removeDuplicates(){
        let seen={}

        for(let i=0;i<this.table.length;i++){
            let bucket=this.table[i]
            if(bucket){
                let newBucket=[]
                for(let j=0;j<bucket.length;j++){
                    const [key,value]= bucket[j]
                    if(!seen[value]){
                        seen[value]=true
                        newBucket.push(bucket[j])
                    }
                }
               this.table[i] = newBucket.length > 0 ? newBucket : undefined
            }
        }
    }

    findDuplicatesFromInput(input){
        let value=Array.isArray(input) ? input : input.split('')

        for(let i=0;i<value.length;i++){
            let val=value[i].toString()
            let count=this.get(val) || 0
            this.set(val,count+1)
        }

        let duplicates=[]

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

    nthMostFrequency(input,n){
        let value=Array.isArray(input) ? input : input.split('')

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
                    result.push(bucket[j])
                }
            }
        }

        result.sort((a,b)=>b[1]-a[1])

        return result[n-1] || null
    }

    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}

// const table1=new hashtable(50)
// table1.set("name","ahamathbasha")
// table1.set("mane","picture abhi baakhi hai")
// table1.set("name","shahrukhkahan")
// table1.set("movie","wake up sid")
// table1.set("hero", "wake up sid");
// table1.display()

// console.log(table1.get("name"))
// table1.display()

// console.log(table1.remove("name"))
// table1.display()

// console.log("Duplicates:", table1.findDuplicates());

// table1.removeDuplicates()
// console.log("After removing duplicates:");
// table1.display()

const table2=new hashtable(50)
// console.log(table2.findDuplicatesFromInput([1,2,2,31,1,5,5,6]))

// console.log(table2.removeDuplicatesFromInput([1,2,2,31,1,5,5,6]))

console.log(table2.nthMostFrequency([1,1,1,22,22,22,4,4,3,4,4], 1));
// Might return: [ 'b', 2 ]
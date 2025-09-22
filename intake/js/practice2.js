let arr = [7,1,1,7,2,2,7]


let oddNo = []

for(let i=0;i<arr.length;i++){
    let count = 0
    for(let j=i+1;j<arr.length;j++){
        if(arr[i] == arr[j]){
            count ++
        }
    }

    if((arr[i]%2 != 0 && count > 1)){
        let alreadyExist = false

        for(let k=0;k<oddNo.length;k++){
            if(arr[i] == k[i]){
                alreadyExist = true
                break
            }
        }

        if(!alreadyExist){
            oddNo.push(arr[i])
        }
    }
}

console.log(oddNo)
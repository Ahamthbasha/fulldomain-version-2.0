function bubbleSort(arr){
    let swapped

    do{
        swapped=false
        for(let i=0;i<arr.length-1;i++){
            if(arr[i] > arr[i+1]){
                let temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
                swapped=true
            }
        }
    }while(swapped)
        return arr
}

console.log(bubbleSort([8,20,-2,4,-6]))

function insertionSort(arr){
    for(let i=0;i<arr.length;i++){
        let cur=arr[i]
        let j=i-1

        while(j >= 0 && arr[j] > cur){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=cur
    }
    return arr
}
console.log(insertionSort([8,20,-2,4,-6]))

function selectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let minElements=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[minElements] > arr[j]){
                minElements=j
            }
        }

        let temp=arr[minElements]
        arr[minElements]=arr[i]
        arr[i]=temp
    }
    return arr
}

console.log(selectionSort([8,20,-2,4,-6]))

function quickSort(arr){
    if(arr.length < 2){
        return arr
    }

    let pivot=arr[arr.length-1]
    let leftArr=[]
    let rightArr=[]

    for(let i=0;i<arr.length-1;i++){
        if(arr[i] < pivot){
            leftArr.push(arr[i])
        }else{
            rightArr.push(arr[i])
        }
    }

    return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
}

console.log(quickSort([8,20,-2,4,-6]))

function mergeSort(arr){
    if(arr.length < 2){
        return arr
    }

    let mid=Math.floor((arr.length)/2)
    let leftArr=arr.slice(0,mid)
    let rightArr=arr.slice(mid)

    return merge(mergeSort(leftArr),mergeSort(rightArr))
}

function merge(leftArr,rightArr){
    let sortedArr=[]

    while(leftArr.length && rightArr.length){
        if(leftArr[0] < rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }

    return sortedArr.concat(leftArr,rightArr)
}

console.log(mergeSort([8,20,-2,4,-6]))

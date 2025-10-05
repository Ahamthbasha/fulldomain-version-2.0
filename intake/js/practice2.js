// let arr = [7,1,1,7,2,2,7]


// let oddNo = []

// for(let i=0;i<arr.length;i++){
//     let count = 0
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i] == arr[j]){
//             count++
//         }
//     }

//     if((arr[i] % 2 != 0) && (count >= 1)){
//         let alreadyExist = false

//         for(let k=0;k<oddNo.length;k++){
//             if(arr[i] == oddNo[k]){
//                 alreadyExist = true
//                 break
//             }
//         }

//         if(!alreadyExist){
//             oddNo.push(arr[i])
//         }
//     }
// }


// console.log(oddNo)



// let arr = [7,1,1,7,2,2,7]

// //odd no appears twice
// let oddNo = []

// for(let i=0;i<arr.length;i++){
//     let count = 0

//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i] == arr[j]){
//             count++
//         }
//     }

//     if((arr[i]%2 != 0) && (count >= 1)){
//         let alreadyExist = false
//         for(let k=0;k<oddNo.length;k++){
//             if(oddNo[k] == arr[i]){
//                 alreadyExist=true
//             }
//         }

//         if(!alreadyExist){
//             oddNo.push(arr[i])
//         }
//     }
// }

// console.log(oddNo)


function bubbleSort(arr){
    let swapped = true

    while(swapped){
        swapped = false
        for(let i=0;i<arr.length-1;i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    }

    return arr
}

function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let j = i - 1
        let cur = arr[i]

        while(j>=0 && arr[j] > cur){
            arr[j + 1] = arr[j]
            j--
        }

        arr[j+1] = cur
    }
}

function selectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let minElement = i
        for(let j=i+1;j<arr.length;j++){
            if(arr[minElement] > arr[j]){
                minElement = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[minElement]
        arr[minElement] = temp
    }
    return arr
}

function quickSort(arr){
    if(arr.length < 2){
        return arr
    } 

    let pivot = arr[arr.length-1]
    let leftArr = []
    let rightArr = []

    for(let i=0;i<arr.length-1;i++){
        if(arr[i] < pivot){
            leftArr.push(arr[i])
        }else{
            rightArr.push(arr[i])
        }
    }
    
    return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
}

function mergeSort(arr){
    if(arr.length < 2){
        return arr
    }

    let mid = Math.floor(arr.length/2)
    let leftArr = arr.slice(0,mid)
    let rightArr = arr.slice(mid)

    return merge(mergeSort(leftArr),mergeSort(rightArr))
}

function merge(leftArr,rightArr){
    let sortedArr = []

    while(leftArr.length && rightArr.length){
        if(leftArr[0] < rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }

    return sortedArr.concat(leftArr,rightArr)
}

let arr = [5, 3, 8, 4, 2, 7, 1, 10];

console.log("Bubble Sort:", bubbleSort([...arr]));
console.log("Insertion Sort:", insertionSort([...arr]));
console.log("Selection Sort:", selectionSort([...arr]));
console.log("Quick Sort:", quickSort([...arr]));
console.log("Merge Sort:", mergeSort([...arr]));

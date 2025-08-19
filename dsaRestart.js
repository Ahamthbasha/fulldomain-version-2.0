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
        let cur = arr[i]
        let j = i - 1

        while(j>=0 && arr[j] > cur){
            arr[j+1] = arr[j]
            j--
        }

        arr[j+1] = cur
    }
    return arr
}

function selectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let min = i
        for(let j=i+1;j<arr.length;j++){
            if(arr[min] > arr[j]){
                min = j
            }
        }

        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
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


let testCases = [
  {input: [], expected: []},                      // empty
  {input: [1], expected: [1]},                    // single element
  {input: [5, 3, 8, 4, 2], expected: [2, 3, 4, 5, 8]},  // random
  {input: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5]},  // already sorted
  {input: [5, 4, 3, 2, 1], expected: [1, 2, 3, 4, 5]},  // reverse sorted
  {input: [3, 1, 2, 3, 1], expected: [1, 1, 2, 3, 3]},  // with duplicates
  {input: [-3, 0, -1, 2, 1], expected: [-3, -1, 0, 1, 2]} // with negatives
]

// test runner
function runTests(sortFn, name){
    console.log(`\nTesting ${name}...`)
    testCases.forEach(({input, expected}, idx) => {
        let result = sortFn([...input]) // copy to avoid mutation issues
        console.log(`Test ${idx+1}:`, JSON.stringify(result) === JSON.stringify(expected) ? "✅ Pass" : `❌ Fail (got ${result}, expected ${expected})`)
    })
}

// Run all
runTests(bubbleSort, "Bubble Sort")
runTests(insertionSort, "Insertion Sort")
runTests(selectionSort, "Selection Sort")
runTests(quickSort, "Quick Sort")
runTests(mergeSort, "Merge Sort")

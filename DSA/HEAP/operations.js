// function topKFrequentElements(nums,k){
//     let map=new Map()

//     for(let i=0;i<nums.length;i++){
//         if(map[nums[i]]){
//             map[nums[i]]++
//         }else{
//             map[nums[i]]=1
//         }
//     }

//     let result=[]

//     for(let [key,freq] of Object.entries(map)){
//         if(k==freq){
//             result.push(Number(key))
//         }
//     }
//     return result
// }

// const nums = [1, 1, 1, 2, 2, 3];
// const k = 3;
// console.log(topKFrequentElements(nums, k)); 

function heapify(arr,n,i){
    let largest=i
    let left= 2*i+1
    let right=2*i+2

    if(left < n && arr[left] > arr[largest]){
        largest=left
    }

    if(right < n && arr[right] > arr[largest]){
        largest=right
    }

    if(largest != i){
        [arr[i],arr[largest]] = [arr[largest],arr[i]]
        heapify(arr,n,largest)
    }
}

function heapSort(arr){
    let n=arr.length

    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i)
    }

    for(let i=n-1;i>=0;i--){
        [arr[0],arr[i]] = [arr[i],arr[0]]
        heapify(arr,i,0)
    }
}
const arr = [10, 20, 15, 30, 5];
console.log("Original Array:", arr);
heapSort(arr);
console.log("Sorted Array:", arr);
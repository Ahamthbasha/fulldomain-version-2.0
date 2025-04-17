// function linear(arr,n){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==n){
//             return i
//         }
//     }
//     return "not found"
// }

// console.log(linear([1,2,3,4,5],10))

// function binarySearch(arr,n){
//     let start=0
//     let end=arr.length-1

//     while(start <= end){
//         let mid=Math.floor((start+end)/2)

//         if(n === arr[mid]){
//             return mid 
//         }
//         else if(n < arr[mid]){
//             end=mid-1
//         }
//         else{
//             start=mid+1
//         }
//     }
//     return "not found"
// }

// console.log(binarySearch([1,2,3,4,5],10))

// function bfs(arr,target){
//     return binarySearch(arr,target,0,arr.length-1)
// }

// function binarySearch(arr,target,leftIndex,rightIndex){
//     if(leftIndex > rightIndex){
//         return -1
//     }

//     let mid=Math.floor((leftIndex+rightIndex)/2)

//     if(target === arr[mid]){
//         return mid
//     }
//     else if(target < arr[mid]){
//         return binarySearch(arr,target,leftIndex,mid-1)
//     }
//     else{
//         return binarySearch(arr,target,mid+1,rightIndex)
//     }
// }

// console.log(bfs([1, 2, 3, 4, 5], 10))
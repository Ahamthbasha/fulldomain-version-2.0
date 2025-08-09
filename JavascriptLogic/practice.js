//flat the given array without using any built in functions

const array = [1, 2, 3, [4, 5], [6, 7, 8, [9, 10, 11]]];

function flatArray(arr){
    let result = []

    for(let i=0;i<arr.length;i++){
        let element = arr[i]
        if(typeof element == 'object' && element instanceof Array){
            let flat = flatArray(element)
            for(let j=0;j<flat.length;j++){
                result[result.length] = flat[j]
            }
        }else{
            result[result.length] = element
        }
    }
    return result
}
console.log(flatArray(array))


// //end of each letter would be capital
// const str = 'my name is basha'

// let modified = str.split(' ').map((val)=>{
//     return val.slice(0,val.length-1)+val[val.length-1].toUpperCase()
// })
// console.log(modified)



//3. flat the object 

// const obj = {
//   newObj: {
//     obj2: {
//       obj5: {
//         one: 1,
//       },
//     },
//   },
//   obj3: {
//     obj4: {
//       two: 2,
//     },
//   },
// };

// console.log(obj.newObj.obj2.obj5.one)


// let initial = Object.keys(obj).map((val)=>{
//     return [val]
// })

// for(let val of initial){

//     let take = Object.keys(obj[val])
    
// }


// let result = {}
// let stack = [{current:obj,path:''}]

// while(stack.length > 0){
//     const {current,path} = stack.pop()
//     for(let key in current){
//         let value = current[key]
//         console.log('value:',value)
//         let newKey = path ? path + '.' + key : key
//         console.log('newKey:',newKey)
    
//         if(typeof value == 'object' && value != null){
//             stack.push({current:value,path:newKey})
//         }else{
//             result[newKey] = value
//         }
//     }
// }

// console.log(result)
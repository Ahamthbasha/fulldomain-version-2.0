// let str1='listen'
// let str2='silent'
// console.log(str1.split('').sort().join('')==str2.split('').sort().join(''))

// function checkAnagram(str,str1){
//     for(let i=0;i<str.length;i++){
//         if(!str1.includes(str[i])){
//             return false
//         }
//     }
//     return true
// }

// console.log(checkAnagram("listen","silent"))

// function storeUniqueLetter(str){
//     let arr=[]
//     for(let i=0;i<str.length;i++){
//         if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
//             arr.push(str[i])
//         }
//     }
//     return arr.join('')
// }

// console.log(storeUniqueLetter("malayalam"))

// function firstNonRepeat(str){
//     for(let i=0;i<str.length;i++){
//         if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
//             return str[i]
//         }
//     }
// }

// console.log(firstNonRepeat('cocoloco'))

// let str1='pqr'
// let str2='stuv'

// function mixStr(str1,str2){
//     let length=Math.max(str1.length,str2.length)
//     let first=0
//     let second=0
//     let str=''

//     for(let i=0;i<length;i++){
//         if(first < str1.length){
//             str+=str1[i]
//             first++
//         }
//         if(second < str2.length){
//             str+=str2[i]
//             second++
//         }
//     }
//     return str
// }

// console.log(mixStr(str1,str2))

// function palindrome(str){
//     let rev=''
//     for(let i=str.length-1;i>=0;i--){
//         rev+=str[i]
//     }
//     return rev === str
// }

// console.log(palindrome("malayalam"))

// function reverse(str){
//     let result=''
//     for(let i=str.length-1;i>=0;i--){
//         result+=str[i]
//     }
//     return result
// }

// console.log(reverse("hello"))

// let str1='abcd'
// let str2='bcda'

// function rotate(str1,str2){
//     if(str1.concat(str1).includes(str2)){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(rotate(str1,str2))

// function vowelConsonant(str){
//     let arr=['a','e','i','o','u','A','E','I','O','U']

//     let vowels=[]
//     let consonants=[]

//     for(let i=0;i<str.length;i++){
//         if(arr.includes(str[i])){
//             vowels.push(str[i])
//         }else{
//             consonants.push(str[i])
//         }
//     }

//     return {vowels,consonants}
// }

// const {vowels,consonants} = vowelConsonant('basha')
// console.log(vowels)
// console.log(consonants)


// function revStr(str){
//     if(str.length == 0){
//         return ''
//     }

//     let first=str[0]
//     let rest=str.slice(1)
//     let reverse=revStr(rest)

//     return reverse.concat(first)
// }

// console.log(revStr('basha'))

// function revArr(arr){
//     if(arr.length === 0){
//         return arr
//     }

//     let first=arr[0]
//     let rest=arr.slice(1)
//     let reverse=revArr(rest)

//     return reverse.concat(first)
// }

// console.log(revArr([1,2,3,4,5]))

// let str='hi hello how are you'

// console.log(str.split('').reverse().join('').split(' ').reverse().join(' '))

// let firstCap=str.split(' ').map((word)=>{
//     return word[0].toUpperCase()+word.slice(1)
// }).join(' ')

// console.log(firstCap)

// let str='hi hello how are you'

// let reverseStr=''
// let word=''

// for(let i=0;i<=str.length;i++){
//     if(str[i]=== ' ' || i===str.length){
//         for(let j=word.length-1;j>=0;j--){
//             reverseStr+=word[j]
//         }

//         if(i !== str.length){
//             reverseStr+=' '
//         }

//         word=''
//     }else{
//         word+=str[i]
//     }
// }

// console.log(reverseStr)

// let str='hi hello how are you'

// let word=str.split(' ').map((word)=>{
//     return word[0].toUpperCase()+word.slice(1)
// }).join(' ')
// console.log(word)

// let str=' tom and tree '
// let result=''

// for(let i=0;i<str.length;i++){
//     if(str[i-1]==' '){
//         result+=str[i].toUpperCase()
//     }else{
//         result+=str[i]
//     }
// }
// console.log(result)
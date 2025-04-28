// let str1='listen'
// let str2='silent'

// console.log(str1.split('').sort().join('') === str2.split('').sort().join(''))

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

// function firstNonRepeatingChar(str){

//     for(let i=0;i<str.length;i++){
//         if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
//             return str[i]
//         }
//     }
//     return 'nothing unique'
// }

// console.log(firstNonRepeatingChar('cocolloco'))

// let str1='pqr'
// let str2='stuv'

// function mixStr(str1,str2){
//     let finalStr=''

//     let length= str1.length > str2.length ? str1.length :str2.length

//     for(let i=0;i<length;i++){
//         if(i < str1.length){
//             finalStr+=str1[i]
//         }
//         if(i < str2.length){
//             finalStr+=str2[i]
//         }
//     }

//     return finalStr
// }

// console.log(mixStr(str1,str2))

// function palindrome(str){
//     let given =str.split('').reverse().join('')
//     return given === str
// }

// console.log(palindrome('malayalam'))

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

// let str='hello my name is ahamathbasha'

// let vowels=['a','e','i','o','u','A','E','I','O','U']

// let vowel=[]
// let consonant=[]

// for(let i=0;i<str.length;i++){
//     if(vowels.includes(str[i])){
//         vowel.push(str[i])
//     }else{
//         consonant.push(str[i])
//     }
// }

// console.log(vowel)
// console.log(consonant)

// let str='hi hello how are you'

// let reverseInPlace=str.split(' ').map((word)=>{
//     return word.split('').reverse().join('')
// })

// console.log(reverseInPlace.join(''))

// let str='hi hello how are you'

// let firstLetCaps=str.split(' ').map((word)=>{
//     return word[0].toUpperCase()+word.slice(1)
// })

// console.log(firstLetCaps.join(' '))

// let str='hi hello how are you'

// let final=''
// let local=''

// for(let i=0;i<str.length;i++){
//     if(str[i]!==' '){
//         local+=str[i]
//     }
//     else{
//         for(let j=0;j<local.length;j++){
//             if(j==0){
//                 final+=local[j].toUpperCase()
//             }
//             else{
//                 final+=local[j]
//             }
//         }

//         final += ' '
//         local = ''
//     }
// }

// if(local.length > 0){
//     for(let k=0;k<local.length;k++){
//         if(k == 0){
//             final+=local[k].toUpperCase()
//         }else{
//             final+=local[k]
//         }
//     }
// }

// console.log(final)

// let str="hi hello how are you"

// let word=''
// let reverseStr=''
// for(let i=0;i<str.length;i++){
//     if(str[i] == ' ' ){
//         for(let j=word.length-1;j>=0;j--){
//             reverseStr+=word[j]
//         }
//         reverseStr+=' '
//         word=''
//     }else{
//         word+=str[i]
//     }
// }

// if(word.length > 0){
//     for(let j=word.length-1;j>=0;j--){
//         reverseStr+=word[j]
//     }
// }
// console.log(reverseStr)

// let str=' tom and tree '
// let final=''
// for(let i=0;i<str.length;i++){
//     if(str[i-1] == ' '){
//         final+=str[i].toUpperCase()
//     }else{
//         final+=str[i]
//     }
// }

// console.log(final)
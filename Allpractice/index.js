// let input1 = 'a1b2c3'

let input1 = 'z1v10k3'

let letters = input1.match(/[a-zA-Z]/g)
let numbers = input1.match(/\d+/g).map(Number)


let final = ''
for(let i=0;i<letters.length;i++){
    final+=letters[i].repeat(numbers[i])
}

console.log(final)
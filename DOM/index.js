let button = document.getElementById('toggle')


let checkbox = document.getElementById('check')

let toggle = false

button.addEventListener('click',()=>{
    if(toggle == false){
        toggle = true
    }else{
        toggle = false
    }

    checkbox.checked = toggle
})


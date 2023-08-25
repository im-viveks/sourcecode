const btn = document.getElementById("btn")
const code = document.getElementById("code")
const bg =  document.getElementById("bg")
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

btn.addEventListener('click',function(){
    let hexColor = '#'
    for(let i=1;i<=6;i++){
        hexColor += randHexValue()
    }
    bg.style.backgroundColor = hexColor
    code.innerHTML = hexColor
})

function randHexValue(){
   let randomIndex = Math.floor(Math.random()*16)
   return hex[randomIndex]
}


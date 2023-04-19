
function Displaynum(num){
    result.value += num
}
function clearall() {
    
    result.value=""
}
function onebyonedel() {
    new1=result.value
    result.value=new1.slice(0,-1)
}
function evaluate1(){
    result.value=eval( result.value)
}
const btns = document.querySelectorAll(".byn")
function offsrc(){
    result.value=""
    result.style.background="#636361"
    result.style.border="1px solid red"
    btns.forEach(btn=>{
        btn.disabled=true
    })
}
offsrc()

function onscr() {
    result.style.background="#a7af7c"
    
    btns.forEach(btn=>{
        btn.disabled=false
    })
}



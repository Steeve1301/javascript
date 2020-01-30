let a =document.getElementById("axe-x");
let b= document.getElementById("axe-y");

document.body.addEventListener("mouseover", () =>{
    a.innerHTML= event.pageX;
    b.innerHTML= event.pageY;
})
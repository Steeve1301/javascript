
let x= document.getElementsByClassName("hoverMe").length;

let div= document.getElementsByClassName("hoverMe");

for(let i=0; i<x; i++){
    div[i].addEventListener("mouseover", () =>{
    document.getElementsByClassName("hoverMe")[0].style.display= "none";
    document.getElementsByClassName("hoverMe")[1].style.display= "none";
    document.getElementsByClassName("hoverMe")[2].style.display= "none";

});
}

document.getElementById("reset").addEventListener("click", () =>{

    document.getElementsByClassName("hoverMe")[0].style.display= "block";
    document.getElementsByClassName("hoverMe")[1].style.display= "block";
    document.getElementsByClassName("hoverMe")[2].style.display= "block";
    console.log("test")
});

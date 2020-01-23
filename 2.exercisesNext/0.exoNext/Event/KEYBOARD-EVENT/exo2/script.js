let handlekey = (event) => {
    let touche= event.key;

    switch(touche){
        case 'ArrowUp':
            document.getElementById("up").className ="highlight";
            break;
        case 'ArrowDown':
            document.getElementById("down").className ="highlight";
            break;
        case 'ArrowLeft':
            document.getElementById("left").className ="highlight";
            break;
        case 'ArrowRight':
            document.getElementById("right").className ="highlight";
            break;        
    }
}


let handlekey2 = (event) => {
    let touche2= event.key;

    switch(touche2){
        case 'ArrowUp':
            document.getElementById("up").classList.remove("highlight");
            break;
        case 'ArrowDown':
            document.getElementById("down").classList.remove("highlight");
            break;
        case 'ArrowLeft':
            document.getElementById("left").classList.remove("highlight");
            break;
        case 'ArrowRight':
            document.getElementById("right").classList.remove("highlight");
            break;        
    }
}


window.addEventListener('keydown', handlekey);
window.addEventListener('keyup', handlekey2);


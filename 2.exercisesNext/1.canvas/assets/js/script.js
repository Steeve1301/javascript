let canvas= document.getElementById("canvas");
let ctx= canvas.getContext("2d");
const WIDTH=800;
const HEIGHT=600;

let width=60;
let height=100;

let positionx= WIDTH/2 - width/2;
let positiony= HEIGHT- height-13;

positionMobx= WIDTH-15;

let speed= 8;

function creaPerso(ctx,positionx,positiony,width,height){
    const img = new Image()
    img.src = "./assets/css/img/mario.gif";
    img.onload = () => {
    ctx.drawImage(img, positionx, positiony, width, height);
    };
}
creaPerso(ctx,positionMobx,positiony,width,height);


function creaMob(ctx,positionMobx,positiony,width,height){
    const mobimg= new Image();
    mobimg.src="./assets/css/img/ennemi.png";
    mobimg.onload = () => {
        ctx.drawImage(mobimg, positionMobx, 540, 40, 40);
        };
}

creaMob(ctx,positionMobx,positiony,width,height);

document.body.addEventListener("keydown", (event) => {
    console.log(event.code)
    switch(event.code){
        case "ArrowLeft":
            positionx -= speed;
            positionMobx -= speed;
            ctx.clearRect(0,0,WIDTH,HEIGHT);
            creaPerso(ctx,positionx,positiony,width,height);
            creaMob(ctx,positionMobx,positiony,width,height);
        break;
        
        case "ArrowRight":
            positionx += speed;
            ctx.clearRect(0,0,WIDTH,HEIGHT);
            creaPerso(ctx,positionx,positiony,width,height);
            creaMob(ctx,positionMobx,positiony,width,height);
        break;

        case "Space":
            positiony -= speed;
            ctx.clearRect(0,0,WIDTH,HEIGHT);
            creaPerso(ctx,positionx,positiony,width,height);
            creaMob(ctx,positionMobx,positiony,width,height);
        break;

        case "ArrowDown":
            positiony += speed;
            ctx.clearRect(0,0,WIDTH,HEIGHT);
            creaPerso(ctx,positionx,positiony,width,height);
            creaMob(ctx,positionMobx,positiony,width,height);
        break;
    }
});




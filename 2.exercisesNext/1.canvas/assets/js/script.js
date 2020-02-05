let canvas= document.getElementById("canvas");
let ctx= canvas.getContext("2d");

const WIDTH=800;
const HEIGHT=600;

let goLeft= false;
let goRight= false;
let Count=0;

let width=80;
let height=100;

let balles= [];

let positionx= WIDTH/2 - width/2;
let positiony= HEIGHT- height-13;

let speed= 8;

let positionMobx= Math.floor(Math.random() * (700-1) + 1);
let positionMoby= Math.floor(Math.random() * (400-1) + 1);

const champimg= new Image();
champimg.src="./assets/css/img/champi.png";

let positionBallx= positionx+35;
let positionBally= positiony+50;
let speedmob= 5;

function creaPerso(ctx,positionx,positiony,width,height){
    const img = new Image();
    img.src = "./assets/css/img/mario.gif";
    img.onload = () => {
    ctx.drawImage(img, positionx, positiony, width, height);
    };
}
function creaMob(ctx,positionMobx,positionMoby){
    const mobimg= new Image();
    mobimg.src="./assets/css/img/ennemi.png";
    mobimg.onload = () => {
        ctx.drawImage(mobimg, positionMobx, positionMoby, 80,100);
        };
}

function Ball(x,y){
    this.x=x;
    this.y=y;
}


function update(Mobx,Moby){


    ctx.clearRect(0,0,WIDTH,HEIGHT);
    creaMob(ctx,positionMobx,positionMoby,width,height);
    creaPerso(ctx,positionx,positiony,width,height);

    for(let i=0; i< balles.length; i++){
        ctx.drawImage(champimg, balles[i].x, balles[i].y, 15,20);
        balles[i].y -=5;
        if(balles[i].y<=0){
            balles.splice(i, 1);
        }
    }
    if(goLeft){
        if(positionx < 0){
            positionx=0;
        }
        
        positionx -= speed;
    }
    if(goRight){
        if(positionx >750){
            positionx=750;
        }
        
        positionx += speed;
    }

    for(let y=0; y<balles.length; y++){

        if(balles[y].y<= Moby+20){

        if(balles[y].x<= Mobx+80 && balles[y].x >= Mobx){
            console.log(Count+"points");
            Count=Count+1;
            positionMobx= Math.floor(Math.random() * (700-1) + 1);
            positionMoby= Math.floor(Math.random() * (400-1) + 1);
            ctx.clearRect(0,0,WIDTH,HEIGHT);
            creaMob(ctx,positionMobx,positionMoby,width,height);
        }
        }
    
        
    }
}

creaPerso(ctx,positionx,positiony,width,height);
creaMob(ctx,positionMobx,positionMoby,width,height);

document.body.addEventListener("keydown", (event) => {
    switch(event.code){
        case "ArrowLeft":
            goLeft=true;
        break;

        case "ArrowRight":
            goRight= true;
        break;

        case "Space":
            positionBallx= positionx+35;
            positionBally= positiony+50;
            balles.push(new Ball(positionBallx,positionBally));
            update(positionMobx, positionMoby);
            
        break;
    }
});

document.body.addEventListener("keyup", (event) => {
    switch(event.code){
        case "ArrowLeft":
            goLeft=false;

        break;
        
        case "ArrowRight":
            goRight= false;

        break;
    }
});

setInterval(()=>{
    update(positionMobx, positionMoby);
},16);








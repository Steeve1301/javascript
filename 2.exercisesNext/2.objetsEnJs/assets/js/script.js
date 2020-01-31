

let gameCons= document.getElementById("consGame");


let character= {
name: "Rudolph",
age: 23,
items_to_give: ["Arc", "Epée", "Bouclier", "Lance", "Hache"],
};

let Shop= [{
    title: "Fusil à pompe",
    physic: 14,
    magic:0,
    minLevel: 2,
    available: true,
},{
    title: "Arc de chasse",
    physic: 11,
    magic: 23,
    minLevel:10,
    available: true,
},{
    title: "Truelle",
    physic: 15,
    magic:0,
    minLevel:2,
    available:false,
},{
    title: "Epée du destin",
    physic: 33,
    magic:24,
    minLevel:8,
    available: true,
}];

let mainPlayer= {
    name:"StylzH",
    level:1,
    life: 100,
    weapon:"AK47",
    attack: function(){

    },
}
let mainCharacter= {
    name: "Gant Dy",
    level: 1,
    life: 100,
    weapon: [{name: "Pistolet", damage: 8,}, {name:"Couteau", damage:5,}],
    attack: function(){

    },
};
for (const key in character){
    console.log(character[key]);
}
function inShop(gameCons){
    for (const key in Shop){//Produits du shop
    console.log(Shop[key]);
    gameCons.innerHTML= gameCons.innerHTML + "<p>"+Shop[key].title +" </p>";
}
}
function available(){
    for (const key in Shop){ //Produit dispo
        if(Shop[key].available){
            console.log(Shop[key]);
        }
    }
}
function LevelTen(){
    for(const key in Shop){
        if(Shop[key].minLevel>=10){
            console.log(Shop[key]);
        }
    }
}
function giveObj(){
    let random = Math.floor(Math.random() * character.items_to_give.length);
    return character.items_to_give[random];
}

console.log("Produits disponible");
available();
console.log("Accessible seulement au niveau 10");
LevelTen();

document.getElementById("TakeObj").addEventListener("click", () => {
    let ObjectRc= giveObj();
    gameCons.innerHTML= gameCons.innerHTML +"<p> Vous avez reçu un(e) : "+ObjectRc+"</p>";
    console.log(ObjectRc);
});
document.getElementById("GoShop").addEventListener("click", () =>{
    inShop(gameCons);
});

    
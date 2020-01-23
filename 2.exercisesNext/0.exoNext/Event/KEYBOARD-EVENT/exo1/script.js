(()=>{

    let cible= document.getElementById("character");
    let handleKey = (event) => {

            let touche= event.key;

            switch(touche){
                
                case "0": 
                cible.style.backgroundColor= "red";
                console.log("tagueule")
                break;
                case "1":
                cible.style.backgroundColor="green";
                break;
                case "2": 
                cible.style.backgroundColor= "purple";
                break;
                case "3":
                cible.style.backgroundColor="blue";
                break;
                case "4": 
                cible.style.backgroundColor= "pink";
                break;
                case "5":
                cible.style.backgroundColor="gray";
                break;
                case "6": 
                cible.style.backgroundColor= "dark";
                break;
                case "7":
                cible.style.backgroundColor="yellow";
                break;
                case "8": 
                cible.style.backgroundColor= "orange";
                break;
                case "9":
                cible.style.backgroundColor="red";
                break;
                
            }
                
            console.log(touche);
        
    };
    
    window.addEventListener ('keydown', handleKey);

})();
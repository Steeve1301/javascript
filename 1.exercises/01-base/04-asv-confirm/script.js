/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let i;

    while(i!=1){
        let age= prompt("Quel est votre age?");
        let ville= prompt("Quelle est votre ville");
        let sexe= prompt("Quel est votre sexe ?");

        
        if(confirm("Vous confirmez que ces infos sont bien valide?"+ age + " "+sexe+" "+ville)){
            i=1;
        }
        else{
            i=0;
        }
    }
    

})();

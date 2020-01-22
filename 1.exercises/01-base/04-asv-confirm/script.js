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

    let result=0;

    while(result<1){
        
        let age= prompt("Quel est votre âge?");
        let sexe= prompt("Quel est votre sexe?");
        let ville= prompt("Dans quelle ville habitez vous ?");

        if(confirm("Confirmez vous que votre âge est : "+ age + " Que votre sexe est: " + sexe + " Et que vous habitez à : " + ville)){
           result=result + 1; 
        }
        else{
            result=0;
        }
    }

})();

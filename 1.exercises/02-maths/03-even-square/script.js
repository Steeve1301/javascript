/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        let result=0;
        let calcul;
        while(result<=21){

            if(result % 2 == 0){
                calcul= result*result;
                alert("La racine carrée de " + result + " est: " +  calcul);
            }
            else if(result % 2 == 1){
                alert(result + " est un nombre impair!")
            }  
            else{
                alert("erreur");
            }
            result=result+1;
        }

    });
})();

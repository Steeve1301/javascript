/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    function random(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      }

    const reducer = (accumulator, currentValue) => accumulator + currentValue;


    document.getElementById("run").addEventListener("click", () => {

        let number= [random(1,100), random(1,100), random(1,100), random(1,100), random(1,100), random(1,100), random(1,100),random(1,100), random(1,100), random(1,100)]
        let min= Math.min(...number);  
        let max= Math.max(...number);  
        let somme= number.reduce(reducer);
        let moyenne = somme/number.length;
        let x=0;

        document.getElementById("min").innerHTML=min;
        document.getElementById("max").innerHTML=max;
        document.getElementById("sum").innerHTML=somme;
        document.getElementById("average").innerHTML=moyenne;

        for(let i=1; i<11; i++){
             document.getElementById("n-" + i).innerHTML= number[x];
             x++;
         }

               
        })
})();

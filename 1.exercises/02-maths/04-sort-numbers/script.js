/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        // your code here
        let number= document.getElementById("numbers").value.split(",").map(Number);
        
        let col= number.length;
        let init=0;
        let init2=0;
        let aff;

        while(init<col){
            number[init]= parseInt(number[init]);
            init++;
        }
           
        aff= number.sort(function(a, b){return a-b});  
        alert(aff);

        
        
    });
})();

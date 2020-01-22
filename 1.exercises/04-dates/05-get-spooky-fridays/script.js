/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () =>{
        let date= new Date();

        let year= document.getElementById("year").value;
        let month= ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
        
        for(let i=0; i<12; i++ ){
            date.setDate(13);
            date.setMonth(i);
            date.setFullYear(year);

            if(date.getDay() == 5){
                alert("Le mois de "+ month[date.getMonth()]+ " contient un vendredi 13");
            }
        }
    })
})();

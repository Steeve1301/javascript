/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

        

        document.getElementById("run").addEventListener("click" , () =>{

            let today = new Date();
            let an= document.getElementById("dob-year").value;
            let mois= document.getElementById("dob-month").value;
            let day= document.getElementById("dob-day").value;
        
            let dateNaissance = new Date(an + "-" + mois + "-" + day);
            let age = today.getFullYear() - dateNaissance.getFullYear();
            let m = today.getMonth() - dateNaissance.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < dateNaissance.getDate())) {
                age = age - 1;
            }
        
            alert("Vous avez " + age + " ans");
            })
        
})();

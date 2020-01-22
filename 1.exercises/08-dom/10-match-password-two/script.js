/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById("run").addEventListener("click" , () =>{
        let pone= document.getElementById("pass-one").value;
        let ptwo= document.getElementById("pass-two").value;

        let pass1= document.getElementById("pass-one");
        let pass2= document.getElementById("pass-two");

        let a= document.createAttribute("class");
        a.value="error";

        let b= document.createAttribute("class");
        b.value="error";



        if(pone != ptwo){
            
            pass1.setAttributeNode(a);
            pass2.setAttributeNode(b);
        }
        
    })
})();

/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let x=document.getElementById("counter");

    document.getElementById("pass-one").setAttribute("maxlength",10);

    let y=0;

    document.getElementById("pass-one").addEventListener("keypress", () =>{
        y= y+1;
        x.innerHTML=y+"/10";

        if(y>10){
            x.innerHTML="Trop long";

        }

    })
})();

/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let date= new Date();

    let day= date.getDate();
    let month= date.getMonth()+1;
    let year= date.getFullYear();
    let hour= date.getHours();
    let minutes= date.getMinutes();

    document.getElementById("target").innerHTML= ("Nous sommes le "+day+ "/"+month+"/"+year+" et il est : "+hour+":"+minutes);
})();

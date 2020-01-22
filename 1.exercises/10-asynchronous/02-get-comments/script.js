/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let i=0;
    // document.getElementById("run").addEventListener("click", () =>{
        let x= window.lib.getPosts((erreur, article) => length)
        // window.lib.getPosts((erreur, article) => console.log(article));


            window.lib.getPosts((erreur,article) => article.forEach(element => { console.log(element)
                window.lib.getComments(element.id, (erreur, commentaire) => console.log(commentaire));
                
            }))



        // for(let i=0; i<x; i++)
        // window.lib.getComments(1, (erreur, commentaire) => console.log(erreur, commentaire));
    // })
})();

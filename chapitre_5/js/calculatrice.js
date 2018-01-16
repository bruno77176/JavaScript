function calculer(nb1, operation, nb2) {
    var resultat;
    if (operation === "+"){
    resultat = nb1 + nb2; 
    } else if (operation === "-"){
    resultat = nb1 - nb2;
    
    } else if (operation === "*"){
    resultat = nb1 * nb2;

    } else if (operation ==="/"){
    resultat = nb1 / nb2;
       
    }
     return resultat;
}

console.log(calculer(4, "+", 6)); // Doit afficher 10
console.log(calculer(4, "-", 6)); // Doit afficher -2
console.log(calculer(2, "*", 0)); // Doit afficher 0
console.log(calculer(12, "/", 0)); // Doit afficher Infinity
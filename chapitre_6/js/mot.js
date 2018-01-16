var mot = prompt("Veuillez saisir un mot.");

var longueurMot = mot.length;
var motMini = mot.toLowerCase();
var motMaju = mot.toUpperCase();

console.log("Ce mot contient "+longueurMot+" lettres.");
console.log("Il s'écrit en minuscules : "+motMini);
console.log("Il s'écrit en majuscules : "+motMaju);


function compterNbVoyelles(mot){
    
    var NbVoyelles = 0;
    var motMini = mot.toLowerCase();
    for(i=0; i<mot.length; i++){
        if (motMini[i] === "a" || motMini[i] === "e" || motMini[i] === "i" || motMini[i] === "o" || motMini[i] === "u" || motMini[i] === "y"){
            NbVoyelles ++;
        }
    }
    return NbVoyelles;
}

var nbConsomnes = mot.length - compterNbVoyelles(mot);
console.log("Ce mot contient "+compterNbVoyelles(mot)+" voyelles et "+nbConsomnes+" consomnes.");


function inverser(mot){
    var motInverse ="";
    for(i=0; i<mot.length; i++){
        motInverse = motInverse + mot[mot.length-1-i];
    }
    return motInverse;
}

console.log("le mot inversé est "+inverser(mot));

if (inverser(mot).toLowerCase() === mot.toLowerCase()){
    console.log("Ce mot est un palindrome.");
} else {
    console.log("Ce mot n'est pas un palindrome.");
}

function trouverLettreLeet(mot){
    
    var motLeet = "";
    for (i=0; i<mot.length; i++){
        if(mot[i] === a){
            motLeet = motLeet + "4";
        } else if (mot[i] === b){
            motLeet = motLeet + "8";
        } else if (mot[i] === e){
            motLeet = motLeet + "3";
        } else if (mot[i] === l){
            motLeet = motLeet + "1";
        } else if (mot[i] === o){
            motLeet = motLeet + "0";
        } else if (mot[i] === s){
            motLeet = motLeet + "5";
        } else {
            motLeet = motLeet + mot[i]
        }
    }
    return motLeet;
}

console.log(trouverLettreLeet(mot));
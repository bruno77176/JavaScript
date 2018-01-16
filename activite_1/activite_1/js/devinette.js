/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");



    
for (var i = 1; i<=6 ; i++){
    
    var reponse = Number(prompt("Trouvez le nombre mystère entre 1 et 100."));
    
    // j'introduis une variable countdown pour informer le joueur sur le nb de tentatives dont il dispose.
    var countdown = 6 - i; 

    if( reponse === solution){
        console.log("Bravo, vous avez trouvé le nombre mystère : "+solution);
        console.log("Vous avez trouvé en "+i+" tentative(s)");
        // si le joueur trouve la solution, il faut sortir de la boucle, par exemple en affectant au compteur une valeur ne respectant plus la condition de la boucle : ci dessous, je définie i=7 ce qui permet de sortir de la boucle.
        i = 7;
    } else if (reponse < solution){
        console.log(reponse+". Le nombre mystère est plus grand.");
        console.log("Plus que "+countdown+" tentative(s).");
    } else {
        console.log(reponse+ ". Le nombre mystère est plus petit.");
        console.log("Plus que "+countdown+" tentative(s).");
    }
}

//le joueur a fait 6 tentatives et n'a pas trouvé la solution.
if (reponse !=solution){ 
    console.log("Perdu, vous n'avez pas trouvé le nombre mystère. La solution est : "+solution);
}

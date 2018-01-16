var mots = [];
var mot = "";
while (mot !== "stop"){
    mot = prompt("Veuillez saisir une liste de mots. Saisissez 'stop' lorsque vous avez terminé.");
    mots.push(mot);
    
}

for(i=0; i<mots.length; i++){
    console.log(mots[i]);
};

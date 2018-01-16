var valeurs = [11,3,7,2,9,12];

var somme = 0;

for(i=0; i<valeurs.length; i++){
    somme += valeurs[i];
};

console.log(somme);

var max = 0;

for(i=0; i<valeurs.length; i++){
    if(valeurs[i]>= max){
        max = valeurs[i];
    };
};
 console.log(max);

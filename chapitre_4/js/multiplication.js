var num = 0;

while ((num<1)||(num>9)){
    num = Number(prompt("saisissez un chiffre dont vous voulez la table de multiplication."));
}

console.log("Voici la table de multiplication de "+num);

for (i=1; i<=10; i++){
    var produit = num * i;
    console.log(num+" * "+i+" = "+produit);
}


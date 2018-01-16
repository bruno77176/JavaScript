function carre(x){
    var carre = x*x;
    return carre;
}

var nombre = Number(prompt("veuillez saisir un nombre."));

console.log(carre(nombre));

for (var i=1; i<=10 ; i++){
    console.log(carre(i));
}
function aire(rayon) {
    var aire = Math.PI* rayon* rayon;
    return aire;
}

function perimetre(rayon) {
    var perimetre = 2* Math.PI* rayon;
    return perimetre;
}

var rayon = Number(prompt("Combien mesure le rayon du cercle?"));
console.log("l'aire du cercle de rayon "+rayon+" est "+aire(rayon)+" et son périmètre est "+perimetre(rayon)+" !");

console.log("Voici les 3 mousquetaires :");

var mousquetaires = ["Athos", "Porthos", "Aramis"];

for(i=0; i<mousquetaires.length; i++){
    console.log(mousquetaires[i]);
};


console.log("A présent, ils sont 4 :");

mousquetaires.push("D'Artagnan");

mousquetaires.forEach(function(nom){
    console.log(nom);
});

var r = Number(prompt("Entrez le rayon d'un cercle :"));

var cercle = {
    rayon : r,
    perimetre : function(){
        var perimetre = 2*Math.PI*r;
        return perimetre;
    },
    aire : function(){
        var aire = Math.PI*r*r ;
        return aire;
    }
};

console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());
var Film = {
    init : function(titre, date, realisateur){
        this.titre = titre;
        this.date = date;
        this.realisateur = realisateur;
    },
    
    decrire : function(){
        description = this.titre+" ("+this.date+", "+this.realisateur+")";
        return description;
    }
};

var film1 = Object.create(Film);
film1.init("Le loup de Wall Street",2015, "Martin Scorsese");

var film2 = Object.create(Film);
film2.init("Vice-Versa", 2016, "Real inconnu");

var film3 = Object.create(Film);
film3.init("Babysitting", 2015, "Philippe Lacheau");

var films = [];
films.push(film1);
films.push(film2);
films.push(film3);

films.forEach(function(film){
    console.log(film.decrire());
});

function soustraction(nombre1, nombre2) {
   return nombre2 - nombre1;
}
console.log(soustraction(5, 7));

var etudiant = {
    nom: "Michel",
    prenom: "Joseph"
};
console.log(etudiant.prenom + etudiant.nom);

var a = {
    prop1: "toto"
};
var b = Object.create(a);
b.prop2 = "titi";
var c = Object.create(b);
c.prop3 = "tutu";
console.log(c.prop1);

var valeurs = [8, 9, 24, 35, 40, 54];
console.log(valeurs[1] + valeurs[5]);

var emp1 = {
    nom: "Ochon",
    prenom: "Paul"
};
var emp2 = {
    nom: "Diossy",
    prenom: "Daisy"
};
var employes = [emp1, emp2];
console.log(employes[1].prenom());
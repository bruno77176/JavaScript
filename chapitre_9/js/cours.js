var films = ["Le loupe de WallStreet", "Vice-versa", "Babysitting"];

console.log(films.length);

var tableauVide = [];

console.log(tableauVide.length);

console.log(films[0]);
console.log(films[1]);
console.log(films[2]);


for(i=0; i<films.length; i++){
    console.log(films[i]);
}

films.forEach(function(film){
    console.log(film)
});

films.push("les bronzés");


var Film = {
    init : function(titre, date){
        this.titre = titre;
        this.date = date;
    },
    
    decrire : function(){
        var description = this.titre+" ("+this.date+")";
        return description;
    }
};

var film1 = Object.create(Film);
film1.init("Le loupe de Wall Street", 2013);

var film2 = Object.create(Film);
film2.init("Vice-Versa", 2015);

var film3 = Object.create(Film);
film3.init("Babysitting", 2013);

var films=[];

films.push(film1);
films.push(film2);
films.push(film3);

films.forEach(function(film){
    console.log(film.decrire());
});

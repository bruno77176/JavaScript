var perso =   {
    nom : "Aurora",
    sante : 150,
    force : 25,
    decrire : function(){
    var description = this.nom+" a "+this.sante+" de durée de vie et "+this.force+" en force.";
    return description;
    }
};

// ajout d'une propriété expérience à l'objet perso, et modification de la méthode description : 

perso.xp = 0;

perso.decrire = function(){
    var description = this.nom+" a "+this.sante+" de durée de vie, "+this.force+" en force et "+this.xp+" en expérience.";
    return description;
}



console.log(perso.decrire());

//Aurora est blessée par une flèche
perso.sante = perso.sante - 20 ;

//Aurora trouve un bracelet de force
perso.force = perso.force + 10 ; 

//Aurora apprend une nouvelle compétence
perso.xp = perso.xp + 15 ;


console.log(perso.decrire());
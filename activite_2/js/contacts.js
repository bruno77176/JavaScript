//Activité : gestion des contacts

//création du prototype Contact
var Contact = {
    init : function(nom, prenom){
        this.nom = nom;
        this.prenom = prenom;
    },
    
    decrire : function(){
        var description = "Nom : "+this.nom+", Prénom : "+this.prenom;
        return description;
    }
};

//création du tableau Contacts avec 2 objects
var contact1 = Object.create(Contact);
contact1.init("Lévisse","Carole");

var contact2 = Object.create(Contact);
contact2.init("Nelsonne","Mélodie");

var contacts = [contact1, contact2];

//message de bienvenue
console.log("Bienvenue dans le gestionnaire des contacts !");


//boucle jusqu'à la saisie de l'option Quitter par l'utilisateur

var choix;

while (choix !== 0) {
    
    console.log("1 : Lister les contacts");
    console.log("2 : Ajouter un nouveau contact");
    console.log("0 : Quitter \n\n");

    choix = Number(prompt("Saisissez votre choix :"));

    if (choix === 1) {
        
        console.log("Voici votre liste des contacts : ");

        contacts.forEach(function(contact){
            console.log(contact.decrire());
        });
        console.log("\n")

    } else if (choix === 2) {
        
        var nom = prompt("Choisissez le nom du nouveau contact : ");
        var prenom = prompt("Choisissez le prénom du nouveau contact : ");

        var nouveauContact = Object.create(Contact);
        nouveauContact.init(nom, prenom);
        contacts.push(nouveauContact);
        
        console.log("Le contact a bien été ajouté.");
    }
    
}

console.log("Au revoir !");

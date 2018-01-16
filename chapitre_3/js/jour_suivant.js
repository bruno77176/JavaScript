var jour = prompt("Quel jour sommes-nous aujourd'hui?");

switch (jour) {
    case "lundi" :console.log("le jour suivant est mardi");
        break;
    case "mardi" : console.log("le jour suivant est mercredi");
        break;
    case "mercredi" : console.log ("le jour suivant est jeudi");
        break;
    case "jeudi" : console.log ("le jour suivant est vendredi");
        break;
    case "vendredi" : console.log ("le jour suivant est samedi");
        break;
    case "samedi" : console.log ("le jour suivant est dimanche");
        break;
    case "dimanche" : console.log ("le jour suivant est lundi");
        break;
    default : console.log ("jour non reconnu !");
}
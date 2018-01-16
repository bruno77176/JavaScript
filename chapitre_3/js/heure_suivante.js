var heure = Number(prompt("heure?"));
var minutes = Number(prompt("minutes?"));
var secondes = Number(prompt("secondes?"));

if ((heure > 23)||(minutes> 59)|| (secondes > 59)){
    console.log("erreur de saisie.");
} else if ((heure === 23)&&(secondes ===59)&&(minutes ===59)){
    console.log("Dans une seconde, il sera 0 h 0 min 0 sec");
}
else if ((secondes ===59)&&(minutes ===59)){
    heure ++;
    console.log("Dans une seconde, il sera "+heure+" h 0 min 0 sec");
} else if (secondes === 59){
    minutes ++;
    console.log("Dans une seconde, il sera "+heure+" h "+minutes+" min 0 sec");
} else {
    secondes ++;
    console.log("Dans une seconde, il sera "+heure+" h "+minutes+" min"+secondes+" sec");
};

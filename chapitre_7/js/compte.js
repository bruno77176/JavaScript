var compte = {
    titulaire : "Alex",
    solde : 0 ,
    crediter : function(p){
        this.solde = this.solde + p;
        
    },
    debiter : function(p){
        this.solde = this.solde - p;
    },
    decrire : function(){
        var description ="titulaire : "+this.titulaire+", solde : "+this.solde+" euros.";
        return description;
    }
};

console.log(compte.decrire());

compte.crediter(200);
compte.debiter(150);

console.log(compte.decrire());
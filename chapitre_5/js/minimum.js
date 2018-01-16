function min(a, b){
    if (a <= b){
        return a;
    } else return b;
}

var nb1 = Number(prompt("premier nombre?"));
var nb2 = Number(prompt("second nombre?"));

console.log(min(nb1, nb2));

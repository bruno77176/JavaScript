var num1 = Number(prompt("Entrez un nombre"));
var num2 = Number(prompt("Entrez un autre nombre"));

if (num1 < num2){
    console.log(num1 + " est plus petit que "+num2);
}
else if (num1 > num2){
    console.log(num1 + " est plus grand que "+ num2);
}
else {
    console.log(num1+" et "+num2+" sont egaux.");
}
var num = Number(prompt("Choisisez un nombre"));

for (var i = num ; i < num + 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " est pair");
    } else {
        console.log(i + " est impair");
    }
}
;
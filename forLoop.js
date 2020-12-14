//### 01 - Somme des carrés
//Calculez la somme des carrés des nombres de 5 à 10
//Rappel: le carré d'un nombre est sa valeur, multipliée par lui même. exemple: 5x5 = 25
//Resultat attendu: 355

var sum = 0;
for (var i = 5; i <= 10; i++) {
    sum = sum + i * i;

}
console.log(sum);

//Comptez combien il y a de mutliple de 7 (pensez au modulo !) entre 100 et 1000 Résultat attendu: 128


var total = 0;
for (var i = 100; i != 1000; i++) {
    if (i % 7 === 0) {
        total += 1;
    }
}
console.log(total);

//### 03 - Chanceux !! Lancez un dé 20 fois et affichez la somme de tout les résultats plus grand ou égale à 5
var min = 1;
var max = 6;
var dice = null;
var total2 = null;
for (i = 1; i <= 20; i++) {
    console.log(total2 = Math.floor(Math.random() * (max - min + 1) + min))
    if (total2 >= 5) {
        dice += total2;
    }
}
console.log(dice);



//### 05 - Des setiob A l'aide d'un papier et crayon, devinez ce qu'affiche le code suivant (interdit d'executer le code !)

var box1 = 12;
var box2 = 5;
for (var i = 12; i < 14; i++) {
    box1 = box2;
    console.log(box1 + box2);
    box2 = box1 + i;
}
console.log(box1);
console.log(box2);
console.log(i);

//### 05 - Des setiob A l'aide d'un papier et crayon, devinez ce qu'affiche le code suivant (interdit d'executer le code !)

var box1 = 12;
for (var i = 12; i !== 0; i = i - 3) {
    console.log(box1);
    box1 = box1 + i;
}
console.log(box1);
console.log(i);

//### 06 - Encore des boites A l'aide d'un papier et crayon, devinez ce qu'affiche le code suivant (interdit d'executer le code !)

var box1 = 0;
var box2 = 3;
for (var i = 0; i > -4; i--) {
    if (i % 2 === 0) {
        console.log(box1 + i);
        box2++;
    } else {
        console.log(box2 + i);
        box1--;
    }
}

console.log(box1);
console.log(box2);
console.log(i);
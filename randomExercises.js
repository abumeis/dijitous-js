// Exercice 4: afficher tout les multiples de 7 entre 0 et 1000



// Exercice 1: afficher la somme de tout les entier allant de 25 à 75
var somme = 0;
for (var i = 25; i <= 75; i++) {
    var somme = somme + i;
}

console.log(somme);


// Exercice 2: afficher la multiplication de tout les entier allant de 10 à 15
var multi = 1
for (var i = 10; i <= 15; i++) {
    multi = multi * i;

}
console.log(multi);

// Exercice 3: afficher la somme des entiers pairs allant de 0 à 100

var somme = 0;
for (var i = 0; i <= 100; i = i += 2) {
    somme = somme + i;
}
console.log(somme);



var box1 = 5;
var box2 = 6;
var i = 0;
while (i < 3) {
    i++;
    console.log(box1 + box2 + i);
    box1 = box1 + box2;
}
console.log(i);


// retournera tous les nombres de 0 à 20 !
var goal = 20;
for (var i = 0; i <= goal; i++) {
    console.log(i);
}
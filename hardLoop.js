// 01 - Sum
//Créez un tableau vide `numbers`
//à l'aide d'une boucle for, ajouter 50 éléments aléatoire entre 0 et 100 dans votre tableau
// à l'aide d'une autre boucle for, calculez la somme des éléments de votre tableau





var number = [];
var elements = null;
for (var i = 0, elements = 100; i <= 50; i++) {
    number.push(Math.floor(Math.random() * elements))
    var sommme = 0;
    for (var i = 0; i < number.length; i++) {
        sommme += number[i];
    }
}
console.log(number);
console.log(sommme);





//### 02 - Max

//Créez un tableau vide `numbers`

//à l'aide d'une boucle for, ajouter 50 éléments aléatoire entre 50 et 200 dans votre tableau

//à l'aide d'une autre boucle for, trouvez le maximum des éléments de votre tableau (sans utiliser la fonction)

var min = 50;
var max = 200;
var number = [];
for (i = 1; i <= 50; i++) {
    number.push(Math.round(Math.random() * (max - min + 1) + min))
    var maxValue = null;
    for (var i = 1; i < number.length; i++) {
        var maxValue = Math.max(...number);
    }
}
console.log(number);
console.log(maxValue);




//### 03 - Unique
//Créez un tableau vide `numbers`
//à l'aide d'une boucle for, ajouter 50 éléments aléatoire entre 50 et 200 dans votre tableau
//à l'aide d'une boucle while affichez le premier élément de votre tableau superieur ou égal à 75 et inferieur ou égal à 100

var min = 50;
var max = 200;
var number = [];
for (i = 1; i <= 50; i++) {
    number.push(Math.round(Math.random() * (max - min + 1) + min));
    while (true) {
        if (number.CharAt[0] >= 75 && number.CharAt[0] <= 100);
        break;
    }
    console.log(number);

}

console.log(number);



//### 04 - Nested Loop
//Créez un tableau `words` avec les mots suivants
//var words = ["hello", "goodbye", "yes", "no", "stop", "go go go"]
//A l'aide d'une boucle for, utilisez la méthode split pour créer un tableau contenant les lettres de chaque mot
//A l'aide d'une deuxieme boucle for (à l'interieur de la première), comptez le nombre de "o" de chaque mot.
//Retournez le nombre total de "o"
//Résultat attendu: 8





//var item = shoppingList[i]; // Egg
//if (item.charAt(0).toUpperCase() === "B") {
//console.log(item);}
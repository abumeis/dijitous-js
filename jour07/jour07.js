//Dans le fichier `jour07.js`, à l'aide du module `fs`, affichez le contenu de `jour07.txt` dans la console
//Faites en sorte que chaque clé / valeur apparaisse sur une ligne séparée
var fs = require("fs");
fs.readFile("./jour07.txt", function(error, data) {
    console.log(error);
    console.log(data.toString());
    console.log(data.toString().split('\n'));

})

//02 - Map Double
// Créez une variable `array` contenant un tableau qui contiendra les valeurs `1`, `2`, `3`, `4` et `5`
//Créez une variable `double` qui appellera la méthode `.map()` pour contenir les doubles des valeurs de `array`
//Affichez les valeurs de `double` dans la console

var array = [1, 2, 3, 4, 5];
var double = array.map(function(element) {
    return element * 2
});
console.log(double)

function d(double) {
    return double.map(function(element) {
        return element * 2
    })
}

console.log(d(array))




//## 03 - Map Names
var longName = [{
        firstName: "Jane",
        lastName: "Doe"
    },
    {
        firstName: "John",
        lastName: "Smith"
    }
]
var shortNames = longName.map(function(element) {
    return element.firstName + (" ") + element.lastName

})
console.log(shortNames);



//## 04 - Filter Numbers
//- Créez une variable `array` contenant un tableau qui contiendra les valeurs `1`, `"toto"`, `34`, `"javascript"` et `8`
// Créez une variable `numbers` qui appellera la méthode `.filter()` pour contenir les **nombres** de `array`
//Affichez les valeurs de `numbers` dans la console
var array = [1, `"toto"`, 34, "javascript", 8];
var number = array.filter(function(element) {
    return (parseInt(element) === element);
});
console.log(number);


// 05 - Filter Even

//Créez une variable `numbers` contenant un tableau qui contiendra les valeurs `1`, `2`, `3`, `4`, `5`, `6`, `7` et `8`
//Créez une variable `even` qui appellera la méthode `.filter()` pour contenir les nombres **pairs** de `numbers`
//Affichez les valeurs de `even` dans la console

var number = [1, 2, 3, 4, 5, 6, 7, 8];
var evens = number.filter(function(element) {
    if (element % 2 === 0) {
        return element;
    }
})
console.log(evens);
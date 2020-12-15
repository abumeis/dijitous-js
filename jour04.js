// 01 - Object
//Créez une variable `cat` contenant les clés suivantes : `name` de valeur `"Garfield"`, `age` de valeur `3` et `isCute` de valeur `true`
//Affichez `cat` dans la console
//Affichez la valeur de `age` dans la console
//À l'aide d'une condition, affichez "So cute !" si la valeur de `isCute` est `true`

var cat = {
    name: "Garfield",
    age: 3,
    isCute: true,
}
console.log(cat);
console.log("age", cat.age);
if (cat.isCute === true) {
    console.log(cat.isCute, "So cute !");
}


//## 02 - Combine

// Créez une variable `cat2` qui reprend la structure de cat : mettez d'autres valeurs pour chaque clé

//Créez une variable `cats` qui contient un tableau contenant les variables `cat` et `cat2`
//Affichez la valeur de `age` de `cat` dans la console
//Affichez la valeur de `isCute` de `cat2` dans la console

var cat2 = {
    name: "lolo",
    age: 2,
    isCute: false,
}
var cats = [cat, cat2];
console.table(cats);
console.log(cat.age);
console.log(cat2.isCute);



//03 - Even

//Créez une fonction `checkIfEven` qui reçoit un paramètre `num`
//Dans la fonction, à l'aide d'une condition, affichez "even" si `num` est pair, "odd" si il est impair
//Appelez votre fonction plusieurs fois avec des chiffres différents comme argument pour vérifier les résultats


function checkIfEven(num) {
    if (num % 2 === 0)
        console.log("even");
    else
        console.log("odd");
}
checkIfEven(17);



// 04 - Compare
//Créez une fonction `compare` qui reçoit deux paramètres `num` et `num2`
//Dans la fonction, à l'aide d'une condition, affichez selon les cas :
//"`num1` is bigger" si `num1` est plus grand
//"`num2` is bigger" si `num2` est plus grand
// "both are the same" si ils sont égaux
//Appelez votre fonction plusieurs fois avec des chiffres différents pour vérifier les résultats
function compare(num, num2) {
    if (num > num2) {
        console.log("`num1` is bigger");
    } else if (num < num2) {
        console.log("`num2` is bigger");
    } else {
        console.log("both are the same")
    }
}
compare(100, 100);



//05 - Add Up

//Créez une fonction `addUp` qui reçoit un paramètre `num`
//À l'aide d'une boucle, ajouter les chiffres de 1 à `num`
//Appelez votre fonction avec le chiffre 12 et vérifiez que vous obtenez 78

function addUp(num) {
    var sum = 0
    for (var i = 1; i <= num; i++) {
        sum += i
    };
    console.log(sum)

}
addUp(12);
addUp(13);






//06 - Time

//Créez une fonction `format` qui reçoit un paramètre `num` qui représente des secondes
//Faites en sorte que la fonction retourne un format `heures : minutes : secondes`
//Appelez votre fonction avec l'argument `3700` et vérifiez que vous obtenez `1:1:40`

function format(num) {
    var secondes = num;
    var hours = Math.floor(secondes / 3600);
    var minutes = Math.floor((secondes - (hours * 3600)) / 60);
    var seconds = secondes - (hours * 3600) - (minutes * 60);

    return hours + "h:" + minutes + "m:" + seconds + "s";
}

console.log(format(700000));




//  Bonus

//Créez une fonction `generatePassword` qui reçoit un paramètre `num`
//La fonction génère un mot de passe aléatoire, avec autant de lettres que la valeur de `num`
//Le mot de passe contiendra uniquement des lettres majuscules
//Si `num` est plus petit que 6 et plus grand que 15, la fonction retourne "error"

function randomPassword(num) {
    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    num = chars;

    if (Number(length)) {
        length = Number(length)
    } else {
        return console.error("Enter a valid length for the first argument.")
    }




    for (var i = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);

    }
    return pass;
}

console.log(pass)

//Bonus II

//Créez une fonction `launchDice` qui reçoit un paramètre `numberOfDice`
//La fonction va lancer aléatoirement `numberOfDice` dés et retourner leur somme
//Appelez la fonction deux fois, une fois pour le `joueur1` et `joueur2`
//Afficher le joueur gagnant (celui ayant le plus grand score)
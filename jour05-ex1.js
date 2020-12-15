//01 - Calculator
//Créez une fonction `calculate` qui recevra trois paramètres (deux nombres entiers et un opérateur `+`, `-`, `*`, `/` ou `%`)
//Créez une condition (méthode au choix) pour chaque valeur possible de l'opérateur qui retournera le résultat du calcul
//Affichez le résultat dans la console (vérifiez que pour les arguments `5`, `*` et `4` vous obtenez bien `20`)
//Vous devrez donner les arguments dans le terminal en appelant le programme alors attention aux paramètres !
//Si vous ne donnez pas trois arguments, le programme doit afficher "error" dans la console


function calculate(num1, oper, num2) {
    var a = parseInt(num1);
    var b = parseInt(num2);

    if (oper === "*") {
        return a * b;

    }
}

if (process.argv.length === 5) {
    console.log(calculate(process.argv[2], process.argv[3], process.argv[4]));
} else {
    console.log("error");
}


// 02 - Table

//Créez une fonction `multiply` qui recevra un paramètre (un nombre entier)
//Faites en sorte que la fonction affiche la table de multiplication de ce nombre dans la console (de 1 à 10) ligne par ligne
//Vous devrez donner l'argument dans le terminal en appelant le programme
//Si vous ne donnez pas d 'argument, le programme doit afficher "error" dans la console
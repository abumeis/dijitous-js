// 02 - Table

//Créez une fonction `multiply` qui recevra un paramètre (un nombre entier)
//Faites en sorte que la fonction affiche la table de multiplication de ce nombre dans la console (de 1 à 10) ligne par ligne
//Vous devrez donner l'argument dans le terminal en appelant le programme
//Si vous ne donnez pas d 'argument, le programme doit afficher "error" dans la console

var { multiply, addition, } = require("./table-utils.js");
multiply()
if (process.argv.length === 3) {
    (multiply(process.argv[2]));
} else {
    console.log("error");
}



addition(); {

    if (process.argv.length === 3) {
        (addition(process.argv[2]));
    } else {
        console.log("error");
    }
}
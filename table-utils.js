//03 - Separate Table
//Créez un fichier `table-utils.js`
//Mettez votre fonction `multiply` dans ce fichier, et ajouter en une deuxieme `addition` qui reprend le même principe mais avec une addition au lieu d'une multiplication
//Exportez les deux fonctions graces aux modules, et importez les dans votre fichier précedant pour refaire marcher votre code
//Affichez la table d'addition
function multiply(num1) {
    var i = "";
    for (var i = 1; i <= 10; i++) {
        console.log(num1 * i);
    }


}


//adding number
function addition(num1) {
    var i = "";
    for (var i = 1; i <= 10; i++) {
        console.log(num1 + i);
    }


}

module.exports = {
    multiply,
    addition,
}
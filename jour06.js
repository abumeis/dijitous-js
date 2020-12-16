//01 - Format
//Créez une fonction `formatDate` qui reçoit en paramètre une string (au format aaaa-mm-jj)
//La fonction doit renvoyer la date au format jj/mm/aaaa
//Appelez la fonction et affichez son résultat dans la console

function formatDate(date) {
    var datechoice = new Date(date);
    console.log(`${datechoice.getDate()} ${datechoice.getMonth()+1} ${datechoice.getFullYear()}`);
}
formatDate("1991-07-17");


//Créez une fonction `calculateAge` qui reçoit en paramètre une date au format string (qui sert de date de naissance)
//La fonction doit calculer l'âge de la personne (en années) née a ce moment là, en fonction de la date d'aujourd'hui
//Appelez la fonction et affichez son résultat dans la console

function calculateAge(dateDeNaissance) {
    var today = new Date();
    var birthDate = new Date(dateDeNaissance);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }

    return age;
}

console.log(calculateAge("07/17/1991"));

//## 03 - Validator

// À l'aide du package `prompt`, créez une fonction `checkProfile` qui demande à l'utilisateur un email, un username et un mot de passe
//La fonction vérifiera que l'utilisateur a saisi des informations valides (regardez la doc, et plus precisement les `pattern`) :
// l'email doit être au bon format
// le username ne doit comporter que des lettres, chiffres et tirets (les petits)
// le mot de passe doit contenir au moins 6 caractères, au moins une lettre et au moins un chiffre, et peut contenir des tirets
//Si tout est bon, elle retourne "All good !", sinon elle retourne "error"


var prompt = require('prompt');

var schema = {
    properties: {
        mail: {
            pattern: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
            message: 'Your email must have like this format forexample@gmail.com',
            required: true
        },

        username: {
            pattern: /^[a-z\d\-]+$/,
            message: 'Name must be only letters, , or dashes',
            required: true
        },
        password: {
            pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\-]{6,}$/,
            message: 'password must contain at least 6 characters, at least one letter and at least one number',
            hidden: true
        }

    }
};

prompt.start();
prompt.get(schema, function(err, result) {
    console.log('Command-line input received:');
    console.log('  name: ' + result.name);
    console.log('  password: ' + result.password);
});
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
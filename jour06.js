//01 - Format
//Créez une fonction `formatDate` qui reçoit en paramètre une string (au format aaaa-mm-jj)
//La fonction doit renvoyer la date au format jj/mm/aaaa
//Appelez la fonction et affichez son résultat dans la console

function formatDate(date) {
    var datechoice = new Date(date);
    console.log(`${datechoice.getDate()} ${datechoice.getMonth()+1} ${datechoice.getFullYear()}`);
}
formatDate("1991-07-17");
a = "7";
d = parseInt(a)
b = 7;
console.log(d + b);
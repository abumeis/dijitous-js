// Alphabet
//Créer une fonction `sortLetters` qui reçoit une string en paramètre
//La fonction retourne une string avec les mêmes lettres, dans l'ordre alphabétique
//Ne pas utilisez la méthode .sort()
//Appelez votre fonction avec "konexio" comme argument et vérifiez que vous obtenez "eiknoox"


function sortLetters(str) {
    return str.split('').sort().join('');
}
console.log(sortLetters("konexio"));



//## 02 - XOXO
//Créez une fonction `countEach` qui reçoit une string contenant des x et des o en paramètre
//La fonction retourne true si il y a autant de x que de o, sinon elle retourne false
//Vérifiez que l'argument "xxxoooox" déclenche un true, et que "xox" déclenche un false

function countEach(str) {
    var lettres = str;
    var countx = 0;
    var counto = 0;

    for (i = 0; i < lettres.length; i++) {
        if (lettres.charAt(i) === "x") {
            countx = countx + 1;

        } else if (lettres.charAt(i) === "o") {
            counto = counto + 1;

        }
    }
    if (countx === counto) {
        console.log(true)
    } else(
        console.log(false)
    )


};
countEach("xxxoooox");


//03 - Palindrome
//Créez une fonction `checkPal` qui reçoit une string en paramètre
//La fonction retourne "Palindrome !" si le mot se lit dans les deux sens, sinon elle retourne "Nope"
//Vérifiez que vous obtenez un positif avec l'argument "racecar" mais pas avec "laptop"

function checkPalindrom2(str) {
    //first solution

    var word = str.split("").reverse().join("");
    if (word === str) {
        console.log('Palindrome!');
    } else {
        console.log('NOPE!');
    }
}
checkPalindrom2('racecar');


//2em solution
function checkPalindrom(str) {
    var word = true;
    for (var i = 0; i <= str.length - 1; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            word = false;
        }
    }
    if (word == false) {
        console.log('Nope!');
    } else {
        console.log('Palindrome!');
    }
}


checkPalindrom('laptop');
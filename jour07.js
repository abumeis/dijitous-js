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
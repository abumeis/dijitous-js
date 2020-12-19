function compterVoyelles(str) {
    var Count = 0;
    for (var i = 0; i <= str.length - 1; i++) {
        if (str.charAt(i) == "A" || str.charAt(i) == "a" ||
            str.charAt(i) == "E" || str.charAt(i) == "e" ||
            str.charAt(i) == "I" || str.charAt(i) == "i" ||
            str.charAt(i) == "O" || str.charAt(i) == "o" ||
            str.charAt(i) == "U" || str.charAt(i) == "u" ||
            str.charAt(i) == "é" || str.charAt(i) == "è" ||
            str.charAt(i) == "Ô" || str.charAt(i) == "ô")
            Count += 1;
    }
    return Count;
}
console.log(compterVoyelles("Ahmed"));
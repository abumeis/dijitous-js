function secretCode(text) {
    var result = [];
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
        "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
        "w", "x", "y", "z"
    ]
    text = text.replace(/\W*\d+/g, '').split('');
    for (var i = 0; i < text.length; i++)
        result.push(alphabet.indexOf(text[i]) + 11);
    return result.join('');
}

console.log(secretCode("secret"));
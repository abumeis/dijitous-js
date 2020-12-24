//Créez les objets `song1`, `song2` et `song3` contenant les clés suivantes : `title` pour le titre, `artist` pour le chanteur ou le groupe, et `year` pour l'année de sortie. Assignez comme valeurs celles de vos trois chansons préférées.
//Créez une variable `music` qui contient un tableau contenant ces trois variables.
//Affichez dans la console : la valeur `title` de `song1`, la valeur `artist` de `song3` et la valeur `year` de `song2`.




var song1 = {
    title: "The Silence",
    artist: "Manchester Orchestra",
    year: "2018",
}
var song2 = {
    title: "INTRO",
    artist: "THE XX",
    year: "2013",
}

var song3 = {
    title: "The Diary of Jane ",
    artist: "Breaking Benjamin",
    year: "2007",
}
var music = [song1, song2, song3];
console.log(music[0].title);
console.log(music[1].artist);
console.log(music[2].year);
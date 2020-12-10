// 01 - Array
var fruits = ["mango", "lemon", " blueberry"];
console.log(fruits);


//02 - Access
var ingredients = ["eggs", "milk", "butter"];
console.log(ingredients[1]);
console.log(ingredients.indexOf("butter"));


//03 - Add and Remove
var objects = ["pen", "book", "lamp"];
objects.unshift("chair");
objects.pop();
objects.push("laptop");
objects.shift();
console.log(objects);


// 04 - Order
var number = [4, 10, 8, 12, 6];
console.log(number.reverse());
console.log(number.sort((a, b) => a - b));


// 05-Boucle

var total = 0;
var limit = 10;
for (var i = 0; i <= 10; i++) {
    total = total + i;
}
console.log(total);



//06 - Reverse
var sentence = "Hello Konexio!";
var reverse = "";
for (var i = sentence.length - 1; i >= 0; i--) {
    reverse = reverse + sentence[i];
}
console.log(reverse);



//Bonus

for (i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("fizzbuzz");
    } else if (i % 5 == 0) {
        console.log("buzz");
    } else if (i % 3 == 0) {
        console.log("fizz");
    } else {
        console.log(i);
    }
}
//Bonus

var promo4 = ["Ahmed", "Atif", "Hamada", "Allan", "Xav", "Seb", "Kitty", "Thi", "Nico", "EWA", "Bah", "Hassan", ];
var randomName = promo4[Math.floor(Math.random() * promo4.length)];


console.log(randomName)
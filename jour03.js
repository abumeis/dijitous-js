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





//06 - Boucle
var sentence = "Hello Konexio!";
var reverse = "";
for (var i = sentence.length - 1; i >= 0; i--) {
    reverse = reverse + sentence[i];
}
console.log(reverse);
// 1 Hello world:
console.log("Hello World !");


// 2 testing my name :
var test = "My name is Ahmed";
console.log(test);


// 3 testing my name again :
var name = "Ahmed";
console.log("Nice to meet you " + name);

// 4 testing the lenght :
var testLength = "I'm very long !";
console.log(testLength.length);


// 5 replacement words:
var food = "croissant is meh";
console.log(food.replace("meh", "so good"));


// 6 testing upper and lower case:
var basic = "This is Cool";
var basicUp = basic.toUpperCase();
console.log(basicUp);
var basicDown = basic.toLowerCase();
console.log(basicDown);

// 7 Split words :
var word = "banana";
var letters = word.split('');
console.log(letters);

// 8 Template :
var age = "29";
var template = "i'm " + age + " years old";
console.log(template);







//Bonus

var total = 0;
var limit = 10;
while (total <= 10) {
    total = 0 + (total++);

    console.log(total);
}
// ## 01 - Number:

var integer = 102;
var float = 13.9;

console.log(integer, float);



//## 02 - Convert

var basic = 34;
var stringified = basic.toString();
console.log(stringified);

//## 03 - Round

var num = 1.5;
var rounded = Math.round(num);
console.log(rounded);

//## 04 - Arithmétique

var test = 12;
var bis = 5;
console.log(test + bis);
console.log(test - bis);
console.log(test * bis);
console.log(test / bis);
console.log(test ** bis);
console.log(test % bis);


//## 05 - Comparaison
var test = 143;
var bis = 219;
if (test > bis) {
    console.log("true");
} else {
    console.log("false");
}

// 06 - Condition
var limit = 50;
var score = 64;
if (score >= limit) {
    console.log("OK good");
} else {
    console.log("Oh nooooooooo");
}

//## 07 - Condition II
var password = "azerty";
if (password.length > 5) {
    console.log("Password is secured");
}


// 08 - Condition III 

if (password.length > 5 && score >= limit) {
    console.log("Everything is good");
} else if (password.length > 5 || score <= limit) {
    console.log("Something is good");
} else {
    console.log("Nothing is good");
}

// Bonus
var min = 1;
var max = 6;
var random = Math.floor(Math.random() * (max - min + 1) + min);
if (random == 6) {
    console.log("Yes I win ");
} else {
    console.log("So close");
}

// Bonus II
var month = "August";
switch (month) {
    case "December", "January", "February":
        console.log("Winter");
        break;
    case "March", "April", "May":
        console.log("Spring");
        break;
    case "June", "July", "August":
        console.log("Summer");
        break;
    case "September", "October", "November":
        console.log("Fall");
        break;
    default:
        console.log("That's not a season...");
}
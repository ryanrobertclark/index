


/*

VARIABLES

let age;
age = 21; //number
let firstName = "Ryan"; //string
let students = 20;
students *= 5;
age = age + 69




ARITHMETIC

let var = Number(var);
var += 1;
var *= 2;




CONSOLE

console.log("Hello", firstName)
console.log("you are", age, "years old")




CREATE STRING

document.getElementById("p1").innerHTML = "happy birthday, you are", age, "years old";
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p4").innerHTML = students;




TYPE CONVERSATION STRING TO NUMBER

let age = window.prompt("How old are you");

age = Number(age);
age += 1;

document.getElementById("p1").innerHTML = "happy birthday, you are ";
document.getElementById("p2").innerHTML = age;
document.getElementById("p3").innerHTML = "years old";




TEXT BOX DATA

let username;

document.getElementById("myButton").onclick = function(){

    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " + username;
}




CONSTANT

const pi = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

circumference = 2 * pi * radius;

console.log("the circumference is:", circumference);





MATH FUNCTIONS


let x = 3.14;

x = Math.round(x); ROUND
x = Math.floor(x); ROUND DOWN
x = Math.ceil(x); ROUND UP
x = Math.pow(x, 2); POWER OF (EXPONENT)
x = Math.sqrt(x); SQ ROOT
x = Math.abs(x); ABSOLUTE VALUE, DISTANCE FROM 0

x = Math.PI; MAKE X PI


console.log("rounded number is", x);






HYPOTENUSE PROGRAM


let a;
let b;
let c;

a = window.prompt("Enter side A");
a = Number(a);

b = window.prompt("Enter side B");
b = Number(b);

c = Math.pow(a, 2) + Math.pow(b, 2)
c = Math.sqrt(c);

console.log("Side C:", c);

*/



document.getElementById("submitButton").onclick = function(){

a = document.getElementById("aTextBox").value;
a = Number(a);
    
b = document.getElementById("bTextBox").value;
b = Number(b);
    
c = Math.pow(a, 2) + Math.pow(b, 2)
c = Math.sqrt(c);
    
document.getElementById("cLabel").innerHTML = "Side C: " + c + " ft";


}
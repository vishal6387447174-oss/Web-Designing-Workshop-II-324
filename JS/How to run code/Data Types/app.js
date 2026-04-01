let name="Priya";
console.log(name);

//primitive data types
//non-primitive data types

// primitive data types
// string
let name1="John";
console.log(name1);
// number
let age=30;
console.log(age);
// boolean
let isStudent=true;
console.log(isStudent);
// UNDEFINED
let address;
console.log(address);
// NULL
let city=null;
console.log(city);

// bigint
let bigNumber=123456789012345678901234567890n;
console.log(bigNumber);
console.log(typeof bigNumber);
// symbol
let sym1=Symbol("sym");
let sym2=Symbol("sym");
console.log(sym1);
console.log(sym2);
console.log(sym1===sym2);
// non-primitive data types
// object //values are stored in key-value pairs
let person ={
    name:"Alice",
    age:25,
    isStudent:false
};
console.log(person);
console.log(person.name);
console.log(person["age"]);

// array
let numbers=[1,2,3,4,5];
console.log(numbers);

// let fruits=[1,apple,true,null,undefined];
// console.log(fruits);
let arr1=[1,"Hello","world",56];
console.log(arr1);
// push()
let arrnew=[1,2,3];
arrnew.push(4);
console.log(arrnew);
// pop()
arrnew.pop();
console.log(arrnew);
// shift()- removes first element from array
arrnew.shift();
console.log(arrnew);
// unshift()- adds an element to the beginning of the array
arrnew.unshift(5);
console.log(arrnew);
// for loop on array
for (let i=0;i < arrnew.length;i++) {
    console.log(arrnew[i]);
}

// for each loop on array //forEach() method executes a provided function once for each element
arrnew.forEach(function(element) {
    console.log(element);
});

//map() method creates a new array populated with the results of calling a provided function on every element in the calling array
let squaredArr=arrnew.map(function(element) {
    return element+element;
});
console.log(squaredArr);
//filter() method creates a new array with an elements that pass the implemented by the provided function
let evenArr=arrnew.filter(function(element) {
    return element % 2 ===0;
});
console.log(evenArr);
//reduce() method executes a reducer function on each element of the array, resulting in a single output value
let sum=arrnew.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
},0);
console.log(sum);

//function //reusable block of code that performs a specific task
function greet() {
    console.log("Hello, World!");
}
greet();
//function with parameters
function greet(name){
    console.log("Hello, " + name + "!");
}
greet("Alice");
//function with return value
function add(a,b) {
    return a + b;
}
let result=add(5,10);
console.log(result);

//function expression //a function can also be defined as an expression and stored in a variable
let greet2=function(name) {
    console.log("Hi, " + name + "!");
}
greet2("Bob");

//template literals //allows embedding expressions inside string literals using backticks
let name3="Charlie";
let greeting=`Hello, ${name3}!`;
console.log(greeting);

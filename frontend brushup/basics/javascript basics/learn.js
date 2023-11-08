//var andd const in js
//const -> value cant be cahnged
const x=4;
var z=3; // normal variable
console.log(x+z);
//////////////////////////////////////////////////////////

//hoisting -> we can use variable before declaration
// variable and function are hoisted which means their declaration is moved on the top of the code
console.log(a); //output: undefined  , kyuki kewal declartion top p gya
var a=12;

z=9
console.log(z); // output: 9
var z;

// undefined vs not defined
// if something is declared but have no value -> undefined
// if something is  not evem  defined -> not defined
// consloe.log(t); //not-defined

/////////////////////////////////////////////////////////////

//types in js :- primitive and reference
//primitives -> number ,string,null,undefined .....
//reference -> [] () {}

var a= [12,22];
var b=a;
b.pop();
console.log(b); //12
console.log(a); //12

//you can not directly copy reference type 

////////////////////////////////////////////////////////////

//conditionals -- if,else,else if (same as c++)
//switch,ternary (same as c++)
//loops for and while (basic) (same as c++)
//functions

function abcd(){
    console.log("hello");
}
abcd();

function hello(a){ //function with parameters
    console.log(a);
}
hello(45); //call with arguments

///////////////////////////////////////////////////////

//arrays
u=[1,3,4,4,5,7]; 
var e=[1,2,3];

console.log(u);
console.log(u[2]);
console.log(e);

//push pop shift unshift splice in array

u.push(8);
console.log(u);
u.pop()
console.log(u);
u.unshift(0); //add value in the start of the array
console.log(u);
u.shift() //shuru se ek value htata h
console.log(u);
u.splice(2,1); //remove value from given index , till count given
console.log(u);

/////////////////////////////////////////////////////////

//objects
//blank object 
var a = {};

//filled objects
var a={
    age:24,
    name:"hey",
    email:"abcd@gmail.com",
    work: function(){}
}
a.age=23;
console.log(a.age);
//props (properties) -> age,name,email
//method -> work
console.log(a.name);




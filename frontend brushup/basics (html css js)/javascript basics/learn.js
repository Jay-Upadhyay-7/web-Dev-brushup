//var andd const in js
//const -> value cant be cahnged
const x=4;
var z=3; // normal variable
console.log(x+z);

// js es5 ->old version
// js es6 -> new version

//var vs let differnce

// var -> es5
// let,const -> es6

//var function scoped hota h
//let braces scoped hota h

function abc(){
    for(var i=1;i<12;i++){
        comsole.log(i);
    }
    console.log(i); // 12 // as var is function scoped
}

function aabc(){
    for(let i=1;i<12;i++){
        comsole.log(i);
    }
    console.log(i); // error 
}

//var adds itself to window object (which is bad, as it is visible in browser)
//let and const doesnt

// js language mein kuch cheeje nahi hai jo hum use kar sakte hai aur vo 
// cheeje hume js se nahi balki browser se milti hai, aise saare features jo js
// ka part nahi hai but fir bhi use kar skte hai unhe hum dhoond skte hai window object m
// window object m browser se related fetaure hote h like alert,promopt , console,document etc ye sab broswer k part h

////////////////////////////////////

// == compares reference
// === compare values

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

//how to copy refernce value

var h=[1,2,3,4,5]
var cp=[...a]  //this will create copy
cp.pop(); //now this will only remove value from cp

//copying object

var obj={name :"jay"};
var copyobj={...obj};
copyobj.name="hello"

////////////////////////////////////////////////////////////

//conditionals -- if,else,else if (same as c++)
//switch,ternary (same as c++)
//loops for and while , do while (basic) (same as c++)

// for each 

var array = [1,2,3,4,4]
array.forEach(function(val){
    console.log(val+2);
})

//for in , objects par loop karne k liye hota hai for in loop

var objt={
    name:"jay",
    age:32,
    prime:"yes"
}
for(var key in objt){
    console.log(key);
    console.log(objt[key]); //value
}


//functions

//falsy values in js 0 , false , undefined , null , NaN , document.all

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
delete a.email;

///////////////////////////////////////////////////////////////

//browser context API
// 1. window object 2.stack 3.heap memory

//////////////////////////////////////////////////////////////

// Execution context and lexical environment

// exwcution context matlab jab bhi ham function chlayenge , function apna
// khud ka imaginary conatainer bna lega jismein teen cheeze hongi
// 1-> variable
// 2-> function inside that parent function
// 3-> lexical environment of that function
//isi imaginary conatiner ko execution context kahte hai

function abcder(){
    var a=23;
    function def(){
        var b=12;
    }
}

// ab conatiner m a , def or lexical environment hoga
// lexical environment y btata h ye function kinhe use kar skta h, taaki function kisi dusre function ki andr ki chhez use na kare

//execution context is a container where the function's code is executed
// and its created whenever a function is called, is contains 3 things , functions and lexical environment.

//lexical environment hota h ek chart jisme ye likha hota ki ek particular function , keen cheezo ko access kar
// sakta hai aur kinko rahi jeese scope resolution bhi khte h

///////////////////////////////////////////////////////////

// callback functions
// jab bhi koi aisa code jo baad m chalta hai aap likhoge , kyuki wo code
// baad mein chalta hai , javascript ko ye pta nahi hota ke wo complete hua ya nahi,
// aise code ko completion par js ko btya jaata hai ke wo complete hogya aur aapuse chala sakte hai,
// ye btatne ka kaam callback ka hai , jaise aapne koi api call kari tab.

setTimeout(function(){
    console.log("2 second baad");
},2000); //callback function 2 second baad chalra , yha jo function h vo callback h

//first class function
//js m ek concept h jiske matlab hota hai ki aap fnc ko use kar sakte ho as a value

var aabcd=function(){
      return 5;
}

//you can send function in function also in js

function abcdefg(l){
    l(); //hey
}

abcdefg(function(){
    console.log("hey");
})

//you can also return a function like
function abcdefg(l){
    return l; //here l is a function
}
/////////////////////////////////////////
//aarays are made behind the scene
q=[1,4,5] //actual m ek objct h
//java script ise convert krti h array m aise q={0:1,1:4,2:5}
// Array.isArray(q) //function to check if something is array or not

/////////////////////////////////////////////////////////

// Asynchronous js :-







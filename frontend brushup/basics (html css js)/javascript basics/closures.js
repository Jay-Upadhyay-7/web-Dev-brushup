// unction Closure and Garbage collection


function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    y();
}
x();

// insude y scope it doesnt find a, so it checks in its parent as variable have scope inside the function only in js,so then it finds a and display 7
// this is nothing but closures
//closure is nothing but a function together binded by its lexical environment/scope
// Closure (x) a:7
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
//  In other words, a closure gives you access to an outer function's scope from an inner function. 
// In JavaScript, closures are created every time a function is created, at function creation time.
// js store this in window object 

function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();

////////////////////////////////////////////////////////////

// closure become more important when we return a function
function xx(){
    var a=7;
    function yy(){
        console.log(a);
    }
    return yy;
}
var z=xx();
console.log(z); // will display complete function yy , but yy is not vanished but its copy is stored inside z
z(); //now z have a copy of yy which display a , but a was inside xx , but xx is no more available
//so what now . js will find a in closure, which will display 7. so when function returned they still maintains there lexical scope
//this is the benefits of closure
//so function bundled with its lexical environment forms closure
// - What is Prototype?
// - What is Prototypal Inheritance?
// - What is Prototype Chain?
// - Why we call it _proto_ ?
// - What is inhertance in Javascript?

//Prototype in js (imp concept)

let arr =["jay","jam"];

let object = {
    city :"dun",
    name:"dehra",
    getIntro: function(){
        console.log(this.name+"from"+this.city);
    }
}
console.log(arr.length)
console.log(object.city)
// function demo(){

// }
// demo.arguments

// here the question comes how does the object,function or array name which is by the way also an object , is getting acees to this methods after putting a dot (.)
// so there is something called as prototype here it comes into the picture
// whenever we create a javascript object , javascript engine automatically without even letting us know attaches our object with some hidden functions and properties , this hidden properties can be acceses by (.) dot
//this is all happening via prototype

console.log(arr.__proto__)  //we can access that hidden object like this
arr.__proto__.length

////////////////////////////////////////////////////////

// ptototype chaining


// even this arr.__proto__ have its own prototype , which is object protype
arr.__proto__.__proto__ // == Object.prototype

//and protype of this object prototype is null (prototype chain)
arr.__proto__.__proto__ .__proto__ //null   //end of chain


/////////////////////////////////////////////////////////

//Protype inheritence

// (firstly dont compare js inheritence with other , in js inheritence means simpley a object inheriting others property)

//we can do this to , but never do this , perofrmance issue

let object2={
    name: "Aditya"
}
object2.__proto__=object; //not advisable
//by this we can access feature of object inside object 2
object2.name //aditya (as name find in child it will not inherit from parent)
object2.city //dun (this is in object which we defined earlier not in object 2)
object2.getIntro() // this will print aditya from dun not dehra from dun 
////////////////////////////////////////////////////////

Function.prototype.mytempbind= function(){
    console.log("aahhahha");
}
function fun(){

}

fun.mytempbind

// this way you can insert your custom method inside protoype method. now every function can access this mytempbind.

////////////////////////////////////////////////////////


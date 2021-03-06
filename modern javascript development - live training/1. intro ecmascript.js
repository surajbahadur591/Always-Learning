
es6++ is new version in javascript
but browser does not support it

so we use babel or traceur to transpile into es5 

babel is a node js library 

command to transpile from es6++ to es5
npx babel scratch.js -o scratches5.js

or use babeljs.io

es6 removes IIFE's from es5 "Immediately Involved  Function Evaluation" by using '{ } - block'
es6 supports string interpolation, multiline string lines -  back tics ``

example : 
const apple = 55
`${apple} is a good fruit`

es6 supports function enhancement which is not supported by java
we can use same function with different parameter we can pass parameter as undefined
we can use first argument as the second argument in a function

rest parameter (also known as spread operator [...]) accumate as an array
can be used when we don't know how many parameter to define
funtion ShowList(Heading, ...items){

    for i in items
    console.log(i)

}
ShowList('Laptops', "hp", "dell", "asus")
... means spread operator and ... means variadic functions depends on function calling and declaring
let nums = [100, 200, 300]
console.log(...nums) // equivalent to nums[0] nums[1] nums[3] ... so on

Arrow function is anonymous function embedded inside another block of code
arrow function support multiline statement using { }
function f1(){

let getName = (fn,ln)  => `${fn} ${ln}` this is lamba function
here (fn, ln) has no function name
}

typescript have datatypes , javascript does not have static datatypes
typescript example
let x : string = " suraj"
x = 10 // gives error


javascript does not have class 
therefore we use function to create class

function BackAcc(this, name, banknum){
    here this parameter is populated by default i.e this is always first paremeter
    this.name = name
    this.banknum = banknum

}

var b1 = new BankAcc("suraj", 121)

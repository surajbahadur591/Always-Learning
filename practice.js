// class Laptop{
//     constructor(brand, processor, type, size){
//         this.brand = brand
//         this.processor = processor
//         this.type = type
//         this.size = size

//     }

//     showSpecs() {
//         const res = `Specs of laptop are ${this.brand} ${this.processor} ${this.size} ${this.type}`
//         return res
//     }
// }

// const laptop1 = new Laptop("HP", "amd ryzen", "business", 14)

// console.log(laptop1)
// console.log(laptop1.showSpecs())

// what is hoisting ?
// classes are non hoisted and functions are hoisted
// hoisted means you can call a function before declaring
// but in case of classes you need to create object after declaring a class with function

// what is strict mode?
// by default classes are declared in strict mode
// refer monzilla doc

// static method :  in javascript static method can be called using classname and passing objects as parameter

class Laptop{
    constructor(brand, processor, type, size){
        this.brand = brand
        this.processor = processor
        this.type = type
        this.size = size

    }

    showSpecs() {
        const res = `Specs of laptop are Brand : ${this.brand}, Processor : ${this.processor}, Size : ${this.size}, Type: ${this.type}`
        return res
    }

    static showSize(lappy) {
        return lappy.size
    }
}

const laptop1 = new Laptop("HP", "amd ryzen", "business", 14)
const laptop2 = new Laptop("Dell", "i5", "business", 13)
console.log(laptop1)
console.log(laptop1.showSpecs())
console.log(Laptop.showSize(laptop1))
console.log(laptop2)
console.log(laptop2.showSpecs())
console.log(Laptop.showSize(laptop2))
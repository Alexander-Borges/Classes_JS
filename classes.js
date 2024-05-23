// Objects are able to inherit from other instantiated objects
// When a porperty doesn't exisxt on an object 
const person = {
    //isHuman: true
};

//const child = Object.create(person);
//child.maxAge = 18;
// __proto__ will get and set the prototype of an object. Not best practice though as it is being deprecated but will see quite a bit

//assign() takes in a target and source object and copies all of the properties from the source to the target

//older syntax
const child = Object.create(person, {
    maxAge: {
        value: 18,
        writable: true,
        configurable: true,
        enumerable: true
    }
});

const alex = Object.create(child);
alex.name = "Alex"
// Showing that the child takes in the elements from the parent 
child.maxAge = 28;
console.log(alex.maxAge)

// prints out all of the properties of a prototype
//const funcProto = Object.getPrototypeOf(() => {});
//console.log(Object.getOwnPropertyNames(funcProto));


function People(name) {
    this.name = name;
}

People.prototype = {
    constructor: People,
    isHuman : true,
}

const alexander = new People("Alexander");
console.log();
console.log(alexander.__proto__);

console.log(person);
console.log(child);
// child inherits from the parent
// prints true because it is on the parent element
console.log(child.isHuman);
// inherit chain is only in one direction
console.log(child.maxAge);


'use strict';

/********* Start Constructor Function ***************************/
// A constructor function
// const Person = function (firstName, birthYear) {  //arrow function don't work , as not have this keyword
//     // console.log(this);
//     this.firstName = firstName;
//     this.birthYear = birthYear;

//     // //never Define a method inside a constructor function
//     // this.calcAge=function(){
//     // return2037-this.birthYear
//     // };
// }
//the new Operator 
// const inder = new Person('Inder', 2002);
// console.log(inder);



//1. New { } is created ,i.e. empty object
//2. function  is called , this={} 
//3. {} is linked to a prototype
//4. fuction automatically return {}

/********* End Constructor Function *****************************/


/********* Start Prototype **************************************/
// // console.log(Person.prototype);
// Person.prototype.clcAge = function () {
//     // console.log(2037-this.birthYear);
//     return 2037 - this.birthYear;
// }
// console.log(inder.clcAge());

// console.log(inder.__proto__);
// console.log(Person.prototype.isPrototypeOf(inder));
// console.log(Math.__proto__);
// console.log(inder.hasOwnProperty('firstName'));

//prototype chain
// console.log(inder.__proto__);
// console.log(inder.__proto__.__proto__); //object prototype
// console.log(inder.__proto__.__proto__.__proto__); //null 
// console.dir(Person.prototype.constructor); //return the fuctions itself

//Built-In prototypes

const arr = [2, 3, 4, 4, 4];
// console.log(arr); //prototype of object arr
// console.log(arr.__proto__); //prototype of object arr.prototype
const h1 = document.querySelector('h1');
// console.dir(h1);

/********* End Prototype ****************************************/



/**********  Start ES6 Classes **********************************/

// class Expression 
// const PersonCL=class{}

//Class declaration, prefered
class PersonCL {

    //Instance Method

    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    clcAge() {
        return (2037 - this.birthYear);
    }
    get age() {
        return 2037 - this.birthYear;
    }

    set fullName(name) {
        // console.log(name);
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }
    //static method
    static hey() {
        console.log('hello girl!!!');
    }

}

// PersonCL.hey();
const inder2 = new PersonCL('inderjit Shahi', 2003);
// console.log(inder2);

//Setters and Getters
const account = {
    owner: 'inder',
    movements: [200, 4, 5, 66, -39],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    },
}

// console.log(account.latest);


/**********  End ES6 Classes ************************************/




/**********  Start Object.Create() ************************************/

const PersonPrototype = {
    claAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}
const inder3 = Object.create(PersonPrototype);
// console.log(inder3);
inder3.init('inderjit', 1978);
// inder3.claAge()

/***********  End Object.Create() ************************************/





/***********  Start Inheritance ************************************/


const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}
Person.prototype.clcAge = function () {
    return 2037 - this.birthYear;
};

const Student = function (firstName, birthYear,course) {
    // this.firstName = firstName;  ////]duplicate code of Person class
    // this.birthYear = birthYear;
    // Person(firstName,birthYear);  //Regular function Call don't work because of this keyword
    Person.call(this,firstName,birthYear);
    this.course=course;
};
//Linking Prototype place the below line just after the child class to avoid overwrite by object.create(); 
Student.prototype=Object.create(Person.prototype);
Student.prototype.constructor=Student;
console.dir(Student.prototype.constructor);
Student.prototype.introduce=function(){
 console.log(`I am ${this.firstName} and focusing on ${this.course} right now`);
};

const inder=new Student('inderjit',2003,'math');
// console.log(inder);
// inder.introduce();
// console.log(inder.clcAge());

//////////////////////////////////////////////Inheritance in ES6
class StudentCl extends PersonCL{
    constructor(firstName,birthYear,course){
        super(firstName,birthYear);  //Always called first
        this.course=course;
    }
};
const adi=new StudentCl('adiyta Shahi',2003,'Science');

console.log(adi);
console.dir(StudentCl.prototype.constructor);  //StudentCl



/***********  End Inheritance **************************************/


class Account{
    // 1) Public Field (instances)
    locale=navigator.language; //no  const or let etc. ';' is must here
    // _movements=[];

    // 2) Private fields (instances)
    #movements=[];
    #pin;

    // 4) Private methods : No browser supprot this
    #approveLoan(val){
        return true;
    }


    constructor(owner,currency,pin){
        this.owner=owner;
        this.currency=currency;
        this.#pin=pin;
        //protected property
        // this._movements=[];

        this.#movements=[];
        // this.locale=navigator.language;
        console.log(`Thanks for opening an account, ${owner}`);
    }

    // 3) public methods
    getMovements(){
        return this.#movements
    }
    deposit(val){
        this.#movements.push(val);
        return this;
    }
    withdraw(val){
        this.deposit(-val);
        return this;
    }
}

const acc1=new Account('inder','EUR',1111);
acc1.deposit(10);
acc1.withdraw(10);
console.log(acc1);
// console.log(acc1.#movements);  //// will throw an error

//chaining methods
acc1.deposit(300).deposit(500).withdraw(600);
console.log(acc1);
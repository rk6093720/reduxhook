"use strict";
// console.log("hello world");
exports.__esModule = true;
// Booleans
var isFetching = false;
isFetching = true;
// Number
var age = 23;
//string
var first_name = "Rohit";
var last_name = "Kumar";
var full_name = "".concat(first_name, "_").concat(last_name); //inference check from the values
console.log(full_name);
// arrays
var arr1 = [1, 2, 3, 4];
// arrays of string with constructor
var arrayofstring = ["Rohit", "Kumar"];
arrayofstring.push("bangalore");
console.log(arrayofstring);
// primitive types in ts -> number, string, boolean , null , undefined, symbol and big-int
//  // object
// type person = { first_name:string, last_name:string,age:number, isworking:boolean}; // creating a blue-print for the object
// interface person {
//     first_name: string;
//     last_name:string;
//     age:number;
// }
// const masai:person= {
//     first_name: "masai",
//     last_name: "school",
//     age: 23,
// };
// tuples- arrays
//1. the number of elements in the tuple is fixed
// 2. the types of elements are known in advance.
//3. order is important
var tuple;
tuple = ["masai", 3, true];
// enums-> a group of named constants
var user;
(function (user) {
    user["SUPERADMIN"] = "SUPERADMIN";
    user["ADMIN"] = "ADMIN";
    user["SUPERUSER"] = "SUPERUSER";
    user["USER"] = "USER";
})(user || (user = {}));
var superadmin = user.SUPERADMIN;
console.log(superadmin);
//others
// let u:undefined;
// let n:null;
// let a:any;
// function
// const sum =(a:number,b:number):number => {
//     return a+b
// };
// console.log(sum(2,2));
// const printName =({ first_name, last_name, age , isWorking}:person):void =>{
//     return `${first_name}_${last_name}`;
// };
// let person1: person={
//     first_name:"Rohit",
//     last_name:"kumar",
//     age:22,
//     isWorking:true,
// };
// printName(person1);
var multiply = function (num1, num2) {
    return num1 * num2;
};
var resulMultiply = multiply(4, 5);
console.log(resulMultiply);
var divide = function (num1, num2) {
    return num1 / num2;
};
var div = divide(4, 2);
console.log(div);
// union
//   let output :( number | string)[];
//   output=["masai",3]
//   let arrayofobject: output[] = 
//intersection
// type12 = type1 & type2
// type softwaredevloper{
//     skills:string
// }
// let coder: (person & softwaredevloper)= {
//   first_name:"masai",
// }
var name1 = function (name) {
    return name;
};
var a = name1();
console.log(a);
var masai = {
    first_name: "masai",
    last_name: "school",
    age: 23,
    isWorking: true
};
2.;
var printName = function (_a) {
    var first_name = _a.first_name, last_name = _a.last_name, age = _a.age, isWorking = _a.isWorking;
    return "".concat(first_name, "_").concat(last_name);
};
var person1 = {
    first_name: "Rohit",
    last_name: "kumar",
    age: 22,
    isWorking: true
};
printName(person1);
var rohit = {
    houseNumber: 8,
    street: 123,
    city: "sitamarhi",
    state: "bihar",
    postalCode: "843328",
    country: "india"
};
console.log(rohit);
var p = {
    phones: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    addresses: "RUNNISAIDPUR",
    email: "RK@1333.gmail.com",
    firstname: "Rohit",
    lastname: "Kumar"
};
function User(fn) {
    fn("user", "Rohit", 23, "devloper", "fullstack");
}
function Admin(s) {
    // s("Admin", "Rohit",23,"fullstack");
    console.log(s);
}
User(Admin);

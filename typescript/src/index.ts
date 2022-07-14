// console.log("hello world");

import { last } from "list";

// Booleans
let isFetching: boolean = false;

isFetching=true;

// Number
let age:number=23;


//string
let first_name:string= "Rohit";

let last_name:string="Kumar";
let full_name="".concat(first_name,"_").concat(last_name);//inference check from the values
console.log(full_name);

// arrays
let arr1:number[]=[1,2,3,4]
// arrays of string with constructor
let arrayofstring:string[]= ["Rohit", "Kumar"];
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
let tuple:[string, number, boolean];
tuple=["masai",3, true];


// enums-> a group of named constants

enum user{
    SUPERADMIN="SUPERADMIN",//0
    ADMIN="ADMIN",//1
    SUPERUSER="SUPERUSER",//2
    USER="USER",//3

}
let superadmin= user.SUPERADMIN;
console.log(superadmin)

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



const  multiply = (num1:number, num2:number):number => {
    return num1 * num2;
  };
  let resulMultiply = multiply(4, 5);
  console.log(resulMultiply);

  const divide =(num1:number,num2:number):number => {
    return num1/num2;
  };
  let div = divide(4,2);
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

let name1 =(name:string):string => {
    return name;
}
let a = name1(name)
console.log(a);

// 1.
interface person {
    first_name: string;
    last_name:string;
    age:number;
    isWorking:boolean;
}


const masai:person= {
    first_name: "masai",
    last_name: "school",
    age: 23,
    isWorking:true
};

2.
const printName =({ first_name, last_name, age , isWorking}:person):void =>{
    return `${first_name}_${last_name}`
};
let person1: person={
    first_name:"Rohit",
    last_name:"kumar",
    age:22,
    isWorking:true,
};
printName(person1);
// 3.
interface Address {
    houseNumber:number,
street:number,
city: string,
state:string,
postalCode:string,
country:string,

}
const rohit :Address = {
    houseNumber:8,
    street:123,
    city:"sitamarhi",
    state:"bihar",
    postalCode:"843328",
    country:"india"


}
console.log(rohit);

// 4.
interface  personDetail {
    [x: string]: any;
    phones:number[],
addresses:string,
email:string,

firstname:string,
lastname:string,
}
let p : personDetail ={
    phones:[1,2,3,4,5,6,7,8,9],
    addresses:"RUNNISAIDPUR",
    email:"RK@1333.gmail.com",
    firstname:"Rohit",
    lastname:"Kumar",

}

// 5.

// phoneBook(p);

// function phoneBook(p: personDetail) {
//     throw new Error("Function not implemented.");
// }
// p.push(Location);



//3.
interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

function getUserType(obj: User | Admin):string{
     return obj.type
}


const Person1: User = {
    type:"user",
    name:"Rohit",
    age:23,
    occupation:"skilling"
}
const Person2: Admin = {
    type:"admin",
    name:"Admin",
    age:23,
    role:"Head"
}
console.log(getUserType(Person1)) 
console.log(getUserType(Person2)) 
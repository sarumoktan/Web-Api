//this is the day 1 on fifth sem, practical
const name = "John";
//feri const name = "John"; garera redeclare garna paudaina
//name = "Blabla"; (invalid)
 
let address = "Dillibazaar";
//again redeclare gara paudaina tara vitra ko value chai change garna pauxa
address = "Kathmandu"; //valid
 
var age = 30;
var age = 40;
age = 45;
 
//Hoisting
console.log(city); //valid
//variable and scope
if(true){
    //if scope/block
    let firstname = "John"; //scope bound variable
    let lastname = "Doe";  //scope bound variable
    var city = "Kathmandu"; //global or function bound variable
    console.log(firstname);
    console.log(lastname);
    console.log(city);
}
 
//console.log(firstname); invalid
//console/log(lastname); invalid
console.log(city); //valid
 
//data types
const strVar = "Hello world" //";" is optional in js
//string ``, '', ""
const numVar = 100; //number
const boolVar = true;
const nullVar = null; //intentionally empty value
const undefinedVar = undefined;
//let undefinedVar2; //undefined
const symbolVar = Symbol('symbol'); //unique and immutable
const symbolVar2 = Symbol('symbol'); //unique and immutable
//yesma yo vitra value same huda ni equal hudaina
console.log(symbolVar === symbolVar2); //false
//typeof operator
console.log(typeof strVar); //kasto datatype hu thapauna yo garni
 
//=, ==, ===
//yesto equal to ko difference
const num1 = 10; //= yeuta matra equal to vaneko assignment operator, kunai pani variable ma value assign garna ko lagi
const num2 = "10";
console.log(num1 == num2); //== loose equality operator, true
console.log(num1 === num2); //=== strict equality operator, false because datatype ni check garxa ra yeta yeuta int xa yeuta string xa
 
//collection/list
const arr = [1,2,"three", true, null, undefined]; //yesto js ma garna pauxa aruma mildaina
console.log(arr[0]); //first index
arr.pop(); //remove last element
arr.push("new element");
arr.shift(); //remove first element
arr.unshift("four"); //add element at first
 
//iteration
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
//for..in iterate index //o bata last samma access garna
for(const index in arr){
    console.log(index, arr[index]);
}
//for--of, iterate value/element
for(const value of arr){
    console.log(value);
}
 
//spread operator ... (yo tinta dot vaneko kunai pani array lai spread or unpack garna)
let arr1 = [10, 20, 30];
let arr2 = [60, 70, 80];
let arr3 = [arr1, arr2];
console.log(arr3);
let arr4 = [...arr1, ...arr2];
//let arr4 = [...arr1, arr2]; yesari yeuta ma dot rakhena vaney unpack vayera aaudaina
//yesto ko output [10, 20, 30, [60, 70, 80]] hunxa
console.log(arr4);
let arr5 = [...arr1, 40, 50, ...arr2];
console.log(arr5);
 
//object/JSON vannale javascript object notation
//left side ma vako sabai keys, right ma value sab pair or value
//object ko key should be in string
//js ma key ma notation rakhda ni hunxa nadiyeni hunxa
const obj1 = {
    name : "John",
    'age' : 30,
    address : "Dillibazar",
    inMarried : false,
    hobbies : ["reading", "travelling", "coding"],
    location: {
        lat : 12.3456,
        lng : 98.7654,
        tags : ["city", "urban"]
    }
}
//access object properties
console.log(obj1.name); //dot notation
console.log(obj1['address']); //bracket notation
const obj2 = { ...obj1, salary: 50000}; //spread operators
console.log(obj2);
 
console.log(obj1.hobbies);
console.log(obj1.hobbies[1]); //which is travelling
console.log(obj1.location);
console.log(obj1.location.lat);
console.log(obj1.location.tags[1]);
 
obj1.newkey = "new value"; //add new key-value pair
 
//const obj1 = {}; //invalid
//obj1 = {}; //invalid
 
//fallback
console.log(obj1.detail); //undefined because the detail key is not available
 
//yesto undefined vako situation ma fallback use garna parxa
 
console.log(obj1.detail || "No detail found"); //No detail found
console.log(obj1.detail ?? "No detail found"); //No detail found
// ?? vannale data/value xa ki xaena check gara vaneko
//value xa vaney tei print hunxa otherwise fallback ma lekheko sentence use hunxa
console.log(obj1.name ?? "No name found"); //John
 
const check = 0;
console.log(check || "No value found"); //No value found, falsy value
console.log(check ?? "No value found"); //0 //null or undefined vako situation ma matra fallback chalau
//yesma ?? le 0 output dinxa because it neither null nor undefined
 
//null chaining
//console.log(obj1.detail.info.data); //error
//cannot reference undefined or null
console.log(obj1.detail?.info?.data); //undefined // detail undefined huni bittikai paxadi ko sab undefined hunxa tesaile detail ma '?' rakheko
 
console.log(obj1.detail?.info?.data ?? "No data found"); //No data found //yesma fallback use gareko
//fallback lai null chaining sanga ni jodna pauxa
 
//destructure
const { age } = obj1; // object destructuring
//same as const age = obj1.age;
const { name: fname, hobbies }= obj1; //object destructuring with alias
//same as
//const fname = obbj1.name;
//const hobbies = obj1.hobbies;
 
const [firstHobby, secondHobby] = hobbies; //array destructuring
console.log(firstHobby); //reading
console.log(secondHobby); //travelling
 
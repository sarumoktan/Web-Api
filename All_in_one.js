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
 
















//Functions
//1. Standard function
function functionName(arg1, arg2){
    console.log(arg1, arg2);
    return arg1 + arg2;
}
 
const ret = functionName(10, 20);
console.log; //30 would be the output
 
//2. Variable referenced function
const variableFunction = function(){
    console.log("variable function");
}
const ret2 = variableFunction();
console.log(ret2); //undefined (nothing returns)
 
// 3. arrow function
const arrowFunction = (arg) => "hello" + arg; //implicit return
const ret3 = arrowFunction("John");
console.log(ret3); //hello john
 
const arrowFunc2 = (arg1, arg2) => {
    //if scope is opened, doesnot automatically return
    return arg1 + arg2;
}
const ret4 = arrowFunction(10,20);
console.log(ret4); //30
 
const obj={
    "name": "Alice",
    func1: function(){
        console.log("Scope normal", this.name);
    },
    func2: () =>{
        console.log("Scope arrow", this.name);
    }
}
obj.func1(); //Scope normal Alice
obj.func2(); //Scope arrow undefined(no scope in arrow/annoynomous)
 
//Closures/Callbacks
const outerFunction = (outerArg) =>{
    let counter = outerArg;
    const innerFunction = () =>{
        counter++;
        console.log(counter);
    }
    return innerFunction;
}
const closure1 = outerFunction(10);
closure1(); //11
closure1(); //12
closure1(); //13
 
const closure2 = outerFunction(100);
closure2(); //101
closure2(); //102
 
//HOF -> Higher order function or callbacks
const hof1 = (arg1, callback) => {
    callback(arg1);
}
const callbackFunc = (arg1) => {
    console.log("callback function", arg1);
}
hof1("Hello", callbackFunc); //callback function Hello
 
const calculate = (num1, num2,cb) => {
    const result = cb(num1, num2);
    return result;
}
const addition = (num1, num2) => num1 + num2;
const subtraction = (num1, num2) => num1 - num2;
 
const sum1 = calculate (10,20,addition);
console.log(sum1); //30
const mul1 = calculate(10,20,(num1, num2) => num1 * num2);
console.log(mul1); //200
 
///Q= make a callback function, takes 4 argyments,
//num1, num2, num3, callback
//call the function with avg calculation as callback
//call the function with max calculation as callback
//call the function with min calculation as callback
 
//const calculate2 = (num1, num2, num3, cb)
 
const average = (num1, num2, num3) => num1 + num2 + num3 / 3;
const max = (num1, num2, num3) => {
    if (num1 >=num2 && num1 >= num3){
        return num1;
    } else if (num2 >= num1 && num2 >= num3){
        return num2;
    } else {
        return num3;
    }
}
const min = (num1, num2, num3) => Math.min(num1, num2, num3);
const calculate2 = (num1, num2, num3, cb) => {
    const result = cb(num1, num2, num3);
    return result;
}
const avg1 = calculate2(10, 20, 30, average);
console.log(avg1);
 
//Callbacks in iterators
const fruits = ["apple", "banana", "cherry", "grapes"];
const howToIterate = (item,index,arr) => {
    console.log(index, arr);
}
fruits.forEach(howToIterate); // 0 apple, 1 banana, 2 cherry, 3 grapes
 
fruits.forEach((item,index) => console.log("hello" +item));
fruits.forEach(item => console.log("single arg"+ item)); //single arg,
//no need to use () for single arg
 
//Map -> making new list from existing list
const newFruits = fruits.map((item, index) => item.toUpperCase());
console.log(newFruits); //["APPLE","BANANA", "CHERRY", "GRAPES"]
 
//frontend (UI/UX)
const liTags = newFruits.map((elem, idx) => {
    let className = "";
    if(idx % 2 === 0){
        className = "even bg-light";
    }else{
        className = "pdd bg-dark text-light";
    }
    return '<li key="${idx}" class="${className}">${elem}</li>';
});
console.log(liTags);
//must have return statement
 
//filter -> filter out the list based on condition
const filteredFruits = fruits.filter(item => item.length >5);
console.log(filteredFruits); ///["banana","cherry", "grapes"]
//must have return statement
 
//reduce -> reduce the list to a single value
const numbers = [10,20,30,40];
const reducedValue = numbers.reduce(
    (accumulator, currentValue) => {
        return accumulator + currentValue;
    },
    100 //starting value of accumulator
);
//100+10+20+30+40=200
console.log(reducedValue); //200




















// //promise/task queue
// console.log("1.start");
 
// // macro task
// setTimeout(
//     ()=>{
//         console.log("2.inside setTimeout");
//     },
//     0, // millisecond delay
// )
 
// // micro task
// Promise.resolve().then( ()=> console.log("micro task"))
// queueMicrotask(
//     ()=>{
//         console.log("Queue micro")
//     }
// )
// console.log("3.end");
 









//promise/ (Flutter Future)/ Asynchronous =====>Jaba user le login button click garcha, frontend le backend ma email ra password pathaucha.Backend le response dina time lagna sakcha. Tyo time ma Promise use huncha.
// Project ma use hune thau:
// Login and registration
// API requests
// Database operations
// Payment processing
// File uploading
// OTP verification
// Note: Modern JavaScript ma Promise manually create garnubhanda fetch() jasta built-in asynchronous functions dherai use huncha.

const func1 = () => new Promise(
    (resolve, reject)=> {
    if (true){    // true vayo vane resolve ko aauxa false lekhyo vane reject ko aauxa
        return resolve("success")
    }else{
        return reject("failure")
    }
}
);
 


// //*Yo methods Promise ko result handle garna use huncha.
// Suppose timro HomeService project ma user le service providers ko list herna khojyo.
// .then() → Providers ko data display garne.
// .catch() → Server error aayo bhane error message dekhaune.
// .finally() → Loading indicator hataune.



func1().then(
    (result) => console.log(result)
).catch(
    (err)=> console.log(err)
).finally( ()=> console.log("End"))
Fun1().then().catch().finally()
 
async await only used inside a function
cannot do await func1() in global scopr





// //async/await ra try...catch ko main use frontend bata backend API call garna, database operations handle garna, ra errors manage garna ho.
// //Timro HomeService project ko example liyera herau.
// Suppose customer le plumber book garyo.
// Customer le booking request garcha.
// Frontend le backend API call garcha.
// Backend le booking database ma save garcha.
// Successful bhaye confirmation aaucha.
// Error bhaye catch le handle garcha.


const runFunc = async () =>{
    try{
    const output = await func1();
    console.log(output);
    console.log("End runFunc");
    }catch(err){
        //err is reject
        console.log("Error in func1", err)
    }
}
 
runFunc();
 



//promise Execution
const task1 = () => new Promise((resolve, reject)=>
    setTimeout(
        ()=> resolve("Task 1"), 2000
    )
);
const task2 = () => new Promise((resolve, reject)=>
    setTimeout(
        ()=> resolve("Task 2"), 4000
    )
);
 
//sequnetinally using then
task1()
.then( (result) => {
    console.log(result);
    return task2();
})
.then ((result) => console.log(result))
.catch ( (err) => console.log(err))
 
//sequentailly using async await
const runTasks = async () =>{
    console.time("runTasks");//profile time
    const t1 = await task1();
    console.log(t1);
    const t2 = await task2();
    console.log(t2);
    console.timeEnd("runTasks");
    //toatal time = 6 second
}
 
runTasks();
 

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
 
//promise/ (Flutter Future)/ Asynchronous
const func1 = () => new Promise(
    (resolve, reject)=> {
    if (true){    // true vayo vane resolve ko aauxa false lekhyo vane reject ko aauxa
        return resolve("success")
    }else{
        return reject("failure")
    }
}
);
 
// func1().then(
//     (result) => console.log(result)
// ).catch(
//     (err)=> console.log(err)
// ).finally( ()=> console.log("End"))
//Fun1().then().catch().finally()
 
//async await only used inside a function
//cannot do await func1() in global scopr
const runFunc = async () =>{// async halyo vane promise nai hunxa
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
 
//CRUD example

let student =[
    {id:1, name:"John", age:20},

];

//Create using promise
const createStudent = (student) => new Promise(
    (resolve, reject) => {
        const {id, name, age} = student;
        if(!id) return reject (new Error("ID is required"));
        students.push(student);

        return resolve(student);
    }
);
//Read
//student with id 1
const readOne = students.ffindIndex((student) => student.id === 1);
console.log(students[readOne]);


//upadte with id
//with index

const updateIndex = students.findIndex((student) => student.id === 1);
//if not found,findIndex return -1
students[updateIndex].name ="New name";
students[upsdateIndex] = {...students[updateIndex], name:"Jane"};
students[updateIndex] = {...students[updateIndex], ...{name:"update",status:"new"} };
//delete with index
const deleteIndex = students.findIndex((student) => student.id === 1);
students.splice(deleteIndex, 1);

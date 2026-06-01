//----------------------Encadenar métodos (Method Chaining)---------------

let employees = [
    {
        id: 1,
        name: "Jesus",
        role: "Frontend Developer",
        salary: 2500,
        english: "B1"
    },
    {
        id: 2,
        name: "Maria",
        role: "Data Analyst",
        salary: 4000,
        english: "B2"
    },
    {
        id: 3,
        name: "Luis",
        role: "Backend Developer",
        salary: 3500,
        english: "A2"
    },
    {
        id: 4,
        name: "Ana",
        role: "Frontend Developer",
        salary: 5000,
        english: "C1"
    }
];

//A

let result1 = employees.filter( employees => employees.role === "Frontend Developer")
.map(employees => employees.name);
console.log(result1);

//B

let result2 = employees.filter(employees => employees.salary > 3000)
.map(employees => `${employees.name} - ${employees.salary}`);
console.log(result2);

//C

let result3 = employees.filter(employees => employees.english === "B2" || employees.english === "C1")
.map(employees => `${employees.name}`);
console.log(result3);

//D

let result4 = employees.find(employees => employees.id === 4)
let {name, role, salary} = result4;
console.log(name);
console.log(role);
console.log(salary);

// pregunta 1. primero .filter() y luego .map()
// pregunta 2. .map()
// pregunta 3. .find()
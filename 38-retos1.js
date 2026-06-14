//---------------------------------Reto 1 Tech company

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
        role: "Backend Developer",
        salary: 5000,
        english: "C1"
    },
    {
        id: 3,
        name: "Luis",
        role: "Frontend Developer",
        salary: 4000,
        english: "B2"
    },
    {
        id: 4,
        name: "Ana",
        role: "Data Analyst",
        salary: 3500,
        english: "B2"
    }
];

//A
let salaries = employees.filter(
    employee => employee.salary > 3000
);
console.log(salaries);

//B
let names = salaries.map(
    employee => employee.name
);
console.log(names);

//C
let hasC1 = employees.some(
    employee => employee.english === "C1"
);

console.log(hasC1);

//D

let allB1 = employees.every(
    employee => employee.english === "B1"
);

console.log(allB1);

//E
let employee = employees.find(
    employee => employee.id === 3
);

console.log(employee);


//------------------------------------Reto 2 - Sistema NOC

let alarms = [
    {
        id: 1,
        severity: "High",
        status: "Open"
    },
    {
        id: 2,
        severity: "Low",
        status: "Closed"
    },
    {
        id: 3,
        severity: "Medium",
        status: "Open"
    },
    {
        id: 4,
        severity: "High",
        status: "Closed"
    },
    {
        id: 5,
        severity: "High",
        status: "Open"
    }
];

//A
let highAlarms = alarms.filter(
    alarm => alarm.severity === "High"
);

console.log(highAlarms);

//B
let idAlarms = highAlarms.map(
    alarm => alarm.id 
);
console.log(idAlarms);

//C
let openAlarm = alarms.some(
    alarm => alarm.status === "Open"
);

console.log(openAlarm);

//D
closedAlarms = alarms.every(
    alarm => alarm.status === "Closed"
);

console.log(closedAlarms);

//E

let findAlarms = alarms.find(
    alarm => alarm.id === 4
);

console.log(findAlarms);



//-------------------------------------------Reto 3 - Entrevista Frontend Junior

let courses = [
    {
        title: "JavaScript",
        students: 120
    },
    {
        title: "React",
        students: 200
    },
    {
        title: "CSS",
        students: 80
    },
    {
        title: "Node.js",
        students: 150
    }
];

//A

let result1 = courses.filter(
    course => course.students > 100
);

console.log(result1);

//B
let result2 = result1.map(
    course => course.title
);

console.log(result2);

//C
let result3 = courses.reduce(
    (accumulator, courses) => accumulator + courses.students,
    0 
);

console.log(result3);

//D
let result4 = courses.sort(
    (a, b) => b.students - a.students
);

console.log(result4);

//E

let result5 = courses.some(
    course => course.students > 180
);

console.log(result5);

//--------------------------------Bonus
/*
-obtener nombres - map()
-filtrar salarios - filter()
-buscar por ID - find()
-sumar estudiantes - reduce()
-verificar si existe algo - some()
-verificar si todos cumplen - every()
-ordenar por salarios - sort()
*/

/**
 * 1- filter
 * 2-find
 * 3-map
 * 4-reduce
 * 5-some
 */
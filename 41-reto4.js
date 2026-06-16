let alarms = [
    {
        id: 1,
        severity: "High",
        status: "Open",
        engineer: "Jesus"
    },
    {
        id: 2,
        severity: "Low",
        status: "Closed",
        engineer: "Maria"
    },
    {
        id: 3,
        severity: "Medium",
        status: "Open",
        engineer: "Luis"
    },
    {
        id: 4,
        severity: "High",
        status: "Closed",
        engineer: "Ana"
    },
    {
        id: 5,
        severity: "High",
        status: "Open",
        engineer: "Maria"
    }
];

//1- ¿Cuáles son los nombres de los ingenieros que tienen alarmas abiertas?

let openAlarm = alarms 
    .filter(alarm => alarm.status === "Open")
    .map(alarm => alarm.engineer);

console.log(openAlarm);

//2 - ¿Existe alguna alarma High que esté abierta?

let result = alarms
    .filter(alarm => alarm.severity === "High")
    .some(alarm => alarm.status === "Open");

console.log(result);

//3 - Muéstrame la alarma con ID 4.

let opening = alarms.find(
    alarm => alarm.id === 4
);

console.log(opening);

//4 - ¿Todas las alarmas están cerradas?
let result1 = alarms.every(
    alarm => alarm.status === "Closed"
);

console.log(result1);

//5 -¿Cuántas alarmas hay en total?

let total = alarms.reduce(
    (accumulator) => accumulator += 1,
    0
);

console.log(total);


let employees = [
    {
        id: 1,
        name: "Jesus",
        role: "Frontend",
        salary: 2500
    },
    {
        id: 2,
        name: "Maria",
        role: "Backend",
        salary: 5000
    },
    {
        id: 3,
        name: "Luis",
        role: "Frontend",
        salary: 4000
    },
    {
        id: 4,
        name: "Ana",
        role: "Frontend",
        salary: 6000
    }
];

//6 - ¿Cuál es el salario total de todos los empleados?

let salaryTotal = employees
    .map(employee => employee.salary)
    .reduce((accumulator, salary) => accumulator + salary, 0);

    console.log(salaryTotal);
    

//7 - Dame únicamente los nombres de los Frontend Developers.

let names = employees   
    .filter(employee => employee.role === "Frontend")
    .map(employee => employee.name);

console.log(names);

//8 - Ordena los empleados por salario de mayor a menor.

    let employeesName = employees
        .sort((a, b) => b.salary - a.salary)
        .map(employee => employee.name);
    console.log(employeesName);

// 9 - ¿Existe algún empleado con salario mayor a 5500?

let highSalary = employees.some(
    employee => employee.salary > 5500
);

console.log(highSalary);

//10 - ¿Todos los empleados ganan más de 2000?

let salaryEmployee = employees.every(
    employee => employee.salary > 2000
);

console.log(salaryEmployee);

//Bonus
// usaria filter + map

/**
 * ¿Necesito varios? - filter()
¿Necesito uno? - find()
¿Necesito transformar? - map()
¿Necesito sumar? - reduce()
¿Necesito validar? - includes()
¿Necesito ordenar? - sort()
 */
//-----------Arrow Function Exercise------------------------

//Ejercicio 1
function greet(name) {
    return `Hello ${name}`;
}

const greet =name => `Hello ${name}`


//Ejercicio 2
function add(a, b) {
    return a + b;
}

const add = (a, b) => a + b;

//Ejercicio 3
let numbers = [1, 2, 3];

let result = numbers.map(
    numbers => numbers *2
);

console.log(result);


//Ejercicio 4

let names = ["Jesus", "Maria", "Luis"];

let greetings = names.map(
    names => `Hi ${names}`
);

console.log(greetings);

//Ejercicio 5
// imprime [15, 25, 35]
let result = [10, 20, 30].map(
    number => number + 5
);

console.log(result);



//Ejercicio 6
//Imprime [15, 25, 35]
let result = [10, 20, 30].map(
    number => {
        return number + 5;
    }
);

console.log(result);


//Ejercicio 7
//Imprime undefined, undefined, undefined

let result = [10, 20, 30].map(
    number => {
        number + 5;
    }
);

console.log(result);

//Ejercicio 8
let employees = [
    {
        name: "Jesus",
        salary: 2500
    },
    {
        name: "Maria",
        salary: 4000
    }
];

let salaries = employees.map(
    employees => employees.salary
);

console.log(salaries);


//Ejercicio 9

let employees = [
    {
        name: "Jesus",
        role: "Frontend"
    },
    {
        name: "Maria",
        role: "Data Analyst"
    }
];

let result = employees.map(
    employees => `${employees.name} - ${employees.role}`
);

console.log(result);

//Ejercicio 10
//1.-Imprime ["Jesús", "Maria"]
//2.-Funciona porque utilizamos el return

let employees = [
    {
        name: "Jesus"
    },
    {
        name: "Maria"
    }
];

let result = employees.map(employee => {
    return employee.name;
});

console.log(result);